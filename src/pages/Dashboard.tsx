import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Search, History, Settings, LogOut, Upload, Calendar, Clock, Phone, MessageSquare, Languages, Loader2, X, Image, AlertTriangle } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { toast } from "@/hooks/use-toast";
import { AnalysisReport } from "@/components/dashboard/AnalysisReport";
import { AnalysisHistory } from "@/components/dashboard/AnalysisHistory";
import { AIChatbot } from "@/components/dashboard/AIChatbot";
import { useAuth } from "@/contexts/AuthContext";
import { analyzeWithML, getJustification, extractUrlFromText, fileToBase64, formatTimestamp } from "@/services/mlApiService";
import { saveAnalysis } from "@/services/analysisService";
import type { AnalysisResult, ThreatIndicator, AnalysisData, RiskLevel } from "@/types";

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const isAuthenticated = !!user;
  const [activeTab, setActiveTab] = useState("analyze");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const resultRef = useRef<HTMLDivElement>(null);
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Phone validation state
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);
  const [phoneError, setPhoneError] = useState("");
  
  const [formData, setFormData] = useState({
    language: localStorage.getItem('analysisLanguage') || "english",
    phone: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().slice(0, 5),
    category: "banking",
    inContacts: false,
  });

  // Auth protection - redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      toast({
        title: "Please login first",
        description: "You need to be logged in to access the dashboard",
        variant: "destructive",
      });
      navigate("/auth");
    }
  }, [isAuthenticated, navigate]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('analysisLanguage', formData.language);
  }, [formData.language]);

  const loadingMessages = [
    "Analyzing message content...",
    "Checking sender reputation...",
    "Scanning for malicious links...",
    "Detecting scam patterns...",
    "Generating risk report...",
  ];

  // Phone number validation
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and + symbol
    const cleaned = value.replace(/[^\d+]/g, '');
    
    let formattedPhone = cleaned;
    
    // Auto-prefix with +91 if needed
    if (cleaned.length > 0 && !cleaned.startsWith('+')) {
      if (cleaned.startsWith('91') && cleaned.length > 2) {
        formattedPhone = '+' + cleaned;
      } else if (cleaned.startsWith('0')) {
        formattedPhone = '+91' + cleaned.slice(1);
      } else {
        formattedPhone = '+91' + cleaned;
      }
    }
    
    // Limit to +91 + 10 digits
    if (formattedPhone.startsWith('+91')) {
      formattedPhone = '+91' + formattedPhone.slice(3).slice(0, 10);
    }
    
    setFormData({ ...formData, phone: formattedPhone });
    
    // Validate
    if (formattedPhone.length === 0) {
      setPhoneValid(null);
      setPhoneError("");
    } else if (formattedPhone.length === 13 && /^\+91\d{10}$/.test(formattedPhone)) {
      setPhoneValid(true);
      setPhoneError("");
    } else {
      setPhoneValid(false);
      setPhoneError("Enter valid Indian mobile number (+91 XXXXXXXXXX)");
    }
  };

  // File upload handlers
  const handleFileSelect = (file: File) => {
    // Validate file type
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload PNG or JPG only",
        variant: "destructive",
      });
      return;
    }
    
    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return;
    }
    
    setUploadedFile(file);
    
    // Create preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    toast({
      title: "Screenshot uploaded",
      description: file.name,
    });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const analyzeMessage = async () => {
    if (!formData.phone ||!formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in the sender phone number and message content.",
        variant: "destructive",
      });
      return;
    }

    if (!phoneValid) {
      toast({
        title: "Invalid Phone Number",
        description: "Please enter a valid Indian mobile number.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Show loading messages
    let messageIndex = 0;
    const loadingInterval = setInterval(() => {
      setLoadingMessage(loadingMessages[messageIndex % loadingMessages.length]);
      messageIndex++;
    }, 1500);

    try {
      // Prepare image data if uploaded
      let imageBase64: string | undefined;
      if (uploadedFile) {
        setLoadingMessage("Processing screenshot...");
        imageBase64 = await fileToBase64(uploadedFile);
      }

      // Extract URL from message text
      const extractedUrl = extractUrlFromText(formData.message);

      // Build the prediction request
      const predictionRequest = {
        text: formData.message,
        image: imageBase64,
        metadata: {
          sender: formData.phone,
          mobile_number: formData.phone,
          url: extractedUrl,
          date: formData.date,
          time: formData.time + ":00",
          timestamp: formatTimestamp(formData.date, formData.time),
        },
      };

      setLoadingMessage("Analyzing with ML models...");

      // Call ML backend
      const mlResponse = await analyzeWithML(predictionRequest);

      setLoadingMessage("Generating explanation...");

      // Get human-readable justification
      let justification: string;
      try {
        justification = await getJustification(mlResponse);
      } catch {
        justification = mlResponse.decision === "SPAM"
          ? "This message shows characteristics commonly associated with phishing attempts."
          : "This message appears to be legitimate based on our analysis.";
      }

      // Convert ML response to AnalysisResult format
      const riskScore = Math.round(mlResponse.final_score * 100);
      const riskLevel: "low" | "medium" | "high" =
        riskScore < 35 ? "low" : riskScore < 65 ? "medium" : "high";

      // Build threats from explainability data
      const threats: ThreatIndicator[] = [];

      // Determine actual threat descriptions based on ML analysis
      const textScore = mlResponse.pipeline_scores.text_score;
      const metadataScore = mlResponse.pipeline_scores.metadata_score;
      const imageScore = mlResponse.pipeline_scores.image_score;

      // Text Analysis Threat
      if (textScore !== null && textScore > 0.3) {
        const topWords = mlResponse.explainability.contributing_words
          .slice(0, 3)
          .map(w => w.word)
          .join(", ");

        const textThreatTitle = textScore > 0.7 ? "High-Risk Language Detected" : textScore > 0.5 ? "Suspicious Wording Found" : "Minor Language Concerns";
        const textThreatDesc = mlResponse.explainability.contributing_words.length > 0
          ? `Text analysis flagged these terms: ${topWords} (ML confidence: ${Math.round(textScore * 100)}%)`
          : `Message language patterns indicate ${Math.round(textScore * 100)}% spam probability`;

        threats.push({
          title: textThreatTitle,
          description: textThreatDesc,
          severity: textScore > 0.6 ? "high" : textScore > 0.4 ? "medium" : "low",
        });
      }

      // URL/Metadata Analysis Threat
      if (metadataScore !== null && metadataScore > 0.3) {
        const topFeatures = mlResponse.explainability.contributing_features.slice(0, 2).map(f => f.feature.replace(/_/g, " ")).join(", ");
        const metaThreatTitle = metadataScore > 0.7 ? "Dangerous URL/Sender Pattern" : metadataScore > 0.5 ? "Suspicious Link Detected" : "URL Requires Caution";
        const metaThreatDesc = mlResponse.explainability.contributing_features.length > 0
          ? `Risky patterns found: ${topFeatures} (ML confidence: ${Math.round(metadataScore * 100)}%)`
          : `Metadata analysis indicates ${Math.round(metadataScore * 100)}% risk level`;

        threats.push({
          title: metaThreatTitle,
          description: metaThreatDesc,
          severity: metadataScore > 0.6 ? "high" : metadataScore > 0.4 ? "medium" : "low",
        });
      }

      // Image/OCR Analysis Threat
      if (imageScore !== null && imageScore > 0.3) {
        const ocrText = mlResponse.explainability.ocr_extracted_text;
        const imageThreatTitle = imageScore > 0.7 ? "Screenshot Contains Scam Indicators" : imageScore > 0.5 ? "Screenshot Flagged as Suspicious" : "Screenshot Under Review";
        const imageThreatDesc = ocrText ? `Extracted text analyzed: "${ocrText.slice(0, 40)}..." (Risk: ${Math.round(imageScore * 100)}%)` : `Image analysis indicates ${Math.round(imageScore * 100)}% spam probability`;

        threats.push({
          title: imageThreatTitle,
          description: imageThreatDesc,
          severity: imageScore > 0.6 ? "high" : imageScore > 0.4 ? "medium" : "low",
        });
      }

      if (!formData.inContacts) {
        threats.push({
          title: "Unverified Sender",
          description: `Number ${formData.phone} is not in your contacts - verify legitimacy before responding`,
          severity: riskScore > 50 ? "medium" : "low",
        });
      }

      if (/urgent|immediate|expire|block|suspend|verify now|act now/i.test(formData.message)) {
        threats.push({
          title: "Urgency Tactics Detected",
          description: "Message uses pressure language to force quick action - a common scam technique",
          severity: riskScore > 50 ? "high" : "medium",
        });
      }

      if (riskLevel === "low" && threats.length === 0) {
        threats.push({
          title: "No Significant Threats Found",
          description: `ML analysis confidence: ${mlResponse.confidence}. Message appears legitimate.`,
          severity: "low",
        });
      }

      const keywords = mlResponse.explainability.contributing_words.slice(0, 5).map(w => w.word);
      const triggerPhrases = mlResponse.explainability.contributing_words.slice(0, 4).map(w => w.word);
      const confidenceMap = { HIGH: 95, MEDIUM: 75, LOW: 55 };
      const confidencePercent = confidenceMap[mlResponse.confidence] || 75;

      const doList: string[] = [];
      const dontList: string[] = [];

      if (mlResponse.decision === "SPAM") {
        doList.push("Delete this message immediately", "Block the sender number");
        if (textScore && textScore > 0.5) dontList.push("Don't respond to any requests in the message");
        if (metadataScore && metadataScore > 0.5) dontList.push("Don't click any links - they may be phishing");
        if (extractedUrl) {
          doList.push("Report this URL to Google Safe Browsing");
          dontList.push("Don't enter any credentials on linked websites");
        }
        doList.push("Report to cybercrime.gov.in if you shared any info", "Inform family members about this scam type");
        dontList.push("Don't share OTPs, passwords, or PINs", "Don't call back the sender");
      } else {
        do List.push("This message appears safe to proceed");
        if (textScore && textScore > 0.2) doList.push("Verify through official channels if requesting sensitive info");
        if (!formData.inContacts) doList.push("Save the number if this is a legitimate contact");
        doList.push("Keep for your records");
        dontList.push("Don't share sensitive info unless absolutely verified");
      }

      const result: AnalysisResult = {
        riskScore,
        riskLevel,
        confidence: confidencePercent,
        verdict: justification,
        action: mlResponse.decision === "SPAM" ? "Do NOT click any links or share personal information" : "This message appears safe, but always verify unexpected requests",
        threats,
        senderAnalysis: {
          phone: formData.phone,
          inContacts: formData.inContacts,
          reportCount: riskScore > 50 ? Math.floor(riskScore / 3) : 0,
          isNew: riskScore > 60,
        },
        contentAnalysis: {
          hasLinks: !!extractedUrl,
          linkDomain: extractedUrl ? new URL(extractedUrl).hostname : undefined,
          hasUrgency: /urgent|immediate|expire|block|suspend/i.test(formData.message),
          grammarScore: 10 - Math.floor(riskScore / 15),
          keywords,
          triggerPhrases,
        },
        recommendations: {
          do: doList.slice(0, 5),
          dont: dontList.slice(0, 5),
        },
        mlDecision: mlResponse.decision,
        mlConfidence: mlResponse.confidence,
        pipelineScores: mlResponse.pipeline_scores,
        explainability: mlResponse.explainability,
        fusionWeights: mlResponse.fusion_weights_used,
        justification,
      };

      clearInterval(loadingInterval);
      setAnalysisResult(result);
      setIsAnalyzing(false);
      setLoadingMessage("");

      if (user) {
        const analysisData: AnalysisData = {
          senderPhone: formData.phone,
          messageContent: formData.message,
          dateReceived: formData.date,
          timeReceived: formData.time,
          language: formData.language as "english" | "hindi" | "telugu",
          riskScore: result.riskScore,
          riskLevel: result.riskLevel.toUpperCase() as RiskLevel,
          verdict: result.verdict,
          threats: result.threats,
          recommendations: result.recommendations,
          senderAnalysis: result.senderAnalysis,
          contentAnalysis: result.contentAnalysis,
        };

        const saveResult = await saveAnalysis(analysisData);
        if (saveResult.success) {
          console.log("Analysis saved to database:", saveResult.data?.id);
        } else {
          console.warn("Failed to save analysis:", saveResult.error);
        }
      }

      toast({
        title: "Analysis Complete",
        description: `Risk Level: ${riskLevel.toUpperCase()} (${riskScore}/100)`,
      });

      setTimeout(() => {
        if (resultRef.current) {
          const navbarHeight = 80;
          const elementPosition = resultRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 200);

    } catch (error) {
      clearInterval(loadingInterval);
      setIsAnalyzing(false);
      setLoadingMessage("");

      const errorMessage = error instanceof Error ? error.message : "Analysis failed";

      toast({
        title: "Analysis Failed",
        description: errorMessage.includes("fetch") ? "Cannot connect to ML server. Please ensure the backend is running on port 8000." : errorMessage,
        variant: "destructive",
      });

      console.error("ML Analysis error:", error);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };

  if (!isAuthenticated) {
    return null; // Will redirect via useEffect
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-primary">
                <Shield className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SentinelAI</span>
            </Link>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Scam Alert Banner */}
      <div className="bg-warning/10 border-b border-warning/20">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-foreground text-sm">⚠️ Trending Scam Alert: Fake Aadhaar Update</p>
              <p className="text-xs text-muted-foreground">
                Scammers are sending messages claiming Aadhaar needs urgent update. UIDAI never asks for updates via SMS. Don't click links!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Card className="bg-card border-border sticky top-24">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  <button
                    onClick={() => setActiveTab("analyze")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "analyze"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <Search className="h-5 w-5" />
                    Analyze Message
                  </button>
                  <button
                    onClick={() => setActiveTab("history")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "history"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <History className="h-5 w-5" />
                    Analysis History
                  </button>
                  <button
                    onClick={() => setActiveTab("settings")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === "settings"
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary text-foreground"
                    }`}
                  >
                    <Settings className="h-5 w-5" />
                    Settings
                  </button>
                </nav>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {activeTab === "analyze" && (
              <>
                {/* Analysis Form */}
                <Card className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageSquare className="h-5 w-5 text-primary" />
                      Analyze New Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Language Selection */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Languages className="h-4 w-4" />
                        Analysis Language
                      </Label>
                      <Select
                        value={formData.language}
                        onValueChange={(value) => setFormData({ ...formData, language: value })}
                      >
                        <SelectTrigger className="w-full md:w-[200px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                          <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone Number */}
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          Sender Phone Number *
                        </Label>
                        <div className="relative">
                          <Input
                            id="phone"
                            type="tel"
                            inputMode="numeric"
                            placeholder="+91 XXXXXXXXXX"
                            value={formData.phone}
                            onChange={handlePhoneChange}
                            onKeyPress={(e) => {
                              if (!/[\d+]/.test(e.key)) {
                                e.preventDefault();
                                // Show temporary error feedback
                                setPhoneError("⚠️ Numbers only");
                                setTimeout(() => {
                                  if (formData.phone.length === 13 && /^\+91\d{10}$/.test(formData.phone)) {
                                    setPhoneError("");
                                  } else if (formData.phone.length > 0) {
                                    setPhoneError("Enter valid Indian mobile number (+91 XXXXXXXXXX)");
                                  } else {
                                    setPhoneError("");
                                  }
                                }, 2000);
                              }
                            }}
                            className={`pr-10 transition-colors ${
                              phoneValid === true 
                                ? "border-[#00BA7C] focus-visible:ring-[#00BA7C]" 
                                : phoneValid === false 
                                ? "border-destructive focus-visible:ring-destructive" 
                                : ""
                            }`}
                          />
                          {phoneValid === true && (
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#00BA7C] font-bold">
                              ✓
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Format: +91 followed by 10 digits (numbers only)
                        </p>
                        {phoneError && (
                          <p className="text-xs text-destructive mt-1 animate-pulse">
                            {phoneError}
                          </p>
                        )}
                      </div>

                      {/* Category */}
                      <div className="space-y-2">
                        <Label>Message Category</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => setFormData({ ...formData, category: value })}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="banking">Banking/Finance</SelectItem>
                            <SelectItem value="delivery">Delivery/Shipping</SelectItem>
                            <SelectItem value="government">Government/Tax</SelectItem>
                            <SelectItem value="lottery">Lottery/Prize</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message Content */}
                    <div className="space-y-2">
                      <Label htmlFor="message" className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Message Content *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Paste the suspicious message here..."
                        className="min-h-[120px]"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                      <p className="text-sm text-muted-foreground text-right">
                        {formData.message.length}/1000
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Date */}
                      <div className="space-y-2">
                        <Label htmlFor="date" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          Date Received
                        </Label>
                        <Input
                          id="date"
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="[&::-webkit-calendar-picker-indicator]:dark:invert [&::-webkit-calendar-picker-indicator]:opacity-70"
                        />
                      </div>

                      {/* Time */}
                      <div className="space-y-2">
                        <Label htmlFor="time" className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Time Received
                        </Label>
                        <Input
                          id="time"
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                          className="[&::-webkit-calendar-picker-indicator]:dark:invert [&::-webkit-calendar-picker-indicator]:opacity-70"
                        />
                      </div>
                    </div>

                    {/* In Contacts Toggle */}
                    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div>
                        <Label>Sender in Contacts</Label>
                        <p className="text-sm text-muted-foreground">Is this number saved in your phone?</p>
                      </div>
                      <Switch
                        checked={formData.inContacts}
                        onCheckedChange={(checked) => setFormData({ ...formData, inContacts: checked })}
                      />
                    </div>

                    {/* Screenshot Upload */}
                    <div className="space-y-2">
                      <Label className="flex items-center gap-2">
                        <Upload className="h-4 w-4" />
                        Upload Screenshot (Optional)
                      </Label>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/png,image/jpeg,image/jpg"
                        onChange={handleFileInputChange}
                        className="hidden"
                        id="screenshot-upload"
                      />
                      
                      {!uploadedFile ? (
                        <div 
                          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer ${
                            isDragging 
                              ? "border-primary bg-primary/10" 
                              : "border-border hover:border-primary/50"
                          }`}
                          onDragOver={handleDragOver}
                          onDragLeave={handleDragLeave}
                          onDrop={handleDrop}
                          onClick={() => fileInputRef.current?.click()}
                        >
                          <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Max file size: 5MB • PNG, JPG accepted
                          </p>
                        </div>
                      ) : (
                        <div className="border border-border rounded-lg p-4">
                          <div className="flex items-center gap-4">
                            {filePreview && (
                              <img 
                                src={filePreview} 
                                alt="Screenshot preview" 
                                className="h-20 w-20 object-cover rounded-lg border border-border"
                              />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <Image className="h-4 w-4 text-primary" />
                                <span className="text-sm font-medium truncate">{uploadedFile.name}</span>
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {(uploadedFile.size / 1024).toFixed(1)} KB
                              </p>
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={removeFile}
                              className="flex-shrink-0"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      size="lg"
                      className="w-full bg-gradient-primary"
                      onClick={analyzeMessage}
                      disabled={isAnalyzing || !phoneValid}
                    >
                      {isAnalyzing ? (
                        <>
                          <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                          {loadingMessage}
                        </>
                      ) : (
                        <>
                          <Search className="h-5 w-5 mr-2" />
                          Analyze Message
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>

                {/* Analysis Result */}
                {analysisResult && (
                  <div ref={resultRef} className="animate-fade-in-up">
                    <AnalysisReport result={analysisResult} language={formData.language} />
                    <div className="mt-8">
                      <AIChatbot result={analysisResult} language={formData.language} />
                    </div>
                  </div>
                )}
              </>
            )}

            {activeTab === "history" && <AnalysisHistory />}

            {activeTab === "settings" && (
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5 text-primary" />
                    Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div>
                        <Label>Default Language</Label>
                        <p className="text-sm text-muted-foreground">Set your preferred analysis language</p>
                      </div>
                      <Select 
                        value={formData.language}
                        onValueChange={(value) => setFormData({ ...formData, language: value })}
                      >
                        <SelectTrigger className="w-[150px]">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                          <SelectItem value="telugu">Telugu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div>
                        <Label>Email Notifications</Label>
                        <p className="text-sm text-muted-foreground">Receive alerts about new scam patterns</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
                      <div>
                        <Label>Auto-delete History</Label>
                        <p className="text-sm text-muted-foreground">Automatically delete analysis after 30 days</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

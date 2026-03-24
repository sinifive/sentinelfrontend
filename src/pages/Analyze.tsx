import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Calendar, Clock, Phone, MessageSquare, Languages, Loader2, X, Image, CheckCircle, ShieldCheck, Shield, ArrowUp, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/use-translation";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AIChatbot } from "@/components/dashboard/AIChatbot";
import { AnalysisResult as AnalysisResultComponent } from "@/components/features/AnalysisResult";
import { useAuth } from "@/contexts/AuthContext";
import { uploadScreenshot } from "@/services/storageService";
import { useAnalysis } from "@/hooks/useAnalysis";
import { checkBackendHealth } from "@/services/sentinelApiService";
import type { SentinelRequest } from "@/services/sentinelApiService";
import type { AnalysisResult, Language } from "@/types";

export default function Analyze() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { user, loading: authLoading } = useAuth();
  const { loading: analysisLoading, error: analysisError, result: sentinelResult, runAnalysis } = useAnalysis();
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [backendOnline, setBackendOnline] = useState(true);
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  // File upload state
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Phone validation state
  const [phoneValid, setPhoneValid] = useState<boolean | null>(null);
  const [phoneError, setPhoneError] = useState("");
  
  const [formData, setFormData] = useState({
    language: (localStorage.getItem('analysisLanguage') || "english") as Language,
    phone: "",
    message: "",
    date: new Date().toISOString().split("T")[0],
    time: new Date().toTimeString().slice(0, 5),
  });

  // Auth protection - redirect if not authenticated
  useEffect(() => {
    if (!authLoading && !user) {
      toast({
        title: t("pleaseLoginFirst"),
        description: t("needLoggedInAnalyze"),
        variant: "destructive",
      });
      navigate("/auth");
    }
  }, [authLoading, user, navigate, t]);

  // Save language preference
  useEffect(() => {
    localStorage.setItem('analysisLanguage', formData.language);
  }, [formData.language]);

  // Check backend health on mount
  useEffect(() => {
    const checkHealth = async () => {
      const isHealthy = await checkBackendHealth();
      setBackendOnline(isHealthy);
    };
    checkHealth();
  }, []);

  // Convert SentinelResponse to AnalysisResult when analysis completes
  useEffect(() => {
    if (!analysisLoading && sentinelResult && !analysisError) {
      const riskScore = Math.round(sentinelResult.final_score * 100);

      // Map decision to risk level
      let riskLevel: "low" | "medium" | "high";
      if (sentinelResult.decision === "HAM") {
        riskLevel = "low";
      } else {
        if (riskScore >= 70) {
          riskLevel = "high";
        } else if (riskScore >= 40) {
          riskLevel = "medium";
        } else {
          riskLevel = "low";
        }
      }

      // Generate verdict using translations
      const verdict =
        riskLevel === "high"
          ? t("verdictHigh")
          : riskLevel === "medium"
          ? t("verdictMedium")
          : t("verdictLow");

      // Build threat indicators with translations
      const threats = [
        ...sentinelResult.explainability.contributing_words
          .slice(0, 3)
          .map((word) => ({
            title: `${t("suspiciousWord")}: "${word.word}"`,
            description: t("wordContribution").replace("{score}", (word.score * 100).toFixed(1)),
            severity: (word.score > 0.7 ? "high" : word.score > 0.4 ? "medium" : "low") as "high" | "medium" | "low",
          })),
        ...sentinelResult.explainability.contributing_features
          .slice(0, 3)
          .map((feature) => ({
            title: `${t("suspiciousFeature")} ${feature.feature}`,
            description: t("featureContribution").replace("{score}", (feature.score * 100).toFixed(1)),
            severity: (feature.score > 0.7 ? "high" : feature.score > 0.4 ? "medium" : "low") as "high" | "medium" | "low",
          })),
      ];

      // Build recommendations with translations
      const recommendations = {
        do:
          riskLevel === "high"
            ? [
                t("deleteImmediately"),
                t("blockSender"),
                t("reportProvider"),
                t("warnOthers"),
                t("checkAccounts"),
              ]
            : riskLevel === "medium"
            ? [
                t("verifyOfficial"),
                t("doNotClickLinks"),
                t("keepForRecords"),
                t("reportIfSpam"),
              ]
            : [
                t("keepForRecords"),
                t("stayVigilant"),
              ],
        dont:
          riskLevel === "high"
            ? [
                t("dontClickMessage"),
                t("dontCallNumber"),
                t("dontShareInfo"),
                t("dontForward"),
                t("dontRespond"),
              ]
            : riskLevel === "medium"
            ? [
                t("dontSharePersonal"),
                t("dontClickNoVerify"),
                t("dontRespondHastily"),
              ]
            : [t("dontShareUnverified")],
      };

      // Build analysis result
      const result: AnalysisResult = {
        riskScore,
        riskLevel,
        confidence: sentinelResult.confidence === "HIGH" ? 90 : sentinelResult.confidence === "MEDIUM" ? 70 : 50,
        verdict,
        action:
          riskLevel === "high"
            ? t("actionHigh")
            : riskLevel === "medium"
            ? t("actionMedium")
            : t("actionLow"),
        threats,
        senderAnalysis: {
          phone: formData.phone,
          inContacts: false,
          reportCount: 0,  // Real data - no fake reports
          isNew: false,    // Don't show misleading "new number" flag
        },
        contentAnalysis: {
          hasLinks: (sentinelResult.pipeline_scores.metadata ?? 0) > 0,
          linkDomain: sentinelResult.explainability.ocr_text?.match(/(https?:\/\/[^\s]+)/)?.[0],
          hasUrgency: sentinelResult.explainability.contributing_words.some((w) =>
            ["urgent", "immediate", "expire", "block", "suspend"].includes(w.word.toLowerCase())
          ),
          grammarScore: 7,
          keywords: sentinelResult.explainability.contributing_words.slice(0, 5).map((w) => w.word),
          triggerPhrases: sentinelResult.explainability.contributing_words.slice(0, 5).map((w) => w.word),
        },
        recommendations,
      };

      setAnalysisResult(result);
    }
  }, [analysisLoading, sentinelResult, analysisError, formData.phone, t]);

  const loadingMessages = [
    "Analyzing message content...",
    "Checking sender reputation...",
    "Scanning for malicious links...",
    "Generating risk report...",
  ];

  // Phone number validation - accepts any country code
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only digits and + symbol
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // Ensure + is only at the start
    let formattedPhone = cleaned;
    if (cleaned.length > 0 && !cleaned.startsWith('+')) {
      formattedPhone = '+' + cleaned;
    }
    
    // Remove any + that's not at the start
    if (formattedPhone.length > 1) {
      formattedPhone = '+' + formattedPhone.slice(1).replace(/\+/g, '');
    }
    
    // Limit to reasonable phone length
    formattedPhone = formattedPhone.slice(0, 16);
    
    setFormData({ ...formData, phone: formattedPhone });
    
    // Validate: + followed by 10-15 digits
    if (formattedPhone.length === 0) {
      setPhoneValid(null);
      setPhoneError("");
    } else if (/^\+\d{10,15}$/.test(formattedPhone)) {
      setPhoneValid(true);
      setPhoneError("");
    } else {
      setPhoneValid(false);
    }
  };

  const handlePhoneKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[\d+]/.test(e.key)) {
      e.preventDefault();
      setPhoneError("⚠️ Numbers and + only");
      setTimeout(() => {
        if (/^\+\d{10,15}$/.test(formData.phone)) {
          setPhoneError("");
        } else {
          setPhoneError("");
        }
      }, 2000);
    }
  };

  // File upload handlers
  const handleFileSelect = (file: File) => {
    const validTypes = ['image/png', 'image/jpeg', 'image/jpg'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: t("invalidFileType"),
        description: t("pleaseUploadPngJpg"),
        variant: "destructive",
      });
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      toast({
        title: t("fileTooLarge"),
        description: t("maximumFileSize"),
        variant: "destructive",
      });
      return;
    }
    
    setUploadedFile(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
    
    toast({ title: t("screenshotUploaded"), description: file.name });
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
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
    if (file) handleFileSelect(file);
  };

  const removeFile = () => {
    setUploadedFile(null);
    setFilePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const analyzeMessage = async () => {
    if (!formData.phone || !formData.message) {
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
        description: "Please enter a valid phone number with country code.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    setAnalysisResult(null);

    // Upload screenshot if present
    let screenshotUrl: string | undefined;
    if (uploadedFile && user) {
      setIsUploading(true);
      const uploadResult = await uploadScreenshot(uploadedFile, user.id);
      setIsUploading(false);

      if (uploadResult.success && uploadResult.url) {
        screenshotUrl = uploadResult.url;
      } else {
        console.error("Screenshot upload failed:", uploadResult.error);
        // Continue without screenshot
      }
    }

    // Show loading messages while analyzing
    const loadingInterval = setInterval(() => {
      const idx = Math.floor(Math.random() * loadingMessages.length);
      setLoadingMessage(loadingMessages[idx]);
    }, 1500);

    try {
      // Extract URL from message text using regex
      const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)|([a-zA-Z0-9-]+\.(com|org|net|in|xyz|co|io|app)[^\s]*)/gi;
      const urlMatch = formData.message.match(urlRegex);
      const extractedUrl = urlMatch ? urlMatch[0] : undefined;

      // Combine date and time to ISO string
      const timestamp = formData.date && formData.time
        ? new Date(`${formData.date}T${formData.time}`).toISOString()
        : new Date().toISOString();

      // Convert uploaded file to base64 if present
      let imageBase64: string | undefined;
      if (uploadedFile) {
        imageBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            // Extract base64 data (remove data:image/...;base64, prefix)
            const base64String = (reader.result as string).split(',')[1];
            resolve(base64String);
          };
          reader.onerror = reject;
          reader.readAsDataURL(uploadedFile);
        });
      }

      // Build SentinelRequest payload
      const payload: SentinelRequest = {
        text: formData.message,
        image: imageBase64,
        metadata: {
          sender: formData.phone,
          url: extractedUrl,
          timestamp: timestamp,
        },
      };

      // Call the Sentinel API via useAnalysis hook
      await runAnalysis(payload, {
        senderPhone: formData.phone,
        messageContent: formData.message,
        dateReceived: formData.date,
        timeReceived: formData.time,
        screenshotUrl,
        language: formData.language,
      });

      // Hook will handle the API call and Supabase save
      clearInterval(loadingInterval);
      setIsAnalyzing(false);
      setLoadingMessage("");

      toast({
        title: "Analysis Complete",
        description: "Your message has been analyzed successfully.",
      });

      // Scroll to results after a short delay
      setTimeout(() => {
        if (resultRef.current) {
          const navbarHeight = 80;
          const elementPosition = resultRef.current.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 200);

    } catch (error) {
      console.error("Analysis failed:", error);
      clearInterval(loadingInterval);
      setIsAnalyzing(false);
      setLoadingMessage("");

      toast({
        title: "Analysis Failed",
        description: error instanceof Error ? error.message : "Unable to analyze message. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-muted">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto">
            {/* Backend Health Warning */}
            {!backendOnline && (
              <Alert variant="default" className="mb-6 border-warning bg-warning/10">
                <AlertCircle className="h-4 w-4 text-warning" />
                <AlertTitle className="text-warning">Backend Status</AlertTitle>
                <AlertDescription className="text-warning/80">
                  ⚠️ Analysis backend is offline. Results may be unavailable.
                </AlertDescription>
              </Alert>
            )}

            {/* Analysis Form */}
            <div ref={formRef}>
            <Card className="bg-card border-border rounded-2xl shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  {t("analyzeMessageTitle")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Language Selection */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Languages className="h-4 w-4" />
                    {t("selectLanguage")}
                  </Label>
                  <Select
                    value={formData.language}
                    onValueChange={(value) => setFormData({ ...formData, language: value as Language })}
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
                  <p className="text-xs text-muted-foreground">{t("analysisWillBeProvided")}</p>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t("sendersNumberLabel")}
                  </Label>
                  <div className="relative">
                    <Input
                      id="phone"
                      type="tel"
                      inputMode="tel"
                      placeholder={t("phoneNumberPlaceholder")}
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      onKeyPress={handlePhoneKeyPress}
                      className={`pr-10 transition-colors ${
                        phoneValid === true
                          ? "border-success focus-visible:ring-success"
                          : phoneError
                          ? "border-destructive focus-visible:ring-destructive"
                          : ""
                      }`}
                    />
                    {phoneValid === true && (
                      <CheckCircle className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-success" />
                    )}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {t("enterPhoneWithCountryCode")}
                  </p>
                  {phoneError && (
                    <p className="text-xs text-destructive animate-pulse">{phoneError}</p>
                  )}
                </div>

                {/* Message Content */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {t("messageTextLabel")}
                  </Label>
                  <Textarea
                    id="message"
                    placeholder={t("pasteSuspiciousMessage")}
                    className="min-h-[160px]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    maxLength={5000}
                  />
                  <p className="text-xs text-muted-foreground text-right">
                    {formData.message.length} / 5000
                  </p>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {t("dateReceived")}
                    </Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="[&::-webkit-calendar-picker-indicator]:dark:invert [&::-webkit-calendar-picker-indicator]:opacity-70"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {t("timeReceived")}
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

                {/* Screenshot Upload */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {t("screenshotOptional")}
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
                      className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors cursor-pointer ${
                        isDragging 
                          ? "border-primary bg-primary/10" 
                          : "border-border hover:border-primary/50"
                      }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="h-6 w-6 mx-auto text-muted-foreground mb-2" />
                      <p className="text-sm text-muted-foreground">
                        {t("clickToUploadOrDrag")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {t("maxFileSizePngJpg")}
                      </p>
                    </div>
                  ) : (
                    <div className="border border-border rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        {filePreview && (
                          <img 
                            src={filePreview} 
                            alt="Screenshot preview" 
                            className="h-16 w-16 object-cover rounded-lg border border-border"
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
                        <Button variant="ghost" size="icon" onClick={removeFile}>
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-white rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  onClick={analyzeMessage}
                  disabled={isAnalyzing || isUploading || analysisLoading || !formData.phone || !formData.message}
                >
                  {isAnalyzing || isUploading || analysisLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                      {isUploading ? t("uploadingScreenshot") : loadingMessage}
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      {t("analyzeMessageTitle")}
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
            </div>

            {/* Loading State */}
            {analysisLoading && (
              <div className="mt-8 flex flex-col items-center justify-center py-12">
                <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
                <p className="text-lg font-medium text-foreground">Analyzing your message...</p>
                <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
              </div>
            )}

            {/* Error State */}
            {analysisError && !analysisLoading && (
              <div className="mt-8">
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Analysis Failed</AlertTitle>
                  <AlertDescription>
                    {analysisError}
                    <br />
                    <span className="text-xs mt-2 inline-block">Please try again or contact support if the issue persists.</span>
                  </AlertDescription>
                </Alert>
              </div>
            )}

            {/* Results Section - New API Response Display */}
            {sentinelResult && !analysisLoading && !analysisError && (
              <div id="results-section" ref={resultRef} className="mt-8 animate-fade-in-up">
                {/* Result header / divider */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border w-8" />
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      {t("analysisResults")}
                    </div>
                    <div className="h-px flex-1 bg-border w-8" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground ml-4"
                    onClick={() => {
                      if (formRef.current) {
                        const offsetPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    <ArrowUp className="h-4 w-4 mr-1" />
                    {t("analyzeAnother")}
                  </Button>
                </div>

                <AnalysisResultComponent result={sentinelResult} />

                {/* Note: AI Chatbot is now available as a floating widget in bottom-right corner */}
              </div>
            )}

            {/* Legacy Analysis Result - Fallback (commented out, using new component above) */}
            {/* {analysisResult && (
              <div ref={resultRef} className="mt-8 animate-fade-in-up">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-border w-8" />
                    <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                      <Shield className="h-4 w-4 text-primary" />
                      {t("analysisResults")}
                    </div>
                    <div className="h-px flex-1 bg-border w-8" />
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-muted-foreground hover:text-foreground ml-4"
                    onClick={() => {
                      if (formRef.current) {
                        const offsetPosition = formRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                  >
                    <ArrowUp className="h-4 w-4 mr-1" />
                    {t("analyzeAnother")}
                  </Button>
                </div>
                <AnalysisReport result={analysisResult} language={formData.language} />
                <div className="mt-8">
                  <AIChatbot result={analysisResult} language={formData.language} messageContent={formData.message} />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Re-export AnalysisResult type for other components
export type { AnalysisResult };

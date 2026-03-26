import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Bot, User, Minus, MessageCircle, X } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import { toast } from "@/hooks/use-toast";

interface Message {
  role: "user" | "bot";
  content: string;
}

// Backend API call for the floating chatbot (resolves CORS issues)
async function callBackendChatAPI(userMessage: string, language: string): Promise<string> {
  const BACKEND_API_URL = import.meta.env.VITE_SENTINEL_API_URL || 'http://localhost:8000';

  try {
    const response = await fetch(`${BACKEND_API_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_message: userMessage,
        language: language
      })
    });

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response || "Sorry, I couldn't process that request.";
  } catch (error) {
    console.error('Backend Chat API Error:', error);
    throw error;
  }
}

export function FloatingChatbot() {
  const { t, language } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize with welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = getWelcomeMessage();
      setMessages([{
        role: "bot",
        content: welcomeMessage
      }]);
      setHasUnread(false);
    }
  }, [isOpen, language]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getWelcomeMessage = (): string => {
    if (language === "hindi") {
      return "नमस्ते! मैं SentinelAI असिस्टेंट हूं। SMS धोखाधड़ी के बारे में पूछें।";
    } else if (language === "telugu") {
      return "హలో! నేను SentinelAI అసిస్టెంట్‌ని। SMS మోసాల గురించి అడగండి।";
    } else if (language === "marathi") {
      return "नमस्कार! मी SentinelAI सहायक आहे. SMS घोटाळ्यांबद्दल विचारा.";
    } else if (language === "urdu") {
      return "السلام علیکم! میں SentinelAI اسسٹنٹ ہوں۔ SMS فریب کے بارے میں پوچھیں۔";
    } else if (language === "tamil") {
      return "வணக்கம்! நான் SentinelAI உதவியாளர். SMS மோசடிகளைப் பற்றி கேளுங்கள்.";
    }
    return "Hello! I'm SentinelAI assistant. Ask me about SMS scams.";
  };

  const getQuickQuestions = () => {
    if (language === "hindi") {
      return [
        "SMS घोटाले कैसे पहचानें?",
        "अगर मैंने गलत लिंक दबाया तो?",
        "OTP कब साझा करें?",
        "संदिग्ध संदेश मिले तो क्या करें?"
      ];
    } else if (language === "telugu") {
      return [
        "SMS మోసాలను ఎలా గుర్తించాలి?",
        "తప్పు లింక్‌పై క్లిక్ చేస్తే?",
        "OTP ఎప్పుడు షేర్ చేయాలి?",
        "అనుమానాస్పద మెసేజ్ వస్తే?"
      ];
    } else if (language === "marathi") {
      return [
        "SMS घोटाळे कसे ओळखायचे?",
        "मी चुकीचा लिंक दाबला तर?",
        "OTP कधी शेअर करायचा?",
        "संदिग्ध संदेश मिळाला तर?"
      ];
    } else if (language === "urdu") {
      return [
        "SMS فریب کو کیسے پہچانا جائے؟",
        "اگر میں نے غلط لنک دبایا تو؟",
        "OTP کب شیئر کریں؟",
        "مشکوک پیغام آیا تو کیا کریں؟"
      ];
    } else if (language === "tamil") {
      return [
        "SMS மோசடிகளை எவ்வாறு கண்டுபிடிப்பது?",
        "நான் தவறான இணைப்பை கிளிக் செய்தால்?",
        "OTP எப்போது பகிர வேண்டும்?",
        "சந்தேகத்திற்குரிய செய்தி வந்தால்?"
      ];
    }
    return [
      "How to identify SMS scams?",
      "What if I clicked a suspicious link?",
      "When should I share OTP?",
      "What to do with suspicious messages?"
    ];
  };

  const handleQuickQuestion = async (question: string) => {
    // Add user message
    const userMessage: Message = { role: "user", content: question };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await callBackendChatAPI(question, language);
      const botMessage: Message = { role: "bot", content: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = language === "hindi"
        ? "क्षमा करें, कुछ गलत हो गया। कृपया फिर से कोशिश करें।"
        : language === "telugu"
        ? "క్షమించండి, ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి."
        : language === "marathi"
        ? "क्षमा करा, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
        : language === "urdu"
        ? "معافی چاہتا ہوں، کچھ غلط ہوا۔ براہ کرم دوبارہ کوشش کریں۔"
        : language === "tamil"
        ? "மன்னிக்கவும், ஏதோ தவறு ஆனது. தயவுசெய்து மீண்டும் முயற்சி செய்யவும்."
        : "Sorry, something went wrong. Please try again.";

      setMessages(prev => [...prev, { role: "bot", content: errorMessage }]);

      toast({
        title: language === "hindi" ? "त्रुटि" : language === "telugu" ? "లోపం" : language === "marathi" ? "त्रुटि" : language === "urdu" ? "خرابی" : language === "tamil" ? "பிழை" : "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage: Message = { role: "user", content: newMessage };
    setMessages(prev => [...prev, userMessage]);
    setNewMessage("");
    setIsTyping(true);

    try {
      const response = await callBackendChatAPI(newMessage, language);
      const botMessage: Message = { role: "bot", content: response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage = language === "hindi"
        ? "क्षमा करें, कुछ गलत हो गया। कृपया फिर से कोशिश करें।"
        : language === "telugu"
        ? "క్షమించండి, ఏదో తప్పు జరిగింది. దయచేసి మళ్లీ ప్రయత్నించండి."
        : language === "marathi"
        ? "क्षमा करा, काहीतरी चूक झाली. कृपया पुन्हा प्रयत्न करा."
        : language === "urdu"
        ? "معافی چاہتا ہوں، کچھ غلط ہوا۔ براہ کرم دوبارہ کوشش کریں۔"
        : language === "tamil"
        ? "மன்னிக்கவும், ஏதோ தவறு ஆனது. தயவுசெய்து மீண்டும் முயற்சி செய்யவும்."
        : "Sorry, something went wrong. Please try again.";

      setMessages(prev => [...prev, { role: "bot", content: errorMessage }]);
      toast({
        title: language === "hindi" ? "त्रुटि" : language === "telugu" ? "లోపం" : language === "marathi" ? "त्रुटि" : language === "urdu" ? "خرابی" : language === "tamil" ? "பிழை" : "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setHasUnread(false);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={toggleChat}
          size="lg"
          className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
          {hasUnread && (
            <div className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 rounded-full animate-pulse" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[420px] sm:h-[500px] max-h-[calc(100vh-5.5rem)] bg-background border border-border rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-2">
          <Bot className="h-6 w-6" />
          <span className="font-semibold text-lg">SentinelAI</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleChat}
          className="h-8 w-8 p-0 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.role === "bot" && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <Bot className="h-5 w-5 text-primary-foreground" />
              </div>
            )}
            <div
              className={`max-w-[280px] p-3 rounded-lg text-sm whitespace-pre-wrap ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground ml-6"
                  : "bg-background text-foreground border border-border"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}

        {/* Quick Questions - Show only if no conversation yet */}
        {messages.length === 1 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground font-medium">
              {language === "hindi" ? "त्वरित प्रश्न:" : language === "telugu" ? "త్వరిత ప్రశ్నలు:" : language === "marathi" ? "त्वरित प्रश्न:" : language === "urdu" ? "فوری سوالات:" : language === "tamil" ? "விரைவான கேள்விகள்:" : "Quick Questions:"}
            </p>
            {getQuickQuestions().map((question, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="w-full text-left justify-start h-auto p-3 text-sm"
                onClick={() => handleQuickQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        )}

        {isTyping && (
          <div className="flex gap-2">
            <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="max-w-[280px] p-3 rounded-lg text-sm bg-background border border-border">
              <div className="flex space-x-1.5">
                <div className="h-3 w-3 bg-muted-foreground rounded-full animate-pulse"></div>
                <div className="h-3 w-3 bg-muted-foreground rounded-full animate-pulse delay-75"></div>
                <div className="h-3 w-3 bg-muted-foreground rounded-full animate-pulse delay-150"></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t border-border bg-background rounded-b-lg">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              language === "hindi" ? "अपना प्रश्न टाइप करें..."
              : language === "telugu" ? "మీ ప్రశ్నను టైప్ చేయండి..."
              : language === "marathi" ? "आपले प्रश्न टाइप करा..."
              : language === "urdu" ? "اپنی سوال درج کریں..."
              : language === "tamil" ? "உங்கள் கேள்வியை தাइப் செய்யுங்கள்..."
              : "Type your question..."
            }
            className="flex-1 text-sm h-8"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            disabled={!newMessage.trim() || isTyping}
            className="px-3 h-8"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
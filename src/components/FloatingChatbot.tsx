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
      return "नमस्ते! मैं SentinelAI सहायक हूं। मैं आपको SMS घोटालों के बारे में जानकारी दे सकता हूं और सुरक्षा सुझाव दे सकता हूं। आप मुझसे कुछ भी पूछ सकते हैं!";
    } else if (language === "telugu") {
      return "హలో! నేను SentinelAI అసిస్టెంట్‌ని। నేను మీకు SMS మోసాల గురించి సమాచారం ఇవ్వగలను మరియు భద్రతా సలహాలు ఇవ్వగలను। మీరు నన్ను ఏదైనా అడగవచ్చు!";
    }
    return "Hello! I'm the SentinelAI assistant. I can help you with information about SMS scams and provide security advice. Feel free to ask me anything!";
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
        : "Sorry, something went wrong. Please try again.";

      setMessages(prev => [...prev, { role: "bot", content: errorMessage }]);

      toast({
        title: language === "hindi" ? "त्रुटि" : language === "telugu" ? "లోపం" : "Error",
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
        : "Sorry, something went wrong. Please try again.";

      setMessages(prev => [...prev, { role: "bot", content: errorMessage }]);
      toast({
        title: language === "hindi" ? "त्रुटि" : language === "telugu" ? "లోపం" : "Error",
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
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={toggleChat}
          size="lg"
          className="h-20 w-20 rounded-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
        >
          <MessageCircle className="h-9 w-9 text-white" />
          {hasUnread && (
            <div className="absolute -top-1 -right-1 h-6 w-6 bg-red-500 rounded-full animate-pulse" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[480px] h-[576px] bg-background border border-border rounded-lg shadow-xl flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-border bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-3">
          <Bot className="h-8 w-8" />
          <span className="font-semibold text-xl">SentinelAI Assistant</span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleChat}
          className="h-12 w-12 p-0 text-primary-foreground hover:bg-primary-foreground/20"
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-muted/30">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {message.role === "bot" && (
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary-foreground" />
              </div>
            )}
            <div
              className={`max-w-[360px] p-4 rounded-lg text-base whitespace-pre-wrap ${
                message.role === "user"
                  ? "bg-primary text-primary-foreground ml-6"
                  : "bg-background text-foreground border border-border"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <User className="h-6 w-6 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}

        {/* Quick Questions - Show only if no conversation yet */}
        {messages.length === 1 && (
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground font-medium">
              {language === "hindi" ? "त्वरित प्रश्न:" : language === "telugu" ? "త్వరిత ప్రశ్నలు:" : "Quick Questions:"}
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
          <div className="flex gap-3">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Bot className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="max-w-[360px] p-4 rounded-lg text-base bg-background border border-border">
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
      <div className="p-4 border-t border-border bg-background rounded-b-lg">
        <div className="flex gap-3">
          <Input
            ref={inputRef}
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={
              language === "hindi" ? "अपना प्रश्न टाइप करें..."
              : language === "telugu" ? "మీ ప్రశ్నను టైప్ చేయండి..."
              : "Type your question..."
            }
            className="flex-1 text-base h-9"
            disabled={isTyping}
          />
          <Button
            onClick={handleSendMessage}
            size="sm"
            disabled={!newMessage.trim() || isTyping}
            className="px-4 h-9"
          >
            <Send className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
import { Globe } from "lucide-react";
import { useMemo } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import type { Language } from "@/lib/translations";
import { CSS_CLASSES } from "@/constants/styles";

const languages: { label: string; value: Language; flag: string }[] = [
  { label: "English", value: "english", flag: "🇬🇧" },
  { label: "हिंदी (Hindi)", value: "hindi", flag: "🇮🇳" },
  { label: "తెలుగు (Telugu)", value: "telugu", flag: "🇮🇳" },
  { label: "मराठी (Marathi)", value: "marathi", flag: "🇮🇳" },
  { label: "اردو (Urdu)", value: "urdu", flag: "🇵🇰" },
  { label: "தமிழ் (Tamil)", value: "tamil", flag: "🇮🇳" },
];

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const currentLanguage = useMemo(
    () => languages.find((l) => l.value === language),
    [language]
  );

  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className={`relative ${CSS_CLASSES.FLEX_NO_SHRINK}`}
            title={`Current language: ${currentLanguage?.label || 'English'}`}
          >
            <Globe className="h-5 w-5" />
            <span className="sr-only">Toggle language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-48 z-50">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => setLanguage(lang.value)}
              className={`flex items-center gap-2 cursor-pointer ${
                language === lang.value ? "bg-accent" : ""
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
              {language === lang.value && (
                <span className="ml-auto">✓</span>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
  );
}

import { useLanguage } from "./use-language";
import { getTranslation, type TranslationKey } from "@/lib/translations";

export type { TranslationKey };

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey): string => {
    return getTranslation(language, key);
  };

  return { t, language };
}

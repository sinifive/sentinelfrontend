import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function FAQ() {
  const { t } = useTranslation();
  
  const faqs = [
    { q: t("whatIsSmishing"), a: t("smishingDefinition") },
    { q: t("howAccurateDetection"), a: t("accuracyDetails") },
    { q: t("isServiceFree"), a: t("freeServiceDetails") },
    { q: t("languagesSupported"), a: t("supportedLanguagesDetails") },
    { q: t("isDataSecure"), a: t("dataSecurityDetails") },
    { q: t("fellForScam"), a: t("fellForScamDetails") },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 pt-24 max-w-3xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{t("faqTitle")}</h1>
          <p className="text-muted-foreground">{t("findAnswersCommon")}</p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </main>
      <Footer />
    </div>
  );
}

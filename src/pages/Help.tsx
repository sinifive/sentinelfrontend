import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HelpCircle, Shield, Lock, Zap } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function Help() {
  const { t } = useTranslation();

  const faqSections = [
    {
      title: t("general"),
      icon: HelpCircle,
      questions: [
        {
          q: t("howDoesWork"),
          a: t("pasteYourMessage"),
        },
        {
          q: t("isReallyFree"),
          a: t("yesCompletelyfree"),
        },
        {
          q: t("whichLanguagesSupported"),
          a: t("hindiEnglishTelugu"),
        },
        {
          q: t("doINeedAccount"),
          a: t("noForTrying"),
        },
      ],
    },
    {
      title: t("privacySecurity"),
      icon: Lock,
      questions: [
        {
          q: t("isMyDataSafe"),
          a: t("yesWeEncrypt"),
        },
        {
          q: t("canYouRead"),
          a: t("aiAnalyzesAuto"),
        },
        {
          q: t("whatDoYouDo"),
          a: t("sameAsText"),
        },
      ],
    },
    {
      title: t("usingSentinelAI"),
      icon: Zap,
      questions: [
        {
          q: t("howAccurate"),
          a: t("continuouslyImproving"),
        },
        {
          q: t("whatIfSays"),
          a: t("alwaysTrustInstinct"),
        },
        {
          q: t("canIReport"),
          a: t("yesPleaseUse"),
        },
        {
          q: t("whatIfClickedLink"),
          a: t("actImmediately"),
        },
        {
          q: t("canIUseWhatsapp"),
          a: t("yesPasteAnyText"),
        },
      ],
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">{t("helpCenter")}</h1>
              <p className="text-muted-foreground">
                {t("findAnswers")}
              </p>
            </div>

            {/* FAQ Sections */}
            <div className="space-y-8">
              {faqSections.map((section) => (
                <Card key={section.title} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <section.icon className="h-5 w-5 text-primary" />
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {section.questions.map((item, index) => (
                        <AccordionItem key={index} value={`${section.title}-${index}`}>
                          <AccordionTrigger className="text-left text-foreground">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground">
                            {item.a}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact */}
            <Card className="bg-primary/5 border-primary/20 mt-12">
              <CardContent className="p-6 text-center">
                <p className="text-foreground mb-2">Still have questions?</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try our chatbot or visit the FAQ section
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

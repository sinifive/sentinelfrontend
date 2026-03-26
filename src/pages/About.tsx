import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Target,
  Users,
  Zap,
  Globe,
  Lock,
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Github
} from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function About() {
  const { t } = useTranslation();

  const stats = [
    { value: "₹1,247 Cr", label: t("lostToFraud"), source: t("cyberCrimeReports") },
    { value: "67%", label: t("victimLiveRural") },
    { value: "89%", label: t("yearOverYearIncrease") },
    { value: "₹47,000", label: t("averageVictimLoss") },
  ];

  const additionalStats = [
    t("reportedToAuthorities"),
    t("cannotIdentifyScams"),
    t("dontSeekHelp"),
    t("bankingScramsAccount"),
  ];

  const whyRuralTargeted = [
    t("limitedDigitalLiteracy"),
    t("languageBarriers"),
    t("trustInMessages"),
    t("lessAccessToEducation"),
    t("delayedReportingAllows"),
  ];

  const howItWorks = [
    { step: "1", title: t("pasteMessage"), desc: t("copyTheSuspicious") },
    { step: "2", title: t("aiAnalysis"), desc: t("weCheck47") },
    { step: "3", title: t("getVerdict"), desc: t("clearAnswer") },
    { step: "4", title: t("takeAction"), desc: t("simpleStepsInLanguage") },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("whyWeBuiltThis")}
            </h1>
          </div>
        </section>

        {/* The Story */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t("aboutIntro")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutProblem")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutProblem2")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong className="text-foreground">{t("aboutProblem3")}</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t("aboutStats")}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {t("digitalDivideVulnerable")}
              </p>
              <p className="text-lg text-foreground font-medium">
                {t("aboutMission")}
              </p>
            </div>
          </div>
        </section>

        {/* The Problem - Stats */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-destructive/10 mb-4">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("problemIsReal")}</h2>
              <p className="text-muted-foreground">{t("realityOfFraud")}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-card border-border text-center">
                  <CardContent className="p-6">
                    <p className="text-3xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    {stat.source && (
                      <p className="text-xs text-muted-foreground/60 mt-2">Source: {stat.source}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-destructive" />
                    {t("moreAlarmingFacts")}
                  </h3>
                  <ul className="space-y-3">
                    {additionalStats.map((stat, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-destructive mt-1">•</span>
                        {stat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-accent" />
                    {t("whyRuralTargeted")}
                  </h3>
                  <ul className="space-y-3">
                    {whyRuralTargeted.map((reason, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        {reason}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Solution */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-success/10 mb-4">
              <CheckCircle className="h-6 w-6 text-success" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">{t("ourSolution")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("simpleFreeAccessible")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Zap, title: t("threeSecondAnalysis"), desc: t("freeAiInstant") },
              { icon: Globe, title: t("hindiEnglishTeluguShort"), desc: t("worksInLanguage") },
              { icon: Users, title: t("builtForEveryone"), desc: t("noTechKnowledge") },
              { icon: Lock, title: t("privacyFirst"), desc: t("messagesEncrypted") },
              { icon: Target, title: t("indiaSpecific"), desc: t("trainedIndianScams") },
              { icon: Shield, title: t("freeForever"), desc: t("noAdsTracking") },
            ].map((feature, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">{t("howItWorks")}</h2>
              <p className="text-muted-foreground">{t("fourSimpleSteps")}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {howItWorks.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto mt-12 text-center">
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">
                    {t("aiScansDetailsLong")}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">{t("fraudPatternsChecked")}</strong>
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-6">{t("ourMissionTitle")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t("ourMissionDescLong")}
            </p>
          </div>
        </section>

        {/* GitHub */}
        <section className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-foreground mb-6">Open Source Project</h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a
                  href="https://github.com/sinifive/sentinelfrontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="h-5 w-5" />
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
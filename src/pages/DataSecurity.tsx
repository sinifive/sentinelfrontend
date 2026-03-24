import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lock, Shield, Server, Eye, CheckCircle } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export default function DataSecurity() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16 pt-24 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">{t("dataSecurity")}</h1>
          <p className="text-muted-foreground">{t("lastUpdated")}: January 7, 2026</p>
        </div>

        {/* Security Features */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { icon: Shield, title: t("endToEndEncryption"), desc: t("encryptionDesc") },
            { icon: Server, title: t("secureInfrastructure"), desc: t("infrastructureDesc") },
            { icon: Eye, title: t("privacyByDesign"), desc: t("privacyDesignDesc") },
            { icon: Lock, title: t("accessControls"), desc: t("accessControlsDesc") },
          ].map((item) => (
            <Card key={item.title} className="bg-card border-border">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8 prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("encryptionPractices")}</h2>
              <p className="text-muted-foreground mb-4">
                We employ industry-leading encryption standards:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>TLS 1.3 for all data in transit</li>
                <li>AES-256 encryption for data at rest</li>
                <li>Secure key management with regular rotation</li>
                <li>Perfect forward secrecy for communication sessions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("complianceStandards")}</h2>
              <p className="text-muted-foreground mb-4">
                SentinelAI adheres to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Information Technology Act, 2000 (India)</li>
                <li>Personal Data Protection guidelines</li>
                <li>CERT-In security recommendations</li>
                <li>Industry best practices for data handling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">{t("incidentResponse")}</h2>
              <p className="text-muted-foreground mb-4">
                In case of a security incident:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>We have 24/7 security monitoring in place</li>
                <li>Affected users will be notified within 72 hours</li>
                <li>We will provide clear remediation steps</li>
                <li>Incidents are reported to relevant authorities as required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">User Data Protection</h2>
              <p className="text-muted-foreground mb-4">
                Your data is protected through:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Automatic deletion of analyzed messages after 30 days</li>
                <li>Anonymization of phone numbers after analysis</li>
                <li>No sale or sharing of personal data with third parties</li>
                <li>Regular security audits and penetration testing</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Report a Vulnerability</h2>
              <p className="text-muted-foreground">
                If you discover a security vulnerability, please report it responsibly to{" "}
                <a href="mailto:security@sentinelai.com" className="text-primary hover:underline">
                  security@sentinelai.com
                </a>
                . We appreciate your help in keeping SentinelAI secure.
              </p>
            </section>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}

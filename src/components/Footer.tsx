import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck, Github } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";

export function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      { label: t("home"), href: "/" },
      { label: t("analyze"), href: "/analyze" },
      { label: t("about"), href: "/about" },
    ],
    company: [
      { label: t("about"), href: "/about" },
      { label: t("contact"), href: "/contact" },
      { label: t("help"), href: "/help" },
    ],
    legal: [
      { label: t("privacy"), href: "/privacy" },
      { label: t("terms"), href: "/terms" },
      { label: t("contact"), href: "/data-security" },
    ],
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    navigate(href);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer style={{ background: "#0A0F1E" }} className="border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-primary shadow-md">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">SentinelAI</span>
            </Link>
            <p className="text-white/50 text-sm mb-3 max-w-xs">
              {t("footerDescription")}
            </p>
            {/* Built for Rural India tagline */}
            <p className="text-primary text-xs font-semibold mb-4">{t("builtForRuralIndia")}</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sinifive/sentinelfrontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/40 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("home")}</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-sm text-white/40 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-sm text-white/40 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">{t("legal")}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(link.href, e)}
                    className="text-sm text-white/40 hover:text-primary transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/30">
            {t("copyrightSentinelAI")}
          </p>
        </div>
      </div>
    </footer>
  );
}

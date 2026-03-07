import { getTranslations } from "next-intl/server";
import { BUSINESS } from "@/lib/general/constants";
import { Link } from "@/lib/i18n/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = async () => {
  const t = await getTranslations("Footer");
  const tNav = await getTranslations("Nav");

  const quickLinks = [
    { label: tNav("home"), href: "#hero" },
    { label: tNav("about"), href: "#about" },
    { label: tNav("services"), href: "#services" },
    { label: tNav("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {/* Brand column */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{BUSINESS.name}</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              {BUSINESS.tagline}
            </p>
            <span className="inline-block rounded-full bg-primary/20 text-primary px-3 py-1 text-xs font-semibold">
              {BUSINESS.yearsInBusiness}+ {tNav("home") === "Home" ? "years" : "χρόνια"}
            </span>
          </div>

          {/* Quick links column */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{t("quickLinks")}</h3>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors duration-300 text-sm w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact info column */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold">{t("contactInfo")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                <span className="text-background/70">
                  {BUSINESS.address.full}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="size-4 text-primary shrink-0" />
                <a
                  href={BUSINESS.phoneHref}
                  className="text-background/70 hover:text-primary transition-colors duration-300"
                >
                  {BUSINESS.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-primary shrink-0" />
                <a
                  href={BUSINESS.emailHref}
                  className="text-background/70 hover:text-primary transition-colors duration-300"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-background/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/50">
          <p>
            &copy; 2025 {BUSINESS.name}. {t("rights")}
          </p>
          <p>
            {t("madeBy")}{" "}
            <a
              href={BUSINESS.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-background/70 hover:text-primary transition-colors duration-300"
            >
              {BUSINESS.credit.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

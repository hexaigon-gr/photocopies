import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { BUSINESS } from "@/lib/general/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BasePageProps } from "@/types/page-props";
import {
  ArrowLeft,
  Usb,
  Mail,
  Smartphone,
  Phone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Εκτύπωση από USB & Email | Φωτοαντιγραφικό Κέντρο Ηλιούπολης",
  description:
    "Εκτύπωση αρχείων από USB, email ή Viber. Υποστήριξη PDF, Word, Excel, PowerPoint, JPG, PNG. Άμεση εξυπηρέτηση.",
};

const services = [
  { key: "usb", icon: Usb },
  { key: "email", icon: Mail },
  { key: "viber", icon: Smartphone },
] as const;

const formats = ["PDF", "Word", "Excel", "PowerPoint", "JPG", "PNG"];

const UsbPrintingPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("UsbPrintingPage");
  const tNav = await getTranslations("Nav");

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/services/usb-printing.jpg"
          alt={t("title")}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-black/70" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="max-w-3xl text-3xl font-extrabold md:text-4xl lg:text-5xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85 [text-shadow:_0_2px_8px_rgba(0,0,0,0.4)]">
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Back link */}
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <Link
          href="/#services"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {t("backToServices")}
        </Link>
      </div>

      {/* Badges: supported formats */}
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <div>
          <p className="mb-2 text-sm font-semibold text-muted-foreground">
            {t("formats")}
          </p>
          <div className="flex flex-wrap gap-2">
            {formats.map((f) => (
              <span
                key={f}
                className="rounded-md bg-accent px-3 py-1 text-sm font-medium text-accent-foreground"
              >
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(({ key, icon: Icon }) => (
            <Card key={key} className="border shadow-sm">
              <CardContent className="flex gap-4 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">{t(key)}</h2>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(`${key}Desc`)}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-muted/50 py-16">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">{t("ctaTitle")}</h2>
          <p className="mt-3 text-muted-foreground">{t("ctaDesc")}</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href={BUSINESS.phoneHref}>
                <Phone className="size-4" />
                {tNav("callUs")}
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/#contact">{tNav("contact")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsbPrintingPage;

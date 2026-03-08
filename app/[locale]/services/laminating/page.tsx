import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/lib/i18n/navigation";
import { BUSINESS } from "@/lib/general/constants";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BasePageProps } from "@/types/page-props";
import {
  ArrowLeft,
  Sparkles,
  Square,
  Shield,
  Phone,
  CheckCircle2,
  Ruler,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Πλαστικοποίηση | Φωτοαντιγραφικό Κέντρο Ηλιούπολης",
  description:
    "Πλαστικοποίηση εγγράφων σε γυαλιστερό, ματ και ενισχυμένο φινίρισμα. Μεγέθη A3 έως A7. Επί τόπου εξυπηρέτηση.",
};

const services = [
  { key: "glossy", icon: Sparkles },
  { key: "matte", icon: Square },
  { key: "heavyDuty", icon: Shield },
] as const;

const sizes = ["A3", "A4", "A5", "A6", "A7"];

const LaminatingPage = async ({ params }: BasePageProps) => {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("LaminatingPage");
  const tNav = await getTranslations("Nav");

  return (
    <>
      {/* Hero banner */}
      <section className="relative h-[50vh] min-h-[350px] overflow-hidden">
        <Image
          src="/images/services/laminating.jpg"
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

      {/* Badges: sizes */}
      <div className="mx-auto max-w-5xl px-4 pt-8">
        <div className="flex flex-wrap gap-6">
          <div>
            <p className="mb-2 text-sm font-semibold text-muted-foreground">
              {t("sizes")}
            </p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-3 py-1 text-sm font-medium text-primary"
                >
                  <Ruler className="size-3" />
                  {s}
                </span>
              ))}
            </div>
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

      {/* Use cases */}
      <div className="bg-muted/30 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="mb-6 text-xl font-bold">{t("useCases")}</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {(["useCase1", "useCase2", "useCase3", "useCase4"] as const).map(
              (key) => (
                <div
                  key={key}
                  className="flex items-center gap-2 rounded-lg border bg-background p-4"
                >
                  <CheckCircle2 className="size-5 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{t(key)}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="py-16">
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

export default LaminatingPage;

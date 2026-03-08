import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import {
  setRequestLocale,
  getMessages,
  getTranslations,
} from "next-intl/server";
import { Manrope } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { BUSINESS } from "@/lib/general/constants";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/json-ld";
import { BaseLayoutProps } from "@/types/page-props";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700", "800"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://fotoilioupoli.gr";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        el: "/el",
        en: "/en",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${BASE_URL}/${locale}`,
      siteName: BUSINESS.name,
      locale: locale === "el" ? "el_GR" : "en_US",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1920,
          height: 1080,
          alt: BUSINESS.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/og-image.jpg"],
    },
  };
};

export const generateStaticParams = () => {
  return routing.locales.map((locale) => ({ locale }));
};

const LocaleLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${manrope.variable} font-sans antialiased`}>
        <JsonLd />
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;

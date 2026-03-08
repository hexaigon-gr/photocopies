import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale, getMessages } from "next-intl/server";
import { Manrope } from "next/font/google";
import { routing } from "@/lib/i18n/routing";
import { Providers } from "@/components/providers";
import { BaseLayoutProps } from "@/types/page-props";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Φωτοαντιγραφικό Κέντρο Ηλιούπολης | Φωτοαντίγραφα, Εκτυπώσεις, Σχέδια",
  description:
    "25 χρόνια εμπειρίας σε φωτοαντίγραφα, εκτυπώσεις, σχέδια μηχανικών και υπηρεσίες γραφείου στην Ηλιούπολη.",
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
        <Providers messages={messages} locale={locale}>
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default LocaleLayout;

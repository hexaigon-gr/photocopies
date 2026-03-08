import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BaseLayoutProps } from "@/types/page-props";

const ServicesLayout = async ({ children, params }: BaseLayoutProps) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-16 lg:pt-18">{children}</main>
      <Footer />
    </div>
  );
};

export default ServicesLayout;

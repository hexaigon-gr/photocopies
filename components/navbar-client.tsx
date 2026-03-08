"use client";

import { useEffect, useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "next-themes";
import { Link, useRouter, usePathname } from "@/lib/i18n/navigation";
import { BUSINESS } from "@/lib/general/constants";
import { cn } from "@/lib/general/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Phone, Sun, Moon } from "lucide-react";

const NAV_LINKS = [
  { key: "home", href: "/#hero" },
  { key: "about", href: "/#about" },
  { key: "services", href: "/#services" },
  { key: "contact", href: "/#contact" },
] as const;

export const NavbarClient = () => {
  const t = useTranslations("Nav");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLocale = () => {
    const nextLocale = locale === "el" ? "en" : "el";
    router.replace(pathname, { locale: nextLocale });
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 shadow-sm backdrop-blur-md"
          : "border-transparent bg-linear-to-b from-black/40 to-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-18 lg:px-8">
        {/* Logo / Business Name */}
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2.5"
        >
          <span
            className={cn(
              "flex size-9 items-center justify-center rounded-lg text-sm font-bold transition-colors duration-300",
              scrolled
                ? "bg-primary text-primary-foreground"
                : "bg-white/90 text-primary"
            )}
          >
            ΦΚΗ
          </span>
          <span
            className={cn(
              "hidden text-sm font-semibold transition-colors duration-300 sm:block",
              scrolled ? "text-foreground" : "text-white"
            )}
          >
            {BUSINESS.name}
          </span>
        </Link>

        {/* Desktop Nav Links (center) */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                className={cn(
                  "cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-colors duration-300",
                  scrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                )}
              >
                {t(link.key)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-2 lg:flex">
          {/* Phone Link */}
          <a
            href={BUSINESS.phoneHref}
            className={cn(
              "flex cursor-pointer items-center gap-1.5 text-sm font-medium transition-colors duration-300",
              scrolled
                ? "text-muted-foreground hover:text-foreground"
                : "text-white/80 hover:text-white"
            )}
          >
            <Phone className="size-3.5" />
            {BUSINESS.phone}
          </a>

          {/* Language Switcher */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleLocale}
            className={cn(
              "cursor-pointer text-xs font-semibold transition-colors duration-300",
              scrolled ? "" : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Switch language"
          >
            {locale === "el" ? "EN" : "ΕΛ"}
          </Button>

          {/* Theme Switcher */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            className={cn(
              "cursor-pointer transition-colors duration-300",
              scrolled ? "" : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Toggle theme"
          >
            <Sun className="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
          </Button>

          {/* CTA Button */}
          <Button size="sm" className="cursor-pointer" asChild>
            <a href={BUSINESS.phoneHref}>
              <Phone className="size-3.5" />
              {t("callUs")}
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-1 lg:hidden">
          {/* Mobile Language Switcher */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleLocale}
            className={cn(
              "cursor-pointer text-xs font-semibold transition-colors duration-300",
              scrolled ? "" : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Switch language"
          >
            {locale === "el" ? "EN" : "ΕΛ"}
          </Button>

          {/* Mobile Theme Switcher */}
          <Button
            variant="ghost"
            size="icon-sm"
            onClick={toggleTheme}
            className={cn(
              "cursor-pointer transition-colors duration-300",
              scrolled ? "" : "text-white/80 hover:bg-white/10 hover:text-white"
            )}
            aria-label="Toggle theme"
          >
            <Sun className="size-4 scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute size-4 scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
          </Button>

          {/* Hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className={cn(
                  "cursor-pointer transition-colors duration-300",
                  scrolled
                    ? ""
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 backdrop-blur-xl"
              showCloseButton
            >
              <SheetTitle className="sr-only">Menu</SheetTitle>

              {/* Mobile Logo */}
              <div className="flex items-center gap-2.5 border-b px-4 pb-4">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
                  ΦΚΗ
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {BUSINESS.name}
                </span>
              </div>

              {/* Mobile Nav Links */}
              <nav className="flex flex-col gap-1 px-4 py-2">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.key}
                    href={link.href}
                    onClick={handleNavClick}
                    className="cursor-pointer rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors duration-300 hover:bg-accent"
                  >
                    {t(link.key)}
                  </a>
                ))}
              </nav>

              {/* Mobile Phone & CTA */}
              <div className="mt-auto flex flex-col gap-3 border-t px-4 pt-4">
                <a
                  href={BUSINESS.phoneHref}
                  className="flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  <Phone className="size-4" />
                  {BUSINESS.phone}
                </a>
                <Button className="w-full cursor-pointer" asChild>
                  <a href={BUSINESS.phoneHref}>
                    <Phone className="size-4" />
                    {t("callUs")}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

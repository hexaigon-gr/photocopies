"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/general/constants";

export const HeroClient = () => {
  const t = useTranslations("Hero");

  return (
    <section className="relative h-screen min-h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt={BUSINESS.name}
        fill
        priority
        className="object-cover"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h1
          className="animate-fade-in-up text-4xl font-extrabold md:text-5xl lg:text-6xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "0ms", animationFillMode: "both" }}
        >
          {t("headline")}
        </h1>

        <p
          className="animate-fade-in-up mt-4 max-w-2xl text-lg font-light text-white/90 md:text-xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]"
          style={{ animationDelay: "200ms", animationFillMode: "both" }}
        >
          {t("subheadline")}
        </p>

        <div
          className="animate-fade-in-up mt-8 flex flex-wrap items-center justify-center gap-4"
          style={{ animationDelay: "400ms", animationFillMode: "both" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-white text-black hover:bg-white/90"
          >
            <a href={BUSINESS.phoneHref}>{t("cta1")}</a>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white bg-transparent text-white hover:bg-white/10 hover:text-white"
          >
            <a href="#services">{t("cta2")}</a>
          </Button>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <ChevronDown className="size-8 animate-bounce text-white/80" />
        </a>
      </div>

    </section>
  );
};

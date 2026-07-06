import { getTranslations } from "next-intl/server";
import { Award, Cog, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/general/utils";

const highlights = [
  {
    key: "card1",
    icon: Award,
    tint: "bg-primary/10 text-primary ring-primary/15",
  },
  {
    key: "card2",
    icon: Cog,
    tint: "bg-accent/15 text-accent-foreground ring-accent/25",
  },
  {
    key: "card3",
    icon: Zap,
    tint: "bg-primary/10 text-primary ring-primary/15",
  },
] as const;

const AboutSection = async () => {
  const t = await getTranslations("About");

  return (
    <section id="about" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left column - Text */}
          <Reveal>
            <span className="block h-1 w-12 rounded-full bg-accent" />
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </Reveal>

          {/* Right column - Highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ key, icon: Icon, tint }, i) => (
              <Reveal key={key} delay={i * 0.08}>
                <Card className="group border bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <CardContent className="flex flex-row items-start gap-4 p-5">
                    <div
                      className={cn(
                        "flex size-12 shrink-0 items-center justify-center rounded-full ring-1 transition-transform duration-300 group-hover:scale-105",
                        tint
                      )}
                    >
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="font-bold">{t(`${key}Title`)}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {t(`${key}Desc`)}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

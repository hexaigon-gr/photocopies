import { getTranslations } from "next-intl/server";
import { Award, Cog, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const highlights = [
  { key: "card1", icon: Award },
  { key: "card2", icon: Cog },
  { key: "card3", icon: Zap },
] as const;

const AboutSection = async () => {
  const t = await getTranslations("About");

  return (
    <section id="about" className="bg-muted/50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
          {/* Left column - Text */}
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">{t("title")}</h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {t("description")}
            </p>
          </div>

          {/* Right column - Highlight cards */}
          <div className="flex flex-col gap-4">
            {highlights.map(({ key, icon: Icon }) => (
              <Card key={key} className="border py-0 shadow-none">
                <CardContent className="flex flex-row items-start gap-4 p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">{t(`${key}Title`)}</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`${key}Desc`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/lib/i18n/navigation";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const services = [
  { key: "photocopies", image: "/images/services/photocopies.jpg", href: "/services/photocopies" },
  { key: "digitalPrinting", image: "/images/services/printing.jpg", href: "/services/digital-printing" },
  { key: "binding", image: "/images/services/binding.jpg", href: "/services/binding" },
  { key: "laminating", image: "/images/services/laminating.jpg", href: "/services/laminating" },
  { key: "scanning", image: "/images/services/scanning.jpg", href: "/services/scanning" },
  { key: "usbPrinting", image: "/images/services/usb-printing.jpg", href: "/services/usb-printing" },
  { key: "businessCards", image: "/images/services/business-cards.jpg", href: "/services/business-cards" },
  { key: "stationery", image: "/images/services/stationery.jpg", href: "/services/stationery" },
] as const;

type ServiceKey = (typeof services)[number]["key"];

const ServicesSection = async () => {
  const t = await getTranslations("Services");

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <Reveal className="mb-12 text-center">
          <span className="mx-auto block h-1 w-12 rounded-full bg-accent" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>
        </Reveal>

        {/* Blueprint highlight card */}
        <Reveal>
          <Link
            href="/services/blueprints"
            className="group relative mb-12 block min-h-[300px] cursor-pointer overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5 md:min-h-[400px]"
          >
            <Image
              src="/images/services/blueprints.jpg"
              alt={t("blueprints")}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1152px) 100vw, 1152px"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/50 to-black/20" />
            <div className="relative flex h-full min-h-[300px] flex-col justify-end p-6 md:min-h-[400px] md:p-10">
              <h3 className="flex items-center gap-2 text-2xl font-bold text-white md:text-3xl">
                {t("blueprints")}
                <ArrowUpRight className="size-6 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
              </h3>
              <p className="mt-2 max-w-2xl text-base text-white/85 md:text-lg">
                {t("blueprintsDesc")}
              </p>
            </div>
          </Link>
        </Reveal>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, image, href }, i) => (
            <Reveal key={key} delay={(i % 3) * 0.08} className="h-full">
              <Link href={href} className="block h-full">
                <Card className="group flex h-full cursor-pointer flex-col gap-0 overflow-hidden rounded-2xl border-0 p-0 shadow-md ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  {/* Image area */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={image}
                      alt={t(key as ServiceKey)}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                    {/* Hover arrow chip */}
                    <div className="absolute right-3 top-3 flex size-9 translate-y-1 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight className="size-5" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-lg font-bold text-white">
                        {t(key as ServiceKey)}
                      </h3>
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {t(`${key}Desc` as `${ServiceKey}Desc`)}
                    </p>
                  </div>
                </Card>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

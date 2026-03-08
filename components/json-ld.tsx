import { BUSINESS } from "@/lib/general/constants";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://fotoilioupoli.gr";

const dayMap: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const openingHours = BUSINESS.hours
  .filter((h) => h.open !== null)
  .map((h) => {
    const day = dayMap[h.day];
    const parts = [`${day} ${h.open}-${h.close}`];
    if ("open2" in h && h.open2 && h.close2) {
      parts.push(`${day} ${h.open2}-${h.close2}`);
    }
    return parts;
  })
  .flat();

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  alternateName: BUSINESS.nameEn,
  description: BUSINESS.tagline,
  url: BASE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: BUSINESS.address.city,
    postalCode: BUSINESS.address.zip,
    addressCountry: "GR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.9305,
    longitude: 23.7505,
  },
  openingHoursSpecification: BUSINESS.hours
    .filter((h) => h.open !== null)
    .flatMap((h) => {
      const specs: { "@type": string; dayOfWeek: string; opens: string | null; closes: string | null }[] = [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[h.day],
          opens: h.open,
          closes: h.close,
        },
      ];
      if ("open2" in h && h.open2 && h.close2) {
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: dayMap[h.day],
          opens: h.open2,
          closes: h.close2,
        });
      }
      return specs;
    }),
  openingHours,
  image: `${BASE_URL}/og-image.jpg`,
  priceRange: "€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  areaServed: {
    "@type": "City",
    name: "Ηλιούπολη",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Υπηρεσίες",
    itemListElement: [
      "Φωτοαντίγραφα",
      "Ψηφιακές Εκτυπώσεις",
      "Εκτύπωση Σχεδίων",
      "Βιβλιοδεσία",
      "Πλαστικοποίηση",
      "Σάρωση & Ψηφιοποίηση",
      "Εκτύπωση από USB/Email",
      "Επαγγελματικές Κάρτες",
      "Γραφική Ύλη",
    ],
  },
};

export const JsonLd = () => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
  />
);

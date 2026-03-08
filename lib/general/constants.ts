export const BUSINESS = {
  name: "Φωτοαντιγραφικό Κέντρο Ηλιούπολης",
  nameEn: "Photocopy Center Ilioupoli",
  tagline: "25 χρόνια δίπλα σας — Φωτοαντίγραφα, Εκτυπώσεις, Υπηρεσίες",
  taglineEn:
    "25 years by your side — Photocopies, Printing, Services",
  phone: "210 9953000",
  phoneHref: "tel:+302109953000",
  email: "christakis.ath@gmail.com",
  emailHref: "mailto:christakis.ath@gmail.com",
  address: {
    street: "Κυπρίων Ηρώων 3",
    city: "Ηλιούπολη",
    zip: "16341",
    full: "Κυπρίων Ηρώων 3, Ηλιούπολη, ΤΚ 16341",
    fullEn: "Kyprion Iroon 3, Ilioupoli, 16341",
  },
  googleMapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5!2d23.7505!3d37.9305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDU1JzQ5LjgiTiAyM8KwNDUnMDEuOCJF!5e0!3m2!1sel!2sgr!4v1",
  googleMapsLink:
    "https://www.google.com/maps/search/Κυπρίων+Ηρώων+3+Ηλιούπολη+16341",
  yearsInBusiness: 25,
  hours: [
    { day: "monday", open: "08:30", close: "14:30" },
    {
      day: "tuesday",
      open: "08:30",
      close: "14:30",
      open2: "17:30",
      close2: "20:30",
    },
    { day: "wednesday", open: "08:30", close: "14:30" },
    {
      day: "thursday",
      open: "08:30",
      close: "14:30",
      open2: "17:30",
      close2: "20:30",
    },
    {
      day: "friday",
      open: "08:30",
      close: "14:30",
      open2: "17:30",
      close2: "20:30",
    },
    { day: "saturday", open: "08:30", close: "14:30" },
    { day: "sunday", open: null, close: null },
  ],
  socials: [],
  credit: {
    name: "Hexaigon",
    url: "https://hexaigon.com",
  },
} as const;

export type DaySchedule = (typeof BUSINESS.hours)[number];

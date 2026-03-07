# Website Build Prompt — Φωτογραφικό Κέντρο Ηλιούπολης

Build a complete, production-ready landing page website for a **photocopies / print shop** business.

Use the `frontend-design` plugin for ALL UI work. Do NOT make a generic-looking website.

## Business Info

```
Business name:         Φωτογραφικό Κέντρο Ηλιούπολης
Tagline:               25 χρόνια δίπλα σας — Φωτοτυπίες, Εκτυπώσεις, Υπηρεσίες
Address:               Κυπρίων Ηρώων 3, Ηλιούπολη, ΤΚ 16341
Phone:                 210 9953000
Email:                 christakis.ath@gmail.com
WhatsApp:              —
Google Maps link:      [EXISTS — NEEDS FIXING, use address for now]
Website/domain:        —
Facebook:              —
Instagram:             —
Social media:          None
Working hours:
  Δευτέρα:     09:00 - 15:00
  Τρίτη:       09:00 - 15:00, 18:00 - 20:30
  Τετάρτη:     09:00 - 15:00
  Πέμπτη:      09:00 - 15:00, 18:00 - 20:30
  Παρασκευή:   09:00 - 15:00, 18:00 - 20:30
  Σάββατο:     09:00 - 14:30
  Κυριακή:     Κλειστά
Languages:             Greek (default), English
Years in business:     25+
```

## Images

- Logo: No logo yet — use a clean placeholder/text logo. Owner will replace later.
- Hero background: Download from Pexels — search for "print shop", "copy center", or "modern office printing"
- Service photos: Download from Pexels — keep it minimal, only a few key images
- Gallery: Skip — no real photos available

For any images needed, download real photos from Pexels. Search by keyword, verify EACH image visually matches its intended use before keeping it. Pexels IDs are unreliable — always verify after downloading.

## Services (emphasis on Σχέδια)

The shop's standout service is **large-format technical drawing printing** (architectural/engineering blueprints). This should be featured prominently.

```
HIGHLIGHT SERVICE:
- Εκτύπωση Σχεδίων (Technical Drawings / Blueprints) — Large format A2, A1, A0 printing for architects, engineers, and students

CORE SERVICES:
- Φωτοτυπίες (Photocopies) — B&W and color, A4 and A3
- Ψηφιακές Εκτυπώσεις (Digital Printing) — High quality digital prints
- Βιβλιοδεσία (Binding) — Spiral and thermal binding
- Πλαστικοποίηση (Laminating)
- Σάρωση (Scanning)
- Φωτογραφίες Ταυτότητας & Διαβατηρίου (ID & Passport Photos)
- Εκτύπωση από USB / Email (Print from USB / Email)
- Επαγγελματικές Κάρτες (Business Cards)
- Σφραγίδες (Stamps)

PRODUCTS:
- Γραφική Ύλη & Αναλώσιμα (Stationery & Office Supplies)
```

## Sections (top to bottom)

1. **Navbar** — Fixed, transparent over hero, solid on scroll. Logo + name left, nav links center, phone + language switcher + theme switcher + CTA right. Mobile: full slide-in panel from right with backdrop blur overlay (NOT a simple dropdown).

2. **Hero** — Full viewport, background image (print shop photo) with dark gradient overlay, headline, subheadline, 2 CTA buttons (e.g. "Καλέστε μας" + "Οι Υπηρεσίες μας"). White text, readable over any image. Emphasize the 25 years of experience.

3. **About** — Company description + 3 highlight cards (e.g. 25 Years Experience, Professional Equipment, Fast Service). Two-column layout.

4. **Services** — Feature "Εκτύπωση Σχεδίων" as a hero-style card at the top (larger, with photo and description). Below: 3-column grid of remaining services. Each card: REAL PHOTO (not icon) with gradient overlay + title on image + description below. Hover: zoom + shadow + lift.

5. **Products** — Simple section for stationery & office supplies overview.

6. **Reviews** — Google Reviews integration if place ID is available, otherwise static testimonials with star ratings.

7. **Contact** — Left: contact info (address, phone, email, hours table) + embedded Google Map. Right: contact form (name, email, phone, subject, message) that sends via mailto to business email.

8. **Footer** — Brand, quick links, contact info, copyright. "Made by Hexaigon" credit.

**Removed sections:** Gallery (no photos), Newsletter (not needed), Services/Products Overview (merged into Services).

## Tech Stack

- Next.js with App Router + React Server Components
- next-intl for i18n (messages/[lang].json — Greek default, English)
- Tailwind CSS 4 with CSS variables + oklch colors
- shadcn/ui (install via `npx shadcn@latest add [component]`)
- Lucide React icons
- next-themes for dark mode (class strategy)
- TypeScript strict mode

## Design Rules

- **Color palette**: Professional, trustworthy colors. Think navy/dark blue as primary (trust, professionalism) with an accent color (amber/orange for energy). Define custom CSS variables in globals.css.
- **No generic fonts**: Use fonts that work well in Greek — e.g. Manrope, Source Sans, or Noto Sans for body.
- **Real photos over icons**: For services, use actual photos. Only use Lucide icons for small UI elements and feature highlights.
- **Dark mode**: Every section must work in light AND dark. Test both.
- **Mobile responsive**: Test at 375px. Mobile menu = slide-in panel, never a cramped dropdown.
- **Smooth scrolling**: `scroll-behavior: smooth` on html. All anchor links scroll smoothly.
- **Hover states**: Every clickable element needs cursor-pointer + visible hover effect.
- **Transitions**: Use duration-300 on all state changes. No jarring jumps.
- **The feel**: Modern, clean, professional — like a successful copy center that takes pride in quality work. Not a flashy startup, not a boring government office.

## Architecture Rules

- Server Components by default. Add "use client" only for interactivity.
- For sections needing both i18n AND interactivity: server wrapper (getTranslations) renders a client child (useTranslations + useState).
- Extract ALL business data (phone, email, URLs, hours) into `lib/general/constants.ts` as a single object. Never hardcode in components.
- Every user-visible string in messages/[lang].json. No hardcoded display text.
- shadcn/ui goes in `components/ui/`. Custom components go in `components/`.

## Image Downloads

When downloading from Pexels:
1. Search pexels.com for the specific keyword
2. Pick a photo that ACTUALLY matches the service (not just vaguely related)
3. Download at w=800 quality
4. View/verify the image after downloading — if wrong, search again
5. Save to `public/images/services/[name].jpg`

## After Building

1. `pnpm lint` + `pnpm tsc --noEmit` — fix all errors
2. Test both Greek and English
3. Test dark mode
4. Test mobile menu
5. Test contact form
6. Test all anchor links scroll smoothly
7. Screenshot and visually verify each section
8. Run code simplifier to deduplicate and extract constants
9. Commit with conventional commit prefixes (feat:, fix:, refactor:)

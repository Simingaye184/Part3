VOGUE STUDIO - CHANGELOG

All changes to Vogue Studio website - Amanzimtoti, KZN
Tagline: Tailor-Made For Every Mbokodo


ADDED:
- stylesheet.css (NEW)
    * Variables: --gold #d4af37, --black #0d0d0d, --charcoal #1f1f1f, --light #fdf8f5
    * Fonts: Poppins + Playfair Display (Google Fonts)
    * Components: about-grid, services-grid, contact-wrapper, service-card with hover lift
    * Buttons with gold pill style, responsive @800px

- enquiry.js (MAJOR UPDATE)
    * 6 services total: Custom Dressmaking, Traditional Wear, Special Occasion Outfits, Clothing Alterations, Bridal and Formal Wear, Style Consultation (NEW)
    * renderServices() function: search by name/category, sort A-Z / Z-A
    * serviceCount display: "X service(s) found"
    * contactForm -> WhatsApp 27660895111
    * enquiryForm -> WhatsApp formatted *NEW ENQUIRY - Vogue Studio*

- contact.html (REDESIGNED)
    * Light theme Poppins, dark nav #1f1f1f
    * Two-column layout: form + info-box (gold top border)
    * Fields: Your Name, Your Email, WhatsApp Number, Select Service, Tell us about your dream dress
    * Options: Custom Dressmaking, Traditional Wear, Alterations, Special Occasion
    * Inline JS: builds WhatsApp message and opens https://wa.me/27660895111
    * Info: Location Amanzimtoti, Phone 066 089 5111, Email info@voguestudio.co.za, Hours Mon-Sat 9AM-5PM
    * Buttons: Chat on WhatsApp, View Map -> location.html
    * Footer: "We dress Mbokodos"

- location.html (NEW MAP)
    * Embedded Google Maps iframe q=Amanzimtoti, KwaZulu-Natal
    * Get Directions button to Google Maps search
    * Styled with gold border radius 15px

- services.html (INTERACTIVE)
    * Search input + Sort dropdown (Default / A-Z)
    * JS grid: 5 cards with category badges
    * Categories: Tailoring, African Fashion, Occasions

CHANGED:
- Index.html / Home
    * Kept hero: "Tailor-Made For Every Mbokodo" / "Custom fits. Quality fabric. Confidence in every stitch."
    * Nav: VOGUE STUDIO gold, sticky top, border-bottom gold
    * CTA: Book Your Fitting -> contact.html
    * Background: linear-gradient black + vs.jpeg

- about.html
    * Title: Welcome to Vogue Studio
    * 3 features: Custom Tailoring (Personalised measurements), African Elegance (Modern fashion inspired by African creativity), Personal Service (We discuss your design and fitting needs)

NOTES / BUGS:
- robots.txt: User-agent * Allow / Sitemap: sitemap.xml
- Index.html vs index.html - casing problem for Linux hosting
- vs.jpeg referenced but missing from folder
- script.js still has old carcategory validation from car dealership template - should be removed, enquiry.js replaces it
- svv.jpeg (red Seshoeshoe dress with doek) not yet used in gallery

[1.0.0] - 2026-05-10 - INITIAL LAUNCH

ADDED:
- 5 pages: Index.html, about.html, services.html, location.html, contact.html
- Dark theme: #0d0d0d, #1a1a1a, gold #d4af37
- Sticky nav on all pages, footer © 2026 Vogue Studio - Amanzimtoti, KZN
- services hardcoded
- script.js v1:
    * year auto-update getElementById("year")
    * menu-toggle mobile nav logic
    * Form validation: name min 2 chars, surname min 2 chars, email regex, phone 10 digits, carcategory select required
    * Form status green/red messages

[UNRELEASED] - TODO:
- Add lookbook/gallery using svv.jpeg red dress
- Fix script.js - remove car logic
- Create enquiry.html page for eName, ePhone, eService, eDate, eMsg
- Add vs.jpeg hero image
- Rename Index.html to index.html
- Create sitemap.xml
- Add meta description + OG tags for WhatsApp preview
- Add hamburger menu HTML (JS exists)
- SEO alt text + LocalBusiness schema
# Yalla Gift: demo website design (2026-10-25)

## Goal
A good-looking demo website where a visitor picks an occasion and a budget and sees fitting gifts, flowers and gold jewellery. It is the first step toward the Yalla Gift app.

## Decisions
- **Market:** Egypt; all prices in EGP.
- **Stack:** static HTML, CSS and vanilla JS, with no build step. It can be hosted on GitHub Pages, and the catalogue lives in one data file so a backend or app can replace it later.
- **Brand:** colours from the logo (burgundy `#7A0E2E`, raspberry `#E3184F`, gold `#F2A93B`) on cream, with the Fredoka and Nunito fonts.
- **Images:** Unsplash, which is free to use. Pinterest was not used because its images are copyrighted by their owners. A broken image falls back to the brand gift icon.

## Page sections
1. **Hero:** an occasion and budget finder.
2. **Occasion cards:** 12 occasions.
3. **Gifts:** price tabs with live counts, occasion chips, category chips, sorting and search.
4. **Yalla Originals:** 19 invented gift ideas (`original: true`, with a short `desc`), also findable through the "✨ Yalla Originals" category chip.
5. **Gold & Jewellery:** a dark section with type tabs (necklaces, bracelets, rings, sets).
6. **Other parts:** how it works, a "Surprise me" button, the footer, and a basket drawer that stores the basket in the browser where possible.

## Price bands
Each band's upper bound is inclusive and its lower bound exclusive, so 500 EGP falls only in "200–500". The 200–500 band also includes anything under 200.

## Out of scope (demo)
Checkout and payments, accounts, Arabic/RTL, a real inventory backend and live gold prices.

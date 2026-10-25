# 🎁 Yalla Gift

**The gift is on the way to make their day.**

Yalla Gift helps you find the right gift for any occasion: a wedding, a date with your fiancée, a dinner invitation, a hospital visit, a birthday and more. Pick the occasion, pick your budget, and get flowers, chocolates, gold jewellery and gifts that fit.

This is the **demo website** (front-end only, no real orders).

## Features

- **12 occasions:** Wedding, Engagement, Date Night, Dinner Invitation, Get Well Soon, Birthday, New Baby, Anniversary, Graduation, Ramadan & Eid, Housewarming and Mother's Day
- **Price tabs (EGP):** 200–500 · 500–1,000 · 1,000–2,000 · 2,000–5,000 · 5,000–15,000 · 15,000+, each showing a live count
- **Gold & Jewellery:** 18K/21K necklaces, bracelets, rings and shabka sets, with karat and weight
- **Yalla Originals:** 19 one-of-a-kind gift ideas such as a Nile felucca sunset, a star map of the night you met, a 21K Arabic calligraphy name necklace and a Fayoum stargazing night
- Category filters, search, sorting, a wishlist and a basket drawer with totals
- Responsive layout that works on phones

## Run it locally

There is no build step. Serve the folder:

```bash
python3 -m http.server 5173
```

Then open http://localhost:5173.

## Project structure

```
index.html        Page layout
css/styles.css    Brand styles (colours from the logo)
js/data.js        Occasions, price bands and the product catalogue
js/app.js         Filtering, basket and UI behaviour
assets/           Logo and icon
docs/design.md    Design notes
```

To add or edit gifts, change `PRODUCTS` in `js/data.js`.

## Deploy

Push to GitHub and turn on **Settings → Pages → Deploy from branch (main, / root)**.

## Credits

Product and occasion photos come from [Unsplash](https://unsplash.com) and are free to use under the Unsplash License. Prices are demo values.

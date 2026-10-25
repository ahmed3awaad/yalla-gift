// Yalla Gift — demo catalogue.
// Photos: Unsplash (free to use under the Unsplash License). Prices are demo values in EGP.

const IMG = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

const OCCASIONS = [
  { id: "wedding",      name: "Wedding",            emoji: "💍", tagline: "Celebrate the new couple",  img: "1532712938310-34cb3982ef74" },
  { id: "engagement",   name: "Engagement",         emoji: "💖", tagline: "Say yes to something sparkly", img: "1763129636638-615f11f1ad80" },
  { id: "date",         name: "Date Night",         emoji: "🌹", tagline: "Out with your fiancée or love", img: "1513279922550-250c2129b13a" },
  { id: "dinner",       name: "Dinner Invitation",  emoji: "🍽️", tagline: "Never arrive empty-handed",  img: "1764236307312-6ead0505ad3a" },
  { id: "hospital",     name: "Get Well Soon",      emoji: "🏥", tagline: "Visiting someone in hospital", img: "1740518905472-13c98a133c7f" },
  { id: "birthday",     name: "Birthday",           emoji: "🎂", tagline: "Make their day unforgettable", img: "1530103862676-de8c9debad1d" },
  { id: "newborn",      name: "New Baby",           emoji: "👶", tagline: "Welcome the little one",     img: "1510154221590-ff63e90a136f" },
  { id: "anniversary",  name: "Anniversary",        emoji: "🥂", tagline: "Another year of love",        img: "1621621667797-e06afc217fb0" },
  { id: "graduation",   name: "Graduation",         emoji: "🎓", tagline: "They did it!",                img: "1770223859888-0afec016dc56" },
  { id: "ramadan",      name: "Ramadan & Eid",      emoji: "🌙", tagline: "Kahk, dates & generosity",    img: "1779599790541-2f50889661ed" },
  { id: "housewarming", name: "Housewarming",       emoji: "🏡", tagline: "For their brand-new home",     img: "1758523671285-9ff3f4e0ff38" },
  { id: "mothers",      name: "Mother's Day",       emoji: "👩‍👧", tagline: "For the queen of the house", img: "1526047932273-341f2a7631f9" },
];

const PRICE_BANDS = [
  { id: "all",   label: "All prices",       min: 0,     max: Infinity },
  { id: "b1",    label: "200 – 500",        min: 200,   max: 500 },
  { id: "b2",    label: "500 – 1,000",      min: 500,   max: 1000 },
  { id: "b3",    label: "1,000 – 2,000",    min: 1000,  max: 2000 },
  { id: "b4",    label: "2,000 – 5,000",    min: 2000,  max: 5000 },
  { id: "b5",    label: "5,000 – 15,000",   min: 5000,  max: 15000 },
  { id: "b6",    label: "15,000+",          min: 15000, max: Infinity },
];

const CATEGORIES = [
  { id: "all",       label: "Everything" },
  { id: "flowers",   label: "Flowers" },
  { id: "sweets",    label: "Chocolate & Sweets" },
  { id: "gold",      label: "Gold & Jewellery" },
  { id: "beauty",    label: "Perfume & Beauty" },
  { id: "fashion",   label: "Fashion & Accessories" },
  { id: "home",      label: "Home & Hampers" },
  { id: "kids",      label: "Kids & Baby" },
  { id: "tech",      label: "Tech" },
];

// Gold pieces carry `type`, `karat` and `weight` for the jewellery section.
const PRODUCTS = [
  // Flowers
  { id: 1,  name: "Classic Red Roses — 25 Stems", cat: "flowers", price: 650,  img: "1578439231583-9eca0a363860", occasions: ["date", "anniversary", "engagement", "mothers"], badge: "Bestseller" },
  { id: 2,  name: "Single Red Rose in a Box",    cat: "flowers", price: 250,  img: "1494972308805-463bc619d34e", occasions: ["date", "anniversary"] },
  { id: 3,  name: "White Elegance Bouquet",       cat: "flowers", price: 900,  img: "1557925923-6885735abfb1", occasions: ["wedding", "hospital", "mothers", "dinner"] },
  { id: 4,  name: "Bridal Blush Bouquet",         cat: "flowers", price: 1450, img: "1523694576729-dc99e9c0f9b4", occasions: ["wedding", "engagement"] },
  { id: 5,  name: "Pink Tulips Bunch",            cat: "flowers", price: 480,  img: "1586968295564-92fd7572718b", occasions: ["birthday", "hospital", "mothers", "date"] },
  { id: 6,  name: "Tulip Vase Centerpiece",       cat: "flowers", price: 1200, img: "1561181286-d3fee7d55364", occasions: ["housewarming", "anniversary", "dinner"] },
  { id: 7,  name: "White Phalaenopsis Orchid",    cat: "flowers", price: 1350, img: "1583846712268-a77d97b7fd68", occasions: ["hospital", "housewarming", "dinner", "mothers"], badge: "Lasts weeks" },
  { id: 8,  name: "Royal Purple Orchid Pot",      cat: "flowers", price: 2100, img: "1618080578815-335456280012", occasions: ["housewarming", "wedding", "newborn"] },
  { id: 9,  name: "Garden Flower Basket",         cat: "flowers", price: 1800, img: "1469317835793-6d02c2392778", occasions: ["hospital", "newborn", "mothers", "birthday"] },
  { id: 10, name: "Sunshine Mixed Bouquet",       cat: "flowers", price: 750,  img: "1778101410311-6cca527142d6", occasions: ["hospital", "birthday", "graduation"] },
  { id: 11, name: "Grand Roses & Lilies",         cat: "flowers", price: 3200, img: "1685613858397-64f79a0f3603", occasions: ["mothers", "anniversary", "wedding", "engagement"], badge: "Premium" },

  // Chocolate & sweets
  { id: 12, name: "Gourmet Chocolate Box",        cat: "sweets", price: 450,  img: "1769775264026-fbc4e974dea8", occasions: ["dinner", "date", "birthday", "ramadan"] },
  { id: 13, name: "Luxury Assorted Chocolates",   cat: "sweets", price: 1100, img: "1687795097254-f019f9d7fd17", occasions: ["dinner", "wedding", "ramadan", "engagement"] },
  { id: 14, name: "Colourful Praline Box",        cat: "sweets", price: 380,  img: "1767510533183-425731f088a7", occasions: ["birthday", "hospital", "dinner"] },
  { id: 15, name: "French Macarons — 12 pcs",     cat: "sweets", price: 320,  img: "1558326567-98ae2405596b", occasions: ["dinner", "birthday", "date"] },
  { id: 16, name: "Macaron Celebration Tray",     cat: "sweets", price: 1250, img: "1763026426702-6d1774098a79", occasions: ["wedding", "engagement", "newborn"] },
  { id: 17, name: "Premium Medjool Dates",        cat: "sweets", price: 550,  img: "1629738601425-494c3d6ba3e2", occasions: ["ramadan", "dinner", "hospital"] },
  { id: 18, name: "Celebration Birthday Cake",    cat: "sweets", price: 650,  img: "1606983340126-99ab4feaa64a", occasions: ["birthday"] },

  // Gold & jewellery
  { id: 40, name: "21K Gold Oval Pendant Necklace", cat: "gold", type: "necklace", karat: "21K", weight: "3.6 g", price: 18500, img: "1783541507490-edb026e2a961", occasions: ["engagement", "anniversary", "mothers", "wedding"], badge: "Gold" },
  { id: 41, name: "18K Fine Gold Chain",            cat: "gold", type: "necklace", karat: "18K", weight: "2.8 g", price: 12800, img: "1771734065116-61e16b353ded", occasions: ["birthday", "graduation", "anniversary"] },
  { id: 42, name: "Pearl & Gold Pendant",           cat: "gold", type: "necklace", karat: "18K", weight: "2.2 g", price: 11500, img: "1786052337650-9e1c0dd01f5e", occasions: ["mothers", "anniversary", "wedding"] },
  { id: 43, name: "Classic Pearl Strand",           cat: "gold", type: "necklace", karat: "Gold clasp", weight: "—", price: 6400, img: "1654699991520-aaaf4dd2608b", occasions: ["mothers", "graduation", "birthday"] },
  { id: 44, name: "18K Gold ID Tag Bracelet",       cat: "gold", type: "bracelet", karat: "18K", weight: "2.4 g", price: 9600,  img: "1777999802051-f6f0296e76af", occasions: ["birthday", "graduation", "date"] },
  { id: 45, name: "21K Gold Chain Bracelet",        cat: "gold", type: "bracelet", karat: "21K", weight: "3.2 g", price: 16900, img: "1602173574767-37ac01994b2a", occasions: ["engagement", "anniversary", "mothers"], badge: "Gold" },
  { id: 46, name: "Beaded Charm Bracelet",          cat: "gold", type: "bracelet", karat: "Gold-plated", weight: "—", price: 420, img: "1775212429587-82779c6f8775", occasions: ["birthday", "date", "graduation"] },
  { id: 47, name: "Gold Wedding Bands — Pair",      cat: "gold", type: "ring", karat: "21K", weight: "5.5 g", price: 28000, img: "1622398925373-3f91b1e275f5", occasions: ["wedding", "engagement"] },
  { id: 48, name: "Diamond Solitaire Ring",         cat: "gold", type: "ring", karat: "18K + 0.5ct", weight: "2.9 g", price: 45000, img: "1786228578869-71ecde3dc43e", occasions: ["engagement"], badge: "Proposal" },
  { id: 49, name: "18K Gold Stacking Rings",        cat: "gold", type: "ring", karat: "18K", weight: "1.6 g", price: 7200,  img: "1631982690223-8aa4be0a2497", occasions: ["birthday", "anniversary"] },
  { id: 50, name: "Rose Gold Gemstone Ring",        cat: "gold", type: "ring", karat: "18K rose", weight: "2.1 g", price: 8900, img: "1603561591411-07134e71a2a9", occasions: ["date", "anniversary", "engagement"] },
  { id: 51, name: "Bridal Necklace & Earrings Set", cat: "gold", type: "set", karat: "21K", weight: "14 g", price: 72000, img: "1722410180687-b05b50922362", occasions: ["wedding", "engagement"], badge: "Shabka" },
  { id: 52, name: "Jewellery Gift Box Set",         cat: "gold", type: "set", karat: "Gold-plated", weight: "—", price: 1650, img: "1769116416641-e714b71851e8", occasions: ["birthday", "mothers", "graduation"] },

  // Perfume & beauty
  { id: 19, name: "Signature Eau de Parfum",       cat: "beauty", price: 2800, img: "1784183972601-17a1b00ea05e", occasions: ["anniversary", "engagement", "birthday", "mothers"] },
  { id: 20, name: "Spa & Bath Gift Crate",         cat: "beauty", price: 850,  img: "1451443700141-5ddb6d85a8fc", occasions: ["mothers", "birthday", "hospital"] },
  { id: 21, name: "Scented Candle Duo",            cat: "beauty", price: 290,  img: "1759262151253-375c311347c7", occasions: ["housewarming", "dinner", "birthday", "date"] },

  // Fashion & accessories
  { id: 22, name: "Leather Satchel Handbag",       cat: "fashion", price: 4800, img: "1605733513597-a8f8341084e6", occasions: ["mothers", "birthday", "anniversary"] },
  { id: 23, name: "Classic Gold-Tone Wristwatch",  cat: "fashion", price: 7500, img: "1600003014755-ba31aa59c4b6", occasions: ["graduation", "engagement", "anniversary"] },
  { id: 24, name: "Gold Cufflinks",                cat: "fashion", price: 2600, img: "1685392024138-36e7aade79f7", occasions: ["wedding", "engagement", "anniversary", "graduation"] },
  { id: 25, name: "Handmade Leather Wallet",       cat: "fashion", price: 1150, img: "1775379557015-938546264440", occasions: ["graduation", "birthday", "anniversary"] },
  { id: 26, name: "Gold-Frame Sunglasses",         cat: "fashion", price: 2300, img: "1511499767150-a48a237f0083", occasions: ["birthday", "graduation"] },
  { id: 27, name: "Executive Pen in Gift Case",    cat: "fashion", price: 980,  img: "1585336261022-680e295ce3fe", occasions: ["graduation"] },

  // Home & hampers
  { id: 28, name: "Fresh Fruit Basket",            cat: "home", price: 600,  img: "1619566636858-adf3ef46400b", occasions: ["hospital", "dinner", "ramadan"] },
  { id: 29, name: "Deluxe Gift Hamper",            cat: "home", price: 2400, img: "1508899203029-1c9eb493c9bd", occasions: ["ramadan", "housewarming", "dinner", "graduation"], badge: "Family favourite" },
  { id: 30, name: "Coffee Lover's Box",            cat: "home", price: 700,  img: "1573068012813-e4c7558d8765", occasions: ["housewarming", "graduation", "birthday"] },
  { id: 31, name: "Floral Porcelain Tea Set",      cat: "home", price: 1900, img: "1786879024002-92800374c7d3", occasions: ["housewarming", "mothers", "ramadan"] },
  { id: 32, name: "Handcrafted Ceramic Vase",      cat: "home", price: 520,  img: "1580064141068-f42c18d153f5", occasions: ["housewarming", "dinner"] },
  { id: 33, name: "Succulent Trio",                cat: "home", price: 270,  img: "1446071103084-c257b5f70672", occasions: ["housewarming", "hospital", "graduation"] },
  { id: 34, name: "Ramadan Brass Lantern",         cat: "home", price: 890,  img: "1765878108610-1797ff4d5fef", occasions: ["ramadan", "housewarming"] },
  { id: 35, name: "Wrapped Book & Card",           cat: "home", price: 220,  img: "1509024102370-fd7802f4a7a7", occasions: ["hospital", "graduation", "birthday"] },

  // Kids & baby
  { id: 36, name: "Teddy Bear with Bow Tie",       cat: "kids", price: 350,  img: "1602734846297-9299fc2d4703", occasions: ["date", "hospital", "newborn", "birthday"] },
  { id: 37, name: "Baby Welcome Hamper",           cat: "kids", price: 1600, img: "1635874714425-c342060a4c58", occasions: ["newborn"], badge: "New" },
  { id: 38, name: "Celebration Balloon Bundle",    cat: "kids", price: 240,  img: "1550850395-c17a8e90ad0a", occasions: ["birthday", "newborn", "graduation"] },

  // Tech
  { id: 39, name: "Wireless Headphones",           cat: "tech", price: 4200, img: "1505740420928-5e560c06d30e", occasions: ["graduation", "birthday"] },
];

const GOLD_TYPES = [
  { id: "all",      label: "All jewellery" },
  { id: "necklace", label: "Necklaces" },
  { id: "bracelet", label: "Bracelets" },
  { id: "ring",     label: "Rings" },
  { id: "set",      label: "Sets & Earrings" },
];

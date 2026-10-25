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
  { id: "originals", label: "✨ Yalla Originals" },
  { id: "flowers",   label: "Flowers" },
  { id: "sweets",    label: "Chocolate & Sweets" },
  { id: "gold",      label: "Gold & Jewellery" },
  { id: "beauty",    label: "Perfume & Beauty" },
  { id: "fashion",   label: "Fashion & Accessories" },
  { id: "home",      label: "Home & Hampers" },
  { id: "kids",      label: "Kids & Baby" },
  { id: "tech",      label: "Tech" },
  { id: "experience", label: "Experiences" },
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

  // Yalla Originals: one-of-a-kind gift ideas, flagged with `original` and a short `desc`.
  { id: 101, original: true, name: "Star Map of the Night You Met", cat: "home", price: 850, img: "1475274047050-1d0c0975c63e", occasions: ["date", "anniversary", "engagement"],
    desc: "A framed print of the exact sky over Cairo on your special date, with your names and coordinates." },
  { id: 102, original: true, name: "Nile Felucca Sunset for Two", cat: "experience", price: 3500, img: "1761351108766-8ddf19b835ac", occasions: ["date", "engagement", "anniversary"],
    desc: "A private one-hour felucca ride at golden hour, with roses on board, mint lemonade and your playlist." },
  { id: 103, original: true, name: "Voice-Note Teddy", cat: "kids", price: 650, img: "1556012018-50c5c0da73bf", occasions: ["hospital", "newborn", "date", "birthday"],
    desc: "Squeeze its paw and it plays a 30-second voice message you record when you order." },
  { id: 104, original: true, name: "365 Reasons Letter Box", cat: "home", price: 480, img: "1770733696519-bb15e439b0b1", occasions: ["anniversary", "date", "birthday"],
    desc: "365 wax-sealed mini notes, one reason to open each morning. Send us yours or pick from our list." },
  { id: 105, original: true, name: "Kahk & Qahwa Morning Box", cat: "sweets", price: 780, img: "1672206804022-5bf1248a9d7b", occasions: ["ramadan", "dinner", "housewarming"],
    desc: "Fresh Eid kahk and ghorayeba, Turkish coffee with cardamom, and two hand-painted finjan cups." },
  { id: 106, original: true, name: "21K Arabic Calligraphy Name Necklace", cat: "gold", type: "necklace", karat: "21K", weight: "3.0 g", price: 14500, img: "1761210875101-1273b9ae5600", occasions: ["engagement", "birthday", "mothers"], badge: "Made to order",
    desc: "Her name hand-drawn in Thuluth calligraphy by our artist, then cast in 21K gold." },
  { id: 107, original: true, name: "Get-Well Comfort Kit", cat: "home", price: 1150, img: "1600369672770-985fd30004eb", occasions: ["hospital"],
    desc: "A soft knit blanket, herbal teas, a puzzle book, cosy socks and a mini orchid for the bedside." },
  { id: 108, original: true, name: "Bride's Morning Box", cat: "beauty", price: 2200, img: "1782787231541-75bc96dd4fa1", occasions: ["wedding"],
    desc: "A satin “Bride” robe, mini perfume, rose petals, snacks and a calm-nerves tea for the big morning." },
  { id: 109, original: true, name: "Baby's First Gold Bracelet", cat: "gold", type: "bracelet", karat: "18K", weight: "1.4 g", price: 6800, img: "1780329925494-8500b1501d74", occasions: ["newborn"],
    desc: "A tiny adjustable 18K bracelet engraved with the baby's name and birth date. It grows with them." },
  { id: 110, original: true, name: "Message in a Bottle from Sahel", cat: "home", price: 300, img: "1636333798006-993a9f2611e3", occasions: ["date", "anniversary", "birthday"],
    desc: "Your handwritten letter rolled in a glass bottle with real North Coast sand and tiny shells." },
  { id: 111, original: true, name: "Family Recipe Book", cat: "home", price: 1600, img: "1769794371007-9bf419217727", occasions: ["mothers", "wedding", "housewarming"],
    desc: "Send us Teta's recipes as voice notes or photos and we turn them into a hardcover family cookbook." },
  { id: 112, original: true, name: "Engraved Ramadan Fanous", cat: "home", price: 1350, img: "1781947486860-197257ddbb7b", occasions: ["ramadan", "housewarming"],
    desc: "A handmade brass lantern from El-Moez Street, engraved with the family's name and a dua." },
  { id: 113, original: true, name: "“Our Song” Vinyl Frame", cat: "home", price: 1250, img: "1616714109948-c74fe5029a4d", occasions: ["anniversary", "engagement", "wedding"],
    desc: "Your song pressed as a playable vinyl and framed with the lyrics and the date you first danced." },
  { id: 114, original: true, name: "Thank-You-for-Dinner Basket", cat: "home", price: 690, img: "1566698629409-787a68fc5724", occasions: ["dinner", "housewarming"],
    desc: "Fresh baladi bread, Siwa olive oil, za'atar and a fig candle. Never arrive empty-handed again." },
  { id: 115, original: true, name: "Fayoum Desert Stargazing Night", cat: "experience", price: 5800, img: "1638862925201-4e373cb6a630", occasions: ["anniversary", "engagement", "graduation"],
    desc: "A night for two at a Wadi El Rayan camp with Bedouin dinner, telescope and a sunrise sandboard." },
  { id: 116, original: true, name: "Signature Scent Workshop", cat: "experience", price: 1900, img: "1718466044521-d38654f3ba0a", occasions: ["date", "mothers", "birthday"],
    desc: "Create a one-of-a-kind perfume together with a master blender in Khan el-Khalili, bottle included." },
  { id: 117, original: true, name: "Yalla Mystery Box", cat: "home", price: 500, img: "1761471858192-c97158a53d0f", occasions: ["birthday", "graduation", "date"], badge: "Surprise!",
    desc: "Tell us their vibe and your budget; our gift stylists hand-pick everything. Even you won't know!" },
  { id: 118, original: true, name: "Pottery Date for Two", cat: "experience", price: 1400, img: "1595351298020-038700609878", occasions: ["date", "anniversary"],
    desc: "Two hours at the wheel in Tunis Village style. We fire your mugs and deliver them a week later." },
  { id: 119, original: true, name: "Memory Music Box", cat: "kids", price: 980, img: "1784398073664-33f0275571ef", occasions: ["newborn", "birthday", "mothers"],
    desc: "A wind-up carousel music box that plays a lullaby of your choice, engraved with a little message." },

  // More flowers
  { id: 200, name: "Sunflower Sunshine Bunch",      cat: "flowers", price: 420,  img: "1601884928885-92a922f7962f", occasions: ["birthday", "hospital", "graduation"] },
  { id: 201, name: "Pink Peony Bouquet",            cat: "flowers", price: 1650, img: "1778596301893-f919b121dd43", occasions: ["mothers", "wedding", "engagement", "anniversary"], badge: "Seasonal" },
  { id: 202, name: "Lavender Calm Bundle",          cat: "flowers", price: 360,  img: "1634304387535-e9b7ed3180d4", occasions: ["hospital", "housewarming", "mothers"] },
  { id: 203, name: "Blue Hydrangea Vase",           cat: "flowers", price: 1100, img: "1549100789-756142409c2e", occasions: ["housewarming", "dinner", "newborn"] },
  { id: 204, name: "Pink Roses in Paper Wrap",      cat: "flowers", price: 560,  img: "1680563094046-5d846e2c59d1", occasions: ["date", "birthday", "mothers"] },
  { id: 205, name: "Grand Red Roses — 50 Stems",    cat: "flowers", price: 2400, img: "1581264692636-3cf6f29655c2", occasions: ["anniversary", "engagement", "date"], badge: "Wow factor" },
  { id: 206, name: "Pink & Yellow Rose Bouquet",    cat: "flowers", price: 780,  img: "1589217289787-879b47f6edab", occasions: ["birthday", "graduation", "mothers"] },
  { id: 207, name: "Pink Lily Arrangement",         cat: "flowers", price: 950,  img: "1695556557825-97adbe470fd6", occasions: ["hospital", "mothers", "dinner"] },
  { id: 208, name: "Baby's Breath Cloud",           cat: "flowers", price: 340,  img: "1596140233097-e637d44b4418", occasions: ["newborn", "wedding", "date"] },

  // More sweets
  { id: 209, name: "Pastel Cupcakes — 6 pcs",       cat: "sweets", price: 290,  img: "1778904912387-f9d856a8526a", occasions: ["birthday", "newborn"] },
  { id: 210, name: "Glazed Donut Box — 12 pcs",     cat: "sweets", price: 260,  img: "1626379801357-537572de4ad6", occasions: ["birthday", "graduation", "dinner"] },
  { id: 211, name: "Pure Sinai Honey Jar",          cat: "sweets", price: 420,  img: "1587049352851-8d4e89133924", occasions: ["hospital", "ramadan", "housewarming"] },
  { id: 212, name: "Pistachio Baklava Tray",        cat: "sweets", price: 850,  img: "1761828122856-8703baac8e86", occasions: ["ramadan", "dinner", "wedding", "engagement"] },
  { id: 213, name: "Chocolate-Dipped Strawberries", cat: "sweets", price: 520,  img: "1646902823849-1aa943a17f46", occasions: ["date", "anniversary", "birthday"], badge: "Romantic" },
  { id: 214, name: "Chocolate Truffle Box",         cat: "sweets", price: 690,  img: "1565889673146-8e4d54300269", occasions: ["date", "dinner", "mothers"] },
  { id: 215, name: "Gourmet Grazing Board",         cat: "sweets", price: 1350, img: "1773754109448-13d2af138059", occasions: ["dinner", "housewarming", "engagement"] },

  // More gold & jewellery
  { id: 216, name: "18K Twisted Gold Hoops",        cat: "gold", type: "earrings", karat: "18K", weight: "2.6 g", price: 8400, img: "1617038220319-276d3cfab638", occasions: ["birthday", "anniversary", "graduation"] },
  { id: 217, name: "Pearl Drop Earrings",           cat: "gold", type: "earrings", karat: "18K posts", weight: "—", price: 3900, img: "1590166223826-12dee1677420", occasions: ["mothers", "wedding", "graduation"] },
  { id: 218, name: "Pink Pearl Necklace & Earrings", cat: "gold", type: "set", karat: "Gold clasp", weight: "—", price: 9800, img: "1654699991494-892326ee8171", occasions: ["mothers", "engagement", "anniversary"] },
  { id: 219, name: "21K Gold Anklet",               cat: "gold", type: "bracelet", karat: "21K", weight: "2.2 g", price: 7600, img: "1744722091259-ed1cf11ac97f", occasions: ["birthday", "date", "anniversary"] },
  { id: 220, name: "18K Gold Charm Bracelet",       cat: "gold", type: "bracelet", karat: "18K", weight: "3.4 g", price: 11200, img: "1778000000834-cd4896383602", occasions: ["birthday", "mothers", "graduation"] },
  { id: 221, name: "Silver Heart Bracelet",         cat: "gold", type: "bracelet", karat: "925 Silver", weight: "—", price: 950, img: "1676120963306-8969fa6a810e", occasions: ["birthday", "date"] },
  { id: 222, name: "21K Classic Gold Band",         cat: "gold", type: "ring", karat: "21K", weight: "3.1 g", price: 9900, img: "1617038260897-41a1f14a8ca0", occasions: ["anniversary", "wedding", "engagement"] },

  // More perfume & beauty
  { id: 223, name: "Glow Skincare Set",             cat: "beauty", price: 1450, img: "1583209814683-c023dd293cc6", occasions: ["birthday", "mothers", "graduation"] },
  { id: 224, name: "Luxury Skincare Trio",          cat: "beauty", price: 2600, img: "1591130901921-3f0652bb3915", occasions: ["mothers", "anniversary"] },
  { id: 225, name: "Pro Makeup Brush Set",          cat: "beauty", price: 780,  img: "1596462502278-27bfdc403348", occasions: ["birthday", "graduation"] },
  { id: 226, name: "Nail Polish Collection",        cat: "beauty", price: 390,  img: "1763987300719-fd27c51a3227", occasions: ["birthday"] },
  { id: 227, name: "Men's Signature Cologne",       cat: "beauty", price: 3200, img: "1587017539504-67cfbddac569", occasions: ["birthday", "graduation", "anniversary", "engagement"] },
  { id: 228, name: "Oud Bakhoor & Burner Set",      cat: "beauty", price: 1200, img: "1541795083-1b160cf4f3d7", occasions: ["ramadan", "housewarming", "wedding"] },

  // More fashion & accessories
  { id: 230, name: "Men's Chronograph Watch",       cat: "fashion", price: 5900, img: "1695345272166-4efd76dd7a21", occasions: ["graduation", "birthday", "engagement"] },
  { id: 231, name: "Knitted Beanie Trio",           cat: "fashion", price: 280,  img: "1576871337632-b9aef4c17ab9", occasions: ["birthday"] },
  { id: 232, name: "Red Leather Backpack",          cat: "fashion", price: 2100, img: "1622560480654-d96214fdc887", occasions: ["graduation", "birthday"] },
  { id: 233, name: "Canvas Tote Bag",               cat: "fashion", price: 240,  img: "1544816155-12df9643f363", occasions: ["birthday", "graduation"] },
  { id: 234, name: "Golden Flower Hair Pins",       cat: "fashion", price: 330,  img: "1758723208952-e5b534af5515", occasions: ["wedding", "birthday", "engagement"] },

  // More tech
  { id: 235, name: "Fitness Smartwatch",            cat: "tech", price: 6500, img: "1579586337278-3befd40fd17a", occasions: ["graduation", "birthday", "anniversary"] },
  { id: 236, name: "Instant Photo Camera",          cat: "tech", price: 4600, img: "1683821291961-e79e6d10a2cc", occasions: ["graduation", "birthday", "wedding", "date"] },
  { id: 237, name: "Wireless Game Controller",      cat: "tech", price: 3300, img: "1612287230202-1ff1d85d1bdf", occasions: ["birthday", "graduation"] },
  { id: 238, name: "E-Reader Tablet",               cat: "tech", price: 7800, img: "1610731826702-6ded935d39a2", occasions: ["graduation", "hospital", "mothers"] },
  { id: 239, name: "Colourful Phone Case Pack",     cat: "tech", price: 350,  img: "1535157412991-2ef801c1748b", occasions: ["birthday"] },

  // More kids & baby
  { id: 240, name: "Wooden Train Set",              cat: "kids", price: 950,  img: "1596461404969-9ae70f2830c1", occasions: ["newborn", "birthday"] },
  { id: 241, name: "Building Blocks Bucket",        cat: "kids", price: 780,  img: "1587654780291-39c9404d746b", occasions: ["birthday"] },
  { id: 242, name: "Baby's First Shoes",            cat: "kids", price: 420,  img: "1783524810691-06673a415621", occasions: ["newborn"] },
  { id: 243, name: "Plush Bear Buddy",              cat: "kids", price: 280,  img: "1530325553241-4f6e7690cf36", occasions: ["newborn", "hospital", "birthday"] },
  { id: 244, name: "Picture Book Bundle",           cat: "kids", price: 450,  img: "1497633762265-9d179a990aa6", occasions: ["birthday", "newborn", "hospital"] },

  // More home & hampers
  { id: 245, name: "Monstera in Ceramic Pot",       cat: "home", price: 650,  img: "1614594975525-e45190c55d0b", occasions: ["housewarming", "graduation"] },
  { id: 246, name: "Bonsai Tree",                   cat: "home", price: 2300, img: "1769362788852-36552f4a6950", occasions: ["housewarming", "graduation", "anniversary"] },
  { id: 247, name: "Cozy Cushion Set",              cat: "home", price: 720,  img: "1758946942100-12bea90d797c", occasions: ["housewarming", "mothers"] },
  { id: 248, name: "Hand-Painted Mug Trio",         cat: "home", price: 380,  img: "1775029676778-5a43b2edc4bd", occasions: ["housewarming", "birthday"] },
  { id: 249, name: "Leather Photo Album",           cat: "home", price: 890,  img: "1528569937393-ee892b976859", occasions: ["wedding", "anniversary", "newborn", "mothers"] },
  { id: 250, name: "Family Board Game Night",       cat: "home", price: 690,  img: "1629760946220-5693ee4c46ac", occasions: ["housewarming", "ramadan", "birthday"] },
  { id: 251, name: "1000-Piece Puzzle",             cat: "home", price: 320,  img: "1776057441344-38e0587ad1e6", occasions: ["hospital", "birthday"] },
  { id: 252, name: "Premium Journal & Pen",         cat: "home", price: 450,  img: "1501618669935-18b6ecb13d6d", occasions: ["graduation", "birthday", "hospital"] },
  { id: 253, name: "Velvet Prayer Mat",             cat: "home", price: 650,  img: "1761958150507-7bcc80840cf9", occasions: ["ramadan", "newborn", "hospital"] },
  { id: 254, name: "Quran in a Gift Box",           cat: "home", price: 1250, img: "1542816417-0983c9c9ad53", occasions: ["ramadan", "wedding", "hospital", "newborn"] },
  { id: 255, name: "Picnic Basket for Two",         cat: "home", price: 1700, img: "1590166774851-bc49b23a18fe", occasions: ["date", "anniversary", "engagement"] },
  { id: 256, name: "Yoga Mat & Wellness Kit",       cat: "home", price: 1050, img: "1763004871583-4183d64096b1", occasions: ["birthday", "mothers"] },

  // More experiences
  { id: 229, name: "Spa Day Voucher",               cat: "experience", price: 1800, img: "1600334089648-b0d9d3028eb2", occasions: ["mothers", "wedding", "birthday", "anniversary"] },
  { id: 257, name: "Luxor Hot-Air Balloon Ride",    cat: "experience", price: 9500, img: "1761828122700-11b752d69a88", occasions: ["anniversary", "engagement", "graduation", "wedding"], badge: "Once in a lifetime" },
  { id: 258, name: "Pyramids Horse Ride at Sunset", cat: "experience", price: 1600, img: "1598362042346-70c59713811f", occasions: ["date", "birthday", "graduation"] },
  { id: 259, name: "Egyptian Cooking Class",        cat: "experience", price: 1200, img: "1785651880989-d624bec7794b", occasions: ["date", "mothers", "birthday"] },
];

const GOLD_TYPES = [
  { id: "all",      label: "All jewellery" },
  { id: "necklace", label: "Necklaces" },
  { id: "bracelet", label: "Bracelets" },
  { id: "ring",     label: "Rings" },
  { id: "earrings", label: "Earrings" },
  { id: "set",      label: "Sets" },
];

const PHONES = [
  {
    id: 1,
    brand: "Samsung", name: "Galaxy S24 Ultra",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g-sm-s928-stylus.jpg",
    price: 164999, badge: "Flagship",
    rating: 4.8, ratingCount: 2840,
    specs: {
      display: "6.8\" Dynamic AMOLED 2X, 120Hz", display_size: "6.8",
      processor: "Snapdragon 8 Gen 3", ram: "12", storage: "256GB / 512GB / 1TB",
      camera: "200MP + 12MP + 10MP + 10MP", frontCamera: "12MP",
      battery: "5000mAh", charging: "45W Wired, 15W Wireless",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Ultrasonic",
      dimensions: "162.3 × 79 × 8.6 mm", weight: "232g",
      colors: "Titanium Black, Gray, Violet, Yellow",
    }
  },
  {
    id: 2,
    brand: "Apple", name: "iPhone 15 Pro Max",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
    price: 174999, badge: "Pro",
    rating: 4.9, ratingCount: 3200,
    specs: {
      display: "6.7\" Super Retina XDR OLED, 120Hz", display_size: "6.7",
      processor: "Apple A17 Pro", ram: "8", storage: "256GB / 512GB / 1TB",
      camera: "48MP + 12MP + 12MP", frontCamera: "12MP TrueDepth",
      battery: "4422mAh", charging: "27W Wired, 15W MagSafe",
      os: "iOS 17", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "Face ID",
      dimensions: "159.9 × 76.7 × 8.25 mm", weight: "221g",
      colors: "Black Titanium, White Titanium, Blue Titanium, Natural Titanium",
    }
  },
  {
    id: 3,
    brand: "Xiaomi", name: "14 Ultra",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-new.jpg",
    price: 129999, badge: "Camera King",
    rating: 4.7, ratingCount: 980,
    specs: {
      display: "6.73\" LTPO AMOLED, 1-120Hz", display_size: "6.73",
      processor: "Snapdragon 8 Gen 3", ram: "16", storage: "512GB",
      camera: "50MP + 50MP + 50MP + 50MP (Leica)", frontCamera: "32MP",
      battery: "5000mAh", charging: "90W Wired, 80W Wireless",
      os: "Android 14 (HyperOS)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.4 × 75.3 × 9.35 mm", weight: "227g",
      colors: "Black, White, Titanium",
    }
  },
  {
    id: 4,
    brand: "Samsung", name: "Galaxy S24+",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-plus-5g-sm-s926.jpg",
    price: 109999, badge: null,
    rating: 4.7, ratingCount: 1980,
    specs: {
      display: "6.7\" Dynamic AMOLED 2X, 120Hz", display_size: "6.7",
      processor: "Snapdragon 8 Gen 3", ram: "12", storage: "256GB / 512GB",
      camera: "50MP + 12MP + 10MP", frontCamera: "12MP",
      battery: "4900mAh", charging: "45W Wired, 15W Wireless",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Ultrasonic",
      dimensions: "158.5 × 75.9 × 7.7 mm", weight: "196g",
      colors: "Cobalt Violet, Onyx Black, Jade Green, Sandstone Orange",
    }
  },
  {
    id: 5,
    brand: "OPPO", name: "Find X7 Ultra",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg",
    price: 134999, badge: "Zoom Master",
    rating: 4.7, ratingCount: 540,
    specs: {
      display: "6.82\" LTPO AMOLED, 1-120Hz", display_size: "6.82",
      processor: "Snapdragon 8 Gen 3", ram: "16", storage: "512GB",
      camera: "50MP + 50MP + 50MP + 50MP (Hasselblad)", frontCamera: "32MP",
      battery: "5000mAh", charging: "100W Wired, 50W Wireless",
      os: "Android 14 (ColorOS 14)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "165.3 × 76.1 × 10 mm", weight: "234g",
      colors: "Desert Silver, Rock Black, Sepia Brown",
    }
  },
  {
    id: 6,
    brand: "Vivo", name: "X100 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
    price: 119999, badge: null,
    rating: 4.6, ratingCount: 720,
    specs: {
      display: "6.78\" AMOLED, 120Hz", display_size: "6.78",
      processor: "Dimensity 9300", ram: "16", storage: "512GB",
      camera: "50MP + 50MP + 64MP (ZEISS)", frontCamera: "32MP",
      battery: "5400mAh", charging: "100W Wired, 50W Wireless",
      os: "Android 14 (OriginOS 4)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "164.9 × 75.9 × 9.35 mm", weight: "225g",
      colors: "Asteroid Black, Stardust White",
    }
  },
  {
    id: 7,
    brand: "OnePlus", name: "12",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-12.jpg",
    price: 94999, badge: null,
    rating: 4.6, ratingCount: 1100,
    specs: {
      display: "6.82\" LTPO3 AMOLED, 1-120Hz", display_size: "6.82",
      processor: "Snapdragon 8 Gen 3", ram: "12", storage: "256GB / 512GB",
      camera: "50MP + 48MP + 64MP (Hasselblad)", frontCamera: "32MP",
      battery: "5400mAh", charging: "100W SUPERVOOC, 50W AIRVOOC",
      os: "Android 14 (OxygenOS 14)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "164.3 × 75.8 × 9.15 mm", weight: "220g",
      colors: "Silky Black, Flowy Emerald",
    }
  },
  {
    id: 8,
    brand: "Apple", name: "iPhone 15",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    price: 109999, badge: null,
    rating: 4.7, ratingCount: 2100,
    specs: {
      display: "6.1\" Super Retina XDR OLED, 60Hz", display_size: "6.1",
      processor: "Apple A16 Bionic", ram: "6", storage: "128GB / 256GB / 512GB",
      camera: "48MP + 12MP", frontCamera: "12MP TrueDepth",
      battery: "3349mAh", charging: "20W Wired, 15W MagSafe",
      os: "iOS 17", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "Face ID",
      dimensions: "147.6 × 71.6 × 7.8 mm", weight: "171g",
      colors: "Black, Blue, Green, Yellow, Pink",
    }
  },
  {
    id: 9,
    brand: "Google", name: "Pixel 8 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
    price: 109999, badge: "AI Power",
    rating: 4.8, ratingCount: 1450,
    specs: {
      display: "6.7\" LTPO OLED, 1-120Hz", display_size: "6.7",
      processor: "Google Tensor G3", ram: "12", storage: "128GB / 256GB / 1TB",
      camera: "50MP + 48MP + 48MP", frontCamera: "10.5MP",
      battery: "5050mAh", charging: "30W Wired, 23W Wireless",
      os: "Android 14", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "162.6 × 76.5 × 8.8 mm", weight: "213g",
      colors: "Obsidian, Porcelain, Bay, Hazel",
    }
  },
  {
    id: 10,
    brand: "Realme", name: "GT 5 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-gt5-pro.jpg",
    price: 74999, badge: null,
    rating: 4.5, ratingCount: 650,
    specs: {
      display: "6.78\" LTPO AMOLED, 1-144Hz", display_size: "6.78",
      processor: "Snapdragon 8 Gen 3", ram: "12", storage: "256GB / 512GB",
      camera: "50MP + 8MP + 50MP", frontCamera: "32MP",
      battery: "5400mAh", charging: "100W Wired, 50W Wireless",
      os: "Android 14 (Realme UI 5.0)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.5 × 74.7 × 8.2 mm", weight: "220g",
      colors: "Navigator Beige, Fluid Silver",
    }
  },
  {
    id: 11,
    brand: "Samsung", name: "Galaxy A55",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    price: 54999, badge: null,
    rating: 4.4, ratingCount: 1250,
    specs: {
      display: "6.6\" Super AMOLED, 120Hz", display_size: "6.6",
      processor: "Exynos 1480", ram: "8", storage: "128GB / 256GB",
      camera: "50MP + 12MP + 5MP", frontCamera: "32MP",
      battery: "5000mAh", charging: "25W Wired",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.1 × 77.4 × 8.2 mm", weight: "213g",
      colors: "Iceblue, Lilac, Awesome Navy",
    }
  },
  {
    id: 12,
    brand: "Xiaomi", name: "Redmi Note 13 Pro+",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-plus.jpg",
    price: 44999, badge: null,
    rating: 4.5, ratingCount: 1350,
    specs: {
      display: "6.67\" AMOLED, 120Hz", display_size: "6.67",
      processor: "Dimensity 7200 Ultra", ram: "8", storage: "256GB",
      camera: "200MP + 8MP + 2MP", frontCamera: "16MP",
      battery: "5000mAh", charging: "120W Wired",
      os: "Android 13 (MIUI 14)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.4 × 74.2 × 8.9 mm", weight: "204.5g",
      colors: "Aurora Purple, Midnight Black, Moonlight White",
    }
  },
  {
    id: 13,
    brand: "Apple", name: "iPhone 14",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
    price: 89999, badge: null,
    rating: 4.6, ratingCount: 1800,
    specs: {
      display: "6.1\" Super Retina XDR OLED, 60Hz", display_size: "6.1",
      processor: "Apple A15 Bionic", ram: "6", storage: "128GB / 256GB / 512GB",
      camera: "12MP + 12MP", frontCamera: "12MP TrueDepth",
      battery: "3279mAh", charging: "20W Wired, 15W MagSafe",
      os: "iOS 17", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "Face ID",
      dimensions: "146.7 × 71.5 × 7.8 mm", weight: "172g",
      colors: "Midnight, Starlight, Blue, Purple, Yellow, Red",
    }
  },
  {
    id: 14,
    brand: "Samsung", name: "Galaxy A35",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a35.jpg",
    price: 38999, badge: null,
    rating: 4.3, ratingCount: 890,
    specs: {
      display: "6.6\" Super AMOLED, 120Hz", display_size: "6.6",
      processor: "Exynos 1380", ram: "6", storage: "128GB",
      camera: "50MP + 8MP + 5MP", frontCamera: "13MP",
      battery: "5000mAh", charging: "25W Wired",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.7 × 78.5 × 8.2 mm", weight: "210g",
      colors: "Iceblue, Lilac, Awesome Navy",
    }
  },
  {
    id: 15,
    brand: "OnePlus", name: "Nord CE 3 Lite",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-nord-ce-3-lite-.jpg",
    price: 26999, badge: null,
    rating: 4.2, ratingCount: 780,
    specs: {
      display: "6.72\" IPS LCD, 120Hz", display_size: "6.72",
      processor: "Snapdragon 695", ram: "8", storage: "128GB",
      camera: "108MP + 2MP + 2MP", frontCamera: "16MP",
      battery: "5000mAh", charging: "67W SUPERVOOC",
      os: "Android 13 (OxygenOS 13)", network: "5G",
      bluetooth: "5.1", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "163.9 × 75.6 × 8.29 mm", weight: "195g",
      colors: "Chromatic Gray, Pastel Lime",
    }
  },
  {
    id: 16,
    brand: "Xiaomi", name: "Redmi 13C",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-13c.jpg",
    price: 14999, badge: "Value",
    rating: 4.0, ratingCount: 620,
    specs: {
      display: "6.74\" IPS LCD, 90Hz", display_size: "6.74",
      processor: "Helio G85", ram: "4", storage: "128GB",
      camera: "50MP + 2MP", frontCamera: "8MP",
      battery: "5000mAh", charging: "18W Wired",
      os: "Android 13 (MIUI 14)", network: "4G",
      bluetooth: "5.3", nfc: "No", fingerprint: "Rear-mounted",
      dimensions: "168 × 76.1 × 8.1 mm", weight: "192g",
      colors: "Clover Green, Starlight Black, Navy Blue",
    }
  },
  {
    id: 17,
    brand: "Samsung", name: "Galaxy A15",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a15-lte-.jpg",
    price: 18999, badge: "Budget Pick",
    rating: 4.1, ratingCount: 750,
    specs: {
      display: "6.5\" Super AMOLED, 90Hz", display_size: "6.5",
      processor: "Dimensity 6100+", ram: "4", storage: "128GB",
      camera: "50MP + 5MP + 2MP", frontCamera: "13MP",
      battery: "5000mAh", charging: "25W Wired",
      os: "Android 14 (One UI 6.0)", network: "4G",
      bluetooth: "5.3", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "160.1 × 76.8 × 8.4 mm", weight: "199.8g",
      colors: "Blue, Black, Light Blue, Yellow",
    }
  },
  {
    id: 18,
    brand: "Realme", name: "C67",
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-c67-5g.jpg",
    price: 17999, badge: "Budget",
    rating: 4.0, ratingCount: 520,
    specs: {
      display: "6.72\" IPS LCD, 120Hz", display_size: "6.72",
      processor: "Snapdragon 685", ram: "6", storage: "128GB",
      camera: "108MP + 2MP", frontCamera: "8MP",
      battery: "5000mAh", charging: "33W Wired",
      os: "Android 14 (Realme UI 5.0)", network: "4G",
      bluetooth: "5.0", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "165.7 × 76 × 7.59 mm", weight: "188g",
      colors: "Dark Purple, Sunny Oasis",
    }
  },
  {
    id: 19,
    brand: "Samsung", name: "Galaxy S23 FE",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s23-fe.jpg",
    price: 64999, badge: null,
    rating: 4.3, ratingCount: 970,
    specs: {
      display: "6.4\" Dynamic AMOLED 2X, 120Hz", display_size: "6.4",
      processor: "Snapdragon 8 Gen 1", ram: "8", storage: "128GB / 256GB",
      camera: "50MP + 12MP + 8MP", frontCamera: "10MP",
      battery: "4500mAh", charging: "25W Wired, 15W Wireless",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "158 × 76.5 × 8.4 mm", weight: "209g",
      colors: "Graphite, Cream, Mint, Indigo",
    }
  },
  {
    id: 20,
    brand: "Motorola", name: "Edge 50 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-edge-50-pro.jpg",
    price: 54999, badge: null,
    rating: 4.3, ratingCount: 610,
    specs: {
      display: "6.7\" pOLED, 144Hz", display_size: "6.7",
      processor: "Snapdragon 7 Gen 3", ram: "12", storage: "256GB",
      camera: "50MP + 10MP + 13MP", frontCamera: "50MP",
      battery: "4500mAh", charging: "125W Wired, 50W Wireless",
      os: "Android 14", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.2 × 73.2 × 8.19 mm", weight: "186g",
      colors: "Black Beauty, Luxe Lavender, Moonlight Pearl",
    }
  },
  {
    id: 21,
    brand: "Nothing", name: "Phone (2)",
    image: "https://fdn2.gsmarena.com/vv/bigpic/nothing-phone2_.jpg",
    price: 69999, badge: "Unique",
    rating: 4.4, ratingCount: 830,
    specs: {
      display: "6.7\" LTPO OLED, 1-120Hz", display_size: "6.7",
      processor: "Snapdragon 8+ Gen 1", ram: "12", storage: "256GB / 512GB",
      camera: "50MP + 50MP", frontCamera: "32MP",
      battery: "4700mAh", charging: "45W Wired, 15W Wireless",
      os: "Android 13 (Nothing OS 2.0)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "162.1 × 76.4 × 8.6 mm", weight: "201g",
      colors: "White, Dark",
    }
  },
  {
    id: 22,
    brand: "Xiaomi", name: "13T Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t-pro.jpg",
    price: 79999, badge: null,
    rating: 4.5, ratingCount: 920,
    specs: {
      display: "6.67\" AMOLED, 144Hz", display_size: "6.67",
      processor: "Dimensity 9200+", ram: "12", storage: "256GB / 512GB / 1TB",
      camera: "50MP + 50MP + 50MP (Leica)", frontCamera: "20MP",
      battery: "5000mAh", charging: "144W Wired, 10W Wireless",
      os: "Android 13 (MIUI 14)", network: "5G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "162.2 × 75.7 × 8.49 mm", weight: "206g",
      colors: "Black, Alpine Blue, Meadow Green",
    }
  },
  {
    id: 23,
    brand: "Vivo", name: "V29 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v29-pro.jpg",
    price: 49999, badge: null,
    rating: 4.3, ratingCount: 540,
    specs: {
      display: "6.78\" AMOLED, 120Hz", display_size: "6.78",
      processor: "Dimensity 8200", ram: "12", storage: "256GB",
      camera: "50MP + 50MP + 8MP", frontCamera: "50MP",
      battery: "4600mAh", charging: "80W Wired",
      os: "Android 13 (OriginOS 3)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "164.4 × 74.5 × 7.99 mm", weight: "186g",
      colors: "Noble Black, Himalayan Blue",
    }
  },
  {
    id: 24,
    brand: "Motorola", name: "Moto G84",
    image: "https://fdn2.gsmarena.com/vv/bigpic/motorola-moto-g84.jpg",
    price: 29999, badge: null,
    rating: 4.2, ratingCount: 460,
    specs: {
      display: "6.55\" pOLED, 120Hz", display_size: "6.55",
      processor: "Snapdragon 695", ram: "12", storage: "256GB",
      camera: "50MP + 8MP", frontCamera: "16MP",
      battery: "5000mAh", charging: "33W Wired",
      os: "Android 13", network: "5G",
      bluetooth: "5.1", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "159.6 × 74.0 × 7.59 mm", weight: "172g",
      colors: "Marshmallow Blue, Viva Magenta",
    }
  },
  {
    id: 25,
    brand: "OPPO", name: "Reno 11 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11-china.jpg",
    price: 59999, badge: null,
    rating: 4.4, ratingCount: 610,
    specs: {
      display: "6.7\" OLED, 120Hz", display_size: "6.7",
      processor: "Dimensity 8200", ram: "12", storage: "256GB",
      camera: "50MP + 32MP + 8MP", frontCamera: "32MP",
      battery: "4600mAh", charging: "80W Wired, 50W Wireless",
      os: "Android 14 (ColorOS 14)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "162.9 × 74.9 × 8.39 mm", weight: "191g",
      colors: "Rock Gray, Sandstone Brown",
    }
  },
  {
    id: 26,
    brand: "Infinix", name: "Note 40 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-5g-.jpg",
    price: 24999, badge: "Best Value",
    rating: 4.1, ratingCount: 390,
    specs: {
      display: "6.78\" AMOLED, 120Hz", display_size: "6.78",
      processor: "Helio G99 Ultimate", ram: "12", storage: "256GB",
      camera: "108MP + 2MP", frontCamera: "32MP",
      battery: "5000mAh", charging: "70W Wired, 20W Wireless",
      os: "Android 14 (XOS 14)", network: "4G",
      bluetooth: "5.4", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "168.3 × 75.6 × 7.9 mm", weight: "195g",
      colors: "Titan Gold, Racing Black, Vintage Green",
    }
  },
  {
    id: 27,
    brand: "Tecno", name: "Spark 20 Pro",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg",
    price: 13999, badge: null,
    rating: 3.9, ratingCount: 310,
    specs: {
      display: "6.78\" IPS LCD, 90Hz", display_size: "6.78",
      processor: "Helio G88", ram: "8", storage: "128GB",
      camera: "50MP + 2MP", frontCamera: "32MP",
      battery: "5000mAh", charging: "18W Wired",
      os: "Android 13 (HiOS 13.5)", network: "4G",
      bluetooth: "5.0", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "167.2 × 77.1 × 8.2 mm", weight: "204g",
      colors: "Dark Illusion, Sage Green, Magic Skin White",
    }
  },
  {
    id: 28,
    brand: "Realme", name: "12 Pro+",
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro-plus.jpg",
    price: 47999, badge: null,
    rating: 4.4, ratingCount: 580,
    specs: {
      display: "6.7\" OLED, 120Hz", display_size: "6.7",
      processor: "Snapdragon 7s Gen 2", ram: "12", storage: "256GB",
      camera: "50MP + 64MP Periscope + 8MP", frontCamera: "16MP",
      battery: "5000mAh", charging: "67W Wired",
      os: "Android 14 (Realme UI 5.0)", network: "5G",
      bluetooth: "5.3", nfc: "Yes", fingerprint: "In-display Optical",
      dimensions: "161.5 × 74.7 × 8.2 mm", weight: "199g",
      colors: "Submarine Blue, Beige Gold",
    }
  },
  {
    id: 29,
    brand: "Nokia", name: "G42 5G",
    image: "https://fdn2.gsmarena.com/vv/bigpic/nokia-g42-5g.jpg",
    price: 21999, badge: null,
    rating: 4.0, ratingCount: 270,
    specs: {
      display: "6.56\" IPS LCD, 90Hz", display_size: "6.56",
      processor: "Snapdragon 480+", ram: "6", storage: "128GB",
      camera: "50MP + 2MP + 2MP", frontCamera: "8MP",
      battery: "5000mAh", charging: "20W Wired",
      os: "Android 13", network: "5G",
      bluetooth: "5.1", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "164.5 × 76.1 × 8.5 mm", weight: "193g",
      colors: "So Pink, Purple Haze, Meteor Grey",
    }
  },
  {
    id: 30,
    brand: "Samsung", name: "Galaxy M34",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m34-5g.jpg",
    price: 22999, badge: null,
    rating: 4.1, ratingCount: 440,
    specs: {
      display: "6.5\" Super AMOLED, 120Hz", display_size: "6.5",
      processor: "Exynos 1280", ram: "6", storage: "128GB",
      camera: "50MP + 8MP + 2MP", frontCamera: "13MP",
      battery: "6000mAh", charging: "25W Wired",
      os: "Android 14 (One UI 6.1)", network: "5G",
      bluetooth: "5.1", nfc: "No", fingerprint: "Side-mounted",
      dimensions: "165 × 77.2 × 8.9 mm", weight: "208g",
      colors: "Midnight Blue, Waterfall Blue, Silver",
    }
  },
];

// ---- Utilities ----
function formatPrice(p) {
  return "৳" + p.toLocaleString("en-BD");
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = "";
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += `<svg viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    else if (i === full && half) stars += `<svg viewBox="0 0 20 20"><defs><linearGradient id="hg"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="#d1c7b8"/></linearGradient></defs><path fill="url(#hg)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
    else stars += `<svg viewBox="0 0 20 20"><path fill="#d1c7b8" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;
  }
  return stars;
}

import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // --- APPLE ---
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    brand: 'Apple',
    category: 'Electronics',
    tagline: 'Dynamic Island, 48MP main camera & color-infused textured glass.',
    description: 'Directly sourced from certified tier-1 suppliers in Shenzhen. Sourced in pristine sealed packaging with global factory unlock, fully tested for all South African cellular networks (Vodacom, MTN, Telkom, Cell C).',
    basePrice: 16499,
    image: '/products/iphone15/black-front-back.jpg',
    badge: 'Popular Sourced Item',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Black', hex: '#2B2B2C', priceAddon: 0 },
      { name: 'Pink', hex: '#E8C9CD', priceAddon: 400 },
      { name: 'Blue', hex: '#D3DFDF', priceAddon: 300 },
      { name: 'Yellow', hex: '#F1ECB8', priceAddon: 0 },
      { name: 'Green', hex: '#D5E0D5', priceAddon: 200 },
    ],
    colorImages: {
      'Black': [
        '/products/iphone15/black-front-back.jpg',
        '/products/iphone15/black-select.jpg',
      ],
      'Pink': [
        '/products/iphone15/pink-front-back.jpg',
        '/products/iphone15/pink-angled.jpg',
        '/products/iphone15/pink-select.jpg',
      ],
      'Blue': [
        '/products/iphone15/blue-front-back.jpg',
        '/products/iphone15/blue-angled.jpg',
        '/products/iphone15/blue-select.jpg',
      ],
      'Yellow': [
        '/products/iphone15/yellow-front-back.jpg',
        '/products/iphone15/yellow-angled.jpg',
        '/products/iphone15/yellow-select.jpg',
      ],
      'Green': [
        '/products/iphone15/green-front-back.jpg',
        '/products/iphone15/green-angled.jpg',
        '/products/iphone15/green-select.jpg',
      ],
    },
    colorPriceAddon: {
      'Black': 0,
      'Pink': 400,
      'Blue': 300,
      'Yellow': 0,
      'Green': 200,
    },
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.15,
      'Pro': 1.35,
      'Pro Max': 1.55,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 1800,
      '512GB': 3600,
    },
    sourcingOrigin: 'Shenzhen Tech Hub, China',
    deliveryDays: '7–10 Days',
    features: ['Dynamic Island', '48MP Main Camera', 'A16 Bionic Chip', 'USB-C Charging Port', 'Contoured Edges'],
  },
  {
    id: 'iphone-14',
    name: 'iPhone 14',
    brand: 'Apple',
    category: 'Electronics',
    tagline: 'Super Retina XDR display with stellar battery stamina.',
    description: 'Certified factory-direct stock sourced through audited Shenzhen supply lines. Exceptional performance, dual-camera system with Photonic Engine, and complete South African frequency band compatibility.',
    basePrice: 13999,
    image: 'https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&w=1000&q=85',
    badge: 'Best Value',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Space Black', hex: '#202021' },
      { name: 'Deep Purple', hex: '#4A3B56' },
      { name: 'Silver', hex: '#E2E4E6' },
      { name: 'Gold', hex: '#F4E8CE' },
    ],
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.12,
      'Pro': 1.28,
      'Pro Max': 1.45,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 1500,
      '512GB': 3100,
    },
    sourcingOrigin: 'Shenzhen Tech Hub, China',
    deliveryDays: '7–10 Days',
    features: ['Emergency SOS via satellite', 'Photonic Engine', 'All-day battery life', 'Ceramic Shield front'],
  },
  {
    id: 'iphone-13',
    name: 'iPhone 13',
    brand: 'Apple',
    category: 'Electronics',
    tagline: 'Dual-camera system with sensor-shift optical stabilization.',
    description: 'Our most affordable entry point for Apple iOS sourcing. Sourced from wholesale authorized distribution centers in Guangzhou. Sealed, certified, and air-freighted with full logistics tracking.',
    basePrice: 11499,
    image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=85',
    badge: 'Budget Friendly',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Midnight', hex: '#1C2329' },
      { name: 'Starlight', hex: '#F0ECE4' },
      { name: 'Sierra Blue', hex: '#9CB7CD' },
      { name: 'Alpine Green', hex: '#3B4E43' },
    ],
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.08,
      'Pro': 1.22,
      'Pro Max': 1.38,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 1300,
      '512GB': 2800,
    },
    sourcingOrigin: 'Guangzhou Sourcing Center, China',
    deliveryDays: '7–10 Days',
    features: ['Cinematic mode 1080p', 'Super Retina XDR OLED', 'A15 Bionic chip', '5G Capable'],
  },

  // --- SAMSUNG ---
  {
    id: 'galaxy-s24',
    name: 'Galaxy S24',
    brand: 'Samsung',
    category: 'Electronics',
    tagline: 'Galaxy AI is here. Circle to Search, Live Translate & Titanium.',
    description: 'Authentic Samsung Galaxy flagship, procured directly from premium electronic export hubs in China. Pre-configured with global multi-language firmware, certified for all ICASA / SA cellular frequency bands.',
    basePrice: 15499,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=1000&q=85',
    badge: 'Galaxy AI Built-in',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Onyx Black', hex: '#1A1A1A' },
      { name: 'Marble Gray', hex: '#D7D7D9' },
      { name: 'Cobalt Violet', hex: '#4B4257' },
      { name: 'Amber Yellow', hex: '#E7D8A8' },
    ],
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.16,
      'Pro': 1.32,
      'Pro Max': 1.52,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 1700,
      '512GB': 3400,
    },
    sourcingOrigin: 'Shenzhen Export Zone, China',
    deliveryDays: '7–10 Days',
    features: ['Circle to Search with Google', '2600 nit Dynamic AMOLED 2X', 'Armor Aluminum Frame', 'ProVisual Engine'],
  },
  {
    id: 'galaxy-s25',
    name: 'Galaxy S25',
    brand: 'Samsung',
    category: 'Electronics',
    tagline: 'Next-generation AI silicon, slim titanium chassis & 200MP sensor.',
    description: 'Cutting-edge Samsung flagship sourced through priority China-first manufacturing channels. Ultra-slim profile, titanium perimeter, and enhanced Snapdragon 8 Elite processing power.',
    basePrice: 18999,
    image: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=1000&q=85',
    badge: 'New Release',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Titanium Silver', hex: '#CBCDD0' },
      { name: 'Titanium Jet', hex: '#1F2124' },
      { name: 'Emerald Forest', hex: '#1D3B31' },
      { name: 'Ice Blue', hex: '#98B3C7' },
    ],
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.15,
      'Pro': 1.35,
      'Pro Max': 1.58,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 1900,
      '512GB': 3900,
    },
    sourcingOrigin: 'Shenzhen Export Zone, China',
    deliveryDays: '7–10 Days',
    features: ['Snapdragon 8 Elite Processor', 'Seamless Satellite SMS', 'Gorilla Armor Anti-Reflective', 'Advanced Thermal Vapor Chamber'],
  },
  {
    id: 'galaxy-s26',
    name: 'Galaxy S26',
    brand: 'Samsung',
    category: 'Electronics',
    tagline: 'Future Flagship Prototype — Priority reservation from China.',
    description: 'Exclusive prototype sourcing quota directly from authorized Asian supply lines. Be among the first in South Africa to secure this ultra-flagship upon manufacturing rollout with FLW VIP air express.',
    basePrice: 22999,
    image: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=1000&q=85',
    badge: 'Next-Gen Preview',
    models: ['Standard', 'Plus', 'Pro', 'Pro Max'],
    storageOptions: ['128GB', '256GB', '512GB'],
    colors: [
      { name: 'Titanium Obsidian', hex: '#141416' },
      { name: 'Liquid Platinum', hex: '#E5E7EB' },
      { name: 'Deep Sage', hex: '#2A4A3E' },
      { name: 'Solar Amber', hex: '#D4A35B' },
    ],
    modelPriceMultiplier: {
      'Standard': 1,
      'Plus': 1.18,
      'Pro': 1.38,
      'Pro Max': 1.62,
    },
    storagePriceAddon: {
      '128GB': 0,
      '256GB': 2200,
      '512GB': 4400,
    },
    sourcingOrigin: 'Guangzhou International Hub, China',
    deliveryDays: '7–10 Days',
    features: ['Quantum Neural AI Core', 'Under-display Optical Matrix', 'Sub-millimeter Bezel Ratio', '100W HyperCharge'],
  },

  // --- FASHION & SNEAKERS ---
  {
    id: 'sneaker-retro-low',
    name: 'Retro Low Olive Edition',
    brand: 'Fashion',
    category: 'Sneakers & Streetwear',
    tagline: 'Limited edition collaboration sourced from authentic Putian luxury ateliers.',
    description: 'Curated streetwear grail sourced from verified boutique supply hubs. Hand-inspected for stitching, leather grain, and box authenticity before departure from China.',
    basePrice: 4299,
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=85',
    badge: 'Streetwear Grail',
    models: ['UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'],
    storageOptions: ['Standard Box', 'Double Boxed + Crease Protectors'],
    colors: [
      { name: 'Military Olive', hex: '#4B5320' },
      { name: 'Sail Cream', hex: '#F3EFE0' },
      { name: 'Black Phantom', hex: '#1B1B1B' },
    ],
    modelPriceMultiplier: {
      'UK 7': 1,
      'UK 8': 1,
      'UK 9': 1.05,
      'UK 10': 1.05,
      'UK 11': 1.1,
    },
    storagePriceAddon: {
      'Standard Box': 0,
      'Double Boxed + Crease Protectors': 250,
    },
    sourcingOrigin: 'Fujian / Guangzhou Apparel District, China',
    deliveryDays: '7–10 Days',
    features: ['Premium Suede & Full Grain Leather', 'Inverted Swoosh detailing', 'Cushioned Air Sole Unit', 'Custom Box & Extra Laces'],
  },
  {
    id: 'sneaker-dunk-vintage',
    name: 'Vintage Panda Dunk Low',
    brand: 'Fashion',
    category: 'Sneakers & Streetwear',
    tagline: 'Timeless two-tone monochrome everyday streetwear staple.',
    description: 'Verified original manufacturing batch. Verified batch codes, verified leather weight, packaged in shock-proof air-freight casing for the flight to South Africa.',
    basePrice: 2899,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1000&q=85',
    badge: 'Trending Fashion',
    models: ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10'],
    storageOptions: ['Standard Box', 'Double Boxed + Crease Protectors'],
    colors: [
      { name: 'Black & White', hex: '#1C1C1E' },
      { name: 'Vintage Navy', hex: '#1E2B3E' },
      { name: 'Forest Green', hex: '#1F3A2E' },
    ],
    modelPriceMultiplier: {
      'UK 6': 1,
      'UK 7': 1,
      'UK 8': 1,
      'UK 9': 1,
      'UK 10': 1.05,
    },
    storagePriceAddon: {
      'Standard Box': 0,
      'Double Boxed + Crease Protectors': 250,
    },
    sourcingOrigin: 'Guangzhou Fashion Hub, China',
    deliveryDays: '7–10 Days',
    features: ['High-traction Rubber Cupsole', 'Breathable Perforated Toe', 'Padded Low-cut Collar', 'Authentic Stamp Verified'],
  }
];

export const SA_PROVINCES = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Mpumalanga',
  'Limpopo',
  'North West',
  'Northern Cape'
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'DISCOVER WHAT YOU WANT',
    subtitle: 'Browse Available Products or Custom Request',
    description: 'Explore our catalog of popular electronics and streetwear, or paste a link/photo of ANY product in China you desire. We source phones, laptops, sneakers, fashion, gadgets, and specialty equipment.',
    badge: 'Shenzhen / Guangzhou',
    icon: 'search',
  },
  {
    step: '02',
    title: 'GET YOUR QUOTE',
    subtitle: 'Supplier Verification & Pricing',
    description: 'FLW. negotiates directly with certified Chinese manufacturers and verified supply channels to lock in factory-direct rates. Your quote is completely transparent with no hidden surprises.',
    badge: 'All-Inclusive ZAR',
    icon: 'check-circle',
  },
  {
    step: '03',
    title: 'SOURCING & DELIVERY',
    subtitle: 'Quality Check & Air Freight to SA',
    description: 'Our bilingual team in China inspects your product, takes photos, repacks it securely, handles all customs clearances, and air-freights it straight to your doorstep anywhere in South Africa in 7–10 days.',
    badge: '7–10 Days Doorstep',
    icon: 'plane-takeoff',
  }
];

export const FAQ_ITEMS = [
  {
    q: 'How does FLW. pricing work?',
    a: 'Quotes are generally all-inclusive, covering the item cost, international air transit, customs documentation, and domestic courier delivery in South Africa, unless stated otherwise.'
  },
  {
    q: 'What is the estimated delivery timeframe?',
    a: 'Estimated delivery is generally 7–10 business days from the date your order is confirmed and shipped from FLW.\'s partner warehouses in China to South Africa.'
  },
  {
    q: 'How do tracking and updates work?',
    a: 'Customers receive regular WhatsApp and email status updates at every stage: when the item is purchased, inspected in Shenzhen/Guangzhou, boarded onto cargo flights, cleared through customs at OR Tambo, and dispatched via courier.'
  },
  {
    q: 'Can I request an item that is not in the catalog?',
    a: 'Absolutely! Click the "Custom Sourcing Request" button or reach out directly on WhatsApp. We can source virtually any consumer product, accessory, or component from China.'
  }
];

export type Brand = 'Apple' | 'Samsung' | 'Fashion' | 'All';

export interface ProductColor {
  name: string;
  hex: string;
  priceAddon?: number;
  images?: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: 'Apple' | 'Samsung' | 'Fashion';
  category: 'Electronics' | 'Sneakers & Streetwear';
  tagline: string;
  description: string;
  basePrice: number; // in South African Rand (ZAR)
  image: string;
  badge?: string;
  models: string[]; // e.g. ['Standard', 'Plus', 'Pro', 'Pro Max']
  storageOptions: string[]; // e.g. ['128GB', '256GB', '512GB']
  colors: ProductColor[];
  colorImages?: Record<string, string[]>;
  colorPriceAddon?: Record<string, number>;
  modelPriceMultiplier: Record<string, number>;
  storagePriceAddon: Record<string, number>;
  sourcingOrigin: string; // "Shenzhen, China" / "Guangzhou, China"
  deliveryDays: string; // "7–10 Days"
  features: string[];
}

export interface CartItem {
  id: string; // unique cart item id (productId + model + storage + color)
  productId: string;
  productName: string;
  brand: string;
  model: string;
  storage: string;
  color: string;
  unitPrice: number;
  quantity: number;
  image: string;
}

export interface OrderCustomerInfo {
  fullName: string;
  email: string;
  phone: string;
  province: string;
  city: string;
  streetAddress?: string;
  notes?: string;
}

export interface PlacedOrder {
  orderNumber: string; // e.g. "FLW-2026-48291"
  createdAt: string;
  items: CartItem[];
  subtotal: number;
  shipping: number; // 0 for all-inclusive quotes
  total: number;
  customer: OrderCustomerInfo;
  estimatedDeliveryDate: string;
}

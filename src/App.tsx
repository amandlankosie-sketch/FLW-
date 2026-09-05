import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhatWeSource } from './components/WhatWeSource';
import { ShopProducts } from './components/ShopProducts';
import { HowItWorks } from './components/HowItWorks';
import { DeliveryInfo } from './components/DeliveryInfo';
import { PricingInfo } from './components/PricingInfo';
import { TrackingUpdates } from './components/TrackingUpdates';
import { ContactSection, SOCIAL_CONFIG } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductConfigModal } from './components/ProductConfigModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderConfirmationModal } from './components/OrderConfirmationModal';
import { CustomSourcingModal } from './components/CustomSourcingModal';
import { PRODUCTS } from './data/products';
import { Product, CartItem, Brand, PlacedOrder } from './types';
import { MessageCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  // Shopping Cart state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('flw_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Active UI modal states
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [createdOrder, setCreatedOrder] = useState<PlacedOrder | null>(null);
  const [isCustomRequestOpen, setIsCustomRequestOpen] = useState(false);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState<Brand>('All');
  const [activeNavSection, setActiveNavSection] = useState('home');

  // Lock body scroll when any modal or drawer is active
  useEffect(() => {
    const isAnyModalOpen = Boolean(
      selectedProduct || isCartOpen || isCheckoutOpen || createdOrder || isCustomRequestOpen
    );
    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedProduct, isCartOpen, isCheckoutOpen, createdOrder, isCustomRequestOpen]);

  // Persist cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('flw_cart', JSON.stringify(cart));
    } catch (e) {
      console.warn('Could not persist cart to localStorage', e);
    }
  }, [cart]);

  // Cart item count
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Cart actions
  const handleAddToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex((i) => i.id === item.id);
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += item.quantity;
        return updated;
      }
      return [...prev, item];
    });
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleOrderPlaced = (order: PlacedOrder) => {
    setIsCheckoutOpen(false);
    setCreatedOrder(order);
    setCart([]); // Clear cart after placing order
  };

  // Scroll helpers
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelectFromWhatWeSource = (brand: Brand) => {
    setSelectedBrandCategory(brand);
    scrollToSection('shop');
  };

  // Track active section for header
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'what-we-source', 'shop', 'how-it-works', 'delivery-info', 'pricing-info', 'tracking-updates', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveNavSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#202523] selection:bg-[#0D3328] selection:text-[#FAF8F5] flex flex-col font-sans">
      
      {/* Top Floating Pill Navigation */}
      <Navbar
        cartCount={cartItemCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCustomRequest={() => setIsCustomRequestOpen(true)}
        activeSection={activeNavSection}
      />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero
          onShopClick={() => scrollToSection('shop')}
          onHowItWorksClick={() => scrollToSection('how-it-works')}
          onCustomRequestClick={() => setIsCustomRequestOpen(true)}
        />

        {/* 2. What We Source (Electronics, Apple, Samsung, Sneakers/Fashion) */}
        <WhatWeSource
          onSelectCategory={handleCategorySelectFromWhatWeSource}
          onCustomRequestClick={() => setIsCustomRequestOpen(true)}
        />

        {/* 3. Shop Products (Apple iPhone 13, 14, 15; Samsung Galaxy S24, S25, S26, etc.) */}
        <ShopProducts
          products={PRODUCTS}
          selectedCategory={selectedBrandCategory}
          onSelectCategory={setSelectedBrandCategory}
          onSelectProduct={(product) => setSelectedProduct(product)}
          onCustomRequestClick={() => setIsCustomRequestOpen(true)}
        />

        {/* 4. How It Works (3 Simple Flowing Steps) */}
        <HowItWorks
          onShopClick={() => scrollToSection('shop')}
          onCustomRequestClick={() => setIsCustomRequestOpen(true)}
        />

        {/* 5. Delivery Information (Prominent 7–10 Days & Air Cargo Journey) */}
        <DeliveryInfo />

        {/* 6. Pricing Information (All-Inclusive Concept & Transparency) */}
        <PricingInfo />

        {/* 7. Tracking & Updates (Real-Time Timeline Simulator) */}
        <TrackingUpdates />

        {/* 8. Contact & Social Media (Interactive Playful Instagram & WhatsApp) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* MODALS & DRAWERS */}

      {/* Product Spec Configurator Modal (Model, Storage, Add to Cart with Feedback) */}
      <ProductConfigModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Shopping Cart Slide-out Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onContinueToOrder={() => setIsCheckoutOpen(true)}
        onStartShopping={() => scrollToSection('shop')}
      />

      {/* Prototype Checkout Modal (Details & South African Delivery Fields) */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderPlaced={handleOrderPlaced}
      />

      {/* Order Created Confirmation Modal (Order Number, Copy, Payment Separately Notice) */}
      <OrderConfirmationModal
        order={createdOrder}
        onClose={() => setCreatedOrder(null)}
      />

      {/* Custom Item Sourcing Request Modal */}
      <CustomSourcingModal
        isOpen={isCustomRequestOpen}
        onClose={() => setIsCustomRequestOpen(false)}
      />

      {/* Floating Interactive WhatsApp Quick Chat Pill (Bottom Right) */}
      <motion.a
        href={SOCIAL_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Sourcing Desk"
        whileHover={{
          scale: 1.08,
          rotate: [0, -6, 6, 0],
          transition: { duration: 0.35 },
        }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-30 p-3.5 sm:px-5 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:shadow-green-500/40 flex items-center gap-2.5 group cursor-pointer border-2 border-white/60"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline-block text-xs font-bold tracking-wide uppercase">
          WhatsApp Sourcing
        </span>
      </motion.a>

    </div>
  );
}

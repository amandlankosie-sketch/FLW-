import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowRight, Sparkles, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SOCIAL_CONFIG } from './ContactSection';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCustomRequest: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenCustomRequest,
  activeSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Delivery', href: '#delivery-info' },
    { name: 'Pricing', href: '#pricing-info' },
    { name: 'Tracking', href: '#tracking-updates' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full transition-all">
      <nav
        id="main-navigation"
        className="bg-[#FAF8F5]/90 backdrop-blur-md border border-[#0D3328]/10 rounded-full px-5 sm:px-7 py-3.5 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
      >
        {/* FLW. Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-2.5 group"
          id="brand-logo-link"
        >
          <div className="w-10 h-10 rounded-full bg-[#0D3328] flex items-center justify-center text-[#FAF8F5] font-black text-xl tracking-tighter group-hover:scale-105 transition-transform duration-300 shadow-sm">
            F
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-[#0D3328] flex items-baseline">
              FLW<span className="text-[#25634A] animate-pulse">.</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-medium tracking-wide uppercase text-[#4A5450] -mt-1">
              China ➔ South Africa
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={link.name}
                id={`nav-link-${sectionId}`}
                onClick={() => handleNavClick(link.href)}
                className={`px-3.5 py-1.5 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#0D3328] text-[#FAF8F5]'
                    : 'text-[#2C3531] hover:text-[#0D3328] hover:bg-[#EAE5DC]/60'
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </div>

        {/* Right Actions: Request Sourcing & Cart */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="open-custom-sourcing-header-btn"
            onClick={onOpenCustomRequest}
            className="hidden lg:flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider px-4 py-2.5 rounded-full bg-[#EAE5DC]/80 hover:bg-[#E2DDD3] text-[#0D3328] transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#0D3328]" />
            Request Any Item
          </button>

          {/* Shopping Cart Button */}
          <motion.button
            id="navbar-cart-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCart}
            aria-label="Shopping Cart"
            className="relative flex items-center justify-center p-2.5 sm:px-4 sm:py-2.5 rounded-full bg-[#0D3328] text-[#FAF8F5] hover:bg-[#09241C] transition-colors cursor-pointer shadow-sm group"
          >
            <ShoppingBag className="w-5 h-5 text-[#FAF8F5] transition-transform duration-300 group-hover:-rotate-6" />
            <span className="hidden sm:inline-block ml-2 text-xs font-bold uppercase tracking-wider">
              Cart
            </span>

            {/* Cart Counter Badge */}
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span
                  id="navbar-cart-count"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  key={cartCount}
                  className="absolute -top-1.5 -right-1.5 min-w-[20px] h-[20px] px-1 bg-[#25634A] text-white text-[11px] font-bold rounded-full flex items-center justify-center border-2 border-[#FAF8F5] shadow-sm"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button
            id="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-[#EAE5DC]/70 text-[#0D3328] hover:bg-[#EAE5DC] cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 bg-[#FAF8F5] border border-[#0D3328]/15 rounded-3xl p-5 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-left px-4 py-3 rounded-2xl text-base font-semibold transition-colors flex items-center justify-between ${
                      isActive ? 'bg-[#0D3328] text-white' : 'text-[#0D3328] hover:bg-[#EAE5DC]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-emerald-400" />}
                  </button>
                );
              })}

              <div className="pt-3 border-t border-[#0D3328]/10 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCustomRequest();
                  }}
                  className="w-full py-3 px-4 rounded-2xl bg-[#0D3328] text-white font-bold text-center flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-emerald-300" />
                  Request Custom Item Sourcing
                </button>
                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={SOCIAL_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 px-3 rounded-2xl bg-[#25D366]/15 text-emerald-800 font-bold text-xs text-center flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-4 h-4 text-[#25D366]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={SOCIAL_CONFIG.callTel}
                    className="py-3 px-3 rounded-2xl bg-[#0D3328]/10 text-[#0D3328] font-bold text-xs text-center flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#0D3328]" />
                    <span>Call 073 164 5330</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

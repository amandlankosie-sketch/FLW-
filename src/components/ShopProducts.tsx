import React, { useState } from 'react';
import { Sparkles, SlidersHorizontal, ArrowRight, ShieldCheck, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, Brand } from '../types';
import { formatZAR } from '../utils/formatters';

interface ShopProductsProps {
  products: Product[];
  selectedCategory: Brand;
  onSelectCategory: (brand: Brand) => void;
  onSelectProduct: (product: Product) => void;
  onCustomRequestClick: () => void;
}

export const ShopProducts: React.FC<ShopProductsProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  onSelectProduct,
  onCustomRequestClick,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs: { id: Brand; label: string; count?: number }[] = [
    { id: 'All', label: 'All Sourced Products' },
    { id: 'Apple', label: 'Apple' },
    { id: 'Samsung', label: 'Samsung' },
    { id: 'Fashion', label: 'Sneakers & Fashion' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.brand === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="shop" className="py-16 sm:py-24 bg-[#F5F2EC]/60 relative scroll-mt-24">
      {/* Background Soft Ambient Light */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#25634A]" />
              <span>Direct Sourcing Catalogue</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D3328] tracking-tight">
              SHOP PRODUCTS.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#3E4743] leading-relaxed">
              Every item is inspected in China, packaged with protective air freight wrapping, and
              flown to South Africa with all-inclusive customs clearance.
            </p>
          </div>

          {/* Sourcing Guarantee Pill */}
          <div className="flex items-center gap-3 bg-[#FAF8F5] border border-[#0D3328]/15 px-5 py-3 rounded-full shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[#25634A]" />
            <div className="text-xs">
              <span className="font-bold text-[#0D3328] block">All-Inclusive Quotations</span>
              <span className="text-[#596460]">Customs, freight & taxes handled</span>
            </div>
          </div>
        </div>

        {/* Filter Pills Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[#0D3328]/10">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`filter-tab-${tab.id.toLowerCase()}`}
                  onClick={() => onSelectCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 cursor-pointer shadow-sm ${
                    isActive
                      ? 'bg-[#0D3328] text-[#FAF8F5] scale-[1.02] shadow-md'
                      : 'bg-[#FAF8F5] text-[#2F3734] hover:bg-[#EAE5DC] hover:text-[#0D3328] border border-[#0D3328]/10'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="w-full sm:w-72">
            <input
              type="text"
              placeholder="Search model, series..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2.5 rounded-full bg-[#FAF8F5] border border-[#0D3328]/15 text-sm text-[#0D3328] placeholder-[#7A8682] focus:outline-none focus:ring-2 focus:ring-[#0D3328] shadow-sm"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF8F5] rounded-3xl border border-[#0D3328]/15 p-8">
            <p className="text-lg font-bold text-[#0D3328]">No products match "{searchQuery}"</p>
            <p className="text-sm text-[#4E5854] mt-1 mb-6">
              Looking for something unique? Let FLW. source it directly for you.
            </p>
            <button
              onClick={onCustomRequestClick}
              className="px-6 py-3 rounded-full bg-[#0D3328] text-white font-bold text-sm hover:bg-[#072019] transition-colors"
            >
              Request Custom Item Sourcing
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  id={`product-card-${product.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  className="group bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.25rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Container with organic curves */}
                  <div>
                    <div className="relative w-full h-64 rounded-3xl overflow-hidden bg-neutral-100 mb-5 p-4 flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                        loading="lazy"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
                        <span className="px-3 py-1 rounded-full bg-[#0D3328] text-white text-[11px] font-bold uppercase tracking-wider shadow-sm">
                          {product.brand}
                        </span>
                        {product.badge && (
                          <span className="px-3 py-0.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-[10px] font-bold border border-[#0D3328]/10">
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Origin indicator pill */}
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[#2F3734] bg-white/90 backdrop-blur-md px-2.5 py-0.5 rounded-full shadow-sm">
                          <MapPin className="w-3 h-3 text-[#25634A]" />
                          {product.sourcingOrigin.split(',')[0]}
                        </span>
                      </div>
                    </div>

                    {/* Product Meta */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black text-[#0D3328] tracking-tight group-hover:text-[#25634A] transition-colors">
                          {product.name}
                        </h3>
                        <span className="text-xs font-semibold text-[#4A5450] bg-[#EAE5DC]/60 px-2.5 py-0.5 rounded-full">
                          {product.deliveryDays}
                        </span>
                      </div>

                      <p className="text-xs text-[#525E59] line-clamp-2 leading-relaxed font-normal min-h-[34px]">
                        {product.tagline}
                      </p>

                      {/* Key features pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {product.features.slice(0, 2).map((feat, fIdx) => (
                          <span
                            key={fIdx}
                            className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#38433F] bg-[#EAE5DC]/50 px-2 py-0.5 rounded-full"
                          >
                            <Check className="w-3 h-3 text-[#25634A]" />
                            {feat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action Button */}
                  <div className="pt-6 mt-6 border-t border-[#0D3328]/10 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                      <span className="text-[11px] font-semibold text-[#66736E] uppercase tracking-wider">
                        Starting Price
                      </span>
                      <span className="text-xl font-black text-[#0D3328]">
                        {formatZAR(product.basePrice)}
                      </span>
                    </div>

                    <button
                      id={`select-product-btn-${product.id}`}
                      onClick={() => onSelectProduct(product)}
                      className="px-5 py-2.5 rounded-full bg-[#0D3328] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider hover:bg-[#072019] transition-all hover:scale-105 flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>Select / View</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Bottom Banner: Sourcing Inquiry */}
        <div className="mt-14 text-center">
          <p className="text-sm font-semibold text-[#4A5450] mb-3">
            Can't find the exact model, color, or spec you're looking for?
          </p>
          <button
            onClick={onCustomRequestClick}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#FAF8F5] border border-[#0D3328]/20 text-[#0D3328] text-sm font-bold hover:bg-[#EAE5DC] transition-all hover:scale-[1.02] shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#25634A]" />
            <span>Tell Us What You Want Sourced From China</span>
          </button>
        </div>

      </div>
    </section>
  );
};

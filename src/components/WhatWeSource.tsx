import React from 'react';
import { Smartphone, Sparkles, Footprints, ArrowUpRight, Cpu, Layers } from 'lucide-react';
import { motion } from 'motion/react';
import { Brand } from '../types';

interface WhatWeSourceProps {
  onSelectCategory: (category: Brand) => void;
  onCustomRequestClick: () => void;
}

export const WhatWeSource: React.FC<WhatWeSourceProps> = ({
  onSelectCategory,
  onCustomRequestClick,
}) => {
  const categories = [
    {
      id: 'Apple' as Brand,
      title: 'Apple Ecosystem',
      subtitle: 'iPhones, iPads, MacBooks & Wearables',
      description: 'Factory-sealed and certified authentic Apple devices sourced directly from premier technology distribution centers in Shenzhen. Flawless South African carrier compatibility.',
      tag: 'Tier-1 Electronics',
      count: 'iPhone 13, 14, 15 Series',
      accentColor: 'from-[#0D3328] to-[#164E3D]',
      textColor: 'text-white',
      badgeBg: 'bg-emerald-400/20 text-emerald-200',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80',
      icon: Smartphone,
    },
    {
      id: 'Samsung' as Brand,
      title: 'Samsung Galaxy',
      subtitle: 'S-Series Flagships & Galaxy AI',
      description: 'The latest Samsung innovations, including the Galaxy S24, S25, and prototype previews of the S26. Procured with global unlocked firmware and direct manufacturer guarantees.',
      tag: 'Flagship Android',
      count: 'Galaxy S24, S25, S26',
      accentColor: 'from-[#1A332B] to-[#254F42]',
      textColor: 'text-white',
      badgeBg: 'bg-teal-400/20 text-teal-200',
      image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80',
      icon: Cpu,
    },
    {
      id: 'Fashion' as Brand,
      title: 'Sneakers & Streetwear',
      subtitle: 'Grails, Luxury Footwear & Apparel',
      description: 'Access the world\'s largest sneaker and fashion manufacturing districts in Guangzhou & Putian. High-demand silhouettes, verified materials, box integrity, and rare colorways.',
      tag: 'Trending Footwear',
      count: 'Retro Grails & Lows',
      accentColor: 'from-[#2B3833] to-[#3B4D46]',
      textColor: 'text-white',
      badgeBg: 'bg-amber-400/20 text-amber-200',
      image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=700&q=80',
      icon: Footprints,
    },
  ];

  return (
    <section id="what-we-source" className="py-16 sm:py-24 relative overflow-hidden scroll-mt-24">
      {/* Background Soft Blobs */}
      <div className="absolute top-1/3 left-[-100px] w-80 h-80 bg-[#0D3328]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-80px] w-96 h-96 bg-[#25634A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span>Curated Sourcing Categories</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D3328] tracking-tight leading-tight">
              WHAT WE SOURCE.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#3E4743] leading-relaxed">
              From flagship personal electronics to curated streetwear, FLW. handles the entire
              pipeline from China's industrial epicenters to your South African address.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onCustomRequestClick}
              className="px-6 py-3 rounded-full bg-[#EAE5DC]/80 hover:bg-[#E2DDD3] text-[#0D3328] font-bold text-sm tracking-wide transition-all duration-200 flex items-center gap-2 shadow-sm hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#25634A]" />
              <span>Request Something Custom</span>
            </button>
          </div>
        </div>

        {/* 3 Prominent Rounded Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat, idx) => {
            const IconComponent = cat.icon;
            return (
              <motion.div
                key={cat.id}
                id={`category-card-${cat.id.toLowerCase()}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -6 }}
                onClick={() => onSelectCategory(cat.id)}
                className="group relative bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.25rem] p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer overflow-hidden"
              >
                {/* Visual Image Banner with Curved Radius */}
                <div className="relative w-full h-52 sm:h-56 rounded-3xl overflow-hidden mb-6 bg-neutral-100">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3328]/80 via-transparent to-transparent opacity-70 group-hover:opacity-60 transition-opacity" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FAF8F5]/90 backdrop-blur-md text-[#0D3328] text-xs font-bold shadow-sm">
                      <IconComponent className="w-3.5 h-3.5 text-[#25634A]" />
                      {cat.tag}
                    </span>
                  </div>

                  {/* Bottom Image Label */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                    <span className="text-xs font-medium tracking-wide bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
                      {cat.count}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/90 text-[#0D3328] flex items-center justify-center group-hover:bg-[#0D3328] group-hover:text-white transition-colors shadow-sm">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0D3328] group-hover:text-[#25634A] transition-colors mb-1.5">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4A5450] mb-3">
                      {cat.subtitle}
                    </p>
                    <p className="text-sm text-[#3E4743] leading-relaxed mb-6">
                      {cat.description}
                    </p>
                  </div>

                  {/* Action Link Pill */}
                  <div className="pt-4 border-t border-[#0D3328]/10 flex items-center justify-between">
                    <span className="text-xs font-extrabold tracking-wider uppercase text-[#0D3328] group-hover:underline underline-offset-4 flex items-center gap-1">
                      Browse {cat.id} Products
                    </span>
                    <span className="text-xs font-semibold text-[#4A5450] bg-[#EAE5DC]/60 px-3 py-1 rounded-full">
                      7–10 Days to SA
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Sourcing Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 bg-gradient-to-r from-[#EAE5DC] to-[#E2DDD3] rounded-[2.25rem] p-6 sm:p-8 border border-[#0D3328]/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
        >
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 h-14 rounded-2xl bg-[#0D3328] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <Sparkles className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-black text-[#0D3328]">
                Need something specific sourced from China?
              </h4>
              <p className="text-sm sm:text-base text-[#3A433F] mt-1">
                Laptops, drones, sound equipment, automotive parts, machinery, or boutique fashion — just send us the link or photo.
              </p>
            </div>
          </div>

          <button
            id="what-we-source-custom-btn"
            onClick={onCustomRequestClick}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0D3328] text-[#FAF8F5] font-bold text-sm hover:bg-[#072019] transition-all hover:scale-[1.02] flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer shadow-md"
          >
            <span>Request Custom Sourcing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

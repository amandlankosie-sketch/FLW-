import React from 'react';
import { ArrowRight, Plane, ShieldCheck, Clock, Sparkles, Box, Check, Compass } from 'lucide-react';
import { motion } from 'motion/react';
import { TickleText } from './TickleText';

interface HeroProps {
  onShopClick: () => void;
  onHowItWorksClick: () => void;
  onCustomRequestClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onShopClick,
  onHowItWorksClick,
  onCustomRequestClick,
}) => {
  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Animated Ambient Floating Background System */}
      <motion.div
        animate={{
          x: [0, 35, -25, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.12, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#25634A]/12 to-[#0D3328]/6 blur-3xl pointer-events-none"
      />
      
      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 30, -20, 0],
          scale: [1, 0.94, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-5 left-[-10%] w-[520px] h-[520px] rounded-full bg-gradient-to-tr from-[#0D3328]/8 to-[#EAE5DC]/60 blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E8F1EC] border border-[#0D3328]/15 text-[#0D3328] text-xs sm:text-sm font-semibold mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25634A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0D3328]"></span>
              </span>
              <span className="tracking-wide">Sourcing from China to South Africa.</span>
            </div>

            {/* Brand Title Accent with interactive letters */}
            <div className="flex items-baseline gap-2 mb-3">
              <TickleText
                text="FLW."
                as="span"
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#0D3328]"
              />
              <span className="text-sm sm:text-base font-medium text-[#4A5450] tracking-wide">
                Direct Global Logistics & Procurement
              </span>
            </div>

            {/* Main Hero Headline with interactive letters */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-[#0D3328] leading-[1.08] mb-6">
              <span className="block">
                <TickleText text="SEE IT." as="span" />
              </span>
              <span className="block">
                <TickleText text="WANT IT." as="span" />
              </span>
              <span className="block text-[#25634A]">
                <TickleText text="WE'LL SOURCE IT." as="span" highlightWords={['SOURCE']} />
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-lg sm:text-xl text-[#333C38] leading-relaxed max-w-2xl mb-8 font-normal">
              Discover products or request what you want, and let{' '}
              <strong className="font-bold text-[#0D3328]">FLW.</strong> handle the sourcing,
              logistics, quality inspection, customs clearance, and journey from China to South Africa.
            </p>

            {/* Strong CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <motion.button
                id="hero-shop-products-cta"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onShopClick}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0D3328] text-[#FAF8F5] text-base font-bold shadow-md hover:bg-[#08221B] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
              >
                <span>SHOP PRODUCTS</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                id="hero-how-it-works-cta"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={onHowItWorksClick}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#FAF8F5] border-2 border-[#0D3328] text-[#0D3328] text-base font-bold hover:bg-[#EAE5DC]/60 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>HOW IT WORKS</span>
              </motion.button>

              <button
                id="hero-custom-sourcing-link"
                onClick={onCustomRequestClick}
                className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D3328] hover:bg-[#E8F1EC] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#25634A]" />
                Have something else in mind? Let's Source It
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 border-t border-[#0D3328]/15 w-full max-w-xl">
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#0D3328]">7–10</span>
                <span className="text-xs sm:text-sm font-medium text-[#4A5450] leading-tight">
                  Days Air Delivery
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#0D3328]">100%</span>
                <span className="text-xs sm:text-sm font-medium text-[#4A5450] leading-tight">
                  All-Inclusive Quotes
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-black text-[#0D3328]">0</span>
                <span className="text-xs sm:text-sm font-medium text-[#4A5450] leading-tight">
                  Customs Hassle
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Layered Organic Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Main Organic Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative bg-gradient-to-br from-[#0D3328] to-[#123F32] rounded-[2.5rem] p-6 sm:p-8 text-white shadow-2xl overflow-hidden border border-[#0D3328]"
            >
              {/* Decorative Subtle Glowing Rings */}
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-[#25634A]/30 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none" />

              {/* Card Header: Live Route Status */}
              <div className="flex items-center justify-between mb-6 relative z-10">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide text-emerald-200">
                  <Plane className="w-3.5 h-3.5 rotate-45 text-emerald-300" />
                  <span>Express Cargo Flight</span>
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-300 bg-white/10 px-3 py-1 rounded-full">
                  Verified Route
                </div>
              </div>

              {/* Visual Transit Map: China ➔ South Africa */}
              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 mb-6 backdrop-blur-sm relative">
                <div className="flex items-center justify-between relative">
                  {/* Origin */}
                  <div className="flex flex-col items-start z-10">
                    <span className="text-2xl">🇨🇳</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200 mt-1">
                      Origin Hub
                    </span>
                    <span className="text-base font-bold text-white">Shenzhen / GZ</span>
                    <span className="text-[11px] text-white/70">Factory Inspection</span>
                  </div>

                  {/* Animated Connecting Flight Line */}
                  <div className="flex-1 mx-4 relative flex items-center justify-center">
                    <div className="w-full h-0.5 bg-gradient-to-r from-emerald-400 via-amber-300 to-emerald-400 opacity-60 border-t border-dashed border-white/40" />
                    <motion.div
                      animate={{
                        x: [-35, 35, -35],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute w-8 h-8 rounded-full bg-[#25634A] text-white flex items-center justify-center shadow-lg border border-white/40"
                    >
                      <Plane className="w-4 h-4 rotate-45 text-white" />
                    </motion.div>
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col items-end z-10 text-right">
                    <span className="text-2xl">🇿🇦</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-200 mt-1">
                      Destination
                    </span>
                    <span className="text-base font-bold text-white">South Africa</span>
                    <span className="text-[11px] text-white/70">Doorstep Courier</span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-300" />
                    7–10 Days Transit Time
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                    Customs Handled
                  </span>
                </div>
              </div>

              {/* Sample Sourced Showcase Card with Organic Pill Floating */}
              <div className="bg-[#FAF8F5] text-[#202523] rounded-3xl p-4 sm:p-5 shadow-lg relative">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-neutral-100 flex-shrink-0 relative shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=300&q=80"
                      alt="iPhone 15 Pro Titanium"
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-1 right-1 bg-[#0D3328] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                      Hot
                    </span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#25634A]">
                        Apple Sourced
                      </span>
                      <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-200/60 px-2 py-0.5 rounded-full">
                        Ready To Ship
                      </span>
                    </div>
                    <h2 className="text-base font-bold text-[#0D3328] truncate">
                      iPhone 15 Pro Titanium
                    </h2>
                    <p className="text-xs text-neutral-600 truncate mb-1">
                      Factory unlocked • Global firmware
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-extrabold text-[#0D3328]">
                        From R 16,999
                      </span>
                      <button
                        onClick={onShopClick}
                        className="text-xs font-bold text-[#0D3328] hover:text-[#25634A] underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                      >
                        Configure <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Feature Badges */}
              <div className="mt-5 flex items-center justify-between text-xs text-emerald-100 px-2">
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Pre-flight QA Checked
                </span>
                <span className="flex items-center gap-1">
                  <Check className="w-4 h-4 text-emerald-400" />
                  No Hidden Taxes
                </span>
              </div>
            </motion.div>

            {/* Floating Organic Accessory Badges */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -bottom-6 -left-6 bg-[#FAF8F5] border border-[#0D3328]/15 rounded-2xl p-3.5 shadow-xl items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-xl bg-[#E8F1EC] flex items-center justify-center text-[#0D3328]">
                <Box className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold text-[#0D3328]">Direct China Factory</span>
                <span className="text-[11px] text-neutral-500">Unbeatable wholesale rates</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden sm:flex absolute -top-5 -right-4 bg-[#0D3328] text-white rounded-2xl px-4 py-2.5 shadow-xl items-center gap-2 z-20 border border-white/10"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              <div className="flex flex-col">
                <span className="text-xs font-bold">Shenzhen & Guangzhou</span>
                <span className="text-[10px] text-emerald-200">Bilingual Sourcing Team</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Search, FileCheck, PlaneTakeoff, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HowItWorksProps {
  onShopClick: () => void;
  onCustomRequestClick: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onShopClick,
  onCustomRequestClick,
}) => {
  const steps = [
    {
      number: 'STEP 1',
      title: 'DISCOVER WHAT YOU WANT',
      description:
        'Browse available products in our catalog or send us a link or picture of anything you want sourced from China.',
      detail: 'Phones, sneakers, tech gadgets, fashion, or specialized components.',
      icon: Search,
      badge: 'Step 01 • Discovery',
      accent: 'from-[#0D3328] to-[#174B3B]',
      pill: 'Catalog or Custom Request',
    },
    {
      number: 'STEP 2',
      title: 'GET YOUR QUOTE',
      description:
        'FLW. checks availability and pricing directly with audited manufacturers and suppliers in China.',
      detail: 'All-inclusive quotation covering item cost, international transit, and customs.',
      icon: FileCheck,
      badge: 'Step 02 • Supplier Check',
      accent: 'from-[#174B3B] to-[#25634A]',
      pill: 'Transparent Pricing in ZAR',
    },
    {
      number: 'STEP 3',
      title: 'SOURCING & DELIVERY',
      description:
        'FLW. handles sourcing, quality checks, customs handling, and rapid shipping to South Africa.',
      detail: 'Delivered straight to your doorstep across South Africa in generally 7–10 days.',
      icon: PlaneTakeoff,
      badge: 'Step 03 • Doorstep Arrival',
      accent: 'from-[#25634A] to-[#123E31]',
      pill: '7–10 Days Doorstep Courier',
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF8F5] scroll-mt-24">
      {/* Organic Background Curves */}
      <div className="absolute top-1/2 left-[-150px] w-96 h-96 rounded-full bg-[#0D3328]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-100px] w-[500px] h-[500px] rounded-full bg-[#25634A]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#25634A]" />
            <span>Seamless China to SA Logistics</span>
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3328] tracking-tight mb-4">
            HOW IT WORKS.
          </h2>
          <p className="text-base sm:text-lg text-[#3E4743] leading-relaxed">
            We bridge the gap between China's premier manufacturing epicenters and your doorstep
            in South Africa in 3 effortless, fully tracked steps.
          </p>
        </div>

        {/* Flowing Layout: Asymmetric, Rounded Wave Cards */}
        <div className="relative">
          {/* Subtle connecting decorative wavy line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-1 bg-gradient-to-r from-[#0D3328]/10 via-[#25634A]/30 to-[#0D3328]/10 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={step.number}
                  id={`how-it-works-step-${index + 1}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.5rem] p-7 sm:p-9 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group"
                >
                  {/* Decorative curved top accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#EAE5DC]/50 rounded-bl-[4rem] -z-0 pointer-events-none group-hover:bg-[#E8F1EC] transition-colors" />

                  <div className="relative z-10">
                    {/* Step badge and icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-[#0D3328] text-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <IconComponent className="w-8 h-8 text-emerald-300" />
                      </div>
                      <span className="text-3xl sm:text-4xl font-black text-[#0D3328]/25 font-mono">
                        0{index + 1}
                      </span>
                    </div>

                    <span className="text-xs font-black uppercase tracking-widest text-[#25634A] block mb-2">
                      {step.number}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#0D3328] tracking-tight mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#3E4743] leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-xs text-[#5C6863] leading-relaxed bg-[#EAE5DC]/50 p-3 rounded-2xl border border-[#0D3328]/10 mb-6">
                      {step.detail}
                    </p>
                  </div>

                  {/* Bottom Step Indicator Pill */}
                  <div className="pt-4 border-t border-[#0D3328]/10 flex items-center justify-between text-xs font-bold text-[#0D3328] relative z-10">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-[#25634A]" />
                      {step.pill}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Prompt Below */}
        <div className="mt-14 sm:mt-16 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onShopClick}
            className="px-8 py-4 rounded-full bg-[#0D3328] text-[#FAF8F5] font-bold text-sm hover:bg-[#072019] transition-all hover:scale-105 shadow-md flex items-center gap-2 cursor-pointer"
          >
            <span>Start Sourcing Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onCustomRequestClick}
            className="px-8 py-4 rounded-full bg-[#EAE5DC] text-[#0D3328] font-bold text-sm hover:bg-[#E2DDD3] transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Submit a Custom Inquiry</span>
          </button>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { DollarSign, ShieldCheck, CheckCircle2, FileText, Sparkles, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

export const PricingInfo: React.FC = () => {
  const pricingPillars = [
    {
      title: 'Item Base Cost',
      subtitle: 'Wholesale Factory Rates',
      description: 'We negotiate directly with authorized tier-1 factories and wholesale tech hubs in Shenzhen & Guangzhou to pass bulk savings to individual buyers.',
      badge: 'Wholesale Direct',
    },
    {
      title: 'International Air Cargo',
      subtitle: 'Express Scheduled Flights',
      description: 'Your item travels via priority air cargo in shockproof packaging. No slow sea shipping containers that take months.',
      badge: 'Air Freight Included',
    },
    {
      title: 'Customs & Import Duties',
      subtitle: 'Full Regulatory Clearance',
      description: 'Import tariffs, VAT, customs declarations, and ICASA requirements are cleared by FLW. You never get surprise calls from customs demanding extra fees.',
      badge: 'Zero Customs Surprises',
    },
    {
      title: 'Local SA Delivery',
      subtitle: 'To Your Doorstep',
      description: 'Courier dispatch across all 9 South African provinces. Handled by verified national couriers with PIN verification at delivery.',
      badge: 'Doorstep Courier',
    },
  ];

  return (
    <section id="pricing-info" className="py-20 sm:py-28 relative bg-[#F5F2EC]/70 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <DollarSign className="w-3.5 h-3.5 text-[#25634A]" />
            <span>Transparent Procurement</span>
          </div>

          {/* Heading required by prompt */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3328] tracking-tight mb-4">
            HOW PRICING WORKS.
          </h2>

          {/* Prompt Core Concept */}
          <p className="text-lg sm:text-xl font-medium text-[#0D3328] leading-relaxed max-w-2xl mx-auto mb-3">
            Quotes are generally all-inclusive, covering the item cost, international transit, and customs handling, unless stated otherwise.
          </p>
          <p className="text-sm text-[#4A5450]">
            No ambiguous exchange rate traps, no surprise port holding fees, and no complicated import licensing required from your side.
          </p>
        </div>

        {/* 4 Pillars of All-Inclusive Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {pricingPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.25rem] p-7 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#EAE5DC] text-[#0D3328] text-[11px] font-bold mb-4">
                  {pillar.badge}
                </span>
                <h3 className="text-xl font-bold text-[#0D3328] mb-1">
                  {pillar.title}
                </h3>
                <span className="text-xs font-semibold text-[#25634A] block mb-3">
                  {pillar.subtitle}
                </span>
                <p className="text-xs text-[#4A5450] leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-[#0D3328]/10 flex items-center gap-1.5 text-xs font-bold text-[#0D3328]">
                <CheckCircle2 className="w-4 h-4 text-[#25634A]" />
                <span>Included In Your Quote</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Guarantee Box */}
        <div className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.5rem] p-8 sm:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#0D3328] text-white flex items-center justify-center flex-shrink-0 shadow-md">
              <ShieldCheck className="w-7 h-7 text-emerald-300" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#0D3328] mb-1">
                The FLW. All-In Quote Guarantee
              </h4>
              <p className="text-sm text-[#4A5450] max-w-2xl leading-relaxed">
                When you receive a final quotation from FLW., the figure in South African Rand (ZAR) is
                the complete cost delivered into your hands. If customs classifies an item with
                unexpected fees, FLW. absorbs the difference unless explicitly agreed beforehand.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0 bg-[#E8F1EC] px-6 py-4 rounded-3xl border border-[#0D3328]/10 text-center">
            <div>
              <span className="text-2xl font-black text-[#0D3328] block">100%</span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#25634A]">
                Transparency
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

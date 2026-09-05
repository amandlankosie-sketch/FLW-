import React from 'react';
import { Clock, Plane, ShieldCheck, MapPin, Truck, Check, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const DeliveryInfo: React.FC = () => {
  const milestones = [
    {
      day: 'Day 1–2',
      title: 'China Sourcing & Quality Inspection',
      location: 'Shenzhen / Guangzhou Hub, China',
      desc: 'FLW. verifies factory serial numbers, checks hardware/materials, tests functions, and packages with shock-absorbent logistics casing.',
    },
    {
      day: 'Day 3–5',
      title: 'Export Customs & Direct Air Cargo',
      location: 'Shenzhen Bao\'an / HK International Air Cargo',
      desc: 'Priority air freight dispatch across international airways toward South Africa with continuous airway bill tracking.',
    },
    {
      day: 'Day 6–7',
      title: 'Customs Clearance at OR Tambo',
      location: 'Johannesburg (JNB) International Airport, SA',
      desc: 'All South African import duties, customs declarations, and ICASA requirements are cleared seamlessly by FLW.\'s licensed broker.',
    },
    {
      day: 'Day 8–10',
      title: 'Doorstep Courier to Any SA Province',
      location: 'Gauteng, Western Cape, KZN & Nationwide',
      desc: 'Handed over to trusted local courier partners (The Courier Guy / RAM / DPD Laser) with real-time OTP security delivery at your door.',
    },
  ];

  return (
    <section id="delivery-info" className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF8F5] scroll-mt-24">
      {/* Ambient background blur */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#0D3328]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#25634A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Delivery Hero Card with Prominent 7-10 Days Display */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0D3328] via-[#103E30] to-[#0A2E23] rounded-[3rem] p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden mb-16 border border-[#0D3328]"
        >
          {/* Subtle decorative circles */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#25634A]/20 blur-2xl pointer-events-none" />
          <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left: Heading and Prominent 7-10 Days */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-200 text-xs font-bold uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5 text-emerald-300" />
                <span>Express Air Logistics</span>
              </div>

              {/* Required Heading */}
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                ESTIMATED DELIVERY
              </h2>

              {/* Prominently Displayed 7-10 DAYS as requested */}
              <div className="flex items-baseline gap-4">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-black text-emerald-300 tracking-tighter drop-shadow-md">
                  7–10 DAYS
                </span>
                <span className="text-sm sm:text-base font-semibold text-emerald-100/90 uppercase tracking-widest bg-white/10 px-3.5 py-1.5 rounded-full">
                  Average
                </span>
              </div>

              {/* Supporting information as requested */}
              <p className="text-base sm:text-xl text-emerald-50/90 leading-relaxed font-normal max-w-xl">
                Estimated delivery is generally 7–10 days from the date your order is confirmed
                and shipped from FLW.'s suppliers in China to South Africa.
              </p>

              {/* Quick Guarantees */}
              <div className="pt-4 flex flex-wrap gap-4 text-xs font-semibold text-emerald-100">
                <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Inspected in Shenzhen / Guangzhou
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Direct Air Freight Flights
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-2 rounded-full backdrop-blur-sm">
                  <Check className="w-4 h-4 text-emerald-400" />
                  Customs Duty Included
                </span>
              </div>
            </div>

            {/* Right: Interactive Graphic Card */}
            <div className="lg:col-span-5 bg-[#FAF8F5] text-[#202523] rounded-[2.25rem] p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black uppercase tracking-wider text-[#25634A]">
                  Route Map
                </span>
                <span className="text-xs font-bold text-[#0D3328] bg-[#E8F1EC] px-3 py-1 rounded-full">
                  Shenzhen ➔ JHB / CPT
                </span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0D3328] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    🇨🇳
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3328] block">Origin Procurement Hub</span>
                    <span className="text-[#55615D]">Shenzhen, Guangdong, China</span>
                  </div>
                </div>

                <div className="ml-4 pl-4 border-l-2 border-dashed border-[#0D3328]/20 py-1 space-y-1">
                  <span className="text-[11px] font-semibold text-[#25634A] block">
                    ✈️ International Air Transit (Via Direct Hubs)
                  </span>
                  <span className="text-[11px] text-[#697772]">
                    High-speed air freight cargo with live airway bill tracking
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#25634A] text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    🇿🇦
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3328] block">South Africa Arrival</span>
                    <span className="text-[#55615D]">OR Tambo (JNB) or Cape Town (CPT)</span>
                  </div>
                </div>

                <div className="ml-4 pl-4 border-l-2 border-dashed border-[#0D3328]/20 py-1">
                  <span className="text-[11px] font-semibold text-[#25634A] block">
                    📦 Courier Handover (The Courier Guy / RAM)
                  </span>
                </div>

                <div className="flex items-center gap-3 pt-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">
                    🏠
                  </div>
                  <div>
                    <span className="font-bold text-[#0D3328] block">Your Doorstep</span>
                    <span className="text-[#55615D]">Safely delivered in 7–10 days</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4-Step Timeline Details (Spacious and Organic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m, idx) => (
            <motion.div
              key={m.day}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-3xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-black tracking-wider mb-3">
                  {m.day}
                </span>
                <h3 className="text-lg font-bold text-[#0D3328] mb-1 leading-snug">
                  {m.title}
                </h3>
                <span className="text-xs font-semibold text-[#25634A] block mb-3">
                  {m.location}
                </span>
                <p className="text-xs text-[#4A5450] leading-relaxed">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

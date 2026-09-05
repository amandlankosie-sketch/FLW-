import React, { useState } from 'react';
import { Search, BellRing, MessageSquare, CheckCircle2, Clock, Plane, ArrowRight, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const TrackingUpdates: React.FC = () => {
  const [trackingInput, setTrackingInput] = useState('');
  const [activeTrackingNumber, setActiveTrackingNumber] = useState('FLW-2026-48291');
  const [isSearching, setIsSearching] = useState(false);

  const trackingEvents = [
    {
      status: 'Item Procured & Inspected',
      location: 'Shenzhen Tech Warehouse, China',
      timestamp: 'Today, 09:30 AM',
      description: 'Factory sealed box inspected. Camera, screen, battery cycle and serial numbers verified. Repackaged into air-freight shockproof container.',
      completed: true,
      current: false,
    },
    {
      status: 'China Export Clearance & Cargo Boarding',
      location: 'Shenzhen Bao\'an International (SZX)',
      timestamp: 'Yesterday, 14:15 PM',
      description: 'Handed over to direct air freight carrier. Airway bill assigned: FLW-CX-7782SA.',
      completed: true,
      current: false,
    },
    {
      status: 'International Transit Across Indian Ocean',
      location: 'En Route to South Africa (Airway Flight)',
      timestamp: 'In Progress',
      description: 'Scheduled flight arrival at OR Tambo International Cargo Terminal (JNB).',
      completed: true,
      current: true,
    },
    {
      status: 'South African Customs & ICASA Clearance',
      location: 'OR Tambo (JNB) Bonded Warehouse',
      timestamp: 'Estimated Tomorrow',
      description: 'FLW. customs broker handles clearance and SARS customs entry.',
      completed: false,
      current: false,
    },
    {
      status: 'Doorstep Courier Handover',
      location: 'Final Delivery Address, South Africa',
      timestamp: 'Estimated within 3–4 days',
      description: 'Dispatched via Express Courier with OTP security PIN sent to your phone.',
      completed: false,
      current: false,
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingInput.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setActiveTrackingNumber(trackingInput.trim().toUpperCase());
      setIsSearching(false);
    }, 400);
  };

  return (
    <section id="tracking-updates" className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF8F5] scroll-mt-24">
      {/* Background organic shape */}
      <div className="absolute top-1/3 right-[-100px] w-96 h-96 bg-[#0D3328]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-[-80px] w-96 h-96 bg-[#25634A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <BellRing className="w-3.5 h-3.5 text-[#25634A]" />
            <span>End-to-End Visibility</span>
          </div>

          {/* Heading required by prompt */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3328] tracking-tight mb-4">
            TRACKING & UPDATES.
          </h2>

          {/* Prompt Supporting text */}
          <p className="text-base sm:text-xl text-[#3E4743] leading-relaxed">
            Customers receive regular status updates from the moment their items are sourced in
            China until they arrive safely in South Africa.
          </p>
        </div>

        {/* Tracking Simulator Card */}
        <div className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.75rem] p-6 sm:p-10 shadow-xl max-w-4xl mx-auto">
          
          {/* Tracking Search Form */}
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row items-center gap-3 mb-8">
            <div className="relative flex-1 w-full">
              <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Enter FLW Order Number (e.g. FLW-2026-48291)"
                value={trackingInput}
                onChange={(e) => setTrackingInput(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-[#EAE5DC]/60 border border-[#0D3328]/15 text-sm text-[#0D3328] placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="w-full sm:w-auto px-7 py-3 rounded-full bg-[#0D3328] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#08221B] transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              {isSearching ? 'Locating...' : 'Track Package'}
            </button>
          </form>

          {/* Current Package Overview Banner */}
          <div className="bg-[#E8F1EC] rounded-3xl p-5 mb-8 flex flex-wrap items-center justify-between gap-4 border border-[#0D3328]/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0D3328] text-white flex items-center justify-center font-bold">
                <Plane className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#25634A] block">
                  Active Sourcing Shipment
                </span>
                <span className="text-base font-black text-[#0D3328] font-mono">
                  {activeTrackingNumber}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-[#0D3328]">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>In Transit: Day 4 of 7–10 Days</span>
            </div>
          </div>

          {/* Timeline Milestones */}
          <div className="space-y-6 relative before:absolute before:left-5 before:top-3 before:bottom-3 before:w-0.5 before:bg-[#0D3328]/15">
            {trackingEvents.map((evt, idx) => (
              <div key={idx} className="relative flex items-start gap-4 sm:gap-6 pl-1">
                {/* Node dot */}
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2 transition-all ${
                    evt.current
                      ? 'bg-[#25634A] text-white border-white ring-4 ring-emerald-200'
                      : evt.completed
                      ? 'bg-[#0D3328] text-white border-[#0D3328]'
                      : 'bg-[#FAF8F5] text-neutral-300 border-neutral-300'
                  }`}
                >
                  {evt.completed ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    <Clock className="w-4 h-4 text-neutral-400" />
                  )}
                </div>

                {/* Event Content */}
                <div className="flex-1 bg-[#FAF8F5] border border-[#0D3328]/10 rounded-2xl p-4 shadow-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h4 className="text-sm font-bold text-[#0D3328]">
                      {evt.status}
                    </h4>
                    <span className="text-[11px] font-semibold text-[#5A6762] bg-[#EAE5DC]/60 px-2.5 py-0.5 rounded-full w-fit">
                      {evt.timestamp}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-[#25634A] block mb-1">
                    📍 {evt.location}
                  </span>
                  <p className="text-xs text-[#4A5450] leading-relaxed">
                    {evt.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp / SMS Notification Notice */}
          <div className="mt-8 pt-6 border-t border-[#0D3328]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#3E4743]">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#25634A]" />
              <span>Real-time WhatsApp tracking pings dispatched on every milestone.</span>
            </div>
            <span className="font-bold text-[#0D3328]">
              Automated South African Delivery Alerts
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};

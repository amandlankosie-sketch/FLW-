import React from 'react';
import { Sparkles, ArrowUp, Phone, Mail, MessageCircle, ExternalLink } from 'lucide-react';
import { SOCIAL_CONFIG } from './ContactSection';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Delivery Info', href: '#delivery-info' },
    { name: 'Pricing', href: '#pricing-info' },
    { name: 'Tracking', href: '#tracking-updates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="pt-16 pb-12 bg-[#FAF8F5] border-t border-[#0D3328]/15 relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0D3328]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#0D3328]/10">
          
          {/* Brand Col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-[#0D3328] text-[#FAF8F5] flex items-center justify-center font-black text-xl shadow-sm">
                F
              </div>
              <span className="text-3xl font-black text-[#0D3328] tracking-tight">
                FLW<span className="text-[#25634A]">.</span>
              </span>
            </div>

            {/* Tagline as specified in prompt */}
            <p className="text-sm font-bold text-[#0D3328] tracking-wide">
              Sourcing from China to South Africa.
            </p>

            <p className="text-xs text-[#525E59] leading-relaxed max-w-sm">
              Discover products or request what you want, and let FLW. handle the sourcing,
              logistics, quality inspection, customs clearance, and journey from China to South Africa.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#0D3328] pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F1EC]">
                🇨🇳 Shenzhen / Guangzhou Hub
              </span>
              <span>➔</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F1EC]">
                🇿🇦 South Africa Doorstep
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0D3328]">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#4A5450] hover:text-[#0D3328] transition-colors font-medium hover:underline underline-offset-4"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 4 Official Communication Channels */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-[#0D3328]">
              Connect & Order (4 Direct Channels)
            </h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {/* WhatsApp */}
              <a
                href={SOCIAL_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#EAE5DC]/60 hover:bg-[#EAE5DC] text-[#0D3328] font-semibold transition-all hover:scale-102"
              >
                <div className="w-8 h-8 rounded-xl bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs">WA</span>
                </div>
                <div className="overflow-hidden">
                  <span className="block font-bold truncate">WhatsApp</span>
                  <span className="text-[11px] text-[#55615D] block truncate">{SOCIAL_CONFIG.whatsappNumber}</span>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#EAE5DC]/60 hover:bg-[#EAE5DC] text-[#0D3328] font-semibold transition-all hover:scale-102"
              >
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#FD1D1D] to-[#405DE6] text-white flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-xs">IG</span>
                </div>
                <div className="overflow-hidden">
                  <span className="block font-bold truncate">Instagram (DM)</span>
                  <span className="text-[11px] text-[#55615D] block truncate">{SOCIAL_CONFIG.instagramHandle}</span>
                </div>
              </a>

              {/* Call Hotline */}
              <a
                href={SOCIAL_CONFIG.callTel}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#EAE5DC]/60 hover:bg-[#EAE5DC] text-[#0D3328] font-semibold transition-all hover:scale-102"
              >
                <div className="w-8 h-8 rounded-xl bg-[#0D3328] text-emerald-300 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-bold truncate">Phone Call</span>
                  <span className="text-[11px] text-[#55615D] block truncate">{SOCIAL_CONFIG.callNumber}</span>
                </div>
              </a>

              {/* Email Desk */}
              <a
                href={SOCIAL_CONFIG.emailUrl}
                className="flex items-center gap-3 p-3 rounded-2xl bg-[#EAE5DC]/60 hover:bg-[#EAE5DC] text-[#0D3328] font-semibold transition-all hover:scale-102"
              >
                <div className="w-8 h-8 rounded-xl bg-amber-700 text-white flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="block font-bold truncate">Direct Email</span>
                  <span className="text-[11px] text-[#55615D] block truncate">{SOCIAL_CONFIG.supportEmail}</span>
                </div>
              </a>
            </div>

            <p className="text-[11px] text-[#63726C] italic pt-1">
              Instagram: DM for order • Real unboxings, delivery reviews, and product arrivals.
            </p>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#525E59]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} FLW. Sourcing from China to South Africa.</span>
            <span>•</span>
            <span className="bg-[#EAE5DC]/80 px-2 py-0.5 rounded-full font-semibold text-[#0D3328]">
              Direct Sourcing
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-bold text-[#0D3328] hover:text-[#25634A] transition-colors cursor-pointer bg-[#EAE5DC]/60 hover:bg-[#EAE5DC] px-4 py-2 rounded-full"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

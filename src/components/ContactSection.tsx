import React, { useState } from 'react';
import { Send, Check, MapPin, Mail, Phone, Clock, Sparkles, PhoneCall, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { TickleText } from './TickleText';

// ====================================================
// CONTACT & SOCIAL MEDIA CONFIGURATION
// ====================================================
export const SOCIAL_CONFIG = {
  instagramHandle: '@_flwofficial',
  instagramUrl: 'https://instagram.com/_flwofficial',
  whatsappNumber: '+27 76 683 1418',
  whatsappRawNumber: '27766831418',
  whatsappUrl: 'https://wa.me/27766831418?text=Hello%20FLW.%20Team,%20I%20would%20like%20to%20inquire%20about%20sourcing%20products%20from%20China',
  callNumber: '073 164 5330',
  callTel: 'tel:0731645330',
  supportEmail: 'cebilesekese@gmail.com',
  emailUrl: 'mailto:cebilesekese@gmail.com?subject=FLW.%20China%20Sourcing%20Inquiry',
  operatingHours: 'Mon – Fri: 08:00 – 18:00 SAST | Sat: 09:00 – 14:00',
  locations: 'Johannesburg, South Africa & Shenzhen, Guangdong, China',
};

// Recognizable Instagram Icon with clean SVG styling
const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

// Recognizable WhatsApp Icon with clean SVG styling
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

export const ContactSection: React.FC = () => {
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !contactInfo) return;
    setFormSent(true);
    setTimeout(() => {
      setName('');
      setContactInfo('');
      setMessage('');
      setFormSent(false);
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 relative overflow-hidden bg-[#FAF8F5] scroll-mt-24">
      {/* Soft Background Radial */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-[#0D3328]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#25634A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with interactive tickle animation */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8F1EC] text-[#0D3328] text-xs font-bold uppercase tracking-wider mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#25634A]" />
            <span>South Africa & China Direct Desk</span>
          </div>

          {/* User specifically requested: As cursor moves over CONNECT WITH FLW, the letters should move / tickle */}
          <div className="cursor-default">
            <TickleText
              text="CONNECT WITH FLW."
              as="h2"
              className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0D3328] tracking-tight mb-4 select-none"
            />
          </div>

          <p className="text-base sm:text-lg text-[#3E4743] leading-relaxed">
            Have a question about a product, import customs, or custom sourcing?
            Connect through WhatsApp, Instagram, direct phone call, or email for immediate answers and personalized quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: 4 Distinctive Interactive Communication Cards (WhatsApp, IG, Call, Email) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            
            {/* 2x2 Grid of Dope Contact Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* 1. WHATSAPP CARD */}
              <motion.a
                id="contact-channel-whatsapp"
                href={SOCIAL_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#FAF8F5] border-2 border-[#25D366]/30 hover:border-[#25D366] rounded-[2.25rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#25D366]/10 rounded-bl-[3rem] pointer-events-none group-hover:bg-[#25D366]/20 transition-colors" />
                
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{
                        rotate: [0, -14, 14, -8, 8, 0],
                        scale: 1.15,
                        transition: { duration: 0.5 },
                      }}
                      className="w-13 h-13 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shadow-md group-hover:shadow-green-500/30 transition-shadow"
                    >
                      <WhatsAppIcon className="w-7 h-7" />
                    </motion.div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100/90 px-3 py-1 rounded-full">
                      Quickest Chat
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-[#25D366] block mb-0.5">
                    WhatsApp Sourcing
                  </span>
                  <h3 className="text-xl font-black text-[#0D3328] group-hover:text-emerald-800 transition-colors">
                    {SOCIAL_CONFIG.whatsappNumber}
                  </h3>
                  <p className="text-xs text-[#525E59] mt-1.5 leading-relaxed">
                    Fast quotes, send product photos & live airway bill tracking alerts.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0D3328]/10 flex items-center justify-between text-xs font-bold text-[#25D366] group-hover:translate-x-0.5 transition-transform">
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>

              {/* 2. INSTAGRAM CARD */}
              <motion.a
                id="contact-channel-instagram"
                href={SOCIAL_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#FAF8F5] border-2 border-[#E1306C]/30 hover:border-[#E1306C] rounded-[2.25rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E1306C]/10 rounded-bl-[3rem] pointer-events-none group-hover:bg-[#E1306C]/20 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{
                        rotate: [0, 15, -15, 8, -8, 0],
                        scale: 1.15,
                        transition: { duration: 0.5 },
                      }}
                      className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#405DE6] text-white flex items-center justify-center shadow-md group-hover:shadow-pink-500/30 transition-shadow"
                    >
                      <InstagramIcon className="w-7 h-7" />
                    </motion.div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-pink-800 bg-pink-100/90 px-3 py-1 rounded-full">
                      DM for Order
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-[#E1306C] block mb-0.5">
                    Instagram Community
                  </span>
                  <h3 className="text-xl font-black text-[#0D3328] group-hover:text-[#912048] transition-colors">
                    {SOCIAL_CONFIG.instagramHandle}
                  </h3>
                  <p className="text-xs text-[#525E59] mt-1.5 leading-relaxed">
                    <strong className="text-[#0D3328]">DM for order.</strong> Real unboxings, delivery reviews, and product arrivals.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0D3328]/10 flex items-center justify-between text-xs font-bold text-[#E1306C] group-hover:translate-x-0.5 transition-transform">
                  <span>Visit Instagram</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>

              {/* 3. DIRECT CALL OPTION (User requested: "call 0731645330... Make it dope") */}
              <motion.a
                id="contact-channel-call"
                href={SOCIAL_CONFIG.callTel}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#FAF8F5] border-2 border-[#0D3328]/25 hover:border-[#0D3328] rounded-[2.25rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0D3328]/5 rounded-bl-[3rem] pointer-events-none group-hover:bg-[#0D3328]/15 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{
                        rotate: [0, -18, 18, -12, 12, 0],
                        scale: 1.15,
                        transition: { duration: 0.45 },
                      }}
                      className="w-13 h-13 rounded-2xl bg-[#0D3328] text-white flex items-center justify-center shadow-md group-hover:shadow-emerald-950/30 transition-shadow"
                    >
                      <PhoneCall className="w-7 h-7 text-emerald-300" />
                    </motion.div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#0D3328] bg-[#E8F1EC] px-3 py-1 rounded-full">
                      Voice Call
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-[#25634A] block mb-0.5">
                    Direct Phone Line
                  </span>
                  <h3 className="text-xl font-black text-[#0D3328] group-hover:text-emerald-900 transition-colors">
                    {SOCIAL_CONFIG.callNumber}
                  </h3>
                  <p className="text-xs text-[#525E59] mt-1.5 leading-relaxed">
                    Speak directly with our local South African sourcing team for urgent questions.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0D3328]/10 flex items-center justify-between text-xs font-bold text-[#0D3328] group-hover:translate-x-0.5 transition-transform">
                  <span>Call 073 164 5330</span>
                  <Phone className="w-4 h-4 text-[#25634A]" />
                </div>
              </motion.a>

              {/* 4. EMAIL OPTION (User requested: "email cebilesekese@gmail.com") */}
              <motion.a
                id="contact-channel-email"
                href={SOCIAL_CONFIG.emailUrl}
                whileHover={{
                  scale: 1.03,
                  y: -4,
                  transition: { type: 'spring', stiffness: 400, damping: 12 },
                }}
                whileTap={{ scale: 0.97 }}
                className="group relative bg-[#FAF8F5] border-2 border-amber-600/25 hover:border-amber-700 rounded-[2.25rem] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-bl-[3rem] pointer-events-none group-hover:bg-amber-500/20 transition-colors" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      whileHover={{
                        y: [-2, -8, 0],
                        scale: 1.15,
                        transition: { duration: 0.4 },
                      }}
                      className="w-13 h-13 rounded-2xl bg-[#0D3328] text-amber-300 flex items-center justify-center shadow-md group-hover:shadow-amber-900/20 transition-shadow"
                    >
                      <Mail className="w-7 h-7" />
                    </motion.div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-900 bg-amber-100/90 px-3 py-1 rounded-full">
                      Official Desk
                    </span>
                  </div>

                  <span className="text-xs font-black uppercase tracking-wider text-amber-700 block mb-0.5">
                    Email Inquiry
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-[#0D3328] truncate group-hover:text-amber-900 transition-colors" title={SOCIAL_CONFIG.supportEmail}>
                    {SOCIAL_CONFIG.supportEmail}
                  </h3>
                  <p className="text-xs text-[#525E59] mt-1.5 leading-relaxed">
                    Ideal for bulk sourcing lists, specification PDFs, and invoice verification.
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#0D3328]/10 flex items-center justify-between text-xs font-bold text-amber-800 group-hover:translate-x-0.5 transition-transform">
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.a>

            </div>

            {/* Quick Sourcing Operations Details Banner */}
            <div className="bg-[#EAE5DC]/60 rounded-[2.25rem] p-5 sm:p-6 border border-[#0D3328]/10 space-y-3 text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#0D3328] flex-shrink-0 mt-0.5" />
                <div className="text-[#3E4743]">
                  <span className="font-bold text-[#0D3328]">Operations: </span>
                  <span>{SOCIAL_CONFIG.locations}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#0D3328] flex-shrink-0 mt-0.5" />
                <div className="text-[#3E4743]">
                  <span className="font-bold text-[#0D3328]">Hours (SAST): </span>
                  <span>{SOCIAL_CONFIG.operatingHours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-5 bg-[#FAF8F5] border border-[#0D3328]/15 rounded-[2.5rem] p-7 sm:p-9 shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-black text-[#0D3328] mb-1.5">
                Send a Direct Sourcing Note
              </h3>
              <p className="text-xs text-[#4A5450] mb-6">
                Drop a quick note and our procurement team will reach out via WhatsApp, call, or email.
              </p>

              {formSent ? (
                <div className="py-12 text-center space-y-3 bg-[#E8F1EC] rounded-3xl p-6 border border-[#0D3328]/15">
                  <div className="w-12 h-12 rounded-full bg-[#0D3328] text-white mx-auto flex items-center justify-center shadow-md">
                    <Check className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0D3328]">
                    Message Received!
                  </h4>
                  <p className="text-xs text-[#3E4743]">
                    Thank you! An FLW sourcing specialist will reply shortly during business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lerato Khumalo"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                      Email or WhatsApp / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="email@domain.com or 07..."
                      value={contactInfo}
                      onChange={(e) => setContactInfo(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>

                  <div>
                    <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                      What would you like to know or source?
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Ask about pricing, models, delivery timelines, or bulk sourcing inquiries..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-full bg-[#0D3328] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#08221B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry to FLW.</span>
                  </motion.button>
                </form>
              )}
            </div>

            {/* Quick Contact Summary Pill */}
            <div className="mt-6 pt-4 border-t border-[#0D3328]/10 text-[11px] text-[#55615D] flex flex-wrap items-center justify-between gap-2">
              <span>Hotline: <strong className="text-[#0D3328]">073 164 5330</strong></span>
              <span>•</span>
              <span>WhatsApp: <strong className="text-[#0D3328]">+27 76 683 1418</strong></span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

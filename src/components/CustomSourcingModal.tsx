import React, { useState } from 'react';
import { X, Sparkles, Send, CheckCircle2, Link as LinkIcon, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SA_PROVINCES } from '../data/products';
import { generateOrderNumber } from '../utils/formatters';

interface CustomSourcingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CustomSourcingModal: React.FC<CustomSourcingModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  const [itemName, setItemName] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [description, setDescription] = useState('');
  const [targetBudget, setTargetBudget] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');
  const [province, setProvince] = useState('Gauteng');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!itemName.trim() || !customerPhone.trim()) return;

    const ticket = generateOrderNumber().replace('FLW-', 'FLW-REQ-');
    setSubmittedTicket(ticket);
  };

  const handleReset = () => {
    setItemName('');
    setProductUrl('');
    setDescription('');
    setTargetBudget('');
    setCustomerName('');
    setCustomerPhone('');
    setCustomerEmail('');
    setSubmittedTicket(null);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D3328]/60 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#FAF8F5] rounded-[2.5rem] shadow-2xl border border-[#0D3328]/15 overflow-hidden z-10 my-8 p-6 sm:p-8"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#0D3328]/10 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#0D3328] text-white flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-emerald-300" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#0D3328]">
                  Custom China Sourcing Request
                </h3>
                <span className="text-xs text-[#525E59]">
                  See it. Want it. We'll source it.
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-[#EAE5DC]/80 hover:bg-[#EAE5DC] text-[#0D3328] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submittedTicket ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#0D3328] text-white mx-auto flex items-center justify-center shadow-lg">
                <CheckCircle2 className="w-8 h-8 text-emerald-300" />
              </div>
              <h4 className="text-2xl font-black text-[#0D3328]">
                Sourcing Request Registered!
              </h4>
              <p className="text-sm text-[#3E4743] max-w-md mx-auto">
                Your ticket number is <strong className="font-mono text-[#0D3328]">{submittedTicket}</strong>.
                Our China procurement desk will check availability in Shenzhen/Guangzhou and send an all-inclusive quote to your WhatsApp within a few hours.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/27766831418?text=${encodeURIComponent(`Hi FLW, I submitted custom sourcing request ${submittedTicket} for ${itemName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#0D3328] text-white font-bold text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                  What item do you want sourced? <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. MacBook Pro M3, Drone, Suede Sneakers, Camera Lens..."
                  value={itemName}
                  onChange={(e) => setItemName(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                />
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                  Link / URL (Taobao, 1688, Alibaba, Nike, or Web Link)
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                  <input
                    type="url"
                    placeholder="https://..."
                    value={productUrl}
                    onChange={(e) => setProductUrl(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+27 82 123 4567"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                    Target Budget (ZAR R)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. R 8,500"
                    value={targetBudget}
                    onChange={(e) => setTargetBudget(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  />
                </div>
                <div>
                  <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                    SA Province
                  </label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  >
                    {SA_PROVINCES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold uppercase tracking-wider text-[#0D3328] mb-1">
                  Specifications, Size, Color, or Details
                </label>
                <textarea
                  rows={2}
                  placeholder="Specify shoe size, storage, color preference, model variant, etc."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#0D3328] text-white font-extrabold text-xs uppercase tracking-wider hover:bg-[#08221B] transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Instant Sourcing Quote</span>
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

import React, { useState } from 'react';
import { CheckCircle2, Copy, Check, Clock, Plane, ShieldCheck, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PlacedOrder } from '../types';
import { formatZAR } from '../utils/formatters';

interface OrderConfirmationModalProps {
  order: PlacedOrder | null;
  onClose: () => void;
}

export const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  order,
  onClose,
}) => {
  if (!order) return null;

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(order.orderNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello FLW. Team, I just generated order ${order.orderNumber} for my sourcing shipment to ${order.customer.city}, ${order.customer.province}. Please provide the pro-forma quote and invoice.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D3328]/70 backdrop-blur-sm transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-[2.5rem] shadow-2xl border border-[#0D3328]/15 overflow-hidden z-10 my-8 p-6 sm:p-10 text-center"
        >
          {/* Success Icon Animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200, delay: 0.1 }}
            className="w-20 h-20 rounded-full bg-[#0D3328] text-white mx-auto flex items-center justify-center shadow-xl mb-6"
          >
            <CheckCircle2 className="w-10 h-10 text-emerald-300" />
          </motion.div>

          {/* Prompt Required Heading */}
          <span className="text-xs font-black uppercase tracking-widest text-[#25634A] block mb-1">
            FLW. Sourcing Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0D3328] tracking-tight mb-2">
            ORDER CREATED
          </h2>
          <p className="text-sm text-[#4A5450] max-w-md mx-auto mb-6">
            Your sourcing request has been registered with our China logistics operations desk.
          </p>

          {/* FLW Order Number Card as specified by prompt */}
          <div className="bg-[#EAE5DC]/80 border-2 border-[#0D3328]/20 rounded-3xl p-6 mb-6 max-w-lg mx-auto shadow-inner">
            <span className="text-xs font-bold uppercase tracking-wider text-[#4A5450] block mb-1.5">
              Your FLW. order number is:
            </span>
            <div className="text-2xl sm:text-3xl font-black tracking-wider text-[#0D3328] mb-4 select-all font-mono">
              {order.orderNumber}
            </div>

            {/* COPY ORDER NUMBER BUTTON */}
            <motion.button
              id="copy-order-number-btn"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0D3328] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#072019] transition-all shadow-sm cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  <span>COPIED TO CLIPBOARD</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>COPY ORDER NUMBER</span>
                </>
              )}
            </motion.button>
          </div>

          {/* CRITICAL EXPLANATION (Payment & Final Confirmation) */}
          <div className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-2xl p-5 mb-6 text-left space-y-3">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#25634A] flex-shrink-0 mt-0.5" />
              <div className="text-xs text-[#3E4743] space-y-1.5">
                <p className="font-bold text-[#0D3328]">
                  Important: Payment & Final Confirmation Notice
                </p>
                <p>
                  Payment and final confirmation will be handled separately. Our South African sourcing team is verifying stock availability and current customs clearance slots with our Chinese suppliers in Shenzhen and Guangzhou.
                </p>
                <p className="text-neutral-500 text-[11px]">
                  • No credit card was charged today.<br />
                  • We will send an official verified pro-forma invoice and tracking registration directly to <strong>{order.customer.email}</strong> and via WhatsApp to <strong>{order.customer.phone}</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Order Summary Snapshot */}
          <div className="bg-[#FAF8F5] rounded-2xl p-4 border border-[#0D3328]/10 text-left text-xs space-y-2 mb-6">
            <div className="flex justify-between font-bold text-[#0D3328]">
              <span>Customer:</span>
              <span>{order.customer.fullName} ({order.customer.city}, {order.customer.province})</span>
            </div>
            <div className="flex justify-between text-[#4A5450]">
              <span>Items Total:</span>
              <span className="font-bold text-[#0D3328]">{formatZAR(order.total)}</span>
            </div>
            <div className="flex justify-between text-[#4A5450]">
              <span>Estimated Delivery:</span>
              <span className="font-semibold text-[#25634A]">7–10 Days to SA</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/27766831418?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm on WhatsApp Now</span>
            </a>

            <button
              onClick={onClose}
              className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0D3328] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#08221B] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Back to Store</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

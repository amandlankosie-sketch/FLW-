import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, MapPin, User, Mail, Phone, Building2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem, OrderCustomerInfo, PlacedOrder } from '../types';
import { SA_PROVINCES } from '../data/products';
import { formatZAR, generateOrderNumber } from '../utils/formatters';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: (order: PlacedOrder) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderPlaced,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<OrderCustomerInfo>({
    fullName: '',
    email: '',
    phone: '',
    province: 'Gauteng',
    city: '',
    streetAddress: '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.city.trim()) errs.city = 'City is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const orderNum = generateOrderNumber();
      const placed: PlacedOrder = {
        orderNumber: orderNum,
        createdAt: new Date().toLocaleDateString('en-ZA', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
        items,
        subtotal,
        shipping: 0,
        total: subtotal,
        customer: formData,
        estimatedDeliveryDate: '7–10 business days from dispatch',
      };

      setIsSubmitting(false);
      onOrderPlaced(placed);
    }, 600);
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

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-[2.5rem] shadow-2xl border border-[#0D3328]/15 overflow-hidden z-10 my-8 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#0D3328]/10 bg-[#FAF8F5]">
            <div>
              <h3 className="text-xl font-black text-[#0D3328]">
                Sourcing Order Confirmation
              </h3>
              <span className="text-xs text-[#525E59]">
                Step 1 of 2: South African Delivery Details
              </span>
            </div>

            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#EAE5DC]/80 hover:bg-[#EAE5DC] text-[#0D3328] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[80vh]">
            
            {/* Prototype Notice */}
            <div className="bg-[#E8F1EC] rounded-2xl p-4 border border-[#0D3328]/10 flex items-start gap-3 text-xs text-[#0D3328]">
              <ShieldCheck className="w-4 h-4 text-[#25634A] flex-shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold block">Prototype Order Flow</strong>
                <span>
                  No payment is processed on this page. FLW. checks supplier inventory in China and confirms your order with a verified pro-forma invoice before any payment is arranged.
                </span>
              </div>
            </div>

            {/* Order Summary Snippet */}
            <div className="bg-[#EAE5DC]/50 rounded-2xl p-4 border border-[#0D3328]/10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D3328]">
                  Order Items ({items.length})
                </span>
                <span className="text-sm font-black text-[#0D3328]">
                  {formatZAR(subtotal)}
                </span>
              </div>
              <div className="text-xs text-[#525E59] space-y-1 max-h-24 overflow-y-auto">
                {items.map((it) => (
                  <div key={it.id} className="flex justify-between">
                    <span>
                      {it.quantity}x {it.productName} ({it.model}, {it.storage})
                    </span>
                    <span className="font-semibold text-[#0D3328]">
                      {formatZAR(it.unitPrice * it.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fields required by prompt: Full Name, Email, Phone Number, Province, City */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase tracking-wider text-[#0D3328]">
                Delivery Information
              </h4>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#697772] absolute left-4 top-3.5" />
                  <input
                    type="text"
                    required
                    id="checkout-fullname-input"
                    placeholder="e.g. Sipho Ndlovu"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#697772] absolute left-4 top-3.5" />
                    <input
                      type="email"
                      required
                      id="checkout-email-input"
                      placeholder="sipho@example.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                    Phone Number (WhatsApp) <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#697772] absolute left-4 top-3.5" />
                    <input
                      type="tel"
                      required
                      id="checkout-phone-input"
                      placeholder="e.g. +27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-600 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Province & City */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                    Province <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#697772] absolute left-4 top-3.5" />
                    <select
                      id="checkout-province-select"
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] focus:outline-none focus:ring-2 focus:ring-[#0D3328] appearance-none"
                    >
                      {SA_PROVINCES.map((prov) => (
                        <option key={prov} value={prov}>
                          {prov}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                    City / Town <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#697772] absolute left-4 top-3.5" />
                    <input
                      type="text"
                      required
                      id="checkout-city-input"
                      placeholder="e.g. Johannesburg / Cape Town"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                    />
                  </div>
                  {errors.city && <p className="text-xs text-red-600 mt-1">{errors.city}</p>}
                </div>
              </div>

              {/* Street Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#0D3328] mb-1.5">
                  Street Address & Suburb (Optional for initial quote)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 14 Sandton Drive, Sandton"
                  value={formData.streetAddress}
                  onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF8F5] border border-[#0D3328]/20 text-sm text-[#0D3328] placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#0D3328]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#0D3328]/10">
              <motion.button
                type="submit"
                id="submit-order-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-full bg-[#0D3328] text-[#FAF8F5] font-extrabold text-sm uppercase tracking-wider hover:bg-[#08221B] transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Generating FLW Order Number...</span>
                ) : (
                  <>
                    <span>Generate Sourcing Order ({formatZAR(subtotal)})</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </motion.button>
              <p className="text-[11px] text-center text-[#55615D] mt-2">
                No charges occur now. Sourcing quotation will be generated immediately.
              </p>
            </div>

          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

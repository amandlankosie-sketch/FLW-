import React from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShieldCheck, Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CartItem } from '../types';
import { formatZAR } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onContinueToOrder: () => void;
  onStartShopping: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onContinueToOrder,
  onStartShopping,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0D3328]/50 backdrop-blur-sm transition-opacity"
        />

        {/* Slide-out Drawer Panel */}
        <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="w-screen max-w-md sm:max-w-lg bg-[#FAF8F5] shadow-2xl flex flex-col border-l border-[#0D3328]/15 rounded-l-[2.5rem] overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 border-b border-[#0D3328]/10 flex items-center justify-between bg-[#FAF8F5] z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#0D3328] text-white flex items-center justify-center shadow-sm">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-[#0D3328]">
                    Your Sourcing Cart
                  </h3>
                  <span className="text-xs text-[#525E59] font-medium">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} ready for air dispatch
                  </span>
                </div>
              </div>

              <button
                id="close-cart-drawer-btn"
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-[#EAE5DC]/80 hover:bg-[#EAE5DC] text-[#0D3328] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Air Courier Banner */}
            <div className="bg-[#E8F1EC] px-6 py-2.5 flex items-center justify-between text-xs text-[#0D3328] font-bold border-b border-[#0D3328]/10">
              <span className="flex items-center gap-1.5">
                <Plane className="w-4 h-4 text-[#25634A]" />
                China ➔ South Africa Direct Air Transit
              </span>
              <span className="bg-[#0D3328] text-white px-2 py-0.5 rounded-full text-[10px] uppercase tracking-wider">
                All-Inclusive
              </span>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-[#EAE5DC] flex items-center justify-center text-[#0D3328] mb-4">
                    <ShoppingBag className="w-9 h-9" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0D3328] mb-2">
                    Your cart is empty
                  </h4>
                  <p className="text-sm text-[#525E59] max-w-xs mb-6">
                    Browse our Apple, Samsung, and fashion catalog to start your sourcing journey from China.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onStartShopping();
                    }}
                    className="px-6 py-3 rounded-full bg-[#0D3328] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#08221B] transition-colors shadow-md"
                  >
                    Explore Products
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-[#FAF8F5] border border-[#0D3328]/15 rounded-3xl p-4 shadow-sm hover:shadow-md transition-shadow flex gap-4 items-center"
                  >
                    {/* Thumbnail */}
                    <div className="w-20 h-20 rounded-2xl bg-neutral-100 p-2 flex items-center justify-center flex-shrink-0 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.productName}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#25634A]">
                            {item.brand}
                          </span>
                          <h4 className="text-base font-bold text-[#0D3328] truncate">
                            {item.productName}
                          </h4>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-neutral-400 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Selected Configurations */}
                      <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[11px] text-[#4A5450]">
                        <span className="bg-[#EAE5DC]/70 px-2 py-0.5 rounded-full font-semibold">
                          {item.model}
                        </span>
                        <span className="bg-[#EAE5DC]/70 px-2 py-0.5 rounded-full font-semibold">
                          {item.storage}
                        </span>
                        {item.color && (
                          <span className="text-[11px] text-neutral-500">
                            {item.color}
                          </span>
                        )}
                      </div>

                      {/* Quantity & Item Subtotal */}
                      <div className="flex items-center justify-between mt-3 pt-2 border-t border-[#0D3328]/10">
                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 bg-[#FAF8F5] border border-[#0D3328]/20 rounded-full px-2 py-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[#0D3328] hover:bg-[#EAE5DC] cursor-pointer"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-[#0D3328] min-w-[14px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full flex items-center justify-center text-[#0D3328] hover:bg-[#EAE5DC] cursor-pointer"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-sm font-black text-[#0D3328]">
                            {formatZAR(item.unitPrice * item.quantity)}
                          </span>
                          {item.quantity > 1 && (
                            <span className="block text-[10px] text-neutral-500">
                              {formatZAR(item.unitPrice)} each
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>

            {/* Drawer Footer with Subtotal & CONTINUE TO ORDER */}
            {items.length > 0 && (
              <div className="p-6 bg-[#FAF8F5] border-t border-[#0D3328]/15 space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#4A5450]">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-[#0D3328]">{formatZAR(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#4A5450]">
                    <span>International Transit & Clearance</span>
                    <span className="font-bold text-[#25634A]">All-Inclusive</span>
                  </div>
                  <div className="flex justify-between text-[#4A5450]">
                    <span>Estimated SA Doorstep Delivery</span>
                    <span className="font-semibold text-[#0D3328]">7–10 Days</span>
                  </div>

                  <div className="pt-2 border-t border-[#0D3328]/10 flex justify-between items-baseline">
                    <span className="text-sm font-bold text-[#0D3328]">Total Quote</span>
                    <span className="text-2xl font-black text-[#0D3328]">
                      {formatZAR(subtotal)}
                    </span>
                  </div>
                </div>

                {/* CONTINUE TO ORDER Button */}
                <motion.button
                  id="cart-continue-to-order-btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    onClose();
                    onContinueToOrder();
                  }}
                  className="w-full py-4 px-6 rounded-full bg-[#0D3328] text-[#FAF8F5] font-extrabold text-sm uppercase tracking-wider hover:bg-[#08221B] transition-colors shadow-lg flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span>CONTINUE TO ORDER</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-[#55615D]">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#25634A]" />
                  <span>Prototype checkout • No payment required today</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

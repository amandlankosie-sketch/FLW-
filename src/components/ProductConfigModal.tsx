import React, { useState } from 'react';
import { X, Check, ShoppingBag, Shield, Clock, Plane, Info, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CartItem } from '../types';
import { formatZAR, calculateItemPrice } from '../utils/formatters';

interface ProductConfigModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (item: CartItem) => void;
  onOpenCart: () => void;
}

export const ProductConfigModal: React.FC<ProductConfigModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCart,
}) => {
  if (!product) return null;

  // Selected state
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name ?? 'Default');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [justAdded, setJustAdded] = useState(false);

  // Active gallery images for the selected color
  const activeColorImages: string[] = (product.colorImages && product.colorImages[selectedColor])
    ? product.colorImages[selectedColor]
    : [product.image];

  const currentImage = activeColorImages[activeImageIndex] || activeColorImages[0] || product.image;

  const handleSelectColor = (colorName: string) => {
    setSelectedColor(colorName);
    setActiveImageIndex(0); // Reset gallery dock view to front/first angle
  };

  // Missing requirements helper
  const missingSelections: string[] = [];
  if (!selectedModel) missingSelections.push('Model');
  if (!selectedStorage) missingSelections.push(product.category === 'Electronics' ? 'Storage' : 'Packaging');

  const isSelectionComplete = missingSelections.length === 0;

  // Calculated current price (including color price differences)
  const currentPrice = isSelectionComplete
    ? calculateItemPrice(
        product.basePrice,
        selectedModel!,
        selectedStorage!,
        product.modelPriceMultiplier,
        product.storagePriceAddon,
        selectedColor,
        product.colorPriceAddon
      )
    : calculateItemPrice(
        product.basePrice,
        product.models[0] || 'Standard',
        product.storageOptions[0] || '128GB',
        product.modelPriceMultiplier,
        product.storagePriceAddon,
        selectedColor,
        product.colorPriceAddon
      );

  const handleAddToCart = () => {
    if (!isSelectionComplete || !selectedModel || !selectedStorage) return;

    const cartItem: CartItem = {
      id: `${product.id}-${selectedModel}-${selectedStorage}-${selectedColor}`.toLowerCase().replace(/\s+/g, '-'),
      productId: product.id,
      productName: product.name,
      brand: product.brand,
      model: selectedModel,
      storage: selectedStorage,
      color: selectedColor,
      unitPrice: currentPrice,
      quantity: 1,
      image: currentImage,
    };

    onAddToCart(cartItem);
    setJustAdded(true);

    setTimeout(() => {
      setJustAdded(false);
    }, 4000);
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

        {/* Modal Window with Organic Curved Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl bg-[#FAF8F5] rounded-[2.5rem] shadow-2xl border border-[#0D3328]/15 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Top Bar with Close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#0D3328]/10 bg-[#FAF8F5] sticky top-0 z-20">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0D3328] bg-[#E8F1EC] px-3 py-1 rounded-full">
                Sourcing Spec Configurator
              </span>
              <span className="text-xs font-medium text-[#4A5450] hidden sm:inline-block">
                China ➔ South Africa Direct
              </span>
            </div>

            <button
              id="close-product-modal-btn"
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-[#EAE5DC]/80 hover:bg-[#EAE5DC] text-[#0D3328] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close product view"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body (Scrollable with ample padding) */}
          <div className="overflow-y-auto p-6 sm:p-10 flex-1">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
              
              {/* Left Column: Product Visuals, Selection Dock & Sourcing Badges */}
              <div className="md:col-span-5 flex flex-col gap-4">
                {/* Main Product Image with Viewport Navigation */}
                <div className="relative w-full h-72 sm:h-80 rounded-3xl bg-neutral-100/90 p-4 flex items-center justify-center shadow-inner overflow-hidden group border border-[#0D3328]/10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={currentImage}
                      alt={`${product.name} ${selectedColor} view ${activeImageIndex + 1}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.2 }}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain drop-shadow-xl select-none"
                    />
                  </AnimatePresence>

                  {/* Brand & Color Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="bg-[#0D3328] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.brand}
                    </span>
                    <span className="bg-[#FAF8F5]/90 backdrop-blur-md text-[#0D3328] text-xs font-bold px-2.5 py-1 rounded-full border border-[#0D3328]/10 shadow-sm">
                      {selectedColor}
                    </span>
                  </div>

                  {/* Counter Pill */}
                  <div className="absolute top-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-md text-[#0D3328] text-[11px] font-bold px-2.5 py-1 rounded-full border border-[#0D3328]/10 shadow-sm">
                    {activeImageIndex + 1} / {activeColorImages.length}
                  </div>

                  {/* Left / Right Chevron Controls for Multi-View Galleried Items */}
                  {activeColorImages.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : activeColorImages.length - 1))}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#0D3328] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveImageIndex((prev) => (prev < activeColorImages.length - 1 ? prev + 1 : 0))}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#0D3328] flex items-center justify-center shadow-md transition-all cursor-pointer opacity-80 hover:opacity-100 hover:scale-105"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </>
                  )}

                  <div className="absolute bottom-3 right-3 bg-[#FAF8F5]/90 backdrop-blur-md text-[#0D3328] text-xs font-bold px-3 py-1 rounded-full border border-[#0D3328]/10 shadow-sm">
                    {product.deliveryDays}
                  </div>
                </div>

                {/* Amazon & Takealot Style Selection Dock Below Phone */}
                {activeColorImages.length > 1 && (
                  <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-[#0D3328]/15 shadow-sm">
                    <div className="flex items-center justify-between px-1 mb-2.5">
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#0D3328]">
                        Available Angles ({activeColorImages.length} variants) • {selectedColor}
                      </span>
                      <span className="text-[10px] font-bold text-[#25634A]">
                        Tap angle to switch
                      </span>
                    </div>

                    <div className={`grid gap-2.5 ${activeColorImages.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                      {activeColorImages.map((imgUrl, idx) => {
                        const isSelected = activeImageIndex === idx;
                        const angleLabel = imgUrl.includes('front-back')
                          ? 'Front & Back'
                          : imgUrl.includes('angled')
                          ? 'Angled 3/4 View'
                          : imgUrl.includes('select')
                          ? 'Direct Back View'
                          : `Angle ${idx + 1}`;

                        return (
                          <button
                            key={imgUrl + idx}
                            type="button"
                            id={`angle-thumbnail-${idx}`}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`group relative rounded-xl bg-white p-2 flex flex-col items-center justify-between cursor-pointer transition-all duration-200 border ${
                              isSelected
                                ? 'border-[#0D3328] ring-2 ring-[#0D3328] ring-offset-1 scale-[1.02] shadow-sm bg-[#FAF8F5]'
                                : 'border-[#0D3328]/15 hover:border-[#0D3328]/40 hover:bg-neutral-50 opacity-75 hover:opacity-100'
                            }`}
                            title={angleLabel}
                          >
                            <div className="w-full h-14 flex items-center justify-center mb-1">
                              <img
                                src={imgUrl}
                                alt={`${selectedColor} - ${angleLabel}`}
                                className="w-full h-full object-contain drop-shadow-xs"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                            <span className={`text-[10px] font-bold tracking-tight text-center leading-tight ${
                              isSelected ? 'text-[#0D3328]' : 'text-[#4A5450]'
                            }`}>
                              {angleLabel}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Logistics Assurance Card */}
                <div className="bg-[#EAE5DC]/60 rounded-3xl p-5 border border-[#0D3328]/10 space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0D3328]">
                    FLW. Sourcing Guarantee
                  </h4>
                  <ul className="space-y-2 text-xs text-[#3E4743]">
                    <li className="flex items-center gap-2">
                      <Plane className="w-3.5 h-3.5 text-[#25634A] flex-shrink-0" />
                      <span>Direct air express from {product.sourcingOrigin}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-3.5 h-3.5 text-[#25634A] flex-shrink-0" />
                      <span>Pre-flight inspection & certified factory-sealed</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-[#25634A] flex-shrink-0" />
                      <span>Customs, duties & courier to doorstep included</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Selections & Config */}
              <div className="md:col-span-7 flex flex-col justify-between">
                <div>
                  {/* Title & Tagline */}
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0D3328] tracking-tight mb-1">
                    {product.name}
                  </h2>
                  <p className="text-sm text-[#4A5450] mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* 1. MODEL SELECTION */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-black uppercase tracking-wider text-[#0D3328] flex items-center gap-1.5">
                        <span>1. Choose Model</span>
                        <span className="text-red-500">*</span>
                      </label>
                      {selectedModel ? (
                        <span className="text-xs font-bold text-[#25634A] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> {selectedModel}
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {product.models.map((model) => {
                        const isSelected = selectedModel === model;
                        return (
                          <button
                            key={model}
                            type="button"
                            id={`model-option-${model.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setSelectedModel(model)}
                            className={`p-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-center cursor-pointer border ${
                              isSelected
                                ? 'bg-[#0D3328] text-[#FAF8F5] border-[#0D3328] shadow-md scale-[1.02]'
                                : 'bg-[#FAF8F5] text-[#2F3734] border-[#0D3328]/15 hover:border-[#0D3328] hover:bg-[#EAE5DC]/50'
                            }`}
                          >
                            {model}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 2. STORAGE / TIER SELECTION */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-black uppercase tracking-wider text-[#0D3328] flex items-center gap-1.5">
                        <span>2. Choose {product.category === 'Electronics' ? 'Storage Capacity' : 'Package Edition'}</span>
                        <span className="text-red-500">*</span>
                      </label>
                      {selectedStorage ? (
                        <span className="text-xs font-bold text-[#25634A] flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" /> {selectedStorage}
                        </span>
                      ) : (
                        <span className="text-xs font-medium text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded-full">
                          Required
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-3 gap-2.5">
                      {product.storageOptions.map((storage) => {
                        const isSelected = selectedStorage === storage;
                        const addon = product.storagePriceAddon[storage] ?? 0;
                        return (
                          <button
                            key={storage}
                            type="button"
                            id={`storage-option-${storage.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setSelectedStorage(storage)}
                            className={`p-3 rounded-2xl text-xs sm:text-sm font-bold transition-all text-center flex flex-col items-center justify-center gap-1 cursor-pointer border ${
                              isSelected
                                ? 'bg-[#0D3328] text-[#FAF8F5] border-[#0D3328] shadow-md scale-[1.02]'
                                : 'bg-[#FAF8F5] text-[#2F3734] border-[#0D3328]/15 hover:border-[#0D3328] hover:bg-[#EAE5DC]/50'
                            }`}
                          >
                            <span>{storage}</span>
                            {addon > 0 && (
                              <span className={`text-[10px] ${isSelected ? 'text-emerald-200' : 'text-neutral-500'}`}>
                                +{formatZAR(addon)}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* 3. COLOR SELECTION */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2.5">
                      <label className="text-xs font-black uppercase tracking-wider text-[#0D3328]">
                        3. Colorway: <span className="font-bold text-[#25634A]">{selectedColor}</span>
                      </label>
                      {product.colorPriceAddon && product.colorPriceAddon[selectedColor] !== undefined && (
                        <span className="text-xs font-semibold text-[#4A5450]">
                          {product.colorPriceAddon[selectedColor] > 0
                            ? `+${formatZAR(product.colorPriceAddon[selectedColor])}`
                            : 'Standard colorway'}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5">
                      {product.colors.map((color) => {
                        const isSelected = selectedColor === color.name;
                        const addon = (product.colorPriceAddon && product.colorPriceAddon[color.name]) || 0;
                        return (
                          <button
                            key={color.name}
                            type="button"
                            id={`color-option-${color.name.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => handleSelectColor(color.name)}
                            title={color.name}
                            className={`flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                              isSelected
                                ? 'bg-[#0D3328] text-[#FAF8F5] border-[#0D3328] shadow-md scale-[1.02]'
                                : 'bg-[#FAF8F5] text-[#333] border-[#0D3328]/15 hover:bg-[#EAE5DC]/60'
                            }`}
                          >
                            <span
                              className="w-3.5 h-3.5 rounded-full border border-black/25 shrink-0 shadow-xs"
                              style={{ backgroundColor: color.hex }}
                            />
                            <span>{color.name}</span>
                            {product.colorPriceAddon && (
                              <span
                                className={`text-[10px] font-semibold ${
                                  isSelected ? 'text-emerald-300' : 'text-[#4A5450]'
                                }`}
                              >
                                {addon > 0 ? `+${formatZAR(addon)}` : 'Base'}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* BOTTOM CONFIGURATION SUMMARY BOX & ADD TO CART */}
                <div className="mt-4 pt-5 border-t-2 border-[#0D3328]/10 bg-[#E8F1EC]/40 rounded-3xl p-5">
                  {/* "YOUR SELECTION" DISPLAY as required by prompt */}
                  <div className="mb-4">
                    <span className="text-[11px] font-black uppercase tracking-wider text-[#25634A] block mb-1">
                      YOUR SELECTION
                    </span>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-lg sm:text-xl font-black text-[#0D3328]">
                          {product.name} {selectedModel ?? '—'}
                        </span>
                        {selectedStorage && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#0D3328] text-white text-xs font-bold">
                            {selectedStorage}
                          </span>
                        )}
                        {selectedColor && (
                          <span className="text-xs text-[#4A5450] font-medium">
                            • {selectedColor}
                          </span>
                        )}
                      </div>

                      {/* Real-time Calculated Price */}
                      <div className="text-right">
                        <span className="text-2xl font-black text-[#0D3328] block">
                          {formatZAR(currentPrice)}
                        </span>
                        <span className="text-[10px] text-[#55615D]">
                          All-inclusive quote to SA
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* INCOMPLETE SELECTIONS WARNING */}
                  {!isSelectionComplete ? (
                    <div className="flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 rounded-2xl px-4 py-2.5 mb-4 text-xs font-semibold">
                      <Info className="w-4 h-4 text-amber-700 flex-shrink-0" />
                      <span>
                        Please select {missingSelections.join(' and ')} to activate Add to Cart.
                      </span>
                    </div>
                  ) : null}

                  {/* VERY CLEAR, LARGE ADD TO CART BUTTON */}
                  <motion.button
                    id="add-to-cart-button"
                    whileHover={isSelectionComplete ? { scale: 1.02 } : {}}
                    whileTap={isSelectionComplete ? { scale: 0.98 } : {}}
                    disabled={!isSelectionComplete}
                    onClick={handleAddToCart}
                    className={`w-full py-4 px-6 rounded-full text-base font-extrabold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 cursor-pointer shadow-lg ${
                      isSelectionComplete
                        ? 'bg-[#0D3328] text-[#FAF8F5] hover:bg-[#08221B] hover:shadow-xl'
                        : 'bg-neutral-300 text-neutral-500 cursor-not-allowed shadow-none'
                    }`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    <span>ADD TO CART</span>
                    <span className="text-sm font-normal normal-case opacity-90">
                      ({formatZAR(currentPrice)})
                    </span>
                  </motion.button>

                  {/* ADDED FEEDBACK BANNER */}
                  <AnimatePresence>
                    {justAdded && (
                      <motion.div
                        id="added-to-cart-feedback"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mt-3 bg-[#0D3328] text-white rounded-2xl p-3 text-center flex items-center justify-between px-4 shadow-md"
                      >
                        <span className="text-xs font-bold flex items-center gap-2">
                          <Check className="w-4 h-4 text-emerald-400" />
                          ✓ Added to your cart
                        </span>
                        <button
                          onClick={() => {
                            onClose();
                            onOpenCart();
                          }}
                          className="text-xs font-bold text-emerald-300 hover:text-white underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                        >
                          View Cart <ArrowRight className="w-3 h-3" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

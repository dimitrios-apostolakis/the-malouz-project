import React, { useState } from 'react';
import { ProductItem } from '../types';
import { X, Instagram, ShoppingBag, Check, Ruler } from 'lucide-react';

interface ProductModalProps {
  product: ProductItem | null;
  isInInquiry: boolean;
  onClose: () => void;
  onAddToInquiry: (product: ProductItem, size?: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isInInquiry,
  onClose,
  onAddToInquiry,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('L');

  if (!product) return null;

  const isTshirt = product.category === 'tshirts';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#faf7f2] border border-[#e4ded4] shadow-2xl my-auto flex flex-col max-h-[92vh] overflow-hidden">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#e4ded4] bg-[#f5f2eb] text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[#141414] font-semibold tracking-widest">{product.code}</span>
            <span className="text-[#d6cfc2]">/</span>
            <span className="text-[#706e68] uppercase tracking-wider">ARCHETYPE: {product.archetype}</span>
            <span className="text-[#d6cfc2]">/</span>
            <span className="text-[#706e68]">{product.edition}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:opacity-60 text-[#141414] transition-opacity"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          {/* Left Column: Visual Artwork Canvas */}
          <div className="lg:col-span-6 bg-[#ede8df] p-6 sm:p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[#e4ded4] relative">
            <div className="w-full aspect-[4/5] max-w-md overflow-hidden border border-[#e4ded4] shadow-sm bg-[#faf7f2]">
              <img
                src={product.imageUrl || '/images/hero.jpg'}
                alt={product.title}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
            </div>

            <div className="mt-4 text-[10px] font-mono tracking-[0.2em] uppercase text-[#706e68] text-center">
              ATELIER MALOU — ATHENS STUDIO PROOF
            </div>
          </div>

          {/* Right Column: In-Depth Specifications & Purchase Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between overflow-y-auto bg-[#faf7f2]">
            <div className="space-y-6">
              <div className="border-b border-[#e4ded4] pb-4">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#706e68]">
                    {product.category} / {product.archetype}
                  </span>
                  <span className="text-xl font-mono font-bold text-[#141414]">
                    {product.price}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-light text-[#141414] tracking-wide uppercase mt-1">
                  {product.title}
                </h2>
                <div className="text-[10px] font-mono text-[#706e68] mt-1">
                  {product.edition}
                </div>
              </div>

              {/* Architectural Description */}
              <div className="text-xs sm:text-sm text-[#403e39] font-light leading-relaxed">
                {product.description}
              </div>

              {/* Direct Artist Note */}
              <div className="bg-[#f5f2eb] border-l-2 border-[#141414] p-4 space-y-1">
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#706e68] uppercase block">
                  NOTE FROM MALOU (@MMALOUZ):
                </span>
                <p className="font-serif italic text-xs sm:text-sm text-[#141414] leading-relaxed">
                  "{product.artistNote}"
                </p>
              </div>

              {/* T-Shirt Size Selector */}
              {isTshirt && (
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#141414] font-medium tracking-wider">SELECT SIZE:</span>
                    <span className="flex items-center gap-1 text-[10px] text-[#706e68]">
                      <Ruler className="w-3 h-3" />
                      BOX OVERSIZED FIT
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 font-mono text-xs font-semibold border transition-all ${
                          selectedSize === size
                            ? 'border-[#141414] bg-[#141414] text-[#f5f2eb]'
                            : 'border-[#d6cfc2] bg-[#faf7f2] text-[#141414] hover:border-[#141414]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              <div className="border border-[#e4ded4] bg-[#f5f2eb] divide-y divide-[#e4ded4] text-xs font-mono">
                <div className="p-3 flex justify-between">
                  <span className="text-[#706e68]">DIMENSIONS:</span>
                  <span className="text-[#141414] font-medium text-right">{product.dimensions}</span>
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <span className="text-[#706e68]">MATERIALS:</span>
                  <div className="flex flex-wrap gap-1">
                    {product.materials.map((m, i) => (
                      <span key={i} className="text-[10px] bg-[#faf7f2] px-2 py-0.5 border border-[#e4ded4] text-[#403e39]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-[#706e68]">DISPATCH:</span>
                  <span className="text-[#141414]">Athens Studio (Tracked Worldwide)</span>
                </div>
              </div>
            </div>

            {/* Bottom Purchase & Inquiry Actions */}
            <div className="pt-6 border-t border-[#e4ded4] space-y-3">
              <button
                onClick={() => onAddToInquiry(product, isTshirt ? selectedSize : undefined)}
                className={`w-full py-3.5 px-4 font-mono text-xs font-medium tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
                  isInInquiry
                    ? 'bg-[#141414] text-[#f5f2eb]'
                    : 'bg-[#141414] text-[#f5f2eb] hover:bg-[#33312e]'
                }`}
              >
                {isInInquiry ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>In Studio Inquiry Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Inquiry {isTshirt ? `(Size ${selectedSize})` : ''}</span>
                  </>
                )}
              </button>

              <a
                href={`https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA==`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb] font-mono text-[11px] tracking-[0.18em] uppercase transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>DM Malou on Instagram (@mmalouz)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ProductItem } from '../types';
import { AlienVisual } from './AlienVisuals';
import { X, Instagram, ShoppingBag, Check, ShieldAlert, Sparkles, Ruler } from 'lucide-react';

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

  const getVisualVariant = (category: string) => {
    switch (category) {
      case 'tshirts':
        return 'tshirt';
      case 'ceramics':
        return 'ceramic';
      case 'bags':
        return 'bag';
      case 'drawings':
        return 'drawing';
      default:
        return 'diagram';
    }
  };

  const instagramDmUrl = `https://www.instagram.com/direct/t/mmalouz/`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-malouz-950 border border-malouz-800 rounded-xl overflow-hidden shadow-2xl my-auto flex flex-col max-h-[90vh]">
        {/* Modal Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-malouz-800 bg-malouz-900/60 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-malouz-alien font-bold tracking-widest">{product.code}</span>
            <span className="text-malouz-600">|</span>
            <span className="text-malouz-400 uppercase">ARCHETYPE: {product.archetype}</span>
            <span className="text-malouz-600">|</span>
            <span className="text-malouz-ember">{product.edition}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-malouz-800 text-malouz-400 hover:text-malouz-bone transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: Split 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 overflow-y-auto flex-1">
          {/* Left Column: Visual Artwork Canvas */}
          <div className="lg:col-span-6 bg-malouz-900/50 p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-malouz-800 relative">
            <div className="w-full aspect-[4/5] max-w-md flex items-center justify-center relative">
              <AlienVisual
                archetype={product.archetype}
                variant={getVisualVariant(product.category)}
                glow={true}
                className="w-full h-full"
              />
            </div>

            <div className="mt-4 text-[10px] font-mono tracking-widest text-malouz-500 text-center">
              AUTHENTIC MALOU ATELIER ARTIFACT // ATHENS STUDIO
            </div>
          </div>

          {/* Right Column: In-Depth Specifications & Purchase Actions */}
          <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-malouz-alien block mb-1">
                  CATEGORY: {product.category.toUpperCase()} // EDITION: {product.edition}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-black text-malouz-bone tracking-wide">
                  {product.title}
                </h2>
                <div className="mt-2 text-xl font-mono font-bold text-malouz-bone">
                  {product.price}
                </div>
              </div>

              {/* Long Architectural Description */}
              <div className="text-xs sm:text-sm text-malouz-300 font-light leading-relaxed">
                {product.description}
              </div>

              {/* Direct Artist Note */}
              <div className="bg-malouz-900/80 border-l-2 border-malouz-alien p-4 rounded-r space-y-1.5">
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-malouz-alien uppercase tracking-wider">
                  <Sparkles className="w-3 h-3" />
                  <span>NOTE FROM MALOU (@mmalouz):</span>
                </div>
                <p className="font-serif italic text-xs sm:text-sm text-malouz-bone leading-relaxed">
                  "{product.artistNote}"
                </p>
              </div>

              {/* T-Shirt Size Selector */}
              {isTshirt && (
                <div className="space-y-2 pt-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-malouz-400">SELECT ATELIER SIZE:</span>
                    <span className="flex items-center gap-1 text-[10px] text-malouz-500">
                      <Ruler className="w-3 h-3" />
                      BOX OVERSIZED FIT
                    </span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 rounded font-mono text-xs font-bold border transition-all ${
                          selectedSize === size
                            ? 'border-malouz-alien bg-malouz-alien text-black'
                            : 'border-malouz-800 bg-malouz-900 text-malouz-bone hover:border-malouz-700'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Technical Specifications Table */}
              <div className="border border-malouz-800/80 rounded bg-malouz-900/40 divide-y divide-malouz-800/60 text-xs font-mono">
                <div className="p-3 flex justify-between">
                  <span className="text-malouz-500">DIMENSIONS / SCALE:</span>
                  <span className="text-malouz-bone font-medium text-right">{product.dimensions}</span>
                </div>
                <div className="p-3 flex flex-col gap-1.5">
                  <span className="text-malouz-500">TACTILE MATERIALS:</span>
                  <div className="flex flex-wrap gap-1">
                    {product.materials.map((m, i) => (
                      <span key={i} className="text-[10px] bg-malouz-950 px-2 py-0.5 rounded border border-malouz-800 text-malouz-300">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-3 flex justify-between">
                  <span className="text-malouz-500">DISPATCH FROM:</span>
                  <span className="text-malouz-ember font-medium">Athens Workshop (3-5 Days Tracked)</span>
                </div>
              </div>
            </div>

            {/* Bottom Purchase & Inquiry Actions */}
            <div className="pt-6 border-t border-malouz-800 space-y-3">
              <button
                onClick={() => onAddToInquiry(product, isTshirt ? selectedSize : undefined)}
                className={`w-full py-3.5 px-4 rounded font-mono text-xs font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${
                  isInInquiry
                    ? 'bg-malouz-alien/20 text-malouz-alien border border-malouz-alien'
                    : 'bg-malouz-bone text-malouz-950 hover:bg-malouz-alien hover:text-black'
                }`}
              >
                {isInInquiry ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>OBJECT IN STUDIO INQUIRY BAG</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO STUDIO INQUIRY {isTshirt ? `(SIZE ${selectedSize})` : ''}</span>
                  </>
                )}
              </button>

              <a
                href={`https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA==`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded border border-malouz-700 bg-malouz-900 text-malouz-bone font-mono text-xs tracking-wider hover:border-malouz-alien hover:text-malouz-alien transition-all flex items-center justify-center gap-2"
              >
                <Instagram className="w-4 h-4" />
                <span>DM MALOU ON INSTAGRAM (@mmalouz) REGARDING THIS PIECE</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

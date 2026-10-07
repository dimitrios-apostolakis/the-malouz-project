import React from 'react';
import { ProductItem } from '../types';
import { Plus, Check, ArrowUpRight } from 'lucide-react';

interface ProductCardProps {
  product: ProductItem;
  isInInquiry: boolean;
  onSelect: (product: ProductItem) => void;
  onAddToInquiry: (product: ProductItem) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInInquiry,
  onSelect,
  onAddToInquiry,
}) => {
  return (
    <div className="group bg-[#faf7f2] border border-[#e4ded4] flex flex-col justify-between hover:border-[#141414] transition-all duration-300">
      {/* Visual Canvas Area with Real Photography */}
      <div
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/5] bg-[#ede8df] overflow-hidden cursor-pointer"
      >
        <img
          src={product.imageUrl || '/images/hero.jpg'}
          alt={product.title}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 filter contrast-[1.02]"
        />

        {/* Edition Stamp */}
        <div className="absolute top-3 left-3 bg-[#f5f2eb]/90 backdrop-blur-sm px-2 py-0.5 text-[9px] font-mono tracking-[0.18em] uppercase text-[#141414] border border-[#e4ded4]">
          {product.code}
        </div>

        <div className="absolute top-3 right-3 bg-[#141414]/90 text-[#f5f2eb] px-2 py-0.5 text-[9px] font-mono tracking-[0.18em] uppercase">
          {product.archetype}
        </div>

        {/* Hover Inspect Indicator */}
        <div className="absolute inset-0 bg-[#141414]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
          <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#f5f2eb] text-[#141414] font-mono text-[10px] tracking-[0.2em] uppercase font-medium shadow-md">
            <span>Inspect Object</span>
            <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      {/* Editorial Content Below Image */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#706e68]">
              {product.category} / {product.archetype}
            </span>
            <span className="font-mono text-sm font-semibold text-[#141414]">
              {product.price}
            </span>
          </div>

          <h3
            onClick={() => onSelect(product)}
            className="font-serif text-base sm:text-lg font-normal text-[#141414] hover:opacity-75 transition-opacity cursor-pointer leading-snug uppercase tracking-wide"
          >
            {product.title}
          </h3>

          <p className="text-xs text-[#595650] font-light line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="text-[10px] font-mono text-[#706e68] pt-1 truncate">
            {product.materials[0]}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-[#e4ded4] flex items-center gap-2">
          <button
            onClick={() => onAddToInquiry(product)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 font-mono text-[11px] tracking-[0.18em] uppercase transition-all ${
              isInInquiry
                ? 'bg-[#141414] text-[#f5f2eb] border border-[#141414]'
                : 'border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb]'
            }`}
          >
            {isInInquiry ? (
              <>
                <Check className="w-3 h-3" />
                <span>In Inquiry Bag</span>
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" />
                <span>Request / Add</span>
              </>
            )}
          </button>

          <button
            onClick={() => onSelect(product)}
            className="px-3 py-2 border border-[#d6cfc2] text-[#706e68] hover:text-[#141414] hover:border-[#141414] transition-colors font-mono text-[10px] tracking-wider uppercase"
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

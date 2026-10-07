import React from 'react';
import { ProductItem } from '../types';
import { AlienVisual } from './AlienVisuals';
import { Eye, Plus, Check } from 'lucide-react';

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

  const getArchetypeBadgeColor = (archetype: string) => {
    switch (archetype) {
      case 'radients':
        return 'bg-purple-950/70 text-purple-300 border-purple-800';
      case 'orients':
        return 'bg-sky-950/70 text-sky-300 border-sky-800';
      case 'naviens':
        return 'bg-emerald-950/70 text-emerald-300 border-emerald-800';
      case 'certiens':
        return 'bg-amber-950/70 text-amber-300 border-amber-800';
      case 'lviens':
        return 'bg-pink-950/70 text-pink-300 border-pink-800';
      default:
        return 'bg-malouz-800 text-malouz-300 border-malouz-700';
    }
  };

  return (
    <div className="group relative bg-malouz-900/60 border border-malouz-800 rounded-lg overflow-hidden flex flex-col justify-between hover:border-malouz-700 transition-all duration-300 hover:shadow-2xl">
      {/* Top Specs Bar */}
      <div className="p-4 border-b border-malouz-800/80 flex items-center justify-between text-[10px] font-mono tracking-wider">
        <span className="text-malouz-500">{product.code}</span>
        <span className={`px-2 py-0.5 rounded border uppercase ${getArchetypeBadgeColor(product.archetype)}`}>
          {product.archetype}
        </span>
      </div>

      {/* Visual Canvas Area */}
      <div
        onClick={() => onSelect(product)}
        className="relative w-full aspect-[4/5] bg-malouz-950 flex items-center justify-center cursor-pointer overflow-hidden"
      >
        <AlienVisual
          archetype={product.archetype}
          variant={getVisualVariant(product.category)}
          className="transition-transform duration-500 group-hover:scale-105"
        />

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-malouz-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 backdrop-blur-[2px]">
          <span className="flex items-center gap-2 px-4 py-2 rounded bg-malouz-bone text-malouz-950 font-mono text-xs font-bold tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            INSPECT OBJECT
          </span>
        </div>

        {/* Edition Pill */}
        <div className="absolute bottom-3 left-3 bg-malouz-950/80 border border-malouz-800/80 px-2.5 py-1 rounded text-[9px] font-mono text-malouz-400 backdrop-blur-sm">
          {product.edition}
        </div>
      </div>

      {/* Content & Action Area */}
      <div className="p-5 space-y-4 flex-1 flex flex-col justify-between border-t border-malouz-800/80">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3
              onClick={() => onSelect(product)}
              className="font-serif text-lg font-bold text-malouz-bone hover:text-malouz-alien transition-colors cursor-pointer leading-snug"
            >
              {product.title}
            </h3>
            <span className="font-mono text-base font-bold text-malouz-bone whitespace-nowrap">
              {product.price}
            </span>
          </div>

          <p className="text-xs text-malouz-400 font-light line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="pt-1 flex flex-wrap gap-1 text-[10px] font-mono text-malouz-500">
            {product.materials.slice(0, 2).map((mat, i) => (
              <span key={i} className="bg-malouz-950 px-2 py-0.5 rounded border border-malouz-850">
                {mat}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-3 border-t border-malouz-800/50 flex items-center gap-2">
          <button
            onClick={() => onAddToInquiry(product)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded font-mono text-xs tracking-wider transition-all ${
              isInInquiry
                ? 'bg-malouz-alien/20 text-malouz-alien border border-malouz-alien/60'
                : 'bg-malouz-850 text-malouz-bone border border-malouz-700 hover:bg-malouz-bone hover:text-black hover:border-malouz-bone'
            }`}
          >
            {isInInquiry ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>IN INQUIRY BAG</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>REQUEST / ADD</span>
              </>
            )}
          </button>

          <button
            onClick={() => onSelect(product)}
            className="p-2.5 rounded border border-malouz-800 text-malouz-400 hover:text-malouz-bone hover:border-malouz-600 transition-colors"
            title="Inspect Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

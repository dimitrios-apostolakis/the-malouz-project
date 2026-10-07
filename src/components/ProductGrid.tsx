import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Category, AlienArchetype, ProductItem } from '../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  inquiryProductIds: string[];
  onSelectProduct: (product: ProductItem) => void;
  onAddToInquiry: (product: ProductItem) => void;
  activeArchetypeFilter: AlienArchetype | 'all';
  onSetArchetypeFilter: (arch: AlienArchetype | 'all') => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  inquiryProductIds,
  onSelectProduct,
  onAddToInquiry,
  activeArchetypeFilter,
  onSetArchetypeFilter,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const categories: { id: Category; label: string; count: number }[] = [
    { id: 'all', label: 'All 10 Pieces', count: PRODUCTS.length },
    { id: 'tshirts', label: 'Clothes & Tees', count: PRODUCTS.filter((p) => p.category === 'tshirts').length },
    { id: 'bags', label: 'Handmade Bags & Pouches', count: PRODUCTS.filter((p) => p.category === 'bags').length },
    { id: 'drawings', label: 'Drawings & Graphics', count: PRODUCTS.filter((p) => p.category === 'drawings').length },
    { id: 'ceramics', label: 'Sculpture & Talismans', count: PRODUCTS.filter((p) => p.category === 'ceramics').length },
  ];

  const archetypes: { id: AlienArchetype | 'all'; label: string }[] = [
    { id: 'all', label: 'All Figures' },
    { id: 'radients', label: 'Radients' },
    { id: 'orients', label: 'Orients' },
    { id: 'naviens', label: 'Naviens' },
    { id: 'certiens', label: 'Certiens' },
    { id: 'lviens', label: 'Lviens' },
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesArchetype = activeArchetypeFilter === 'all' || item.archetype === activeArchetypeFilter;
    return matchesCategory && matchesArchetype;
  });

  return (
    <section id="catalog" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e4ded4] bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e4ded4] pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#706e68] uppercase block">
              THE 10 LATEST PIECES // DIRECT FROM @MMALOUZ INSTAGRAM
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-[0.05em] uppercase">
              Current Collection
            </h2>
            <p className="text-sm sm:text-base text-[#403e39] max-w-2xl font-light leading-relaxed">
              The 10 latest handmade pieces directly from Malou's Instagram feed (<a href="https://www.instagram.com/mmalouz/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#141414]">@mmalouz</a>). 
              Hand-screenprinted alien canvas bags, heavyweight hoodies, embroidered garments, and wearable talismanic sculptures from the Athens studio.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#706e68] tracking-[0.2em] uppercase">
            SHOWING <span className="text-[#141414] font-semibold">{filteredProducts.length}</span> OF {PRODUCTS.length} EDITIONS
          </div>
        </div>

        {/* Category & Filter Navigation */}
        <div className="space-y-4">
          {/* Main Category Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#e4ded4]">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2 font-mono text-[11px] tracking-[0.18em] uppercase transition-all flex items-center gap-2 border-b-2 -mb-[2px] ${
                    isActive
                      ? 'border-[#141414] text-[#141414] font-medium'
                      : 'border-transparent text-[#706e68] hover:text-[#141414]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[9px] px-1 py-0.2 rounded ${isActive ? 'bg-[#141414] text-[#f5f2eb]' : 'bg-[#ede8df] text-[#706e68]'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-Filter: Alien Figures */}
          <div className="flex items-center gap-2 text-[10px] font-mono overflow-x-auto pb-1">
            <span className="text-[#706e68] uppercase tracking-[0.2em] whitespace-nowrap mr-2">
              FIGURE:
            </span>
            {archetypes.map((arch) => {
              const isActive = activeArchetypeFilter === arch.id;
              return (
                <button
                  key={arch.id}
                  onClick={() => onSetArchetypeFilter(arch.id)}
                  className={`whitespace-nowrap px-2.5 py-1 text-[10px] uppercase tracking-wider transition-all border ${
                    isActive
                      ? 'border-[#141414] bg-[#141414] text-[#f5f2eb]'
                      : 'border-[#d6cfc2] text-[#706e68] hover:border-[#141414] hover:text-[#141414] bg-[#faf7f2]'
                  }`}
                >
                  {arch.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {filteredProducts.map((product) => (
            <div key={product.id} id={product.category}>
              <ProductCard
                product={product}
                isInInquiry={inquiryProductIds.includes(product.id)}
                onSelect={onSelectProduct}
                onAddToInquiry={onAddToInquiry}
              />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-20 text-center border border-dashed border-[#d6cfc2] bg-[#faf7f2] p-8 space-y-3">
            <p className="font-serif text-lg text-[#141414]">No objects match the current filter selection.</p>
            <p className="font-mono text-xs text-[#706e68]">Reset filters to inspect the full studio collection.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onSetArchetypeFilter('all');
              }}
              className="mt-2 px-5 py-2.5 bg-[#141414] text-[#f5f2eb] font-mono text-[10px] tracking-[0.2em] uppercase"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

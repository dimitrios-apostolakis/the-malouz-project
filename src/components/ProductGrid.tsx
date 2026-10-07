import React, { useState } from 'react';
import { PRODUCTS } from '../data/products';
import { Category, AlienArchetype, ProductItem } from '../types';
import { ProductCard } from './ProductCard';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

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
    { id: 'all', label: 'All Atelier Objects', count: PRODUCTS.length },
    { id: 'tshirts', label: 'Alien T-Shirt Drops', count: PRODUCTS.filter((p) => p.category === 'tshirts').length },
    { id: 'ceramics', label: 'Sculptural Ceramics', count: PRODUCTS.filter((p) => p.category === 'ceramics').length },
    { id: 'bags', label: 'Handmade Bags', count: PRODUCTS.filter((p) => p.category === 'bags').length },
    { id: 'drawings', label: 'Drawings & Folios', count: PRODUCTS.filter((p) => p.category === 'drawings').length },
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
    <section id="catalog" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-malouz-800 bg-malouz-950">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-malouz-800 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-malouz-ember uppercase mb-2">
              <Sparkles className="w-4 h-4" />
              <span>THE OBJECT ARCHIVE</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-malouz-bone tracking-tight">
              COLLECTIONS & LIMITED PIECES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-malouz-300 max-w-2xl font-light">
              Crafted in small numbered studio series or original 1/1 sculptures. 
              No mass-production. No seasonal waste. Direct from the artist's workshop in Athens.
            </p>
          </div>

          <div className="text-xs font-mono text-malouz-muted">
            AVAILABLE EDITIONS: <span className="text-malouz-bone font-bold">{filteredProducts.length}</span> PIECES
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="space-y-4">
          {/* Main Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`whitespace-nowrap px-4 py-2.5 rounded font-mono text-xs tracking-wider transition-all flex items-center gap-2 ${
                    isActive
                      ? 'bg-malouz-bone text-malouz-950 font-bold shadow-md'
                      : 'bg-malouz-900 border border-malouz-800 text-malouz-300 hover:border-malouz-700 hover:text-malouz-bone'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded ${isActive ? 'bg-black/20 text-black' : 'bg-malouz-850 text-malouz-500'}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Sub-Filter: Alien Figure Filter */}
          <div className="flex items-center gap-3 pt-2 text-xs font-mono overflow-x-auto pb-1">
            <span className="flex items-center gap-1.5 text-malouz-500 uppercase tracking-widest text-[10px] whitespace-nowrap">
              <SlidersHorizontal className="w-3 h-3 text-malouz-alien" />
              <span>FILTER BY ALIEN FIGURE:</span>
            </span>

            <div className="flex items-center gap-1.5">
              {archetypes.map((arch) => {
                const isActive = activeArchetypeFilter === arch.id;
                return (
                  <button
                    key={arch.id}
                    onClick={() => onSetArchetypeFilter(arch.id)}
                    className={`whitespace-nowrap px-3 py-1 rounded-full border text-[11px] transition-all ${
                      isActive
                        ? 'border-malouz-alien bg-malouz-alien/15 text-malouz-alien font-bold'
                        : 'border-malouz-800 text-malouz-400 hover:border-malouz-700 hover:text-malouz-bone'
                    }`}
                  >
                    {arch.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Product Grid Cards */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInInquiry={inquiryProductIds.includes(product.id)}
                onSelect={onSelectProduct}
                onAddToInquiry={onAddToInquiry}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-malouz-800 rounded-lg space-y-3">
            <p className="font-serif text-lg text-malouz-bone">No objects match the current filter selection.</p>
            <p className="font-mono text-xs text-malouz-muted">Reset filters to inspect the full studio collection.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                onSetArchetypeFilter('all');
              }}
              className="mt-2 px-4 py-2 rounded bg-malouz-900 border border-malouz-700 font-mono text-xs text-malouz-bone hover:border-malouz-alien"
            >
              RESET ALL FILTERS
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

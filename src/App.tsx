import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchetypeCodex } from './components/ArchetypeCodex';
import { ProductGrid } from './components/ProductGrid';
import { ManifestoSection } from './components/ManifestoSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { StudioInquiryDrawer } from './components/StudioInquiryDrawer';
import { ProductItem, AlienArchetype, InquiryItem } from './types';
import { PRODUCTS } from './data/products';

export const App: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState<boolean>(false);
  const [inquiryItems, setInquiryItems] = useState<InquiryItem[]>([]);
  const [activeArchetype, setActiveArchetype] = useState<AlienArchetype>('radients');
  const [gridArchetypeFilter, setGridArchetypeFilter] = useState<AlienArchetype | 'all'>('all');

  // Load inquiry bag from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('malouz_inquiry_bag');
      if (saved) {
        setInquiryItems(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Failed to parse localStorage inquiry items:', e);
    }
  }, []);

  // Save inquiry bag to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('malouz_inquiry_bag', JSON.stringify(inquiryItems));
    } catch (e) {
      console.warn('Failed to save inquiry items to localStorage:', e);
    }
  }, [inquiryItems]);

  const handleAddToInquiry = (product: ProductItem, selectedSize?: string) => {
    setInquiryItems((prev) => {
      const exists = prev.find((item) => item.product.id === product.id && item.selectedSize === selectedSize);
      if (exists) {
        return prev.map((item) =>
          item.product.id === product.id && item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1, selectedSize }];
    });
  };

  const handleRemoveFromInquiry = (id: string) => {
    setInquiryItems((prev) => prev.filter((item) => item.product.id !== id));
  };

  const handleClearInquiry = () => {
    setInquiryItems([]);
  };

  const handleSelectArchetype = (arch: AlienArchetype) => {
    setActiveArchetype(arch);
    const element = document.getElementById('archetypes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFilterProductsByArchetype = (arch: AlienArchetype) => {
    setGridArchetypeFilter(arch);
    const catalogElement = document.getElementById('catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f2eb] text-[#141414] selection:bg-[#141414] selection:text-[#f5f2eb] flex flex-col font-sans">
      {/* Navigation Bar */}
      <Navbar
        inquiryCount={inquiryItems.reduce((acc, i) => acc + i.quantity, 0)}
        onOpenInquiry={() => setInquiryDrawerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Monumental Hero */}
        <Hero onSelectArchetype={handleSelectArchetype} />

        {/* The 5 Sexual Alien Figures Interactive Codex */}
        <ArchetypeCodex
          selectedArchetype={activeArchetype}
          onSelectArchetype={setActiveArchetype}
          onFilterProductsByArchetype={handleFilterProductsByArchetype}
        />

        {/* Atelier Object Archive & Collections */}
        <ProductGrid
          inquiryProductIds={inquiryItems.map((i) => i.product.id)}
          onSelectProduct={(p) => setSelectedProduct(p)}
          onAddToInquiry={(p) => handleAddToInquiry(p)}
          activeArchetypeFilter={gridArchetypeFilter}
          onSetArchetypeFilter={setGridArchetypeFilter}
        />

        {/* Direct Artist Manifesto ("From Malou") */}
        <ManifestoSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal Inspector */}
      <ProductModal
        product={selectedProduct}
        isInInquiry={selectedProduct ? inquiryItems.some((i) => i.product.id === selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onAddToInquiry={(p, size) => {
          handleAddToInquiry(p, size);
          setSelectedProduct(null);
          setInquiryDrawerOpen(true);
        }}
      />

      {/* Slide-over Studio Inquiry Drawer */}
      <StudioInquiryDrawer
        isOpen={inquiryDrawerOpen}
        onClose={() => setInquiryDrawerOpen(false)}
        items={inquiryItems}
        onRemoveItem={handleRemoveFromInquiry}
        onClearAll={handleClearInquiry}
      />
    </div>
  );
};
export default App;

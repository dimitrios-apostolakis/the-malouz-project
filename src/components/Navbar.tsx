import React, { useState } from 'react';
import { ShoppingBag, Instagram, Menu, X } from 'lucide-react';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ inquiryCount, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f5f2eb]/95 backdrop-blur-md border-b border-[#e4ded4] transition-all">
      {/* Editorial Announcement Bar */}
      <div className="hidden md:flex justify-between items-center px-8 py-2 border-b border-[#e4ded4]/60 text-[10px] tracking-[0.2em] uppercase font-mono text-[#706e68]">
        <div>
          <span>ATELIER MALOU — ATHENS</span>
          <span className="mx-3 opacity-40">/</span>
          <span>HANDMADE OBJECTS & WEARABLE EDITIONS</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#141414] transition-colors flex items-center gap-1.5"
          >
            <Instagram className="w-3 h-3" />
            <span>@MMALOUZ</span>
          </a>
          <span className="opacity-40">/</span>
          <span>SHIPPING WORLDWIDE</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex flex-col">
          <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.25em] text-[#141414] uppercase">
            THE MALOUZ PROJECT
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#706e68] font-mono mt-0.5">
            ATHENS ATELIER
          </span>
        </a>

        {/* Minimal Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.22em] uppercase font-medium text-[#403e39]">
          <a href="#catalog" className="hover:text-[#141414] transition-colors py-1">
            Collection (20)
          </a>
          <a href="#tshirts" className="hover:text-[#141414] transition-colors py-1">
            Clothes & Tees
          </a>
          <a href="#bags" className="hover:text-[#141414] transition-colors py-1">
            Handmade Bags
          </a>
          <a href="#drawings" className="hover:text-[#141414] transition-colors py-1">
            Drawings
          </a>
          <a href="#ceramics" className="hover:text-[#141414] transition-colors py-1">
            Sculpture
          </a>
          <a href="#archetypes" className="hover:text-[#141414] transition-colors py-1">
            The 5 Figures
          </a>
          <a href="#manifesto" className="hover:text-[#141414] transition-colors py-1">
            From Malou
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase font-medium text-[#403e39] hover:text-[#141414] transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>@mmalouz</span>
          </a>

          <button
            onClick={onOpenInquiry}
            className="flex items-center gap-2 px-4 py-2 border border-[#141414] bg-[#141414] text-[#f5f2eb] hover:bg-transparent hover:text-[#141414] transition-all text-[11px] tracking-[0.18em] uppercase font-medium"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Inquiry</span>
            {inquiryCount > 0 && (
              <span className="ml-1 text-[10px] font-bold">
                ({inquiryCount})
              </span>
            )}
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#141414] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#f5f2eb] border-b border-[#e4ded4] px-6 py-6 space-y-4 font-mono text-xs tracking-[0.2em] uppercase">
          <a
            href="#ceramics"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-[#e4ded4] text-[#141414]"
          >
            01. Sculptural Ceramics
          </a>
          <a
            href="#tshirts"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-[#e4ded4] text-[#141414]"
          >
            02. Garments & Alien Tees
          </a>
          <a
            href="#bags"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-[#e4ded4] text-[#141414]"
          >
            03. Handmade Bags
          </a>
          <a
            href="#drawings"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-[#e4ded4] text-[#141414]"
          >
            04. Architectural Drawings
          </a>
          <a
            href="#archetypes"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 border-b border-[#e4ded4] text-[#141414]"
          >
            05. The 5 Sexual Alien Figures
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-[#141414]"
          >
            06. From Malou (Manifesto)
          </a>
          <div className="pt-4 border-t border-[#e4ded4] flex items-center justify-between text-[11px] text-[#706e68]">
            <a
              href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#141414]"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@mmalouz</span>
            </a>
            <span>Athens, GR</span>
          </div>
        </div>
      )}
    </header>
  );
};

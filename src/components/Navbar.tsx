import React, { useState, useEffect } from 'react';
import { ShoppingBag, Instagram, Menu, X, Globe } from 'lucide-react';
import { AudioEngine } from './AudioEngine';

interface NavbarProps {
  inquiryCount: number;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ inquiryCount, onOpenInquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Europe/Athens',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-malouz-950/85 backdrop-blur-md border-b border-malouz-800/80 transition-all">
      {/* Top Technical Metadata Bar */}
      <div className="hidden md:flex justify-between items-center px-6 py-1.5 bg-malouz-900/60 border-b border-malouz-800/40 text-[10px] font-mono tracking-widest text-malouz-400">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-malouz-ember">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-malouz-ember animate-pulse"></span>
            ATELIER OPEN // ATHENS, GR
          </span>
          <span className="text-malouz-600">|</span>
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3 text-malouz-500" />
            37.9838° N, 23.7275° E
          </span>
          <span className="text-malouz-600">|</span>
          <span>ATHENS TIME: {time || '23:14:00'} EEST</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-malouz-400">HANDMADE & VISCERAL EDITIONS</span>
          <span className="text-malouz-600">|</span>
          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-malouz-bone hover:text-malouz-alien transition-colors"
          >
            <Instagram className="w-3 h-3" />
            @mmalouz
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Monogram & Title */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-malouz-700 bg-malouz-900 flex items-center justify-center rounded group-hover:border-malouz-alien transition-colors">
            <span className="font-serif text-lg font-black tracking-tighter text-malouz-bone group-hover:text-malouz-alien transition-colors">
              M
            </span>
          </div>
          <div>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-malouz-bone block leading-none">
              THE MALOUZ PROJECT
            </span>
            <span className="text-[9px] font-mono tracking-ultra text-malouz-muted uppercase block mt-1">
              MALOU ATHENS // VISCERAL OBJECTS
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
          <a href="#archetypes" className="text-malouz-300 hover:text-malouz-alien transition-colors py-2">
            01. Alien Archetypes
          </a>
          <a href="#tshirts" className="text-malouz-300 hover:text-malouz-alien transition-colors py-2">
            02. Garments & Tees
          </a>
          <a href="#ceramics" className="text-malouz-300 hover:text-malouz-alien transition-colors py-2">
            03. Ceramics
          </a>
          <a href="#bags" className="text-malouz-300 hover:text-malouz-alien transition-colors py-2">
            04. Bags & Wear
          </a>
          <a href="#drawings" className="text-malouz-300 hover:text-malouz-alien transition-colors py-2">
            05. Drawings
          </a>
          <a href="#manifesto" className="text-malouz-ember hover:text-malouz-bone transition-colors py-2">
            06. From Malou
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <AudioEngine />

          {/* Direct Instagram Link */}
          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            title="Artist Instagram @mmalouz"
            className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full border border-malouz-800 bg-malouz-900/80 text-malouz-bone hover:border-malouz-alien hover:text-malouz-alien transition-all"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Studio Inquiry Cart Trigger */}
          <button
            onClick={onOpenInquiry}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded border border-malouz-700 bg-malouz-900 hover:border-malouz-alien hover:bg-malouz-850 text-malouz-bone transition-all text-xs font-mono tracking-wider"
          >
            <ShoppingBag className="w-4 h-4 text-malouz-bone" />
            <span className="hidden sm:inline">STUDIO INQUIRY</span>
            {inquiryCount > 0 && (
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-malouz-alien text-black font-bold text-[10px]">
                {inquiryCount}
              </span>
            )}
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-malouz-300 hover:text-malouz-bone focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-malouz-950 border-b border-malouz-800 px-6 py-6 space-y-4 animate-fade-in font-mono text-sm tracking-wider uppercase">
          <a
            href="#archetypes"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-bone hover:text-malouz-alien py-2 border-b border-malouz-900"
          >
            01. Alien Archetypes (Radients, Orients...)
          </a>
          <a
            href="#tshirts"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-bone hover:text-malouz-alien py-2 border-b border-malouz-900"
          >
            02. Garments & T-Shirts
          </a>
          <a
            href="#ceramics"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-bone hover:text-malouz-alien py-2 border-b border-malouz-900"
          >
            03. Sculptural Ceramics
          </a>
          <a
            href="#bags"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-bone hover:text-malouz-alien py-2 border-b border-malouz-900"
          >
            04. Handmade Architectural Bags
          </a>
          <a
            href="#drawings"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-bone hover:text-malouz-alien py-2 border-b border-malouz-900"
          >
            05. Drawings & Archival Folios
          </a>
          <a
            href="#manifesto"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-malouz-ember hover:text-malouz-bone py-2 border-b border-malouz-900"
          >
            06. From Malou (Direct Voice)
          </a>
          <div className="pt-2 flex justify-between items-center text-xs text-malouz-400">
            <span>ATHENS TIME: {time}</span>
            <a
              href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-malouz-alien"
            >
              <Instagram className="w-3.5 h-3.5" />
              @mmalouz
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

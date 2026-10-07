import React from 'react';
import { ArrowDownRight, Instagram } from 'lucide-react';
import { AlienArchetype } from '../types';

interface HeroProps {
  onSelectArchetype: (archetype: AlienArchetype) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectArchetype }) => {
  const archetypes: { id: AlienArchetype; name: string; subtitle: string }[] = [
    { id: 'radients', name: 'RADIENTS', subtitle: 'Spinal Pulsar' },
    { id: 'orients', name: 'ORIENTS', subtitle: 'Cardinal Joint' },
    { id: 'naviens', name: 'NAVIENS', subtitle: 'Abyssal Hollow' },
    { id: 'certiens', name: 'CERTIENS', subtitle: 'Armored Carapace' },
    { id: 'lviens', name: 'LVIENS', subtitle: 'Zero-G Ecstasy' },
  ];

  return (
    <section className="relative bg-[#f5f2eb] border-b border-[#e4ded4] pt-8 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Editorial Sub-Header Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e4ded4] pb-4 text-[10px] font-mono tracking-[0.22em] text-[#706e68] uppercase">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#141414]">ATELIER MALOU</span>
            <span>/</span>
            <span>ATHENS, GREECE</span>
            <span>/</span>
            <span>LIMITED STUDIO EDITIONS</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#141414] hover:opacity-70 transition-opacity"
            >
              <Instagram className="w-3 h-3" />
              <span>@MMALOUZ</span>
            </a>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text Column: Zara-style Architectural Typography */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-[#706e68] block">
                SCULPTURE • OBJECTS • WEARABLE ART
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.1em] text-[#141414] leading-[1.05] uppercase">
                THE MALOUZ <br />
                <span className="italic font-normal">PROJECT</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-[#403e39] font-light leading-relaxed tracking-wide">
              Brutalist tactile ceramics, handmade industrial bags, original ink drawings, and heavyweight garments exploring sexual alien archetypes. 
              Forged by hand in Athens for those who reject sterile mass-production.
            </p>

            {/* Direct Artist Note */}
            <div className="border-l-2 border-[#141414] pl-5 py-1">
              <p className="font-serif italic text-sm text-[#262523] leading-relaxed">
                "We pull clay from the earth and ink from darkness to make artifacts that feel dangerous, sexual, and unyielding against the skin."
              </p>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#706e68] block mt-2">
                — Malou, Athens Atelier
              </span>
            </div>

            {/* Editorial CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[11px] tracking-[0.2em] uppercase">
              <a
                href="#catalog"
                className="px-6 py-3.5 bg-[#141414] text-[#f5f2eb] hover:bg-[#33312e] transition-colors font-medium flex items-center gap-2"
              >
                <span>View Collection</span>
                <ArrowDownRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#archetypes"
                className="px-6 py-3.5 border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb] transition-all font-medium"
              >
                The 5 Figures
              </a>
            </div>

            {/* Archetype Quick Selectors */}
            <div className="pt-4 border-t border-[#e4ded4] space-y-2">
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#706e68] uppercase block">
                EXPLORE BY SEXUAL ALIEN ARCHETYPE:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {archetypes.map((arch) => (
                  <button
                    key={arch.id}
                    onClick={() => onSelectArchetype(arch.id)}
                    className="px-3 py-1.5 border border-[#d6cfc2] bg-[#ede8df]/60 hover:bg-[#141414] hover:text-[#f5f2eb] hover:border-[#141414] transition-all font-mono text-[10px] tracking-wider uppercase text-[#403e39]"
                  >
                    {arch.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Column: High-Fashion Photography */}
          <div className="lg:col-span-7 space-y-3">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#ede8df] border border-[#e4ded4] shadow-sm">
              <img
                src="/images/hero.jpg"
                alt="The Malou Project Athens Studio Atelier - Sculptural Ceramics and Heavywear"
                className="w-full h-full object-cover object-center filter contrast-[1.03]"
              />
              <div className="absolute top-4 right-4 bg-[#f5f2eb]/90 backdrop-blur-sm px-3 py-1 text-[9px] font-mono tracking-[0.2em] uppercase text-[#141414] border border-[#e4ded4]">
                ATHENS // ATELIER 2026
              </div>
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.18em] text-[#706e68] uppercase px-1">
              <span>FIG 01. ATELIER DISPATCH — VOLCANIC STONEWARE & BRIDLE LEATHER</span>
              <span>PLATE REF: MAL-001</span>
            </div>
          </div>
        </div>

        {/* Bottom Architectural Spec Ticker */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-[#e4ded4] text-[11px] font-mono tracking-[0.18em] text-[#706e68] uppercase">
          <div>
            <span className="text-[#141414] block font-medium">01. CERAMICS</span>
            <span className="text-[10px]">Volcanic black stoneware</span>
          </div>
          <div>
            <span className="text-[#141414] block font-medium">02. CLOTHES</span>
            <span className="text-[10px]">320gsm combed raw cotton</span>
          </div>
          <div>
            <span className="text-[#141414] block font-medium">03. HANDMADE BAGS</span>
            <span className="text-[10px]">Waxed canvas & bridle leather</span>
          </div>
          <div>
            <span className="text-[#141414] block font-medium">04. DRAWINGS</span>
            <span className="text-[10px]">Japanese sumi ink on cotton paper</span>
          </div>
        </div>
      </div>
    </section>
  );
};

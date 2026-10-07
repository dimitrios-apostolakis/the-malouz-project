import React from 'react';
import { ArrowDownRight, Compass, Sparkles, Instagram } from 'lucide-react';
import { AlienArchetype } from '../types';

interface HeroProps {
  onSelectArchetype: (archetype: AlienArchetype) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectArchetype }) => {
  const archetypes: { id: AlienArchetype; name: string; label: string; color: string }[] = [
    { id: 'radients', name: 'RADIENTS', label: 'Spinal Pulsar', color: 'border-purple-400 text-purple-300' },
    { id: 'orients', name: 'ORIENTS', label: 'Cardinal Joint', color: 'border-sky-400 text-sky-300' },
    { id: 'naviens', name: 'NAVIENS', label: 'Abyssal Hollow', color: 'border-emerald-400 text-emerald-300' },
    { id: 'certiens', name: 'CERTIENS', label: 'Armored Carapace', color: 'border-amber-400 text-amber-300' },
    { id: 'lviens', name: 'LVIENS', label: 'Zero-G Ecstasy', color: 'border-pink-400 text-pink-300' },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-malouz-800 overflow-hidden bg-radial-gradient">
      {/* Background Architectural Grid & Subtle Aura */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-malouz-alien/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-malouz-clay/5 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Eyebrow */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-malouz-800/80 pb-6">
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded bg-malouz-900 border border-malouz-700 text-[10px] font-mono tracking-widest text-malouz-alien uppercase">
            AUTONOMOUS ATELIER // ATHENS
          </span>
          <span className="text-xs font-mono text-malouz-400 tracking-wider">
            SERIES 2026 / LIMITED EDITIONS
          </span>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-malouz-400">
          <span className="flex items-center gap-1">
            <Compass className="w-3.5 h-3.5 text-malouz-ember" />
            CERAMICS • BAGS • HEAVYWEIGHT CLOTHES • DRAWINGS
          </span>
        </div>
      </div>

      {/* Center Monumental Hero Typography */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Title Block */}
          <div className="lg:col-span-8 space-y-6">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-malouz-bone leading-[0.92]">
              THE MALOUZ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-malouz-bone via-malouz-300 to-malouz-muted">
                PROJECT
              </span>
            </h1>

            <p className="font-sans text-lg sm:text-2xl text-malouz-300 font-light max-w-2xl leading-relaxed tracking-wide">
              Brutalist tactile ceramics, handmade industrial bags, and wearable garments exploring sexual alien archetypes. 
              Forged with human hands in Athens for the restless over-20s vanguard.
            </p>

            {/* Direct Artist Manifesto Quote */}
            <div className="relative pl-6 border-l-2 border-malouz-alien/70 py-2 max-w-2xl bg-malouz-900/40 rounded-r">
              <p className="font-serif italic text-sm sm:text-base text-malouz-bone/90 leading-relaxed">
                "We don't manufacture sterile lifestyle products. We pull clay from the earth and ink from darkness to make artifacts that feel dangerous, sexual, and unyielding against the skin."
              </p>
              <div className="mt-2 flex items-center gap-2 text-xs font-mono tracking-widest text-malouz-ember">
                <span>— MALOU (@mmalouz)</span>
                <span className="text-malouz-600">/</span>
                <span>STUDIO DISPATCH // ATH</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4 font-mono text-xs tracking-widest">
              <a
                href="#tshirts"
                className="flex items-center gap-2 px-6 py-3.5 rounded bg-malouz-bone text-malouz-950 font-bold hover:bg-malouz-alien hover:text-black transition-all group"
              >
                <span>EXPLORE ALIEN T-SHIRTS</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#manifesto"
                className="flex items-center gap-2 px-6 py-3.5 rounded border border-malouz-700 bg-malouz-900/80 text-malouz-bone hover:border-malouz-alien hover:bg-malouz-850 transition-all"
              >
                <Sparkles className="w-4 h-4 text-malouz-alien" />
                <span>READ FROM MALOU</span>
              </a>

              <a
                href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 rounded border border-malouz-800 text-malouz-400 hover:text-malouz-bone hover:border-malouz-600 transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>@mmalouz</span>
              </a>
            </div>
          </div>

          {/* Right Architectural Glyph Codex Teaser */}
          <div className="lg:col-span-4 bg-malouz-900/70 border border-malouz-800 rounded-lg p-6 space-y-5 backdrop-blur-sm shadow-2xl">
            <div className="flex items-center justify-between border-b border-malouz-800 pb-3">
              <span className="text-[10px] font-mono tracking-widest text-malouz-muted uppercase">
                THE 5 SEXUAL ALIEN FIGURES
              </span>
              <span className="text-[10px] font-mono text-malouz-alien">INDEX: 01-05</span>
            </div>

            <p className="text-xs font-sans text-malouz-300 leading-normal">
              Every garment and sculpture in the atelier is mapped to one of five sexual alien archetypes. Select an archetype to inspect its geometry:
            </p>

            {/* Interactive Selector Pills */}
            <div className="space-y-2">
              {archetypes.map((arch) => (
                <button
                  key={arch.id}
                  onClick={() => onSelectArchetype(arch.id)}
                  className={`w-full flex items-center justify-between p-3 rounded border bg-malouz-950/60 hover:bg-malouz-850 transition-all text-left group ${arch.color}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span className="font-mono text-xs font-bold tracking-wider">{arch.name}</span>
                  </div>
                  <span className="text-[11px] font-mono text-malouz-muted group-hover:text-malouz-bone transition-colors">
                    {arch.label} →
                  </span>
                </button>
              ))}
            </div>

            <div className="pt-2 text-[10px] font-mono text-malouz-500 text-center border-t border-malouz-800/60">
              CLICK ANY ARCHETYPE TO JUMP TO CATALOG SPECIFICATIONS
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker Bar */}
      <div className="relative z-10 max-w-7xl mx-auto w-full pt-4 border-t border-malouz-800/80 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono tracking-wider text-malouz-400">
        <div className="flex items-center gap-6">
          <span>STONEWARE / TERRACOTTA</span>
          <span>•</span>
          <span>320GSM HEAVY COMBED COTTON</span>
          <span>•</span>
          <span>OILED BRIDLE LEATHER</span>
          <span>•</span>
          <span>JAPANESE SUMI INK</span>
        </div>
        <div className="text-malouz-muted">
          DIRECT ACQUISITIONS SHIP WORLDWIDE FROM ATHENS
        </div>
      </div>
    </section>
  );
};

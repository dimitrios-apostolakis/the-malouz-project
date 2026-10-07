import React, { useState } from 'react';
import { ALIEN_ARCHETYPES } from '../data/alienArchetypes';
import { AlienArchetype } from '../types';
import { AlienVisual } from './AlienVisuals';
import { Compass, Sparkles, ArrowRight, Layers } from 'lucide-react';

interface ArchetypeCodexProps {
  selectedArchetype: AlienArchetype;
  onSelectArchetype: (archetype: AlienArchetype) => void;
  onFilterProductsByArchetype: (archetype: AlienArchetype) => void;
}

export const ArchetypeCodex: React.FC<ArchetypeCodexProps> = ({
  selectedArchetype,
  onSelectArchetype,
  onFilterProductsByArchetype,
}) => {
  const current = ALIEN_ARCHETYPES[selectedArchetype];
  const archetypesList: AlienArchetype[] = ['radients', 'orients', 'naviens', 'certiens', 'lviens'];

  return (
    <section id="archetypes" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-malouz-800 bg-malouz-950/90 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-malouz-800 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-malouz-alien uppercase mb-2">
              <Layers className="w-4 h-4" />
              <span>THE ARCHITECTURAL MYTHOS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-malouz-bone tracking-tight">
              THE 5 SEXUAL ALIEN FIGURES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-malouz-300 max-w-2xl font-light">
              Each piece in The Malouz Project is an artifact of an extraterrestrial sensual entity. 
              These are not abstract decorations—they are anatomical studies of desire, pressure, and tactile tension.
            </p>
          </div>

          <div className="text-xs font-mono text-malouz-muted text-right hidden md:block">
            CODEX VOL. 1 // ATHENS ATELIER <br />
            FIGURES: 01 TO 05
          </div>
        </div>

        {/* Tab Buttons (Horizontal bar) */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3">
          {archetypesList.map((key) => {
            const arch = ALIEN_ARCHETYPES[key];
            const isActive = selectedArchetype === key;
            return (
              <button
                key={key}
                onClick={() => onSelectArchetype(key)}
                className={`p-4 rounded border transition-all text-left flex flex-col justify-between ${
                  isActive
                    ? 'border-malouz-alien bg-malouz-900 shadow-lg ring-1 ring-malouz-alien/50'
                    : 'border-malouz-800 bg-malouz-950/60 hover:border-malouz-700 hover:bg-malouz-900/40 text-malouz-400'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[10px] font-mono tracking-widest uppercase ${isActive ? 'text-malouz-alien font-bold' : 'text-malouz-600'}`}>
                    0{archetypesList.indexOf(key) + 1}
                  </span>
                  <div className="w-7 h-7">
                    <AlienVisual archetype={key} variant="glyph" />
                  </div>
                </div>
                <div>
                  <div className={`font-serif text-base sm:text-lg font-bold tracking-wider ${isActive ? 'text-malouz-bone' : 'text-malouz-300'}`}>
                    {arch.name}
                  </div>
                  <div className="text-[10px] font-mono text-malouz-500 truncate mt-0.5">
                    {arch.title.split('/')[0].trim()}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Dossier Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-malouz-900/60 border border-malouz-800 rounded-lg p-6 sm:p-10 backdrop-blur-sm">
          {/* Left Column: Visual Rendering */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-malouz-950 rounded-lg border border-malouz-800 p-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-malouz-850 pb-3 mb-6">
              <span className="text-[10px] font-mono tracking-widest text-malouz-muted uppercase">
                ANATOMICAL SCHEMATIC // {current.name}
              </span>
              <span className="text-[10px] font-mono text-malouz-alien">
                SCALE: 1:1
              </span>
            </div>

            <div className="w-full aspect-square flex items-center justify-center p-4">
              <AlienVisual archetype={selectedArchetype} variant="tshirt" glow={true} />
            </div>

            <div className="mt-6 pt-4 border-t border-malouz-850 flex items-center justify-between text-xs font-mono">
              <span className="text-malouz-500">APPLIED ON:</span>
              <span className="text-malouz-bone font-bold">{current.tshirtFocus}</span>
            </div>
          </div>

          {/* Right Column: In-Depth Anatomy & Voice */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono tracking-widest text-malouz-alien uppercase block">
                  FIGURE DOSSIER
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-malouz-bone tracking-wide mt-1">
                  {current.name}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-malouz-ember tracking-wider mt-1">
                  {current.title}
                </p>
              </div>

              {/* Anatomy & Geometry Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-malouz-950/80 p-4 rounded border border-malouz-800/80">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-malouz-muted uppercase tracking-wider mb-1.5">
                    <Compass className="w-3 h-3 text-malouz-alien" />
                    <span>EROTIC GEOMETRY</span>
                  </div>
                  <p className="text-xs font-sans text-malouz-200 leading-relaxed">
                    {current.eroticGeometry}
                  </p>
                </div>

                <div className="bg-malouz-950/80 p-4 rounded border border-malouz-800/80">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-malouz-muted uppercase tracking-wider mb-1.5">
                    <Sparkles className="w-3 h-3 text-malouz-alien" />
                    <span>ANATOMICAL CONCEPT</span>
                  </div>
                  <p className="text-xs font-sans text-malouz-200 leading-relaxed">
                    {current.anatomicalConcept}
                  </p>
                </div>
              </div>

              {/* Direct Artist Note from Malou */}
              <div className="bg-malouz-950 border-l-2 border-malouz-clay p-5 rounded-r">
                <div className="text-[10px] font-mono tracking-widest text-malouz-clay uppercase mb-2">
                  DIRECT STATEMENT FROM MALOU (@mmalouz):
                </div>
                <blockquote className="font-serif italic text-sm sm:text-base text-malouz-bone leading-relaxed">
                  {current.philosophicalNote}
                </blockquote>
              </div>

              {/* Tactile Material Expression */}
              <div className="text-xs font-mono space-y-1">
                <span className="text-malouz-500 uppercase tracking-wider block">TACTILE MANIFESTATION:</span>
                <p className="text-malouz-300 font-light leading-relaxed">
                  {current.tactileManifestation}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-malouz-800 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onFilterProductsByArchetype(selectedArchetype)}
                className="flex items-center gap-2 px-5 py-3 rounded bg-malouz-bone text-malouz-950 font-mono text-xs font-bold tracking-wider hover:bg-malouz-alien hover:text-black transition-all"
              >
                <span>VIEW ALL {current.name} PIECES IN STORE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#tshirts"
                className="px-5 py-3 rounded border border-malouz-700 bg-malouz-950 text-malouz-bone font-mono text-xs tracking-wider hover:border-malouz-500 transition-all"
              >
                INSPECT {current.name} T-SHIRT
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

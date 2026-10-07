import React from 'react';
import { ALIEN_ARCHETYPES } from '../data/alienArchetypes';
import { AlienArchetype } from '../types';
import { ArrowRight, Compass } from 'lucide-react';

interface ArchetypeCodexProps {
  selectedArchetype: AlienArchetype;
  onSelectArchetype: (archetype: AlienArchetype) => void;
  onFilterProductsByArchetype: (archetype: AlienArchetype) => void;
}

const ARCHETYPE_IMAGES: Record<AlienArchetype, string> = {
  radients: '/images/tshirt_radient.jpg',
  orients: '/images/tshirt_orient.jpg',
  naviens: '/images/tshirt_navien.jpg',
  certiens: '/images/tshirt_certien.jpg',
  lviens: '/images/tshirt_lvien.jpg',
};

export const ArchetypeCodex: React.FC<ArchetypeCodexProps> = ({
  selectedArchetype,
  onSelectArchetype,
  onFilterProductsByArchetype,
}) => {
  const current = ALIEN_ARCHETYPES[selectedArchetype];
  const archetypesList: AlienArchetype[] = ['radients', 'orients', 'naviens', 'certiens', 'lviens'];

  return (
    <section id="archetypes" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e4ded4] bg-[#f5f2eb]">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#e4ded4] pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#706e68] uppercase block">
              CANONICAL FIGURE STUDIES
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-[0.05em] uppercase">
              The 5 Sexual Alien Figures
            </h2>
            <p className="text-sm sm:text-base text-[#403e39] max-w-2xl font-light leading-relaxed">
              Every garment and ceramic piece in The Malouz Project is inscribed with one of five extraterrestrial figures:
              <strong className="font-normal text-[#141414]"> Radients, Orients, Naviens, Certiens, and Lviens</strong>. 
              These are architectural investigations of tactile desire, pressure, and anatomical tension.
            </p>
          </div>

          <div className="text-[10px] font-mono text-[#706e68] tracking-[0.2em] uppercase text-left md:text-right">
            <span>ATELIER MALOU // ATHENS</span> <br />
            <span>PLATES 01 — 05</span>
          </div>
        </div>

        {/* Minimal Tab Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 border-b border-[#e4ded4] pb-2">
          {archetypesList.map((key, index) => {
            const arch = ALIEN_ARCHETYPES[key];
            const isActive = selectedArchetype === key;
            return (
              <button
                key={key}
                onClick={() => onSelectArchetype(key)}
                className={`py-3 px-4 text-left transition-all border-b-2 flex flex-col justify-between ${
                  isActive
                    ? 'border-[#141414] bg-[#ede8df]/80 text-[#141414]'
                    : 'border-transparent text-[#706e68] hover:text-[#141414] hover:bg-[#ede8df]/30'
                }`}
              >
                <span className="text-[9px] font-mono tracking-[0.2em] uppercase block">
                  PLATE 0{index + 1}
                </span>
                <span className="font-serif text-sm sm:text-base font-medium tracking-wide uppercase mt-1">
                  {arch.name}
                </span>
                <span className="text-[10px] font-mono text-[#706e68] truncate mt-0.5">
                  {arch.title.split('/')[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dossier Card: Clean Editorial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#faf7f2] border border-[#e4ded4] p-6 sm:p-10 shadow-sm">
          {/* Left: Studio Photography */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative aspect-[4/5] bg-[#ede8df] overflow-hidden border border-[#e4ded4]">
              <img
                src={ARCHETYPE_IMAGES[selectedArchetype]}
                alt={`${current.name} Studio Photograph`}
                className="w-full h-full object-cover object-center filter contrast-[1.02]"
              />
              <div className="absolute top-3 left-3 bg-[#f5f2eb]/90 backdrop-blur-sm px-2.5 py-1 text-[9px] font-mono tracking-[0.2em] uppercase text-[#141414] border border-[#e4ded4]">
                STUDIO PROOF // {current.name}
              </div>
            </div>

            <div className="text-[10px] font-mono tracking-[0.18em] text-[#706e68] uppercase flex justify-between px-1">
              <span>GARMENT: {current.tshirtFocus}</span>
              <span>100% COMBED COTTON</span>
            </div>
          </div>

          {/* Right: Architectural Monograph Content */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="border-b border-[#e4ded4] pb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#706e68] uppercase block">
                  FIGURE DOSSIER
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141414] tracking-wide mt-1 uppercase">
                  {current.name}
                </h3>
                <p className="font-mono text-xs text-[#706e68] tracking-widest mt-1">
                  {current.title}
                </p>
              </div>

              {/* Anatomy & Geometry */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-[#f5f2eb] border border-[#e4ded4] space-y-1.5">
                  <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#706e68] uppercase tracking-wider">
                    <Compass className="w-3 h-3 text-[#141414]" />
                    <span>EROTIC GEOMETRY</span>
                  </div>
                  <p className="text-[#363430] font-light leading-relaxed">
                    {current.eroticGeometry}
                  </p>
                </div>

                <div className="p-4 bg-[#f5f2eb] border border-[#e4ded4] space-y-1.5">
                  <span className="text-[10px] font-mono text-[#706e68] uppercase tracking-wider block">
                    ANATOMICAL CONCEPT
                  </span>
                  <p className="text-[#363430] font-light leading-relaxed">
                    {current.anatomicalConcept}
                  </p>
                </div>
              </div>

              {/* Artist Statement */}
              <div className="border-l-2 border-[#141414] pl-4 py-1">
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#706e68] uppercase block mb-1">
                  ARTIST NOTE // MALOU:
                </span>
                <blockquote className="font-serif italic text-sm sm:text-base text-[#141414] leading-relaxed">
                  "{current.philosophicalNote}"
                </blockquote>
              </div>

              {/* Tactile Material Expression */}
              <div className="text-xs font-mono space-y-1">
                <span className="text-[10px] text-[#706e68] uppercase tracking-[0.2em] block">
                  TACTILE MANIFESTATION:
                </span>
                <p className="text-[#403e39] font-light leading-relaxed">
                  {current.tactileManifestation}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-[#e4ded4] flex flex-wrap items-center gap-4">
              <button
                onClick={() => onFilterProductsByArchetype(selectedArchetype)}
                className="px-6 py-3 bg-[#141414] text-[#f5f2eb] hover:bg-[#33312e] transition-colors font-mono text-[11px] tracking-[0.2em] uppercase font-medium flex items-center gap-2"
              >
                <span>View {current.name} Collection</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="#tshirts"
                className="px-6 py-3 border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb] transition-all font-mono text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Inspect T-Shirt Piece
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

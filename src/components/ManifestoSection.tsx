import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 px-4 sm:px-6 lg:px-8 border-b border-[#e4ded4] bg-[#f5f2eb]">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Section Header */}
        <div className="border-b border-[#e4ded4] pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#706e68] uppercase block">
              DIRECT ARTIST STATEMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-[0.05em] uppercase">
              From Malou.
            </h2>
            <p className="font-mono text-xs text-[#706e68] tracking-widest uppercase">
              ATHENS STUDIO // FOR THE ONES WHO REFUSE STERILITY
            </p>
          </div>

          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 border border-[#141414] bg-[#141414] text-[#f5f2eb] hover:bg-transparent hover:text-[#141414] font-mono text-[11px] tracking-[0.18em] uppercase transition-all self-start md:self-auto"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span>Connect on Instagram @mmalouz</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

        {/* Monologue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Key Principles */}
          <div className="md:col-span-4 space-y-6 font-mono text-xs">
            <div className="bg-[#faf7f2] p-6 border border-[#e4ded4] space-y-4">
              <span className="text-[10px] tracking-[0.25em] text-[#706e68] uppercase block font-semibold">
                ATELIER AXIOMS // ATHENS
              </span>

              <div className="space-y-4 text-[#403e39]">
                <div className="border-b border-[#e4ded4] pb-3">
                  <div className="text-[#141414] font-semibold mb-1">01. DIRTY HANDS</div>
                  <p className="text-[11px] text-[#706e68] font-light leading-relaxed">
                    If an object hasn't absorbed sweat, clay dust, or ink splashes, it possesses no spirit.
                  </p>
                </div>

                <div className="border-b border-[#e4ded4] pb-3">
                  <div className="text-[#141414] font-semibold mb-1">02. SEXUAL ALIEN FORMS</div>
                  <p className="text-[11px] text-[#706e68] font-light leading-relaxed">
                    The Radients, Orients, Naviens, Certiens, and Lviens are our antidote to clinical modern prudishness.
                  </p>
                </div>

                <div className="border-b border-[#e4ded4] pb-3">
                  <div className="text-[#141414] font-semibold mb-1">03. ARCHITECTURAL WEIGHT</div>
                  <p className="text-[11px] text-[#706e68] font-light leading-relaxed">
                    We use 320gsm cotton and heavy waxed canvas. Garments should armor you against the city.
                  </p>
                </div>

                <div>
                  <div className="text-[#141414] font-semibold mb-1">04. ZERO CORPORATE BUFFER</div>
                  <p className="text-[11px] text-[#706e68] font-light leading-relaxed">
                    When you inquire, you talk to me directly. Every parcel is dispatched from the Athens studio.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 border border-[#e4ded4] bg-[#faf7f2] space-y-2">
              <span className="text-[10px] text-[#706e68] tracking-[0.2em] uppercase block font-semibold">
                STUDIO VISITS
              </span>
              <p className="text-xs text-[#595650] font-light leading-relaxed">
                Private studio visits and commission consultations in Athens available by appointment via Instagram DM.
              </p>
            </div>
          </div>

          {/* Right Column: Full Long-form Artist Essay */}
          <div className="md:col-span-8 space-y-6 text-[#2c2b28] font-light text-base sm:text-lg leading-relaxed">
            <p className="font-serif italic text-xl sm:text-2xl text-[#141414] leading-snug">
              "We grew up in a world that became increasingly smooth, frictionless, and desperately sterile."
            </p>

            <p>
              Look at modern clothing and commercial design: flat digital prints on paper-thin polyester, pastel coffee cups created for corporate slides, algorithms curating your desires before you even feel them. 
              Everything has been scrubbed clean of friction, lust, and blood.
            </p>

            <p>
              <strong className="text-[#141414] font-medium">The Malouz Project was born out of anger and desire in Athens.</strong> In this city, concrete bakes under 40-degree heat, ancient ruins stand beside graffiti-covered brutalist apartments, and bodies collide until dawn. There is an urgent, raw vitality here that demanded a physical language.
            </p>

            <div className="my-8 p-6 bg-[#faf7f2] border-l-2 border-[#141414] space-y-3">
              <h4 className="font-serif text-lg font-medium text-[#141414] uppercase tracking-wide">
                Why Sexual Alien Figures?
              </h4>
              <p className="text-sm text-[#403e39] leading-relaxed">
                The figures on the t-shirts and in my drawings—the <em>Radients</em>, the <em>Orients</em>, the <em>Naviens</em>, the <em>Certiens</em>, the <em>Lviens</em>—came to me in the studio while thinking about how human touch changes when language breaks down. 
                They are alien because human categories are too small for what bodies actually feel. They are sexual because desire is the only force capable of tearing through the dead digital fog of modern life.
              </p>
            </div>

            <p>
              When you hold a piece of my ceramics, I want you to feel the coarse tooth of high-grogg volcanic stoneware. I want you to feel where my thumbs pressed into the wet clay to hollow out a pelvic curve. 
              When you wear a Malouz t-shirt, it shouldn't drape like an afterthought—it should feel like structured architecture, heavy enough to remind you that you are alive and present.
            </p>

            <p>
              Every bag is stitched to survive years of movement. Every drawing is drafted with Japanese sumi ink and graphite on rough cotton paper that smells of cedar and oil.
            </p>

            <div className="pt-6 border-t border-[#e4ded4] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-[#141414] font-bold block">MALOU (@mmalouz)</span>
                <span className="text-[#706e68]">Founder & Maker // Athens, Greece</span>
              </div>

              <a
                href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#141414] hover:opacity-70 transition-opacity font-medium tracking-wider"
              >
                <span>SEND DIRECT DM TO MALOU</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

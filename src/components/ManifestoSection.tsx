import React from 'react';
import { Instagram, Compass, Flame, ArrowUpRight } from 'lucide-react';

export const ManifestoSection: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 px-4 sm:px-6 lg:px-8 border-b border-malouz-800 bg-malouz-900/40 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-malouz-clay/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-malouz-alien/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="border-b border-malouz-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-malouz-ember uppercase mb-2">
              <Flame className="w-4 h-4" />
              <span>DIRECT ARTIST MANIFESTO</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-black text-malouz-bone tracking-tight">
              FROM MALOU.
            </h2>
            <p className="mt-2 font-mono text-xs text-malouz-400 tracking-wider">
              WRITTEN IN ATHENS // FOR THE ONES WHO REFUSE STERILITY
            </p>
          </div>

          <a
            href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded border border-malouz-700 bg-malouz-950 font-mono text-xs text-malouz-bone hover:border-malouz-alien hover:text-malouz-alien transition-all self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" />
            <span>CONNECT ON INSTAGRAM @mmalouz</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Monologue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Left Column: Key Principles */}
          <div className="md:col-span-4 space-y-6 font-mono text-xs">
            <div className="bg-malouz-950 p-6 rounded-lg border border-malouz-800 space-y-4">
              <span className="text-[10px] tracking-widest text-malouz-alien uppercase block">
                ATELIER AXIOMS // ATH
              </span>

              <div className="space-y-4 text-malouz-300">
                <div className="border-b border-malouz-900 pb-3">
                  <div className="text-malouz-bone font-bold mb-1">01. DIRTY HANDS</div>
                  <p className="text-[11px] text-malouz-400 font-light">
                    If an object hasn't absorbed sweat, clay dust, or ink splashes, it possesses no spirit.
                  </p>
                </div>

                <div className="border-b border-malouz-900 pb-3">
                  <div className="text-malouz-bone font-bold mb-1">02. SEXUAL ALIEN FORMS</div>
                  <p className="text-[11px] text-malouz-400 font-light">
                    The Radients, Orients, Naviens, Certiens, and Lviens are our antidote to clinical modern prudishness.
                  </p>
                </div>

                <div className="border-b border-malouz-900 pb-3">
                  <div className="text-malouz-bone font-bold mb-1">03. ARCHITECTURAL WEIGHT</div>
                  <p className="text-[11px] text-malouz-400 font-light">
                    We use 320gsm cotton and 24oz waxed canvas. Garments should armor you against the city.
                  </p>
                </div>

                <div>
                  <div className="text-malouz-bone font-bold mb-1">04. ZERO CORPORATE BUFFER</div>
                  <p className="text-[11px] text-malouz-400 font-light">
                    When you inquire, you talk to me. Every package is packed in the Athens studio.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-lg border border-malouz-800/60 bg-malouz-950/60 space-y-2">
              <span className="text-[10px] text-malouz-muted tracking-widest uppercase block">STUDIO VISITS</span>
              <p className="text-xs text-malouz-300 font-light">
                Private studio visits and commission consultations in Athens available by appointment via Instagram DM.
              </p>
            </div>
          </div>

          {/* Right Column: Full Long-form Artist Essay */}
          <div className="md:col-span-8 space-y-6 text-malouz-bone/90 font-light text-base sm:text-lg leading-relaxed">
            <p className="font-serif italic text-xl sm:text-2xl text-malouz-bone leading-snug">
              "We grew up in a world that became increasingly smooth, frictionless, and desperately sterile."
            </p>

            <p>
              Look at modern clothing and design objects: flat digital prints on paper-thin polyester, pastel coffee cups designed for corporate slides, algorithms curating your desires before you even feel them. 
              Everything has been scrubbed clean of tension, lust, and blood.
            </p>

            <p>
              <strong>The Malouz Project was born out of anger and desire in Athens.</strong> In this city, concrete bakes under 40-degree sun, neoclassical ruins stand next to graffiti-covered brutalist apartment blocks, and bodies collide in sweaty basements until dawn. There is an urgent, raw vitality here that demanded a physical language.
            </p>

            <div className="my-8 p-6 bg-malouz-950 border-l-4 border-malouz-alien rounded-r space-y-3">
              <h4 className="font-serif text-lg font-bold text-malouz-bone">
                Why Sexual Alien Figures?
              </h4>
              <p className="text-sm text-malouz-300 leading-relaxed font-sans">
                The figures you see on the t-shirts and in my drawings—the <em>Radients</em>, the <em>Orients</em>, the <em>Naviens</em>, the <em>Certiens</em>, the <em>Lviens</em>—came to me in the studio while thinking about how human touch changes when language breaks down. 
                They are alien because human categories are too small for what bodies actually feel. They are sexual because desire is the only force capable of tearing through the dead digital fog of modern life.
              </p>
            </div>

            <p>
              When you pick up a piece of my ceramics, I want you to feel the coarse tooth of high-grogg volcanic stoneware. I want you to feel where my thumbs dug into the wet clay to hollow out a pelvic curve. 
              When you wear a Malouz t-shirt, it shouldn't drape like an afterthought—it should feel like structured architecture, heavy enough to remind you that you are alive and dangerous.
            </p>

            <p>
              Every bag is stitched to survive years of movement. Every drawing is drafted with drafting ink and charcoal on rough cotton paper that smells of cedar and oil.
            </p>

            <div className="pt-6 border-t border-malouz-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div className="space-y-1">
                <span className="text-malouz-bone font-bold block">MALOU (@mmalouz)</span>
                <span className="text-malouz-500">Founder & Maker // Athens, Greece</span>
              </div>

              <a
                href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-malouz-alien hover:text-white transition-colors"
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

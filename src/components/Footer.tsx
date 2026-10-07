import React, { useState } from 'react';
import { Instagram, ArrowRight, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#f5f2eb] border-t border-[#e4ded4] text-[#706e68] font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-serif text-xl sm:text-2xl font-light text-[#141414] tracking-[0.2em] uppercase block">
              THE MALOUZ PROJECT
            </span>

            <p className="text-xs text-[#595650] font-light leading-relaxed max-w-sm">
              An independent artistic atelier based in Athens. Sculptural volcanic ceramics, handmade industrial bags, original ink drawings, and wearable garments exploring sexual alien archetypes.
            </p>

            <div className="pt-2">
              <a
                href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb] transition-all text-[11px] tracking-wider uppercase"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@mmalouz on Instagram</span>
              </a>
            </div>
          </div>

          {/* Col 2: The 5 Figures Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] tracking-[0.2em] text-[#141414] uppercase block font-medium">
              The 5 Alien Figures
            </span>
            <ul className="space-y-2 text-[#706e68] text-[11px]">
              <li>
                <a href="#archetypes" className="hover:text-[#141414] transition-colors">
                  01. RADIENTS (Spinal Pulsar)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-[#141414] transition-colors">
                  02. ORIENTS (Cardinal Joint)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-[#141414] transition-colors">
                  03. NAVIENS (Abyssal Hollow)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-[#141414] transition-colors">
                  04. CERTIENS (Armored Carapace)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-[#141414] transition-colors">
                  05. LVIENS (Zero-G Ecstasy)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] tracking-[0.2em] text-[#141414] uppercase block font-medium">
              Collections
            </span>
            <ul className="space-y-2 text-[#706e68] text-[11px]">
              <li>
                <a href="#ceramics" className="hover:text-[#141414] transition-colors">
                  Ceramics
                </a>
              </li>
              <li>
                <a href="#tshirts" className="hover:text-[#141414] transition-colors">
                  Clothes & Tees
                </a>
              </li>
              <li>
                <a href="#bags" className="hover:text-[#141414] transition-colors">
                  Handmade Bags
                </a>
              </li>
              <li>
                <a href="#drawings" className="hover:text-[#141414] transition-colors">
                  Drawings & Prints
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-[#141414] transition-colors">
                  From Malou
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Salon */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] tracking-[0.2em] text-[#141414] uppercase block font-medium">
              Studio Salon
            </span>
            <p className="text-[11px] text-[#706e68] font-light">
              Receive private notifications when kiln firings or garment editions drop.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@domain.com"
                required
                className="w-full bg-[#faf7f2] border border-[#e4ded4] p-2 text-[#141414] text-xs focus:border-[#141414] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 bg-[#141414] text-[#f5f2eb] hover:bg-[#33312e] text-[10px] font-medium tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Join Salon</span>
                    <ArrowRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="pt-6 border-t border-[#e4ded4] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-[#706e68] uppercase tracking-wider">
          <div>
            <span>ATHENS STUDIO // © {new Date().getFullYear()} THE MALOUZ PROJECT</span>
          </div>

          <div className="flex items-center gap-4">
            <span>HIGH-GROGG STONEWARE</span>
            <span>/</span>
            <span>320GSM COTTON</span>
            <span>/</span>
            <span>DIRECT WORLDWIDE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

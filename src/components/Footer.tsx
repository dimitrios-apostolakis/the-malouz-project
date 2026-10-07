import React, { useState } from 'react';
import { Instagram, ArrowRight, Check, Compass, Globe } from 'lucide-react';

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
    <footer className="bg-malouz-950 border-t border-malouz-800 text-malouz-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-malouz-700 bg-malouz-900 flex items-center justify-center rounded">
                <span className="font-serif text-sm font-black text-malouz-bone">M</span>
              </div>
              <span className="font-serif text-lg font-bold text-malouz-bone tracking-widest">
                THE MALOUZ PROJECT
              </span>
            </div>

            <p className="text-xs text-malouz-300 font-light leading-relaxed max-w-sm">
              An independent artistic atelier based in Athens. Sculptural ceramics, handmade architectural bags, and wearable garments exploring sexual alien archetypes.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.instagram.com/mmalouz?stkn=MWV0em5hdGxzZHNpbA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded border border-malouz-800 text-malouz-bone hover:border-malouz-alien hover:text-malouz-alien transition-colors text-[11px]"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>@mmalouz ON INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Col 2: The 5 Archetypes Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-[10px] tracking-widest text-malouz-bone uppercase block font-bold">
              THE 5 SEXUAL ALIEN FIGURES
            </span>
            <ul className="space-y-2 text-malouz-400">
              <li>
                <a href="#archetypes" className="hover:text-purple-300 transition-colors">
                  01. RADIENTS (Spinal Pulsar)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-sky-300 transition-colors">
                  02. ORIENTS (Cardinal Joint)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-emerald-300 transition-colors">
                  03. NAVIENS (Abyssal Hollow)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-amber-300 transition-colors">
                  04. CERTIENS (Armored Carapace)
                </a>
              </li>
              <li>
                <a href="#archetypes" className="hover:text-pink-300 transition-colors">
                  05. LVIENS (Zero-G Ecstasy)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] tracking-widest text-malouz-bone uppercase block font-bold">
              ATELIER CATEGORIES
            </span>
            <ul className="space-y-2 text-malouz-400">
              <li>
                <a href="#tshirts" className="hover:text-malouz-bone transition-colors">
                  Alien T-Shirt Series
                </a>
              </li>
              <li>
                <a href="#ceramics" className="hover:text-malouz-bone transition-colors">
                  Sculptural Ceramics
                </a>
              </li>
              <li>
                <a href="#bags" className="hover:text-malouz-bone transition-colors">
                  Handmade Bags
                </a>
              </li>
              <li>
                <a href="#drawings" className="hover:text-malouz-bone transition-colors">
                  Drawings & Prints
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-malouz-ember transition-colors">
                  Artist Manifesto
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Studio Dispatch / Salon */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-[10px] tracking-widest text-malouz-bone uppercase block font-bold">
              STUDIO SALON
            </span>
            <p className="text-[11px] text-malouz-500 font-light">
              Receive private dispatch notifications when new ceramic kiln firings or t-shirt editions drop.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-malouz-900 border border-malouz-800 rounded p-2 text-malouz-bone text-xs focus:border-malouz-alien focus:outline-none"
              />
              <button
                type="submit"
                className="w-full py-2 px-3 rounded bg-malouz-800 hover:bg-malouz-bone hover:text-black text-malouz-bone text-xs font-bold transition-all flex items-center justify-center gap-1.5"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>SUBSCRIBED</span>
                  </>
                ) : (
                  <>
                    <span>JOIN SALON</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Technical Bar */}
        <div className="pt-8 border-t border-malouz-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-malouz-500">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-malouz-600" />
            <span>ATHENS STUDIO // ALL RIGHTS RESERVED © {new Date().getFullYear()} THE MALOUZ PROJECT</span>
          </div>

          <div className="flex items-center gap-4">
            <span>CONE 10 REDUCTION</span>
            <span>•</span>
            <span>320GSM COMBED COTTON</span>
            <span>•</span>
            <span>DIRECT TO AUDIENCE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

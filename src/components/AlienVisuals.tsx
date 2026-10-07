import React from 'react';
import { AlienArchetype } from '../types';

interface AlienVisualProps {
  archetype: AlienArchetype;
  variant?: 'diagram' | 'tshirt' | 'ceramic' | 'bag' | 'drawing' | 'glyph';
  className?: string;
  glow?: boolean;
}

export const AlienVisual: React.FC<AlienVisualProps> = ({
  archetype,
  variant = 'diagram',
  className = '',
  glow = false,
}) => {
  // Theme color per archetype
  const colors = {
    radients: { stroke: '#c084fc', fill: 'rgba(192, 132, 252, 0.15)', glow: 'rgba(192, 132, 252, 0.4)' },
    orients: { stroke: '#38bdf8', fill: 'rgba(56, 189, 248, 0.15)', glow: 'rgba(56, 189, 248, 0.4)' },
    naviens: { stroke: '#34d399', fill: 'rgba(52, 211, 153, 0.15)', glow: 'rgba(52, 211, 153, 0.4)' },
    certiens: { stroke: '#fb923c', fill: 'rgba(251, 146, 60, 0.15)', glow: 'rgba(251, 146, 60, 0.4)' },
    lviens: { stroke: '#f472b6', fill: 'rgba(244, 114, 182, 0.15)', glow: 'rgba(244, 114, 182, 0.4)' },
  };

  const theme = colors[archetype];

  // =========================================================
  // GLYPH VARIANT (MINIMAL EMBLEM)
  // =========================================================
  if (variant === 'glyph') {
    return (
      <svg viewBox="0 0 80 80" className={`w-full h-full ${className}`} fill="none">
        <circle cx="40" cy="40" r="34" stroke="#27272a" strokeWidth="1" strokeDasharray="3 3" />
        {archetype === 'radients' && (
          <>
            <line x1="40" y1="12" x2="40" y2="68" stroke={theme.stroke} strokeWidth="1.5" />
            <path d="M40 20 C25 35 25 45 40 60 C55 45 55 35 40 20 Z" stroke={theme.stroke} strokeWidth="1.5" fill={theme.fill} />
            <circle cx="40" cy="40" r="4" fill="#f5f3ec" />
            <path d="M22 30 Q40 40 58 30" stroke={theme.stroke} strokeWidth="1" opacity="0.7" />
            <path d="M22 50 Q40 40 58 50" stroke={theme.stroke} strokeWidth="1" opacity="0.7" />
          </>
        )}
        {archetype === 'orients' && (
          <>
            <rect x="25" y="25" width="30" height="30" stroke="#71717a" strokeWidth="1" transform="rotate(45 40 40)" />
            <path d="M40 16 L40 64 M16 40 L64 40" stroke={theme.stroke} strokeWidth="1.5" />
            <path d="M26 26 L54 54 M54 26 L26 54" stroke={theme.stroke} strokeWidth="1" strokeDasharray="2 2" />
            <circle cx="40" cy="40" r="6" stroke={theme.stroke} strokeWidth="1.5" fill={theme.fill} />
          </>
        )}
        {archetype === 'naviens' && (
          <>
            <path d="M40 18 Q20 40 40 64 Q60 40 40 18 Z" stroke={theme.stroke} strokeWidth="1.5" fill={theme.fill} />
            <path d="M30 35 Q40 50 50 35" stroke={theme.stroke} strokeWidth="1.5" />
            <circle cx="40" cy="44" r="3" fill="#f5f3ec" />
            <circle cx="40" cy="40" r="24" stroke="#3f3f46" strokeWidth="0.8" />
          </>
        )}
        {archetype === 'certiens' && (
          <>
            <path d="M40 16 L58 30 L58 54 L40 66 L22 54 L22 30 Z" stroke={theme.stroke} strokeWidth="1.5" fill={theme.fill} />
            <line x1="40" y1="16" x2="40" y2="66" stroke="#f5f3ec" strokeWidth="1" />
            <line x1="22" y1="38" x2="58" y2="38" stroke={theme.stroke} strokeWidth="1" />
            <line x1="26" y1="48" x2="54" y2="48" stroke={theme.stroke} strokeWidth="1" />
          </>
        )}
        {archetype === 'lviens' && (
          <>
            <path d="M40 14 C25 28 55 42 40 66" stroke={theme.stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M34 22 C48 34 30 48 44 58" stroke="#f5f3ec" strokeWidth="1" strokeDasharray="2 3" />
            <circle cx="40" cy="18" r="4" fill={theme.stroke} />
            <ellipse cx="40" cy="42" rx="18" ry="6" stroke="#52525b" strokeWidth="0.8" />
          </>
        )}
      </svg>
    );
  }

  // =========================================================
  // T-SHIRT GARMENT RENDERING
  // =========================================================
  if (variant === 'tshirt') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center p-4 bg-malouz-900 overflow-hidden ${className}`}>
        {/* Subtle studio grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        {/* Architectural coordinates overlay */}
        <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-malouz-500 uppercase">
          SPEC: {archetype} // CUT-01
        </div>
        <div className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-malouz-600">
          ATH-300GSM-RAW
        </div>

        <svg viewBox="0 0 400 480" className="w-full h-full max-h-[380px] drop-shadow-2xl" fill="none">
          <defs>
            <filter id={`glow-${archetype}`} x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="tshirtFabric" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#14151b" />
              <stop offset="50%" stopColor="#0d0e12" />
              <stop offset="100%" stopColor="#08080a" />
            </linearGradient>
          </defs>

          {/* Garment Silhouette (Architectural Oversized T-Shirt) */}
          <path
            d="M130 60 Q200 85 270 60 L350 110 L315 175 L280 160 L280 430 Q200 440 120 430 L120 160 L85 175 L50 110 Z"
            fill="url(#tshirtFabric)"
            stroke="#27272a"
            strokeWidth="1.5"
          />

          {/* Collar Binding */}
          <path
            d="M130 60 Q200 95 270 60 Q200 78 130 60 Z"
            fill="#1c1d24"
            stroke="#3f3f46"
            strokeWidth="1.2"
          />

          {/* Seam Details & Stitching */}
          <line x1="120" y1="160" x2="280" y2="160" stroke="#1f2937" strokeWidth="0.8" strokeDasharray="2 3" />
          <line x1="280" y1="160" x2="315" y2="175" stroke="#1f2937" strokeWidth="0.8" />
          <line x1="120" y1="160" x2="85" y2="175" stroke="#1f2937" strokeWidth="0.8" />
          <line x1="120" y1="422" x2="280" y2="422" stroke="#27272a" strokeWidth="1" strokeDasharray="4 2" />

          {/* THE SEXUAL ALIEN GRAPHIC ON THE T-SHIRT */}
          <g transform="translate(140, 140) scale(0.65)" filter={glow ? `url(#glow-${archetype})` : undefined}>
            {archetype === 'radients' && (
              <>
                {/* Radient Alien Spine & Radiant Ribs */}
                <path d="M90 20 L90 280" stroke={theme.stroke} strokeWidth="3" strokeLinecap="round" />
                {[40, 75, 110, 145, 180, 215, 250].map((y, i) => (
                  <g key={i}>
                    <path
                      d={`M90 ${y} C${40 - i * 2} ${y - 15}, ${30 - i * 3} ${y + 20}, ${10 - i * 2} ${y - 10}`}
                      stroke={theme.stroke}
                      strokeWidth={2 - i * 0.15}
                      fill="none"
                    />
                    <path
                      d={`M90 ${y} C${140 + i * 2} ${y - 15}, ${150 + i * 3} ${y + 20}, ${170 + i * 2} ${y - 10}`}
                      stroke={theme.stroke}
                      strokeWidth={2 - i * 0.15}
                      fill="none"
                    />
                    <circle cx="90" cy={y} r={4 - (i % 2)} fill="#f5f3ec" />
                  </g>
                ))}
                {/* Sensual Alien Head & Aura */}
                <ellipse cx="90" cy="20" rx="14" ry="20" stroke={theme.stroke} strokeWidth="2" fill="rgba(192, 132, 252, 0.2)" />
                <ellipse cx="90" cy="18" rx="5" ry="8" fill="#f5f3ec" />
                <circle cx="90" cy="20" r="30" stroke={theme.stroke} strokeWidth="0.8" strokeDasharray="3 4" opacity="0.6" />
              </>
            )}

            {archetype === 'orients' && (
              <>
                {/* Orient 90-degree Folded Extraterrestrial Limbs */}
                <path d="M30 40 L150 40 L150 160 L30 160 Z" stroke={theme.stroke} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.4" />
                <path d="M40 50 L140 50 L140 220 L70 220 L70 120 L40 120 Z" stroke={theme.stroke} strokeWidth="2.5" fill="rgba(56, 189, 248, 0.1)" />
                <path d="M90 20 L90 260 M20 140 L160 140" stroke="#f5f3ec" strokeWidth="1" strokeDasharray="2 3" />
                <line x1="40" y1="50" x2="140" y2="220" stroke={theme.stroke} strokeWidth="1.5" />
                <circle cx="90" cy="135" r="8" fill={theme.stroke} />
                <circle cx="140" cy="50" r="5" fill="#f5f3ec" />
                <circle cx="70" cy="220" r="5" fill="#f5f3ec" />
              </>
            )}

            {archetype === 'naviens' && (
              <>
                {/* Navien Pelvic Incisions & Fluid Abyssal Gills */}
                <path d="M90 20 C50 60, 40 140, 90 260 C140 140, 130 60, 90 20 Z" stroke={theme.stroke} strokeWidth="2" fill="rgba(52, 211, 153, 0.12)" />
                <path d="M60 100 Q90 150 120 100" stroke={theme.stroke} strokeWidth="2" />
                <path d="M55 130 Q90 180 125 130" stroke={theme.stroke} strokeWidth="2" />
                <path d="M50 160 Q90 210 130 160" stroke={theme.stroke} strokeWidth="2" />
                <circle cx="90" cy="190" r="6" fill="#f5f3ec" />
                <circle cx="90" cy="80" r="4" fill={theme.stroke} />
                <ellipse cx="90" cy="190" rx="25" ry="10" stroke="#71717a" strokeWidth="0.8" strokeDasharray="2 2" />
              </>
            )}

            {archetype === 'certiens' && (
              <>
                {/* Certien Interlocking Carapace Armor Plates */}
                <path d="M90 20 L140 60 L140 190 L90 250 L40 190 L40 60 Z" stroke={theme.stroke} strokeWidth="2.5" fill="rgba(251, 146, 60, 0.1)" />
                <line x1="90" y1="20" x2="90" y2="250" stroke="#f5f3ec" strokeWidth="1.5" />
                <line x1="40" y1="90" x2="140" y2="90" stroke={theme.stroke} strokeWidth="1.5" />
                <line x1="40" y1="130" x2="140" y2="130" stroke={theme.stroke} strokeWidth="1.5" />
                <line x1="50" y1="170" x2="130" y2="170" stroke={theme.stroke} strokeWidth="1.5" />
                <polygon points="90,40 110,65 90,80 70,65" fill="#f5f3ec" opacity="0.9" />
                <polygon points="90,95 115,120 90,135 65,120" fill={theme.stroke} opacity="0.8" />
              </>
            )}

            {archetype === 'lviens' && (
              <>
                {/* Lvien Suspended Sinuous Levitation Ribbons */}
                <path d="M90 20 C40 60 140 110 70 170 C20 220 160 250 90 290" stroke={theme.stroke} strokeWidth="3" strokeLinecap="round" fill="none" />
                <path d="M100 30 C50 70 150 120 80 180 C30 230 170 260 100 300" stroke="#f5f3ec" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                <circle cx="90" cy="20" r="7" fill={theme.stroke} />
                <circle cx="70" cy="170" r="4" fill="#f5f3ec" />
                <ellipse cx="90" cy="160" rx="45" ry="12" stroke="#52525b" strokeWidth="0.8" strokeDasharray="3 3" />
              </>
            )}
          </g>

          {/* Artist Signature & Tag */}
          <text x="200" y="465" textAnchor="middle" fill="#52525b" fontSize="10" fontFamily="monospace" letterSpacing="0.2em">
            MALOUZ PROJECT // ATHENS
          </text>
        </svg>
      </div>
    );
  }

  // =========================================================
  // CERAMIC OBJECT RENDERING
  // =========================================================
  if (variant === 'ceramic') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center p-4 bg-malouz-900 overflow-hidden ${className}`}>
        <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-malouz-clay uppercase">
          KILN / CONE 10 REDUCTION
        </div>
        <div className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-malouz-600">
          RAW STONEWARE 1/1
        </div>

        <svg viewBox="0 0 360 440" className="w-full h-full max-h-[360px] drop-shadow-2xl" fill="none">
          <defs>
            <radialGradient id="ceramicClay" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#2c2d33" />
              <stop offset="60%" stopColor="#18191e" />
              <stop offset="100%" stopColor="#0c0d10" />
            </radialGradient>
            <linearGradient id="clayHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#c85a32" stopOpacity="0.4" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>

          {/* Pedestal Shadow */}
          <ellipse cx="180" cy="405" rx="90" ry="16" fill="black" opacity="0.6" />

          {/* Sculptural Ceramic Vessel Body */}
          <path
            d="M130 90 C110 130 90 200 90 260 C90 340 120 380 140 395 L220 395 C240 380 270 340 270 260 C270 200 250 130 230 90 Z"
            fill="url(#ceramicClay)"
            stroke="#3f3f46"
            strokeWidth="2"
          />

          {/* Top Lip / Rim */}
          <ellipse cx="180" cy="90" rx="50" ry="14" fill="#121316" stroke="#52525b" strokeWidth="2" />
          <ellipse cx="180" cy="90" rx="42" ry="10" fill="#060608" stroke={theme.stroke} strokeWidth="1" />

          {/* Hand-Carved Tactile Incisions (Pelvic Flutes / Alien Geometry) */}
          <path d="M120 170 Q180 230 240 170" stroke={theme.stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M110 210 Q180 275 250 210" stroke={theme.stroke} strokeWidth="2.5" strokeLinecap="round" />
          <path d="M115 250 Q180 315 245 250" stroke={theme.stroke} strokeWidth="2" strokeLinecap="round" />

          {/* Vertical Carved Slits / Alien Spine on Clay */}
          <line x1="180" y1="130" x2="180" y2="360" stroke="#f5f3ec" strokeWidth="1.5" strokeDasharray="3 4" />
          <circle cx="180" cy="240" r="7" fill="#c85a32" opacity="0.8" />
          <circle cx="180" cy="300" r="5" fill="#f5f3ec" />

          {/* Raw Texture Flecks */}
          <circle cx="150" cy="320" r="2" fill="#c85a32" />
          <circle cx="210" cy="280" r="1.5" fill="#c85a32" />
          <circle cx="140" cy="230" r="1.5" fill="#e4e4e7" />
          <circle cx="220" cy="340" r="2" fill="#e4e4e7" />
        </svg>
      </div>
    );
  }

  // =========================================================
  // HANDMADE BAG RENDERING
  // =========================================================
  if (variant === 'bag') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center p-4 bg-malouz-900 overflow-hidden ${className}`}>
        <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-malouz-ember uppercase">
          HEAVY WAXED CANVAS & HARDWARE
        </div>
        <div className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-malouz-600">
          STUDIO ATELIER ATH
        </div>

        <svg viewBox="0 0 380 440" className="w-full h-full max-h-[360px] drop-shadow-2xl" fill="none">
          <defs>
            <linearGradient id="canvasTexture" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e2025" />
              <stop offset="100%" stopColor="#121316" />
            </linearGradient>
          </defs>

          {/* Tension Strap / Handles */}
          <path
            d="M130 200 L130 70 Q190 40 250 70 L250 200"
            stroke="#27272a"
            strokeWidth="16"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M130 200 L130 70 Q190 40 250 70 L250 200"
            stroke="#3f3f46"
            strokeWidth="12"
            strokeLinecap="round"
            fill="none"
          />

          {/* Bag Body (Architectural Monolith Silhouette) */}
          <rect x="70" y="160" width="240" height="240" rx="8" fill="url(#canvasTexture)" stroke="#3f3f46" strokeWidth="2" />

          {/* Bottom Reinforcement Gusset */}
          <path d="M70 340 L310 340 L310 400 L70 400 Z" fill="#0d0e11" stroke="#27272a" strokeWidth="1.5" />

          {/* Front Flap / Geometric Pocket with Alien Emblem */}
          <rect x="110" y="200" width="160" height="110" rx="4" fill="#181a20" stroke="#52525b" strokeWidth="1" />

          {/* Laser-Etched Alien Figure on Leather Patch */}
          <rect x="155" y="225" width="70" height="60" rx="2" fill="#2d2822" stroke="#d69e46" strokeWidth="1" />
          <path d="M190 235 L190 275 M175 250 L205 250" stroke="#f5f3ec" strokeWidth="1" />
          <circle cx="190" cy="255" r="4" fill={theme.stroke} />

          {/* Industrial Solid Copper Rivets */}
          <circle cx="130" cy="180" r="5" fill="#c85a32" stroke="#8c3818" strokeWidth="1" />
          <circle cx="250" cy="180" r="5" fill="#c85a32" stroke="#8c3818" strokeWidth="1" />
          <circle cx="130" cy="320" r="5" fill="#c85a32" stroke="#8c3818" strokeWidth="1" />
          <circle cx="250" cy="320" r="5" fill="#c85a32" stroke="#8c3818" strokeWidth="1" />

          {/* Aircraft Buckle / Carabiner Accent */}
          <rect x="175" y="305" width="30" height="16" rx="3" fill="#27272a" stroke="#71717a" strokeWidth="1" />
          <line x1="175" y1="313" x2="205" y2="313" stroke="#e4e4e7" strokeWidth="1" />
        </svg>
      </div>
    );
  }

  // =========================================================
  // DRAWING / ARCHIVAL PRINT RENDERING
  // =========================================================
  if (variant === 'drawing') {
    return (
      <div className={`relative w-full h-full flex items-center justify-center p-4 bg-malouz-900 overflow-hidden ${className}`}>
        <div className="absolute top-3 left-3 text-[9px] font-mono tracking-widest text-malouz-400 uppercase">
          ARCHES 400GSM / SUMI & GRAPHITE
        </div>
        <div className="absolute bottom-3 right-3 text-[9px] font-mono tracking-widest text-malouz-600">
          STUDIO ORIGINAL 1/1
        </div>

        <svg viewBox="0 0 380 460" className="w-full h-full max-h-[360px] drop-shadow-2xl" fill="none">
          {/* Deckled Edge Paper Base */}
          <rect x="30" y="30" width="320" height="400" fill="#0f1014" stroke="#27272a" strokeWidth="1.5" />
          
          {/* Architectural Drafting Grid */}
          <g opacity="0.15" stroke="#71717a" strokeWidth="0.5">
            {[60, 100, 140, 180, 220, 260, 300].map((x) => (
              <line key={`x-${x}`} x1={x} y1="40" x2={x} y2="420" strokeDasharray="2 4" />
            ))}
            {[80, 140, 200, 260, 320, 380].map((y) => (
              <line key={`y-${y}`} x1="40" y1={y} x2="340" y2={y} strokeDasharray="2 4" />
            ))}
          </g>

          {/* Compass Drafting Circles */}
          <circle cx="190" cy="220" r="90" stroke="#3f3f46" strokeWidth="0.8" strokeDasharray="4 4" />
          <circle cx="190" cy="220" r="130" stroke="#27272a" strokeWidth="0.8" />
          <line x1="40" y1="220" x2="340" y2="220" stroke="#3f3f46" strokeWidth="0.8" strokeDasharray="4 2" />
          <line x1="190" y1="50" x2="190" y2="390" stroke="#3f3f46" strokeWidth="0.8" strokeDasharray="4 2" />

          {/* The Visceral Erotic Drawing Figures */}
          <g transform="translate(100, 80) scale(1)">
            {/* Ink Wash Splatters */}
            <path d="M70 120 C40 100 20 180 80 200 C140 180 120 100 90 120 Z" fill="rgba(244, 241, 234, 0.05)" />
            
            {/* Core Biomechanical Spinal Study */}
            <path d="M90 20 L90 240" stroke="#f5f3ec" strokeWidth="2" strokeLinecap="round" />
            {[40, 80, 120, 160, 200].map((y, i) => (
              <g key={i}>
                <path d={`M90 ${y} Q${40 - i * 4} ${y - 10} 20 ${y + 20}`} stroke={theme.stroke} strokeWidth="1.8" fill="none" />
                <path d={`M90 ${y} Q${140 + i * 4} ${y - 10} 160 ${y + 20}`} stroke={theme.stroke} strokeWidth="1.8" fill="none" />
                <circle cx="90" cy={y} r="3" fill="#f5f3ec" />
              </g>
            ))}
            
            {/* Pelvic Arc */}
            <path d="M40 210 Q90 250 140 210" stroke={theme.stroke} strokeWidth="2.5" />
          </g>

          {/* Artist Pencil Inscriptions */}
          <text x="50" y="415" fill="#71717a" fontSize="8" fontFamily="monospace" letterSpacing="0.15em">
            STUDY: {archetype.toUpperCase()} // PLATE 01 // MALOU ATHENS
          </text>
          <text x="310" y="415" fill="#52525b" fontSize="8" fontFamily="monospace">
            1/1
          </text>
        </svg>
      </div>
    );
  }

  // Default Diagram
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-6 bg-malouz-900 ${className}`}>
      <AlienVisual archetype={archetype} variant="tshirt" />
    </div>
  );
};

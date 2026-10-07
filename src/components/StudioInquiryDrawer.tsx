import React, { useState } from 'react';
import { InquiryItem } from '../types';
import { X, Trash2, Instagram, Copy, Check, Send, ShoppingBag } from 'lucide-react';
import { AlienVisual } from './AlienVisuals';

interface StudioInquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: InquiryItem[];
  onRemoveItem: (id: string) => void;
  onClearAll: () => void;
}

export const StudioInquiryDrawer: React.FC<StudioInquiryDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onRemoveItem,
  onClearAll,
}) => {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [city, setCity] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const totalSum = items.reduce((acc, item) => acc + item.product.priceNumber * item.quantity, 0);

  const generateInquiryText = () => {
    let text = `Hello Malou (@mmalouz)! I am inquiring regarding pieces from The Malouz Project website:\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.title} [${item.product.code}]\n`;
      text += `   - Price: ${item.product.price} (Qty: ${item.quantity})\n`;
      if (item.selectedSize) {
        text += `   - Size: ${item.selectedSize}\n`;
      }
      text += `   - Archetype: ${item.product.archetype}\n\n`;
    });
    text += `Total Estimate: €${totalSum}\n`;
    if (name) text += `Name: ${name}\n`;
    if (handle) text += `Instagram: @${handle.replace('@', '')}\n`;
    if (city) text += `Location / Shipping: ${city}\n`;
    if (notes) text += `Notes: ${notes}\n`;
    text += `\nPlease let me know availability and dispatch details!`;
    return text;
  };

  const handleCopy = () => {
    const text = generateInquiryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleInstagramDm = () => {
    const text = generateInquiryText();
    navigator.clipboard.writeText(text);
    window.open('https://www.instagram.com/direct/t/mmalouz/', '_blank');
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="relative w-full max-w-xl bg-malouz-950 border-l border-malouz-800 shadow-2xl h-full flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-6 border-b border-malouz-800 bg-malouz-900/60 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-malouz-alien" />
            <div>
              <h2 className="font-serif text-lg font-bold text-malouz-bone tracking-wide">
                STUDIO INQUIRY BAG
              </h2>
              <span className="text-[10px] font-mono text-malouz-400 tracking-wider">
                {items.length} {items.length === 1 ? 'OBJECT SELECTED' : 'OBJECTS SELECTED'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-malouz-800 text-malouz-400 hover:text-malouz-bone transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full border border-malouz-800 bg-malouz-900 flex items-center justify-center mx-auto text-malouz-600">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-base text-malouz-bone">Your studio inquiry bag is currently empty.</p>
              <p className="font-mono text-xs text-malouz-muted max-w-xs mx-auto">
                Explore our ceramics, handmade bags, drawings, and alien t-shirts to build your custom studio inquiry.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-5 py-2.5 rounded bg-malouz-bone text-malouz-950 font-mono text-xs font-bold tracking-wider hover:bg-malouz-alien"
              >
                RETURN TO CATALOG
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-4 bg-malouz-900/70 border border-malouz-800 rounded-lg flex items-center gap-4 justify-between"
                  >
                    <div className="w-14 h-14 bg-malouz-950 rounded border border-malouz-850 flex-shrink-0 flex items-center justify-center p-1">
                      <AlienVisual
                        archetype={item.product.archetype}
                        variant={item.product.category === 'tshirts' ? 'tshirt' : 'diagram'}
                        className="w-full h-full"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-malouz-500 uppercase">
                          {item.product.code}
                        </span>
                        <span className="font-mono text-xs font-bold text-malouz-bone">
                          {item.product.price}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-bold text-malouz-bone truncate">
                        {item.product.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-malouz-400 mt-0.5">
                        <span className="uppercase text-malouz-alien">{item.product.archetype}</span>
                        {item.selectedSize && (
                          <>
                            <span>•</span>
                            <span className="text-malouz-bone">SIZE: {item.selectedSize}</span>
                          </>
                        )}
                        <span>•</span>
                        <span>QTY: {item.quantity}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-malouz-600 hover:text-red-400 transition-colors"
                      title="Remove from bag"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Estimate Total & Clear Bar */}
              <div className="p-4 rounded-lg bg-malouz-900/40 border border-malouz-800/80 flex items-center justify-between font-mono text-xs">
                <button
                  onClick={onClearAll}
                  className="text-malouz-600 hover:text-malouz-400 transition-colors underline"
                >
                  Clear all items
                </button>
                <div className="text-right">
                  <span className="text-malouz-400 text-[10px] block">ESTIMATED TOTAL:</span>
                  <span className="font-serif text-lg font-bold text-malouz-bone">€{totalSum}</span>
                </div>
              </div>

              {/* Inquiry Form */}
              {!submitted ? (
                <form onSubmit={handleSubmitForm} className="space-y-4 pt-2 border-t border-malouz-800/80 font-mono text-xs">
                  <span className="text-[10px] uppercase tracking-widest text-malouz-ember block">
                    CONTACT & DISPATCH DETAILS (OPTIONAL):
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-malouz-500 block mb-1">YOUR NAME</label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex K."
                        className="w-full bg-malouz-900 border border-malouz-800 rounded p-2 text-malouz-bone focus:border-malouz-alien focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-malouz-500 block mb-1">INSTAGRAM HANDLE</label>
                      <input
                        type="text"
                        value={handle}
                        onChange={(e) => setHandle(e.target.value)}
                        placeholder="@yourhandle"
                        className="w-full bg-malouz-900 border border-malouz-800 rounded p-2 text-malouz-bone focus:border-malouz-alien focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-malouz-500 block mb-1">SHIPPING DESTINATION / CITY</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Athens, Berlin, London, New York..."
                      className="w-full bg-malouz-900 border border-malouz-800 rounded p-2 text-malouz-bone focus:border-malouz-alien focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] text-malouz-500 block mb-1">CUSTOM NOTES / SIZING INQUIRY</label>
                    <textarea
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      placeholder="Special requests, custom ceramic glazes, preferred fit..."
                      className="w-full bg-malouz-900 border border-malouz-800 rounded p-2 text-malouz-bone focus:border-malouz-alien focus:outline-none"
                    />
                  </div>
                </form>
              ) : (
                <div className="p-4 rounded bg-emerald-950/40 border border-emerald-800 text-emerald-300 font-mono text-xs space-y-1">
                  <div className="font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Inquiry payload compiled!</span>
                  </div>
                  <p className="text-[11px] text-emerald-400/80">
                    Click below to open Instagram DM with Malou or copy the text directly to your clipboard.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-malouz-800 bg-malouz-900/80 space-y-3 font-mono text-xs">
            {/* Primary Button: Open Instagram DM */}
            <button
              onClick={handleInstagramDm}
              className="w-full py-3.5 px-4 rounded bg-malouz-bone text-malouz-950 font-bold tracking-widest uppercase hover:bg-malouz-alien hover:text-black transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Instagram className="w-4 h-4" />
              <span>SEND INQUIRY VIA INSTAGRAM DM (@mmalouz)</span>
            </button>

            {/* Secondary Button: Copy Formatted Payload */}
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 rounded border border-malouz-700 bg-malouz-950 text-malouz-bone hover:border-malouz-500 transition-all flex items-center justify-center gap-2 tracking-wider"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">INQUIRY COPIED TO CLIPBOARD!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-malouz-muted" />
                  <span>COPY FORMATTED TEXT PAYLOAD</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-malouz-500 text-center pt-1">
              Direct connection with Malou. Responses typically within 12–24h from Athens.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

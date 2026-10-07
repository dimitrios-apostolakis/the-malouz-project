import React, { useState } from 'react';
import { InquiryItem } from '../types';
import { X, Trash2, Instagram, Copy, Check, ShoppingBag } from 'lucide-react';

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

  if (!isOpen) return null;

  const totalSum = items.reduce((acc, item) => acc + item.product.priceNumber * item.quantity, 0);

  const generateInquiryText = () => {
    let text = `Hello Malou (@mmalouz)! I am inquiring regarding pieces from The Malouz Project:\n\n`;
    items.forEach((item, idx) => {
      text += `${idx + 1}. ${item.product.title} [${item.product.code}]\n`;
      text += `   - Price: ${item.product.price} (Qty: ${item.quantity})\n`;
      if (item.selectedSize) {
        text += `   - Size: ${item.selectedSize}\n`;
      }
      text += `   - Archetype: ${item.product.archetype}\n\n`;
    });
    text += `Estimated Total: €${totalSum}\n`;
    if (name) text += `Name: ${name}\n`;
    if (handle) text += `Instagram: @${handle.replace('@', '')}\n`;
    if (city) text += `Location: ${city}\n`;
    if (notes) text += `Notes: ${notes}\n`;
    text += `\nPlease let me know availability and dispatch details from Athens!`;
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

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm animate-fade-in flex justify-end">
      <div className="relative w-full max-w-xl bg-[#faf7f2] border-l border-[#e4ded4] shadow-2xl h-full flex flex-col justify-between overflow-y-auto">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#e4ded4] bg-[#f5f2eb] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-5 h-5 text-[#141414]" />
            <div>
              <h2 className="font-serif text-lg font-light text-[#141414] tracking-wide uppercase">
                Studio Inquiry Bag
              </h2>
              <span className="text-[10px] font-mono text-[#706e68] tracking-widest uppercase">
                {items.length} {items.length === 1 ? 'OBJECT SELECTED' : 'OBJECTS SELECTED'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:opacity-60 text-[#141414] transition-opacity"
            aria-label="Close drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Scrollable Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {items.length === 0 ? (
            <div className="py-20 text-center space-y-4">
              <div className="w-16 h-16 border border-[#e4ded4] bg-[#f5f2eb] flex items-center justify-center mx-auto text-[#706e68]">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <p className="font-serif text-base text-[#141414]">Your inquiry bag is currently empty.</p>
              <p className="font-mono text-xs text-[#706e68] max-w-xs mx-auto">
                Explore our sculptural ceramics, handmade bags, drawings, and alien t-shirts to build your inquiry.
              </p>
              <button
                onClick={onClose}
                className="mt-4 px-6 py-3 bg-[#141414] text-[#f5f2eb] font-mono text-[11px] tracking-[0.2em] uppercase font-medium"
              >
                Return to Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="p-3 bg-[#f5f2eb] border border-[#e4ded4] flex items-center gap-4 justify-between"
                  >
                    <div className="w-14 h-16 bg-[#ede8df] border border-[#e4ded4] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.imageUrl || '/images/hero.jpg'}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[9px] text-[#706e68] uppercase">
                          {item.product.code}
                        </span>
                        <span className="font-mono text-xs font-semibold text-[#141414]">
                          {item.product.price}
                        </span>
                      </div>
                      <h4 className="font-serif text-sm font-normal text-[#141414] truncate uppercase">
                        {item.product.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-[#706e68] mt-0.5">
                        <span className="uppercase text-[#141414]">{item.product.archetype}</span>
                        {item.selectedSize && (
                          <>
                            <span>/</span>
                            <span>SIZE {item.selectedSize}</span>
                          </>
                        )}
                        <span>/</span>
                        <span>QTY {item.quantity}</span>
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-2 text-[#706e68] hover:text-[#141414] transition-colors"
                      title="Remove from bag"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Estimate Total & Clear Bar */}
              <div className="p-4 bg-[#f5f2eb] border border-[#e4ded4] flex items-center justify-between font-mono text-xs">
                <button
                  onClick={onClearAll}
                  className="text-[#706e68] hover:text-[#141414] transition-colors underline text-[11px]"
                >
                  Clear all items
                </button>
                <div className="text-right">
                  <span className="text-[#706e68] text-[10px] tracking-wider block uppercase">ESTIMATED TOTAL:</span>
                  <span className="font-serif text-lg font-normal text-[#141414]">€{totalSum}</span>
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-3 pt-2 border-t border-[#e4ded4] font-mono text-xs">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#706e68] block">
                  CONTACT DETAILS (OPTIONAL):
                </span>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[9px] text-[#706e68] uppercase block mb-1">YOUR NAME</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Alex K."
                      className="w-full bg-[#f5f2eb] border border-[#e4ded4] p-2 text-[#141414] text-xs focus:border-[#141414] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-[#706e68] uppercase block mb-1">INSTAGRAM</label>
                    <input
                      type="text"
                      value={handle}
                      onChange={(e) => setHandle(e.target.value)}
                      placeholder="@handle"
                      className="w-full bg-[#f5f2eb] border border-[#e4ded4] p-2 text-[#141414] text-xs focus:border-[#141414] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[9px] text-[#706e68] uppercase block mb-1">SHIPPING DESTINATION / CITY</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Athens, London, Paris, New York..."
                    className="w-full bg-[#f5f2eb] border border-[#e4ded4] p-2 text-[#141414] text-xs focus:border-[#141414] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[9px] text-[#706e68] uppercase block mb-1">SPECIAL REQUESTS / SIZING</label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="Notes on ceramic glaze, fit, or delivery..."
                    className="w-full bg-[#f5f2eb] border border-[#e4ded4] p-2 text-[#141414] text-xs focus:border-[#141414] focus:outline-none"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#e4ded4] bg-[#f5f2eb] space-y-3 font-mono text-xs">
            {/* Primary Button: Open Instagram DM */}
            <button
              onClick={handleInstagramDm}
              className="w-full py-3.5 px-4 bg-[#141414] text-[#f5f2eb] hover:bg-[#33312e] font-medium tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2"
            >
              <Instagram className="w-4 h-4" />
              <span>Send Inquiry Via Instagram DM (@mmalouz)</span>
            </button>

            {/* Secondary Button: Copy Formatted Payload */}
            <button
              onClick={handleCopy}
              className="w-full py-2.5 px-4 border border-[#141414] text-[#141414] hover:bg-[#141414] hover:text-[#f5f2eb] transition-all flex items-center justify-center gap-2 tracking-wider"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Inquiry Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#706e68]" />
                  <span>Copy Formatted Text Payload</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-[#706e68] text-center pt-1">
              Direct connection with Malou. Dispatched from the Athens studio.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

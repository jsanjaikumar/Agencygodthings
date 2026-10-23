import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`border transition-all duration-300 rounded ${
              isOpen
                ? 'border-electric-gold/60 bg-surface-container/70 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
                : 'border-surface-stroke bg-surface-container-lowest/50 hover:border-surface-stroke/80 hover:bg-surface-container/30'
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(index)}
              className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-electric-gold"
              aria-expanded={isOpen}
            >
              <span className={`font-sans font-bold text-base sm:text-lg transition-colors ${
                isOpen ? 'text-electric-gold' : 'text-pure-white hover:text-electric-gold'
              }`}>
                {item.question}
              </span>
              <div className={`w-8 h-8 rounded border flex items-center justify-center shrink-0 transition-transform duration-300 ${
                isOpen 
                  ? 'border-electric-gold text-electric-gold rotate-180 bg-electric-gold/10' 
                  : 'border-surface-stroke text-on-surface-variant hover:text-white'
              }`}>
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-5 sm:px-6 pb-6 pt-1 text-on-surface-variant font-sans text-sm sm:text-base leading-relaxed border-t border-surface-stroke/50">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

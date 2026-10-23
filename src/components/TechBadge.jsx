import React from 'react';
import ScrambleText from './ScrambleText';

export default function TechBadge({ name, index = 0, className = '' }) {
  return (
    <span
      tabIndex={0}
      className={`font-mono text-[10px] sm:text-[11px] text-on-surface bg-surface-container-high/80 hover:bg-surface-elevated px-2.5 py-0.5 rounded border border-surface-stroke hover:border-electric-gold/60 hover:text-electric-gold transition-all duration-300 cursor-default select-none group relative overflow-hidden inline-flex items-center shadow-sm hover:shadow-[0_0_12px_rgba(250,204,21,0.15)] focus-visible:outline-none focus-visible:border-electric-gold ${className}`}
      style={{
        transitionDelay: `${(index % 4) * 20}ms`,
      }}
    >
      {/* Subtle digital scan shimmer on hover */}
      <span
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-electric-gold/10 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Scrambled tech name */}
      <ScrambleText
        text={name}
        triggerOnParent={true}
        scrambleColor="text-data-cyan"
        className="relative z-10"
      />
    </span>
  );
}

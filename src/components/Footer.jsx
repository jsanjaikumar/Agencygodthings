import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Shield, Cpu, Activity, Globe } from 'lucide-react';
import ScrambleText from './ScrambleText';

export default function Footer({ onOpenTerminal }) {
  return (
    <footer className="w-full border-t border-surface-stroke bg-obsidian-deep relative overflow-hidden z-20">
      {/* Background ambient watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-5">
        <span className="font-sans font-black text-[12vw] tracking-tighter text-on-surface whitespace-nowrap">
          JUSTTHINGS
        </span>
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 sm:py-20 relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-gutter mb-16">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-4 group">
              <span className="font-sans font-black text-2xl tracking-tighter text-pure-white group-hover:text-electric-gold transition-colors">
                <ScrambleText text="JUSTTHINGS" triggerOnParent scrambleColor="text-electric-gold" />
              </span>
            </Link>
            <p className="font-sans text-sm text-on-surface-variant max-w-sm mb-6 leading-relaxed">
              We architect digital imperatives and precision software. Stealth-wealth engineering for organizations commanding inevitable authority.
            </p>
            <div className="inline-flex items-center gap-2 border border-surface-stroke bg-surface-container/60 px-3 py-1.5 rounded text-xs font-mono text-electric-gold">
              <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse"></span>
              <span>NODE_ALPHA // ACTIVE & STABLE</span>
            </div>
          </div>

          {/* Nav / Protocols Col */}
          <div className="md:col-span-3 sm:col-span-6">
            <h4 className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-4">
              SERVICES & SOLUTIONS
            </h4>
            <ul className="space-y-2.5 font-sans text-sm">
              <li>
                <Link to="/services" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="Services Overview" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="Purpose-Built Solutions" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
              <li>
                <Link to="/maintenance" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="Maintenance & Support" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
              <li>
                <Link to="/work" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="Selected Work" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="About JustThings" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
              <li>
                <Link to="/audit" className="group text-on-surface-variant hover:text-electric-gold transition-colors inline-block">
                  <ScrambleText text="Free Website Audit" triggerOnParent scrambleColor="text-data-cyan" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Actions & Legal */}
          <div className="md:col-span-4 sm:col-span-6">
            <h4 className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-4">
              SECURE ACCESS
            </h4>
            <p className="font-sans text-xs text-on-surface-variant mb-4">
              Need immediate cryptographic infrastructure evaluation? Initialize a direct sequence with our senior engineering council.
            </p>
            <Link
              to="/start-project"
              className="group inline-flex items-center gap-2 font-mono text-xs text-black bg-electric-gold px-4 py-2.5 rounded font-bold hover:bg-white transition-colors uppercase tracking-wider shadow-[0_0_15px_rgba(250,204,21,0.25)]"
            >
              <ScrambleText text="Engage Council" triggerOnParent scrambleColor="text-black/80 font-mono" />
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        {/* Divider with technical telemetry */}
        <div className="border-t border-surface-stroke pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-mono text-xs text-electric-gold/80 flex items-center gap-2">
            <span>©2024 AETHER_DIGITAL // SYSTEM_READY</span>
            <span className="hidden sm:inline text-surface-stroke">•</span>
            <span className="hidden sm:inline text-on-surface-variant text-[11px]">BUILD 9.0.4</span>
          </div>

          <div className="flex flex-wrap gap-5 sm:gap-8 justify-center items-center">
            <button
              onClick={onOpenTerminal}
              className="font-mono text-xs text-on-surface-variant hover:text-electric-gold flex items-center gap-1.5 transition-colors group"
            >
              <Terminal className="w-3.5 h-3.5 text-electric-gold group-hover:animate-pulse" />
              <span>TERMINAL</span>
            </button>
            <Link to="/services" className="font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors">
              SERVICES
            </Link>
            <Link to="/solutions" className="font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors">
              SOLUTIONS
            </Link>
            <Link to="/maintenance" className="font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors">
              MAINTENANCE
            </Link>
            <Link to="/audit" className="font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors">
              AUDIT_ENGINE
            </Link>
            <Link to="/about" className="font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors">
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

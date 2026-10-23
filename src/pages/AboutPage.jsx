import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Database, Cpu, Eye, Fingerprint, Shield, ArrowRight, Check } from 'lucide-react';
import { operatives } from '../data/operatives';
import { arsenalStack } from '../data/services';

export default function AboutPage() {
  const [showFullSpec, setShowFullSpec] = useState(false);

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Hero Section */}
      <section className="relative px-5 sm:px-8 md:px-12 py-12 sm:py-20 max-w-[1440px] mx-auto min-h-[60vh] flex flex-col justify-center">
        {/* Geometric shards background decoration */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden opacity-25">
          <div className="absolute top-1/4 right-1/4 w-[300px] h-[1px] bg-electric-gold/30 transform rotate-45" />
          <div className="absolute top-1/3 right-1/3 w-[1px] h-[400px] bg-electric-gold/20 transform rotate-12" />
          <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[1px] bg-surface-stroke transform -rotate-12" />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-electric-gold rounded-full blur-[2px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10">
          <div className="md:col-span-10 md:col-start-1 lg:col-span-8 lg:col-start-2">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-4">
              MANIFESTO // 001
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-pure-white mb-6 uppercase tracking-tight leading-[1.02]">
              DIGITAL <br />
              <span className="text-surface-stroke">SHOULD DO</span><br />
              MORE THAN EXIST.
            </h1>

            <div className="h-[2px] w-[120px] bg-electric-gold mb-8" />

            <p className="font-sans text-base sm:text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              We engineer stealth-wealth digital ecosystems. High-stakes precision masked by effortless minimalism. Our arsenal is built for organizations that demand absolute authority and unrelenting performance.
            </p>
          </div>
        </div>
      </section>

      {/* The Arsenal (Tech Stack Matrix) */}
      <section className="px-5 sm:px-8 md:px-12 py-16 sm:py-24 border-t border-surface-stroke relative overflow-hidden max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          <div className="md:col-span-4 flex flex-col justify-between mb-8 md:mb-0">
            <div>
              <span className="font-mono text-xs text-electric-gold mb-4 tracking-widest uppercase block">
                01 // The Arsenal
              </span>
              <h2 className="font-sans font-black text-3xl sm:text-4xl text-pure-white mb-4">
                DIAGNOSTICS & CORE.
              </h2>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Our infrastructure relies on brutal efficiency. We utilize node-based architecture and raw computational power to ensure sub-10ms global delivery.
              </p>
            </div>

            <div className="pt-8 hidden md:block">
              <div className="p-4 bg-surface-container border border-surface-stroke rounded font-mono text-xs text-on-surface-variant">
                <span className="text-emerald-400">● 100% ONLINE</span> // CLUSTER_STATUS: OPTIMAL
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 border-l border-t border-surface-stroke bg-surface-container/20">
              {arsenalStack.map((tech) => (
                <div
                  key={tech.id}
                  className="p-6 sm:p-8 border-b border-r border-surface-stroke group hover:bg-surface-container-high transition-colors duration-300 relative"
                >
                  <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-electric-gold shadow-[0_0_8px_rgba(250,204,21,0.6)]" />
                  <div className="font-mono text-[10px] text-electric-gold mb-2">{tech.id}</div>
                  <h3 className="font-sans text-lg font-bold text-pure-white mb-2">{tech.name}</h3>
                  <p className="font-mono text-[11px] text-on-surface-variant group-hover:text-white transition-colors">
                    {tech.subtitle}
                  </p>
                </div>
              ))}

              {/* View Full Spec Tile */}
              <div className="p-6 sm:p-8 border-b border-r border-surface-stroke flex items-center justify-center bg-surface-container/50">
                <button
                  onClick={() => setShowFullSpec(!showFullSpec)}
                  className="font-mono text-xs text-electric-gold border border-electric-gold/60 px-5 py-3 rounded hover:bg-electric-gold hover:text-black transition-all font-bold"
                >
                  {showFullSpec ? 'COLLAPSE SPEC' : 'VIEW FULL SPEC'}
                </button>
              </div>
            </div>

            {/* Expanded Spec Panel */}
            {showFullSpec && (
              <div className="mt-6 p-6 glass-panel border border-electric-gold/40 rounded space-y-4 animate-in fade-in duration-300">
                <div className="font-mono text-xs text-electric-gold font-bold">
                  INFRASTRUCTURE SPECIFICATION SHEET // 2024-v9
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono text-on-surface-variant">
                  <div>• Edge Compute: V8 Isolation with zero cold starts</div>
                  <div>• Encryption: TLS 1.3 + Post-Quantum Key Exchange</div>
                  <div>• Vector DB: HNSW graph indexing with 1536-dim embeddings</div>
                  <div>• Telemetry: OpenTelemetry distributed tracing at 100k req/s</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* The Operatives (Team Grid) */}
      <section className="px-5 sm:px-8 md:px-12 py-16 sm:py-24 max-w-[1440px] mx-auto border-t border-surface-stroke">
        <div className="mb-12 sm:mb-20">
          <span className="font-mono text-xs text-electric-gold mb-4 tracking-widest uppercase block">
            02 // The Operatives
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white max-w-2xl uppercase">
            PRECISION MACHINED TALENT.
          </h2>
        </div>

        {/* 2-Column Responsive Talent Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {operatives.map((op) => (
            <article
              key={op.id}
              className="glass-panel border border-surface-stroke rounded-lg overflow-hidden flex flex-col group hover:border-surface-variant transition-all duration-300"
            >
              {/* 1. Talent profile image */}
              <div
                className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container-lowest border-b border-surface-stroke"
                style={{ aspectRatio: '16/10' }}
              >
                <img
                  src={op.image}
                  alt={op.name}
                  className="w-full h-full object-cover object-center grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-xs font-semibold text-electric-gold bg-black/80 backdrop-blur-md px-2.5 py-1 border border-electric-gold/30 rounded shadow-md tracking-wider">
                    {op.id}
                  </span>
                </div>
              </div>

              {/* Standardized Card Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-surface-container/20">
                <div className="space-y-3">
                  {/* 2. Talent name */}
                  <h3 className="font-sans font-bold text-2xl sm:text-3xl text-pure-white group-hover:text-electric-gold transition-colors tracking-tight">
                    {op.name}
                  </h3>

                  {/* 3. Professional role or job title */}
                  <div className="font-mono text-xs text-electric-gold tracking-widest uppercase font-semibold">
                    {op.role}
                  </div>

                  {/* 4. Short description or specialization */}
                  {op.quote && (
                    <p className="font-sans text-sm text-on-surface-variant leading-relaxed italic pt-1">
                      "{op.quote}"
                    </p>
                  )}
                </div>

                {/* 5. Existing CTA or profile link, if present */}
                {op.link && (
                  <div className="pt-6 mt-6 border-t border-surface-stroke flex items-center justify-between">
                    <Link
                      to={op.link}
                      className="font-mono text-xs text-electric-gold hover:underline flex items-center gap-1.5"
                    >
                      <span>VIEW SPEC</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

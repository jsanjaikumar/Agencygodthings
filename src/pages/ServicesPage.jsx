import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Activity, GitBranch, Layers, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative">
      {/* Ambient background glows */}
      <div className="atmospheric-glow top-20 left-[-15%] opacity-40" />
      <div className="atmospheric-glow top-[45%] right-[-10%] opacity-30" />

      {/* Header */}
      <header className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-16 sm:mb-24">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 border border-surface-stroke rounded-full px-4 py-1.5 glass-panel">
            <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse"></span>
            <span className="font-mono text-xs uppercase text-electric-gold tracking-widest">
              Architecture Protocols
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white mb-6 uppercase tracking-tight leading-[1.05]">
            Engineered <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-gold via-amber-200 to-amber-500">
              Solutions
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Deploy modular, high-velocity architectural frameworks designed for absolute operational dominance and unwavering reliability.
          </p>
        </div>
      </header>

      {/* Modular Services Matrix */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {/* Card 1: Core Architecture (Span 8 cols) */}
          <article className="md:col-span-8 glass-panel p-6 sm:p-10 md:p-12 relative group overflow-hidden rounded">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-between">
              <div className="flex-1">
                <span className="font-mono text-xs text-electric-gold block mb-3 uppercase tracking-widest">
                  Protocol // 01
                </span>
                <h2 className="font-sans font-black text-2xl sm:text-4xl text-pure-white mb-4 uppercase">
                  Core Architecture
                </h2>
                <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-8 leading-relaxed">
                  Foundational structural systems engineered for infinite scalability. We reconstruct monolithic environments into agile, resilient networks with zero compromise on throughput.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 font-mono text-xs text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-gold"></span>
                    <span>Microservice Topologies & Event Meshes</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-gold"></span>
                    <span>Distributed Ledger & Cryptographic Integration</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-xs text-on-surface">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-gold"></span>
                    <span>Fault-Tolerant Geo-Replication</span>
                  </li>
                </ul>

                <Link
                  to="/start-project"
                  className="font-mono text-xs uppercase text-electric-gold border-b border-electric-gold pb-1 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Initialize Sequence</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="w-full md:w-1/3 border-t md:border-t-0 md:border-l border-surface-stroke pt-6 md:pt-0 md:pl-8 flex flex-col justify-center items-center text-center">
                <span className="font-sans font-black text-4xl sm:text-5xl text-electric-gold mb-1">
                  99.9%
                </span>
                <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
                  Uptime Integrity
                </span>
              </div>
            </div>
          </article>

          {/* Image Module (Span 4 cols) */}
          <div className="md:col-span-4 h-64 md:h-auto glass-panel relative overflow-hidden group rounded border border-surface-stroke">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXik8Rrc3_gstzXh1y_C3xRkDSrCl4abhmguEeldXjiRjQWuG2Ff2AsPZnkie9f1UpFr6zGoDEBS1OBu7GbujJSPzhScu5r3Qs_9RSOALFpra8Q2_0HHGeaKdNURyRzlBcXXD-mJ-iLCNnga_K2JC2HzVq7x-lm429vqYcwST_s9kwsNi6b9SYa-t1TsLeXZ-JNHG05aCU0kfs84WKnEen5gRcxtI4Psd2X8jYIPEk_m_WwNRPiSb4UA"
              alt="Futuristic digital server core"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-obsidian-deep/40 pointer-events-none" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-electric-gold bg-black/70 px-2.5 py-1 rounded border border-electric-gold/30">
              CLUSTER_CORE_01
            </div>
          </div>

          {/* Card 2: Revenue Engine (Span 5 cols) */}
          <article className="md:col-span-5 glass-panel p-6 sm:p-10 relative group rounded overflow-hidden">
            <span className="font-mono text-xs text-electric-gold block mb-3 uppercase tracking-widest">
              Protocol // 02
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-pure-white mb-3 uppercase">
              Revenue Engine
            </h2>
            <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
              Algorithmic optimization of conversion pathways. We deploy machine-learning models to analyze user friction and autonomously restructure acquisition funnels.
            </p>

            <div className="bg-surface-container-low border border-surface-stroke p-4 mb-6 relative rounded overflow-hidden">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-electric-gold"></div>
              <span className="block font-sans font-black text-3xl sm:text-4xl text-electric-gold mb-1">
                300%
              </span>
              <span className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
                Avg. Conversion Uplift
              </span>
            </div>

            <Link
              to="/start-project"
              className="font-mono text-xs uppercase text-electric-gold hover:text-white transition-colors inline-flex items-center gap-1.5"
            >
              <span>Deploy Revenue Engine →</span>
            </Link>
          </article>

          {/* Card 3: Strategic Advisory (Span 7 cols) */}
          <article className="md:col-span-7 glass-panel p-6 sm:p-10 relative group rounded overflow-hidden">
            <span className="font-mono text-xs text-electric-gold block mb-3 uppercase tracking-widest">
              Protocol // 03
            </span>
            <h2 className="font-sans font-black text-2xl sm:text-3xl text-pure-white mb-3 uppercase">
              Strategic Advisory
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <p className="font-sans text-sm text-on-surface-variant flex-1 leading-relaxed">
                Executive-level foresight. We provide bespoke technological roadmaps for enterprise entities navigating systemic digital shifts with direct access to our primary architects.
              </p>
              <div className="flex-1 space-y-4">
                <div className="p-3 bg-surface-container rounded border border-surface-stroke">
                  <h3 className="font-mono text-xs text-pure-white uppercase font-bold mb-1">
                    Risk Mitigation
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Cryptographic security posture & perimeter hardening.
                  </p>
                </div>
                <div className="p-3 bg-surface-container rounded border border-surface-stroke">
                  <h3 className="font-mono text-xs text-pure-white uppercase font-bold mb-1">
                    Resource Allocation
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant">
                    Computational efficiency mapping and cloud footprint reduction.
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Audit Teaser Section */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mt-20 sm:mt-28">
        <div className="border border-surface-stroke bg-surface-container/40 p-8 sm:p-12 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h3 className="font-sans font-bold text-2xl text-pure-white mb-2">
              Unsure which protocol fits your requirements?
            </h3>
            <p className="font-sans text-sm text-on-surface-variant">
              Run our complimentary automated platform diagnostic to analyze technical vulnerabilities.
            </p>
          </div>
          <Link
            to="/audit"
            className="bg-electric-gold text-black font-sans text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded hover:bg-white transition-colors whitespace-nowrap"
          >
            Run Audit Scan
          </Link>
        </div>
      </section>
    </div>
  );
}

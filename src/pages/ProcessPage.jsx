import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { processStages } from '../data/process';

export default function ProcessPage() {
  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Header */}
      <header className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-16 sm:mb-24 relative z-10">
        <div className="md:w-8/12">
          <div className="font-mono text-xs text-electric-gold mb-6 uppercase border border-surface-stroke inline-block px-3 py-1 rounded">
            Methodology
          </div>
          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white mb-6 uppercase tracking-tight">
            ENGINEERED FOR PRECISION.
          </h1>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            A transparent, 6-stage roadmap designed to mitigate risk and maximize fidelity. We transform complex objectives into scalable digital architecture through rigorous strategy and uncompromising design.
          </p>
        </div>
      </header>

      {/* Process Section with Central Spine */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        {/* Center Line for Desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-surface-stroke to-transparent -translate-x-1/2" />

        <div className="space-y-16 md:space-y-0 relative">
          {processStages.map((stage, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <div
                key={stage.step}
                className="md:grid md:grid-cols-12 md:gap-gutter items-center relative py-8 md:py-20 border-b border-surface-stroke md:border-none"
              >
                {/* Text Content */}
                <div
                  className={`md:col-span-5 relative ${
                    isEven ? 'md:text-right' : 'md:col-start-8 order-first md:order-last'
                  }`}
                >
                  <span
                    className={`font-mono text-[90px] sm:text-[120px] font-black leading-none absolute -top-8 sm:-top-12 opacity-15 select-none pointer-events-none text-surface-stroke ${
                      isEven ? 'md:right-0 left-0' : 'left-0'
                    }`}
                  >
                    {stage.step}
                  </span>

                  <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-1">
                    STAGE // {stage.step}
                  </span>
                  <h2 className="font-sans font-black text-2xl sm:text-4xl text-pure-white mb-3">
                    {stage.name}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-electric-gold font-medium mb-3">
                    {stage.headline}
                  </p>
                  <p className="font-sans text-sm text-on-surface-variant mb-6 leading-relaxed">
                    {stage.description}
                  </p>

                  <div className={`inline-flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                    {stage.deliverables.map((d, dIdx) => (
                      <span
                        key={dIdx}
                        className="font-mono text-[11px] text-on-surface bg-surface-container px-3 py-1 border border-surface-stroke rounded"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Center Node Indicator */}
                <div
                  className={`hidden md:flex md:col-span-2 justify-center relative ${
                    isEven ? '' : 'md:col-start-6'
                  }`}
                >
                  <div className="w-4 h-4 bg-electric-gold rounded-full z-10 border-4 border-obsidian-deep shadow-[0_0_15px_rgba(250,204,21,0.6)]" />
                </div>

                {/* Image Module */}
                <div
                  className={`md:col-span-5 mt-6 md:mt-0 ${
                    isEven ? '' : 'md:col-start-1 order-last md:order-first'
                  }`}
                >
                  <div className="w-full h-56 sm:h-72 border border-surface-stroke rounded overflow-hidden relative group">
                    <img
                      src={stage.image}
                      alt={stage.name}
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-obsidian-deep/30 pointer-events-none" />
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm px-2.5 py-0.5 font-mono text-[10px] text-electric-gold rounded border border-electric-gold/30">
                      PHASE // 0{idx + 1}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mt-20 sm:mt-28">
        <div className="glass-panel p-8 sm:p-12 text-center rounded max-w-3xl mx-auto border border-surface-stroke">
          <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-3">
            GET STARTED
          </span>
          <h3 className="font-sans font-black text-2xl sm:text-4xl text-pure-white mb-4">
            READY TO ENGAGE THE SPRINT?
          </h3>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant max-w-xl mx-auto mb-8 leading-relaxed">
            Our teams engage in deterministic 2 to 6-week development cycles. Configure your project parameters now.
          </p>
          <Link
            to="/start-project"
            className="inline-flex items-center gap-2 bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

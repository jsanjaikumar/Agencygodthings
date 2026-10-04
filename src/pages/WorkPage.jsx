import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';

export default function WorkPage({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'FINTECH', 'EMBEDDED OS', 'LOGISTICS / AI', 'SECURITY'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.tag.toUpperCase().includes(activeFilter));

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Header Section */}
      <header className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="col-span-12 md:col-span-8">
            <span className="font-mono text-xs text-on-surface-variant mb-6 tracking-[0.2em] uppercase border border-surface-stroke inline-block px-3 py-1 rounded">
              Selected Works
            </span>
            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-pure-white mb-6 tracking-tight leading-[1.05]">
              Obsidian<br />
              <span className="text-on-surface-variant italic font-light">Evolution.</span>
            </h1>
          </div>
          <div className="col-span-12 md:col-span-4">
            <p className="font-sans text-base sm:text-lg text-on-surface-variant border-l border-electric-gold pl-5 leading-relaxed">
              A curated archive of digital products engineered for scale, performance, and unyielding authority. Brutalism meets precision.
            </p>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="mt-12 pt-8 border-t border-surface-stroke flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-on-surface-variant mr-3 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-electric-gold" />
            FILTER_VECTOR:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-mono text-xs px-4 py-2 rounded transition-all duration-200 border ${
                activeFilter === cat
                  ? 'border-electric-gold bg-electric-gold text-black font-bold shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                  : 'border-surface-stroke text-on-surface-variant hover:text-white hover:border-surface-variant bg-surface-container/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Projects Showcase Container */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-24 sm:space-y-36 mt-12">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <section key={project.id} className="relative">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Text Content Block */}
                <div
                  className={`col-span-12 md:col-span-5 z-20 ${
                    isEven
                      ? 'md:col-start-1 md:-mr-12 mb-6 md:mb-0 order-2 md:order-1'
                      : 'md:col-start-8 md:-ml-12 mb-6 md:mb-0 order-2 md:order-2'
                  }`}
                >
                  <div className="glass-panel p-6 sm:p-10 hairline-border rounded shadow-2xl relative overflow-hidden backdrop-blur-2xl">
                    <div className="flex items-center space-x-4 mb-6">
                      <span className="font-mono text-xs text-electric-gold border border-surface-stroke px-2 py-1 rounded">
                        {project.code}
                      </span>
                      <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
                        {project.tag}
                      </span>
                    </div>

                    <h2 className="font-sans font-black text-2xl sm:text-3xl lg:text-4xl text-pure-white mb-4 tracking-tight">
                      {project.title}
                    </h2>

                    <p className="font-sans text-sm sm:text-base text-on-surface-variant mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Metric preview pills */}
                    <div className="grid grid-cols-2 gap-3 mb-8 pt-4 border-t border-surface-stroke">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-surface-container/60 p-3 rounded border border-surface-stroke">
                          <div className="font-sans font-bold text-lg text-pure-white">{m.value}</div>
                          <div className="font-mono text-[10px] text-on-surface-variant uppercase">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-electric-gold hover:text-white transition-colors group cursor-pointer"
                    >
                      <span>Examine Project</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Cinematic Image Frame */}
                <div
                  onClick={() => onSelectProject && onSelectProject(project)}
                  className={`col-span-12 md:col-span-8 z-10 relative h-[360px] sm:h-[480px] md:h-[580px] overflow-hidden rounded hairline-border cursor-pointer group ${
                    isEven
                      ? 'md:col-start-5 order-1 md:order-2'
                      : 'md:col-start-1 order-1 md:order-1'
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-obsidian-deep/30 mix-blend-multiply pointer-events-none" />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 font-mono text-[11px] text-electric-gold border border-electric-gold/30 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    CLICK TO EXPAND SPEC
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

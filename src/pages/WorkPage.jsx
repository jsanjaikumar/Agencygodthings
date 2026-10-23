import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, Filter } from 'lucide-react';
import { projects } from '../data/projects';
import ScrambleText from '../components/ScrambleText';
import TechBadge from '../components/TechBadge';

export default function WorkPage({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'SAAS', 'AI', 'DEVELOPER', 'WEB APPS', 'BUSINESS'];

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
              className={`font-mono text-xs px-4 py-2 rounded transition-all duration-200 border group ${
                activeFilter === cat
                  ? 'border-electric-gold bg-electric-gold text-black font-bold shadow-[0_0_15px_rgba(250,204,21,0.25)]'
                  : 'border-surface-stroke text-on-surface-variant hover:text-white hover:border-surface-variant bg-surface-container/30'
              }`}
            >
              <ScrambleText
                text={cat}
                triggerOnParent
                scrambleColor={activeFilter === cat ? 'text-black/80 font-bold' : 'text-electric-gold'}
              />
            </button>
          ))}
        </div>
      </header>

      {/* Projects Showcase Container */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 space-y-12 sm:space-y-16 mt-12">
        {filteredProjects.map((project) => (
          <section
            key={project.id}
            className="w-full border border-surface-stroke bg-surface-container/20 rounded-xl overflow-hidden glass-panel hover:border-surface-variant transition-all duration-300 shadow-xl group"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left Column: Landscape Image (~58% on lg, 50% on md) */}
              <div
                onClick={() => onSelectProject && onSelectProject(project)}
                className="md:col-span-6 lg:col-span-7 relative w-full h-[240px] sm:h-[320px] md:h-auto min-h-[240px] sm:min-h-[320px] md:min-h-[440px] lg:min-h-[480px] overflow-hidden cursor-pointer border-b md:border-b-0 md:border-r border-surface-stroke"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-obsidian-deep/20 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none md:hidden" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="font-mono text-xs font-bold text-electric-gold bg-black/80 backdrop-blur-md px-2.5 py-1 border border-electric-gold/40 rounded shadow-md">
                    {project.code}
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 font-mono text-[11px] text-electric-gold border border-electric-gold/30 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                  CLICK TO EXPAND SPEC
                </div>
              </div>

              {/* Right Column: Project Content (~42% on lg, 50% on md) */}
              <div className="md:col-span-6 lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-surface-container/30">
                <div>
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="font-mono text-xs text-electric-gold uppercase tracking-wider font-semibold">
                      {project.tag}
                    </span>
                    {project.status && (
                      <span className="font-mono text-[10px] text-on-surface-variant border border-surface-stroke px-2 py-0.5 rounded tracking-wider uppercase bg-surface-container/60">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h2
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="font-sans font-black text-2xl sm:text-3xl text-pure-white mb-1.5 tracking-tight group-hover:text-electric-gold transition-colors cursor-pointer"
                  >
                    <ScrambleText text={project.title} triggerOnParent scrambleColor="text-electric-gold" />
                  </h2>

                  {/* Tagline */}
                  {project.headline && (
                    <p className="font-sans text-xs sm:text-sm font-semibold text-electric-gold/90 mb-3 tracking-wide">
                      {project.headline}
                    </p>
                  )}

                  {/* Description */}
                  <p className="font-sans text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Stack */}
                  {project.stack && project.stack.length > 0 && (
                    <div className="mb-5">
                      <div className="font-mono text-[10px] text-on-surface-variant/70 uppercase tracking-widest mb-2">
                        STACK & ARCHITECTURE
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech, idx) => (
                          <TechBadge key={idx} name={tech} index={idx} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Metrics */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-6 pt-4 border-t border-surface-stroke/70">
                      {project.metrics.slice(0, 2).map((m, idx) => (
                        <div key={idx} className="bg-surface-container/60 p-2.5 sm:p-3 rounded border border-surface-stroke">
                          <div className="font-sans font-bold text-sm sm:text-base text-pure-white">{m.value}</div>
                          <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Bottom Row / CTAs */}
                <div className="pt-4 border-t border-surface-stroke flex items-center justify-between gap-4">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/cta inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-electric-gold hover:text-white transition-colors cursor-pointer"
                    >
                      <ScrambleText text={project.cta || 'View Live Project'} triggerOnParent scrambleColor="text-data-cyan" />
                      <ArrowUpRight className="w-4 h-4 transform group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <button
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="group/cta inline-flex items-center space-x-2 font-sans text-xs font-bold uppercase tracking-wider text-electric-gold hover:text-white transition-colors cursor-pointer"
                    >
                      <ScrambleText text={project.cta || 'Explore Project'} triggerOnParent scrambleColor="text-electric-gold" />
                      <ArrowRight className="w-4 h-4 transform group-hover/cta:translate-x-1.5 transition-transform" />
                    </button>
                  )}

                  <button
                    onClick={() => onSelectProject && onSelectProject(project)}
                    className="group/spec font-mono text-xs text-on-surface-variant hover:text-electric-gold transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <ScrambleText text="Examine Spec" triggerOnParent scrambleColor="text-electric-gold" />
                    <span className="text-electric-gold group-hover/spec:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

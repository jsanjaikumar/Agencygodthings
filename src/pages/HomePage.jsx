import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Globe, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import ScrambleText from '../components/ScrambleText';

export default function HomePage({ onSelectProject }) {
  return (
    <div className="relative min-h-screen pt-28 sm:pt-36 pb-20">
      {/* Decorative Diagnostic Vertical Lines */}
      <div className="diagnostic-line h-full top-0 left-[8%] opacity-20 hidden md:block" />
      <div className="diagnostic-line h-full top-0 left-[50%] opacity-10 hidden lg:block" />
      <div className="diagnostic-line h-full top-0 right-[15%] opacity-20 hidden md:block" />

      {/* Hero Section */}
      <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[75vh]">
        {/* Technical Telemetry Overlay */}
        <div className="absolute top-0 left-5 sm:left-8 md:left-12 font-mono text-[11px] text-on-surface-variant/60 hidden md:block select-none">
          SYS.VER // Just 1 <br />
          Things // STABLE & SECURED
        </div>

        {/* Content Area (Asymmetrical Overlap) */}
        <div className="col-span-1 md:col-span-8 z-20 md:-mr-[8%] relative mt-6 md:mt-0">
          <div className="glass-panel p-6 sm:p-10 md:p-12 border border-surface-stroke backdrop-blur-xl rounded-sm">
            <div className="inline-flex items-center gap-2 border border-surface-stroke px-3 py-1 mb-6 rounded-full bg-surface-container/50">
              <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse"></span>
              <span className="font-mono text-xs text-electric-gold tracking-widest uppercase">
                Obsidian Evolution Architecture
              </span>
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-pure-white uppercase mb-6 leading-[1.05] tracking-tight">
              WE ARCHITECT<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-gold via-amber-200 to-white">
                DIGITAL
              </span>{' '}
              IMPERATIVES.
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl mb-8 sm:mb-10 border-l border-electric-gold pl-5 sm:pl-6 leading-relaxed">
              Pioneering the next era of stealth-wealth engineering and computational dominance. We forge systems that refuse to break.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-stretch sm:items-center">
              <Link
                to="/start-project"
                className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_25px_rgba(250,204,21,0.25)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <ScrambleText text="INITIATE SEQUENCE" triggerOnParent scrambleColor="text-black/80 font-mono" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>

              <div className="font-mono text-xs text-on-surface-variant border border-surface-stroke px-4 py-3.5 flex items-center justify-center gap-2 bg-surface-container/30 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>[ STATUS: OPERATIONAL ]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Visual Anchor */}
        {/* <div className="col-span-1 md:col-span-6 md:col-start-7 z-10 relative w-full h-[320px] sm:h-[450px] md:h-[550px] lg:h-[620px] rounded overflow-hidden border border-surface-stroke">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background z-10 pointer-events-none" />
          
          <img
            alt="The Obsidian Evolution abstract shard architecture"
            className="w-full h-full object-cover grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBl3LE_XsXYCz8dTi0HthquRJxV3QxF8ERm7SuP-E63NILCTVbJBYUs1kG2iG7iHgY5S79Nw607akcltIacAe5ncVMxDFxKEolwoDHCmuoFlhCkxFWRFlg--nxPmoJ5DIhGa7PUr3BaGEMCk2kMCOGw-H5_4j4tjU-Rsb_IwyzMFWcN1Bq8_THL_3cg0VTqcFv814rKQcT8_mGTJIWiLgTA034tddDUsBRfuoQAHLJPf5-9LU8q34qWdw"
          />

          {/* Floating Telemetry Node Badge */}
          {/* <div className="absolute bottom-6 right-6 z-20 font-mono text-xs text-electric-gold border border-electric-gold/40 px-3 py-1.5 backdrop-blur-md bg-black/60 rounded">
            NODE_ALPHA_7 // CONNECTED
          </div>
        </div> */} 

      </section>

      {/* Trust & Credibility Metrics */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 my-20 sm:my-28">
        <div className="glass-panel p-8 sm:p-12 rounded border border-surface-stroke bg-surface-container-lowest/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12 mb-12">
            <div className="border-b sm:border-b-0 sm:border-r border-surface-stroke pb-6 sm:pb-0 sm:pr-6">
              <div className="font-sans font-black text-4xl sm:text-5xl text-pure-white mb-2 tracking-tight">
                10+
              </div>
              <div className="font-mono text-xs text-electric-gold uppercase tracking-wider">
                Projects Launched & Deployed
              </div>
            </div>
            <div className="border-b sm:border-b-0 sm:border-r border-surface-stroke pb-6 sm:pb-0 sm:pr-6">
              <div className="font-sans font-black text-4xl sm:text-5xl text-pure-white mb-2 tracking-tight">
                01+
              </div>
              <div className="font-mono text-xs text-electric-gold uppercase tracking-wider">
                Years Deep Engineering Experience
              </div>
            </div>
            <div>
              <div className="font-sans font-black text-4xl sm:text-5xl text-pure-white mb-2 tracking-tight">
                98%
              </div>
              <div className="font-mono text-xs text-electric-gold uppercase tracking-wider">
                Client Satisfaction & Retention
              </div>
            </div>
          </div>

          {/* Discreet Client Strip */}
          <div className="border-t border-surface-stroke pt-8 flex flex-wrap justify-between items-center gap-6 opacity-40 font-mono text-sm tracking-widest">
            <span className="hover:opacity-100 hover:text-electric-gold transition-all">ACME CORP</span>
            <span className="hover:opacity-100 hover:text-electric-gold transition-all italic">GLOBEX SYSTEMS</span>
            <span className="hover:opacity-100 hover:text-electric-gold transition-all font-bold">SOYUZ DYNAMICS</span>
            <span className="hover:opacity-100 hover:text-electric-gold transition-all">INITECH LABS</span>
            <span className="hover:opacity-100 hover:text-electric-gold transition-all uppercase">UMBRELLA BIOTECH</span>
          </div>
        </div>
      </section>

      {/* Manifest Section: Core Protocols (Bento Grid) */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 my-20 sm:my-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter">
          {/* Section Header */}
          <div className="col-span-1 md:col-span-4 border-t border-surface-stroke pt-6">
            <div className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3">
              METHODOLOGY SPECS
            </div>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-pure-white uppercase tracking-tight">
              CORE PROTOCOLS
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant mt-4 leading-relaxed">
              Our methodologies are uncompromising. We do not build for the ephemeral present; we engineer for inevitable futures.
            </p>
            <div className="mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-mono text-xs text-electric-gold hover:text-white transition-colors"
              >
                <span>EXPLORE ALL ARCHITECTURAL PROTOCOLS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Grid Items */}
          <div className="col-span-1 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-gutter">
            {/* Card 1 */}
            <div className="bg-surface-container-low border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 group relative overflow-hidden rounded">
              <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-100 transition-opacity">
                <Cpu className="w-10 h-10 text-electric-gold" />
              </div>
              <div className="font-mono text-xs text-electric-gold mb-4">[ 01 ]</div>
              <h3 className="font-sans text-xl font-bold text-pure-white mb-3">
                STEALTH ARCHITECTURE
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Systems designed to operate silently with maximum computational yield. Zero friction. Infinite scalability.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-surface-container-low border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 group relative overflow-hidden rounded">
              <div className="absolute top-0 right-0 p-5 opacity-10 group-hover:opacity-100 transition-opacity">
                <Shield className="w-10 h-10 text-electric-gold" />
              </div>
              <div className="font-mono text-xs text-electric-gold mb-4">[ 02 ]</div>
              <h3 className="font-sans text-xl font-bold text-pure-white mb-3">
                CRYPTOGRAPHIC INTEGRITY
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Military-grade defensive postures embedded into the core logic and microservice contracts of every deployment.
              </p>
            </div>

            {/* Card 3 (Spans full width) */}
            <div className="sm:col-span-2 bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 flex flex-col md:flex-row gap-8 items-center rounded">
              <div className="flex-1">
                <div className="font-mono text-xs text-electric-gold mb-4">[ 03 ]</div>
                <h3 className="font-sans text-xl font-bold text-pure-white mb-3">
                  COMPUTATIONAL DOMINANCE
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  We leverage raw processing power wrapped in brutalist, hyper-efficient interfaces designed for high-stress operational velocity.
                </p>
              </div>
              <div className="w-full md:w-44 h-32 relative border border-surface-stroke bg-obsidian-deep flex items-center justify-center rounded">
                <Globe className="w-12 h-12 text-electric-gold animate-pulse opacity-70" />
                <span className="absolute bottom-2 font-mono text-[9px] text-on-surface-variant">
                  GLOBAL P99: 1.2MS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Works Showcase */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 my-20 sm:my-28">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-b border-surface-stroke pb-6 mb-12">
          <div>
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              CURATED ARCHIVE
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-pure-white uppercase">
              SELECTED WORK
            </h2>
          </div>
          <Link
            to="/work"
            className="group font-mono text-xs text-electric-gold hover:text-white flex items-center gap-1.5 transition-colors uppercase tracking-wider"
          >
            <ScrambleText text="View All Deployments" triggerOnParent scrambleColor="text-data-cyan" />
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProject && onSelectProject(item)}
              className="glass-panel border border-surface-stroke rounded p-6 sm:p-8 hover:border-electric-gold cursor-pointer transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-electric-gold border border-electric-gold/30 px-2 py-0.5 rounded">
                    {item.code}
                  </span>
                  <span className="font-mono text-xs text-on-surface-variant uppercase">
                    {item.tag}
                  </span>
                </div>

                <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded mb-6 border border-surface-stroke">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/80 via-transparent to-transparent pointer-events-none" />
                </div>

                <h3 className="font-sans font-bold text-2xl text-pure-white mb-2 group-hover:text-electric-gold transition-colors">
                  <ScrambleText text={item.title} triggerOnParent scrambleColor="text-electric-gold" />
                </h3>
                <p className="font-sans text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-stroke flex items-center justify-between">
                <span className="font-mono text-xs text-on-surface-variant">
                  {item.metrics[0].label}: <strong className="text-pure-white">{item.metrics[0].value}</strong>
                </span>
                <span className="font-sans text-xs font-bold text-electric-gold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <ScrambleText text={item.cta ? `${item.cta} →` : 'Explore Project →'} triggerOnParent scrambleColor="text-data-cyan" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit Banner CTA */}
      <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 my-20">
        <div className="border border-surface-stroke bg-gradient-to-r from-surface-container via-surface-container-high to-surface-container p-8 sm:p-12 rounded flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-electric-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-2xl relative z-10">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              COMPLIMENTARY FORENSIC REVIEW
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-pure-white mb-3">
              Is your website costing you high-value clients?
            </h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Request a rigorous technical & UX review of your platform. Sub-48 hour delivery with zero financial obligation.
            </p>
          </div>
          <Link
            to="/audit"
            className="group bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-7 py-4 rounded hover:bg-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap z-10"
          >
            <ScrambleText text="REQUEST AUDIT SCAN" triggerOnParent scrambleColor="text-black/80 font-mono" />
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}

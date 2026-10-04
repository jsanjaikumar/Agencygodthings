import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, ArrowRight, CheckCircle2, Shield, Activity, Cpu, Layers } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-obsidian-deep border border-surface-stroke w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-surface-container/95 backdrop-blur-md border-b border-surface-stroke">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-electric-gold border border-electric-gold/30 px-2 py-0.5 rounded">
              {project.code}
            </span>
            <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">
              {project.tag}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-electric-gold p-1.5 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 space-y-8">
          <div>
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-pure-white mb-3">
              {project.title}
            </h2>
            <p className="font-sans text-base sm:text-lg text-electric-gold font-medium mb-4">
              {project.headline}
            </p>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Cinematic Hero Image */}
          <div className="relative w-full h-[280px] sm:h-[400px] overflow-hidden rounded border border-surface-stroke group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 font-mono text-[11px] text-electric-gold bg-black/70 backdrop-blur-sm px-3 py-1 border border-electric-gold/30 rounded">
              SPEC_ID // {project.id.toUpperCase()}
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div>
            <h3 className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-4">
              TELEMETRY & PERFORMANCE IMPACT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="bg-surface-container border border-surface-stroke p-5 rounded">
                  <div className="font-sans font-bold text-2xl text-pure-white mb-1">
                    {m.value}
                  </div>
                  <div className="font-mono text-xs text-on-surface-variant uppercase">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Stack */}
          <div>
            <h3 className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3">
              DEPLOYMENT STACK
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, idx) => (
                <span
                  key={idx}
                  className="font-mono text-xs text-on-surface bg-surface-container px-3 py-1.5 rounded border border-surface-stroke"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Deep Details */}
          <div className="p-6 bg-surface-container/50 border border-surface-stroke rounded space-y-2">
            <h4 className="font-mono text-xs text-pure-white uppercase font-bold">
              ARCHITECTURAL SUMMARY
            </h4>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              {project.details}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 border-t border-surface-stroke flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="font-mono text-xs text-on-surface-variant">
              STATUS: ARCHIVED CASE STUDY // VERIFIED PRODUCTION
            </span>

            <Link
              to="/start-project"
              onClick={onClose}
              className="w-full sm:w-auto bg-electric-gold text-black font-sans text-xs font-bold tracking-widest uppercase px-6 py-3 rounded hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
              <span>Initialize Similar System</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

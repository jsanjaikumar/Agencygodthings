import React, { useState } from 'react';
import { Compass, Sliders, DollarSign, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import ScrambleText from '../components/ScrambleText';

export default function StartProjectPage() {
  const [activeSection, setActiveSection] = useState('intent'); // 'intent' | 'params' | 'budget'
  const [formData, setFormData] = useState({
    objective: '',
    demographic: '',
    competitors: '',
    timeline: 'Q3 2024',
    platforms: 'Web, iOS, Cloud',
    techStack: 'React, Node, WebGL',
    budget: '100K - 250K',
    contactEmail: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 sm:pt-32 pb-24 relative overflow-hidden flex flex-col justify-between">
      {/* Background Ambience */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 diagnostic-grid opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-gold/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-obsidian-deep rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 w-full relative z-10">
        {/* Header Section */}
        <header className="mb-12 sm:mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <p className="font-mono text-xs text-on-surface-variant mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse"></span>
              SYSTEM INITIATION PROTOCOL
            </p>
            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white tracking-tighter uppercase">
              OBSIDIAN<br />EVOLUTION
            </h1>
          </div>
          <div className="glass-panel p-5 rounded max-w-sm border border-surface-stroke">
            <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Configure project parameters. The diagnostic node interface adapts dynamically based on your inputs.
            </p>
          </div>
        </header>

        {/* Immersive Node Constellation Interface */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] flex items-center justify-center my-6">
          {/* Central Hub: Strategic Intent */}
          <div
            onClick={() => setActiveSection('intent')}
            className={`absolute z-30 interactive-node cursor-pointer transition-all duration-300 ${
              activeSection === 'intent' ? 'scale-105 sm:scale-110' : 'scale-90 sm:scale-95 opacity-60 hover:opacity-90'
            }`}
          >
            <div
              className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full flex flex-col items-center justify-center glass-panel border transition-all duration-500 ${
                activeSection === 'intent'
                  ? 'border-electric-gold shadow-[0_0_40px_rgba(250,204,21,0.25)] bg-surface-container/90'
                  : 'border-surface-stroke bg-surface-container/40'
              }`}
            >
              <Compass
                className={`w-8 h-8 sm:w-10 sm:h-10 mb-2 transition-colors duration-300 ${
                  activeSection === 'intent' ? 'text-electric-gold' : 'text-on-surface-variant'
                }`}
              />
              <span className="font-sans text-xs sm:text-sm font-bold text-pure-white uppercase tracking-widest text-center">
                Strategic<br />Intent
              </span>

              {/* Orbital Rings */}
              {activeSection === 'intent' && (
                <>
                  <div className="absolute inset-[-15px] sm:inset-[-20px] rounded-full border border-electric-gold/30 border-dashed animate-[spin_60s_linear_infinite] pointer-events-none" />
                  <div className="absolute inset-[-30px] sm:inset-[-40px] rounded-full border border-surface-stroke animate-[spin_40s_linear_infinite_reverse] pointer-events-none" />
                </>
              )}
            </div>
          </div>

          {/* Left Node: Project Parameters */}
          <div
            onClick={() => setActiveSection('params')}
            className={`absolute left-2 sm:left-12 md:left-24 top-6 sm:top-12 z-20 interactive-node cursor-pointer transition-all duration-300 ${
              activeSection === 'params' ? 'scale-105 sm:scale-110' : 'scale-90 sm:scale-95 opacity-60 hover:opacity-90'
            }`}
          >
            <div
              className={`relative w-32 h-32 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center glass-panel border transition-all duration-500 ${
                activeSection === 'params'
                  ? 'border-electric-gold shadow-[0_0_35px_rgba(250,204,21,0.25)] bg-surface-container/90'
                  : 'border-surface-stroke bg-surface-container/40'
              }`}
            >
              <Sliders
                className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 transition-colors duration-300 ${
                  activeSection === 'params' ? 'text-electric-gold' : 'text-on-surface-variant'
                }`}
              />
              <span className="font-sans text-[11px] sm:text-xs font-bold text-pure-white uppercase tracking-widest text-center">
                Project<br />Parameters
              </span>
            </div>
          </div>

          {/* Right Node: Budgetary Scope */}
          <div
            onClick={() => setActiveSection('budget')}
            className={`absolute right-2 sm:right-12 md:right-24 bottom-6 sm:bottom-12 z-20 interactive-node cursor-pointer transition-all duration-300 ${
              activeSection === 'budget' ? 'scale-105 sm:scale-110' : 'scale-90 sm:scale-95 opacity-60 hover:opacity-90'
            }`}
          >
            <div
              className={`relative w-32 h-32 sm:w-44 sm:h-44 rounded-full flex flex-col items-center justify-center glass-panel border transition-all duration-500 ${
                activeSection === 'budget'
                  ? 'border-electric-gold shadow-[0_0_35px_rgba(250,204,21,0.25)] bg-surface-container/90'
                  : 'border-surface-stroke bg-surface-container/40'
              }`}
            >
              <DollarSign
                className={`w-6 h-6 sm:w-8 sm:h-8 mb-1 sm:mb-2 transition-colors duration-300 ${
                  activeSection === 'budget' ? 'text-electric-gold' : 'text-on-surface-variant'
                }`}
              />
              <span className="font-sans text-[11px] sm:text-xs font-bold text-pure-white uppercase tracking-widest text-center">
                Budgetary<br />Scope
              </span>
            </div>
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10 opacity-30">
            <line stroke="#27272a" strokeDasharray="4 4" strokeWidth="1" x1="25%" y1="35%" x2="50%" y2="50%" />
            <line stroke="#27272a" strokeDasharray="4 4" strokeWidth="1" x1="75%" y1="65%" x2="50%" y2="50%" />
          </svg>
        </div>

        {/* Dynamic Form Area */}
        <div className="mt-8">
          <div className="glass-panel p-6 sm:p-10 md:p-12 rounded border border-surface-stroke">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-electric-gold/20 border border-electric-gold mx-auto flex items-center justify-center text-electric-gold">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <h3 className="font-sans font-black text-3xl text-pure-white">
                  SEQUENCE INITIALIZED // ENCRYPTED
                </h3>
                <p className="font-sans text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                  Your project dossier has been registered in the secure ledger. Our principal architect will initiate communications via your designated uplink channel within 24 hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="font-mono text-xs text-electric-gold border border-surface-stroke px-5 py-2.5 rounded hover:border-electric-gold"
                  >
                    Adjust Parameters
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Section 1: Strategic Intent */}
                {activeSection === 'intent' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-4 border-b border-surface-stroke">
                      <div className="flex items-center gap-3">
                        <Compass className="w-5 h-5 text-electric-gold" />
                        <h2 className="font-sans font-bold text-xl sm:text-2xl text-pure-white">
                          Strategic Intent
                        </h2>
                      </div>
                      <span className="font-mono text-xs text-electric-gold">STEP 01 / 03</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <label className="block font-mono text-xs text-on-surface-variant mb-2">
                            PRIMARY OBJECTIVE
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.objective}
                            onChange={(e) => setFormData({ ...formData, objective: e.target.value })}
                            placeholder="e.g. Market Domination, High-Frequency Trading Interface"
                            className="stealth-input"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-xs text-on-surface-variant mb-2">
                            TARGET DEMOGRAPHIC
                          </label>
                          <input
                            type="text"
                            value={formData.demographic}
                            onChange={(e) => setFormData({ ...formData, demographic: e.target.value })}
                            placeholder="e.g. Sovereign Wealth Entities, Tier-1 Institutional Clients"
                            className="stealth-input"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-2">
                          COMPETITIVE LANDSCAPE / CONSTRAINTS
                        </label>
                        <textarea
                          value={formData.competitors}
                          onChange={(e) => setFormData({ ...formData, competitors: e.target.value })}
                          placeholder="Briefly describe key friction points and current ecosystem bottlenecks..."
                          rows={4}
                          className="stealth-input resize-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveSection('params')}
                        className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-6 py-3.5 rounded hover:bg-white transition-colors flex items-center gap-2"
                      >
                        <span>Next: Parameters</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Section 2: Project Parameters */}
                {activeSection === 'params' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-4 border-b border-surface-stroke">
                      <div className="flex items-center gap-3">
                        <Sliders className="w-5 h-5 text-electric-gold" />
                        <h2 className="font-sans font-bold text-xl sm:text-2xl text-pure-white">
                          Project Parameters
                        </h2>
                      </div>
                      <span className="font-mono text-xs text-electric-gold">STEP 02 / 03</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-2">
                          TIMELINE EXPECTATION
                        </label>
                        <input
                          type="text"
                          value={formData.timeline}
                          onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                          placeholder="e.g. 4-6 Weeks / Q3 2024"
                          className="stealth-input"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-2">
                          TARGET PLATFORMS
                        </label>
                        <input
                          type="text"
                          value={formData.platforms}
                          onChange={(e) => setFormData({ ...formData, platforms: e.target.value })}
                          placeholder="Web, iOS, Hardware RTOS"
                          className="stealth-input"
                        />
                      </div>
                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-2">
                          STACK PREFERENCE
                        </label>
                        <input
                          type="text"
                          value={formData.techStack}
                          onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
                          placeholder="React, Rust, Three.js"
                          className="stealth-input"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between pt-4">
                      <button
                        type="button"
                        onClick={() => setActiveSection('intent')}
                        className="font-mono text-xs text-on-surface-variant hover:text-white"
                      >
                        ← Back to Intent
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection('budget')}
                        className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-6 py-3.5 rounded hover:bg-white transition-colors flex items-center gap-2"
                      >
                        <span>Next: Budget & Uplink</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* Section 3: Budgetary Scope */}
                {activeSection === 'budget' && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div className="flex items-center justify-between pb-4 border-b border-surface-stroke">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-electric-gold" />
                        <h2 className="font-sans font-bold text-xl sm:text-2xl text-pure-white">
                          Budgetary Scope & Uplink
                        </h2>
                      </div>
                      <span className="font-mono text-xs text-electric-gold">STEP 03 / 03</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-3">
                          CAPITAL ALLOCATION RANGE
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {['50K - 100K', '100K - 250K', '250K+'].map((tier) => (
                            <button
                              key={tier}
                              type="button"
                              onClick={() => setFormData({ ...formData, budget: tier })}
                              className={`py-3 px-2 text-center font-mono text-xs rounded border transition-all ${
                                formData.budget === tier
                                  ? 'border-electric-gold text-electric-gold bg-electric-gold/10 font-bold shadow-[0_0_15px_rgba(250,204,21,0.2)]'
                                  : 'border-surface-stroke text-on-surface hover:text-white hover:border-surface-variant'
                              }`}
                            >
                              {tier}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-mono text-xs text-on-surface-variant mb-2">
                          OFFICIAL COMMUNICATIONS UPLINK (WORK EMAIL)
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.contactEmail}
                          onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
                          placeholder="executive@institution.com"
                          className="stealth-input"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-6 border-t border-surface-stroke">
                      <button
                        type="button"
                        onClick={() => setActiveSection('params')}
                        className="font-mono text-xs text-on-surface-variant hover:text-white"
                      >
                        ← Back to Parameters
                      </button>

                      <button
                        type="submit"
                        className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] flex items-center gap-2 group"
                      >
                        <ScrambleText text="INITIALIZE SEQUENCE" triggerOnParent scrambleColor="text-black/80 font-mono" />
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

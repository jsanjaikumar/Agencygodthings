import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Smartphone, Globe, Activity, TrendingUp, Search, Layers } from 'lucide-react';

export default function AuditPage() {
  const [formData, setFormData] = useState({
    url: '',
    businessType: '',
    name: '',
    email: ''
  });

  const [scanState, setScanState] = useState('idle'); // idle | scanning | completed
  const [progress, setProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.url || !formData.email) return;

    setScanState('scanning');
    setProgress(15);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanState('completed');
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Hero & Lead Capture Section */}
      <section className="px-5 sm:px-8 md:px-12 w-full max-w-[1440px] mx-auto mb-20 sm:mb-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-gutter items-start">
          {/* Left: Value Proposition */}
          <div className="md:col-span-7 flex flex-col gap-6 pt-4 sm:pt-8">
            <div className="inline-flex items-center gap-2 border border-surface-stroke px-3 py-1 w-fit bg-surface-container/60 rounded">
              <span className="w-2 h-2 rounded-full bg-electric-gold block"></span>
              <span className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
                Complimentary Analysis
              </span>
            </div>

            <h1 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl text-pure-white leading-tight">
              Is your website costing you customers?
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              Get a free, rigorous review of your website's design architecture, user experience, technical performance, and conversion potential by our elite engineering council.
            </p>

            {/* Trust Indicators */}
            <div className="mt-8 flex flex-wrap items-center gap-8 sm:gap-12 border-t border-surface-stroke pt-8">
              <div>
                <span className="block font-sans font-black text-3xl text-electric-gold">48h</span>
                <span className="block font-mono text-xs text-on-surface-variant mt-1">Turnaround Time</span>
              </div>
              <div>
                <span className="block font-sans font-black text-3xl text-electric-gold">0$</span>
                <span className="block font-mono text-xs text-on-surface-variant mt-1">Obligation</span>
              </div>
              <div>
                <span className="block font-sans font-black text-3xl text-electric-gold">100%</span>
                <span className="block font-mono text-xs text-on-surface-variant mt-1">Confidential</span>
              </div>
            </div>
          </div>

          {/* Right: Lead Capture Form */}
          <div className="md:col-span-5 relative mt-8 md:mt-0" id="audit-form">
            <div className="absolute inset-0 bg-electric-gold/5 blur-[90px] rounded-full pointer-events-none" />

            <div className="relative bg-surface-container border border-surface-stroke p-6 sm:p-10 shadow-2xl rounded">
              {scanState === 'completed' ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-electric-gold/20 border border-electric-gold mx-auto flex items-center justify-center text-electric-gold">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-pure-white">
                    Audit Scan Initialized
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    Our automated crawler has registered <strong className="text-white">{formData.url}</strong>. Your comprehensive forensic report will be delivered to <strong className="text-electric-gold">{formData.email}</strong> within 48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setScanState('idle');
                      setProgress(0);
                    }}
                    className="font-mono text-xs text-electric-gold border border-surface-stroke px-4 py-2 rounded hover:border-electric-gold transition-colors"
                  >
                    Scan Another Domain
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-sans font-bold text-2xl text-pure-white mb-1">
                      Request Your Audit
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant">
                      Enter your parameters to initiate the analysis protocol.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                      <label className="block font-mono text-[11px] text-on-surface-variant mb-1 uppercase">
                        Website URL
                      </label>
                      <input
                        type="url"
                        required
                        value={formData.url}
                        onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                        placeholder="https://example.com"
                        className="w-full bg-transparent border-b border-surface-stroke py-2 text-sm font-mono text-white focus:outline-none focus:border-electric-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-on-surface-variant mb-1 uppercase">
                        Business Type / Industry
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        placeholder="e.g. Fintech, Luxury Ecommerce, SaaS"
                        className="w-full bg-transparent border-b border-surface-stroke py-2 text-sm font-mono text-white focus:outline-none focus:border-electric-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-on-surface-variant mb-1 uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alexander Wright"
                        className="w-full bg-transparent border-b border-surface-stroke py-2 text-sm font-mono text-white focus:outline-none focus:border-electric-gold transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block font-mono text-[11px] text-on-surface-variant mb-1 uppercase">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full bg-transparent border-b border-surface-stroke py-2 text-sm font-mono text-white focus:outline-none focus:border-electric-gold transition-colors"
                      />
                    </div>

                    {scanState === 'scanning' && (
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between font-mono text-[10px] text-electric-gold">
                          <span>INSPECTING DOMAIN SSL & DOM NODES...</span>
                          <span>{progress}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-obsidian-deep rounded overflow-hidden">
                          <div
                            className="h-full bg-electric-gold transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={scanState === 'scanning'}
                      className="mt-4 w-full bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase py-4 px-6 rounded hover:bg-white transition-colors duration-300 flex justify-center items-center gap-2 group"
                    >
                      <span>{scanState === 'scanning' ? 'Scanning...' : 'Initiate Scan'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="font-mono text-[10px] text-on-surface-variant text-center opacity-60">
                      By submitting, you agree to our confidential processing terms.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Parameters (Bento Grid) */}
      <section className="px-5 sm:px-8 md:px-12 w-full max-w-[1440px] mx-auto">
        <div className="mb-12 md:w-1/2">
          <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
            VECTORS & TARGETS
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-4xl text-pure-white">
            Diagnostic Parameters
          </h2>
          <p className="font-sans text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
            Our comprehensive audit analyzes six critical vectors of your digital presence, identifying precise friction points for revenue uplift.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <Globe className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">UX Review</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Friction point analysis and user journey mapping to ensure intuitive navigation and reduced bounce rates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <Smartphone className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">Mobile Review</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Evaluation of responsive breakpoints, touch target optimization, and mobile-first architectural integrity.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <Activity className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">Performance</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Core Web Vitals assessment, load time diagnostics, and asset optimization strategies for peak velocity.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <TrendingUp className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">Conversion Rate</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Call-to-action placement analysis, trust signal verification, and checkout funnel drop-off identification.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <Search className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">SEO Fundamentals</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              Technical crawling analysis, metadata structure review, and semantic HTML hierarchy assessment.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-surface-container border border-surface-stroke p-8 hover:border-electric-gold transition-all duration-300 rounded group">
            <Layers className="w-8 h-8 text-electric-gold mb-4" />
            <h3 className="font-sans text-xl font-bold text-pure-white mb-2">Actionable Roadmap</h3>
            <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
              A consolidated, prioritized blueprint of engineering and design improvements tailored to your specific ecosystem.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

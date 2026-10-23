import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wrench, 
  RefreshCw, 
  Database, 
  Activity, 
  Server, 
  FileEdit, 
  ArrowRight, 
  ArrowUpRight, 
  Check, 
  X, 
  AlertTriangle, 
  Clock, 
  Sparkles,
  Inbox,
  Search,
  ListOrdered,
  FileCheck2,
  Info
} from 'lucide-react';
import ScrambleText from '../components/ScrambleText';
import FaqAccordion from '../components/FaqAccordion';

export default function MaintenancePage() {
  useEffect(() => {
    document.title = 'Website & Application Maintenance | JustThings Agency';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Explore website and application maintenance plans, technical support, updates, troubleshooting, and ongoing care from JustThings Agency.';
  }, []);

  const maintainCategories = [
    {
      title: 'Bug Fixes & Troubleshooting',
      icon: Wrench,
      description: 'Investigate reported issues and resolve eligible bugs within the agreed plan scope.'
    },
    {
      title: 'Updates & Compatibility',
      icon: RefreshCw,
      description: 'Review supported platform, framework, plugin, and dependency updates and assess compatibility before applying changes.'
    },
    {
      title: 'Backups & Recovery Readiness',
      icon: Database,
      description: 'Verify configured backups and help maintain a documented recovery approach where supported by the hosting environment.'
    },
    {
      title: 'Uptime & Performance Checks',
      icon: Activity,
      description: 'Perform agreed basic availability and performance checks and investigate identified issues within the plan scope.'
    },
    {
      title: 'Hosting & Deployment Support',
      icon: Server,
      description: 'Assist with deployments, hosting configuration, domain-related technical issues, and supported infrastructure troubleshooting.'
    },
    {
      title: 'Minor Content & UI Improvements',
      icon: FileEdit,
      description: 'Make small, agreed content or interface changes within the plan\'s available support hours.'
    }
  ];

  const plans = [
    {
      id: 'essential',
      name: 'Essential Care',
      price: '₹2,499',
      period: '/month',
      isRecommended: false,
      badge: null,
      description: 'For small business websites that need basic upkeep and occasional minor changes.',
      hours: 'Up to 1 hour of maintenance work per month',
      features: [
        'Up to 1 hour of maintenance work per month',
        'Basic website health checks',
        'Contact-form and key-link checks',
        'Minor content updates within the time allowance',
        'Basic uptime check',
        'Technical support during agreed business hours',
        'Monthly summary of completed work when agreed'
      ],
      bestFor: 'Portfolio websites, small business websites, and simple landing pages.',
      ctaText: 'Choose Essential Care',
      ctaLink: '/start-project?plan=essential'
    },
    {
      id: 'growth',
      name: 'Growth Care',
      price: '₹5,999',
      period: '/month',
      isRecommended: true,
      badge: 'RECOMMENDED',
      description: 'For active business websites that need regular updates, basic technical checks, and a little room for ongoing improvements.',
      hours: 'Up to 3 total hours of maintenance work per month',
      features: [
        'Up to 3 total hours of maintenance work per month',
        'Everything in Essential Care',
        'Routine platform and dependency updates where supported',
        'Backup verification where backups are configured',
        'Basic performance and error checks',
        'Minor website improvements within the time allowance',
        'Priority in the agreed support queue'
      ],
      bestFor: 'Growing businesses, lead-generation websites, and frequently updated websites.',
      ctaText: 'Choose Growth Care',
      ctaLink: '/start-project?plan=growth'
    },
    {
      id: 'application',
      name: 'Application Care',
      price: '₹12,999',
      period: '/month',
      isRecommended: false,
      badge: 'ENTERPRISE APPS',
      description: 'For custom web applications and business systems that need regular technical oversight and development support.',
      hours: 'Up to 5 total hours of maintenance work per month',
      features: [
        'Up to 5 total hours of maintenance work per month',
        'Application and API health checks',
        'Backup verification where supported',
        'Routine dependency and security-related updates',
        'Bug triage and eligible minor fixes',
        'Deployment assistance',
        'Monthly maintenance status report'
      ],
      bestFor: 'Custom dashboards, internal tools, customer portals, and database-driven applications.',
      ctaText: 'Choose Application Care',
      ctaLink: '/start-project?plan=application'
    }
  ];

  const includedItems = [
    'Eligible maintenance tasks',
    'Routine checks described in the selected plan',
    'Small content or interface changes where specified',
    'Initial investigation of reported issues',
    'Support communication during agreed hours'
  ];

  const separateItems = [
    'New pages or major redesigns',
    'New application features',
    'Large database migrations',
    'Major framework or platform upgrades',
    'Complex third-party integrations',
    'Hosting, domains, licences, and paid API usage',
    'Emergency or out-of-hours work',
    'Work exceeding included monthly hours',
    'Recovery from major infrastructure incidents where not included in the contract'
  ];

  const supportWorkflow = [
    {
      number: '01',
      title: 'Submit Your Request',
      desc: 'Share the affected page, feature, error message, and any relevant screenshots.'
    },
    {
      number: '02',
      title: 'We Review the Issue',
      desc: 'We assess the request, its urgency, and whether it falls within the agreed plan.'
    },
    {
      number: '03',
      title: 'Work Is Prioritized',
      desc: 'Eligible tasks are scheduled according to severity, plan priority, available hours, and dependencies.'
    },
    {
      number: '04',
      title: 'We Resolve and Report',
      desc: 'We communicate the findings, work completed, and any recommended next steps.'
    }
  ];

  const responseTargets = [
    {
      plan: 'Essential Care',
      target: 'Within 2 business days',
      priority: 'Standard queue',
      color: 'text-on-surface'
    },
    {
      plan: 'Growth Care',
      target: 'Within 1 business day',
      priority: 'Priority queue',
      color: 'text-electric-gold font-bold'
    },
    {
      plan: 'Application Care',
      target: 'Within 4 business hours',
      priority: 'Dedicated tech queue',
      color: 'text-electric-gold font-bold'
    }
  ];

  const faqItems = [
    {
      question: 'Can you maintain a website built by another developer?',
      answer: 'Yes, subject to an initial technical review, access availability, and compatibility with our supported technologies. We evaluate the existing architecture, code hygiene, and hosting configuration before onboarding.'
    },
    {
      question: 'Are hosting and domain charges included?',
      answer: 'Not by default. Hosting, domain renewals, premium licences, and third-party API or SaaS charges are separate unless explicitly included in the proposal.'
    },
    {
      question: 'What happens if I exceed my monthly hours?',
      answer: 'We will explain the additional scope and obtain written approval before undertaking chargeable work. You are never billed for excess hours without prior agreement.'
    },
    {
      question: 'Do you provide emergency support?',
      answer: 'Emergency and out-of-hours support must be agreed separately. It is not automatically included in the standard plans.'
    },
    {
      question: 'Can I request new features under maintenance?',
      answer: 'Minor improvements may fit within the available hours. Larger features or redesigns require a separate estimate and scoped sprint.'
    },
    {
      question: 'Can I start maintenance after you build my website?',
      answer: 'Yes. Maintenance can be arranged after launch, subject to the selected plan and agreed scope. Many clients transition directly from the build phase into ongoing care.'
    }
  ];

  const scrollToPlans = (e) => {
    e.preventDefault();
    const el = document.getElementById('plans');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="atmospheric-glow top-24 left-[-10%] opacity-30 pointer-events-none" />
      <div className="atmospheric-glow top-[55%] right-[-15%] opacity-25 pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-20 sm:mb-28 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 border border-surface-stroke rounded-full px-4 py-1.5 bg-surface-container/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse" />
            <span className="font-mono text-xs uppercase text-electric-gold tracking-widest">
              ONGOING CARE FOR YOUR DIGITAL PRODUCTS
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white mb-6 uppercase tracking-tight leading-[1.05]">
            Keep Your Website or Application{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-gold via-amber-200 to-amber-500">
              Running With Confidence.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed border-l-2 border-electric-gold/80 pl-5">
            Launching your website or application is only the beginning. JustThings provides structured maintenance and technical support to help keep your digital products updated, monitored, and easier to manage.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
            <a
              href="#plans"
              onClick={scrollToPlans}
              className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
            >
              <ScrambleText text="CHOOSE A MAINTENANCE PLAN" triggerOnParent scrambleColor="text-black/80 font-mono" />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <Link
              to="/start-project"
              className="glass-panel text-on-surface hover:text-electric-gold border border-surface-stroke hover:border-electric-gold/60 font-sans text-xs font-bold tracking-widest uppercase px-7 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <ScrambleText text="DISCUSS YOUR EXISTING WEBSITE" triggerOnParent scrambleColor="text-data-cyan" />
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE MAINTAIN */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
            MAINTENANCE SCOPE
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Technical Support for the Systems You Depend On.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Reliable routine care, updates, and troubleshooting across critical digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {maintainCategories.map((cat, idx) => {
            const IconComp = cat.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-lg border border-surface-stroke hover:border-electric-gold/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded bg-surface-container border border-surface-stroke group-hover:border-electric-gold/50 flex items-center justify-center text-electric-gold mb-5 transition-colors">
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-xl text-pure-white mb-3 group-hover:text-electric-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Qualification notice */}
        <div className="p-4 rounded-lg bg-surface-container/40 border border-surface-stroke text-xs text-on-surface-variant flex items-start gap-2.5">
          <Info className="w-4 h-4 text-electric-gold shrink-0 mt-0.5" />
          <span>
            <strong>Service Qualification:</strong> Monitoring, backup automation, security scans, and uptime alerts are included where they are configured and supported within the client's specific hosting and server environment.
          </span>
        </div>
      </section>

      {/* SECTION 3: MAINTENANCE PLANS */}
      <section id="plans" className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10 scroll-mt-28">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
            TRANSPARENT RECURRING TIERS
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Choose the Level of Support That Fits Your Business.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Choose a plan based on the type of website or application you operate and the level of ongoing technical assistance you need.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-10">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isRecommended
                    ? 'glass-panel border-2 border-electric-gold bg-surface-container/70 shadow-[0_0_40px_rgba(250,204,21,0.2)] lg:-translate-y-2'
                    : 'glass-panel border border-surface-stroke bg-surface-container-lowest/70 hover:border-surface-stroke/80'
                }`}
              >
                {/* Recommended Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded font-mono text-[11px] font-black tracking-widest uppercase ${
                    plan.isRecommended
                      ? 'bg-electric-gold text-black shadow-[0_0_15px_rgba(250,204,21,0.4)]'
                      : 'bg-surface-container border border-surface-stroke text-on-surface-variant'
                  }`}>
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
                      TIER // {plan.name.toUpperCase()}
                    </span>
                    <h3 className="font-sans font-black text-2xl sm:text-3xl text-pure-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-surface-stroke flex items-baseline gap-1.5">
                    <span className="font-sans font-black text-4xl sm:text-5xl text-pure-white tracking-tight">
                      {plan.price}
                    </span>
                    <span className="font-mono text-sm text-on-surface-variant">
                      {plan.period}
                    </span>
                  </div>

                  {/* Included Work Highlight */}
                  <div className="mb-6 p-3 rounded bg-surface-container/60 border border-surface-stroke text-xs font-mono text-electric-gold">
                    {plan.hours}
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <span className="font-mono text-[11px] text-pure-white uppercase tracking-wider block font-bold">
                      INCLUDED IN PLAN:
                    </span>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface font-sans">
                          <Check className="w-3.5 h-3.5 text-electric-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="mb-8 p-3 rounded bg-surface-container-lowest border border-surface-stroke/60 text-xs text-on-surface-variant">
                    <strong className="text-pure-white block mb-0.5 font-mono text-[10px] uppercase">Best For:</strong>
                    {plan.bestFor}
                  </div>
                </div>

                <Link
                  to={plan.ctaLink}
                  className={`w-full py-3.5 px-4 rounded font-sans text-xs font-black uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.isRecommended
                      ? 'bg-electric-gold text-black hover:bg-white shadow-[0_0_20px_rgba(250,204,21,0.25)]'
                      : 'bg-surface-container text-pure-white border border-surface-stroke hover:border-electric-gold hover:text-electric-gold'
                  }`}
                >
                  <ScrambleText text={plan.ctaText} triggerOnParent scrambleColor="" />
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Pricing Clarification Card */}
        <div className="p-6 rounded-lg bg-surface-container-lowest/80 border border-surface-stroke text-xs text-on-surface-variant leading-relaxed">
          <div className="flex items-center gap-2 text-electric-gold font-mono text-xs font-bold uppercase mb-2">
            <Info className="w-4 h-4 shrink-0" />
            <span>Pricing Clarification & Terms</span>
          </div>
          <p className="mb-2">
            Plan pricing is indicative and subject to technical assessment. Monthly hours cover the total included maintenance work, not guaranteed continuous availability. Unused hours do not roll over unless explicitly agreed in writing. Hosting, domains, premium licences, third-party services, taxes, major upgrades, new features, and out-of-scope development may be charged separately.
          </p>
          <p className="text-on-surface-variant/80">
            <strong>Important Notice:</strong> Standard maintenance plans do not include 24/7 monitoring, guaranteed uptime, unlimited fixes, emergency on-call support, or guaranteed resolution times unless these are separately contracted in a formal service level agreement.
          </p>
        </div>
      </section>

      {/* SECTION 4: WHAT'S INCLUDED AND WHAT'S SEPARATE */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="glass-panel p-8 sm:p-12 md:p-14 rounded-xl border border-surface-stroke bg-surface-container-lowest/70 backdrop-blur-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              SCOPE BOUNDARIES
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              Clear Scope. No Surprises.
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We operate with absolute transparency regarding what falls under monthly care versus what is scoped independently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Column 1: Included */}
            <div className="p-6 sm:p-8 rounded-lg bg-surface-container/50 border border-emerald-500/30">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-surface-stroke">
                <div className="w-7 h-7 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-4 h-4" />
                </div>
                <h3 className="font-sans font-bold text-lg text-pure-white">
                  Typically Included Within Plan Limits
                </h3>
              </div>
              <ul className="space-y-3.5">
                {includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-on-surface font-sans">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Quoted Separately */}
            <div className="p-6 sm:p-8 rounded-lg bg-surface-container/50 border border-surface-stroke">
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-surface-stroke">
                <div className="w-7 h-7 rounded-full bg-surface-container border border-surface-stroke flex items-center justify-center text-on-surface-variant">
                  <span className="font-mono text-xs text-electric-gold">+</span>
                </div>
                <h3 className="font-sans font-bold text-lg text-pure-white">
                  Quoted Separately When Applicable
                </h3>
              </div>
              <ul className="space-y-3.5">
                {separateItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-on-surface-variant font-sans">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-gold shrink-0 mt-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="font-sans text-sm text-on-surface-variant border-t border-surface-stroke pt-6">
            <strong>Out-of-Scope Safeguard:</strong> If a request falls outside the agreed scope, we'll explain the requirement and estimated cost before beginning the additional work.
          </p>
        </div>
      </section>

      {/* SECTION 5: HOW SUPPORT WORKS */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
            INCIDENT PROTOCOL
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            A Straightforward Support Process.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            From notification to resolution, every ticket is systematically tracked and communicated.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {supportWorkflow.map((step, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 sm:p-8 rounded-lg border border-surface-stroke hover:border-electric-gold/50 transition-colors"
            >
              <div className="font-mono font-black text-3xl sm:text-4xl text-electric-gold/80 mb-4">
                {step.number}
              </div>
              <h3 className="font-sans font-bold text-xl text-pure-white mb-3">
                {step.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 6: PROPOSED SUPPORT RESPONSE TARGETS */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="glass-panel p-8 sm:p-12 rounded-xl border border-surface-stroke bg-surface-container-lowest/80 backdrop-blur-xl">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              TARGET BENCHMARKS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-pure-white mb-3 uppercase tracking-tight">
              Proposed Support Response Targets
            </h2>
            <p className="font-sans text-sm sm:text-base text-on-surface-variant">
              Initial response targets during agreed business hours across support tiers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {responseTargets.map((rt, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg bg-surface-container/50 border border-surface-stroke"
              >
                <span className="font-mono text-xs text-on-surface-variant uppercase tracking-wider block mb-2">
                  {rt.plan}
                </span>
                <div className={`font-sans text-xl sm:text-2xl text-pure-white mb-2 ${rt.color}`}>
                  {rt.target}
                </div>
                <span className="font-mono text-[11px] text-electric-gold uppercase">
                  {rt.priority}
                </span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded bg-surface-container/30 border border-surface-stroke text-xs text-on-surface-variant leading-relaxed">
            <strong>Qualification Note:</strong> These are proposed initial-response targets during agreed support hours, not guaranteed resolution times. Actual response targets must be confirmed in the signed service agreement. Resolution depends on issue complexity, access, third-party services, and other dependencies.
          </div>
        </div>
      </section>

      {/* SECTION 7: MAINTENANCE FAQ */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              ONGOING SUPPORT DETAILS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              Maintenance FAQ
            </h2>
            <p className="font-sans text-base text-on-surface-variant">
              Answers to common queries regarding ongoing upkeep, codebases built elsewhere, and extra hours.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="glass-panel p-8 sm:p-14 md:p-16 rounded-xl border border-electric-gold/40 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest relative overflow-hidden text-center shadow-[0_0_50px_rgba(250,204,21,0.08)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-3">
              STAY OPERATIONAL
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-5 uppercase tracking-tight">
              Your Website Is Live. Let's Keep It That Way.
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Tell us about your website or application, the technology it uses, and the support you need. We'll recommend a suitable maintenance approach.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/start-project"
                className="w-full sm:w-auto bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
              >
                <ScrambleText text="DISCUSS MAINTENANCE" triggerOnParent scrambleColor="text-black/80 font-mono" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto glass-panel text-pure-white hover:text-electric-gold border border-surface-stroke hover:border-electric-gold font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ScrambleText text="COMPARE SERVICES" triggerOnParent scrambleColor="text-data-cyan" />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

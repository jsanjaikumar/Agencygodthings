import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Globe, 
  Code2, 
  Layout, 
  Cpu, 
  Bot, 
  Wrench, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Compass, 
  Zap, 
  ShieldCheck, 
  RefreshCw,
  Sliders,
  Check
} from 'lucide-react';
import ScrambleText from '../components/ScrambleText';
import FaqAccordion from '../components/FaqAccordion';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    document.title = 'Digital Services | JustThings Agency';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Explore website development, custom software, UI/UX design, business automation, AI solutions, and maintenance services from JustThings Agency.';
  }, []);

  const serviceCategories = [
    {
      id: 'website-dev',
      number: '01',
      title: 'Website Design & Development',
      icon: Globe,
      description: 'Build a professional digital presence that communicates your value, earns trust, and turns visitors into enquiries.',
      delivers: [
        'Business and corporate websites',
        'Landing pages and campaign websites',
        'Portfolio and personal-brand websites',
        'E-commerce experiences',
        'Responsive layouts for mobile, tablet, and desktop',
        'Contact forms and lead capture',
        'Website performance and search-engine fundamentals',
        'Analytics and third-party integrations where required'
      ],
      bestFor: 'Businesses that need a professional online presence or want to improve an existing website.',
      ctaText: 'Discuss Your Website',
      ctaLink: '/start-project?service=website',
      tag: 'PRESENCE & CONVERSION'
    },
    {
      id: 'custom-software',
      number: '02',
      title: 'Custom Software Development',
      icon: Code2,
      description: 'Replace disconnected tools and repetitive manual processes with software designed around the way your business operates.',
      delivers: [
        'Custom web applications',
        'Internal business tools',
        'Admin panels and dashboards',
        'Customer and employee portals',
        'Workflow and approval systems',
        'API development and integrations',
        'Database-driven applications',
        'Role-based access control'
      ],
      bestFor: 'Businesses whose requirements cannot be handled efficiently by a standard website or off-the-shelf tool.',
      ctaText: 'Discuss Your Software',
      ctaLink: '/start-project?service=software',
      tag: 'SYSTEMS & OPERATIONS'
    },
    {
      id: 'ui-ux',
      number: '03',
      title: 'UI/UX Design & Prototyping',
      icon: Layout,
      description: 'Plan and validate digital experiences before investing in full development.',
      delivers: [
        'User-flow mapping',
        'Wireframes and interactive prototypes',
        'Website and application interface design',
        'Responsive design systems',
        'Dashboard and admin-panel design',
        'Usability improvements',
        'Developer-ready design specifications'
      ],
      bestFor: 'Founders, startups, and businesses that need a clear product direction before development.',
      ctaText: 'Plan Your Product',
      ctaLink: '/start-project?service=design',
      tag: 'EXPERIENCE & VALIDATION'
    },
    {
      id: 'automation',
      number: '04',
      title: 'Business Automation & Integrations',
      icon: Cpu,
      description: 'Reduce repetitive work by connecting your tools, automating workflows, and moving information between systems more efficiently.',
      delivers: [
        'Form-to-CRM workflows',
        'Automated notifications and follow-ups',
        'API integrations',
        'Third-party software integrations',
        'Data synchronization',
        'Workflow automation',
        'Reporting and operational alerts',
        'AI-assisted workflows where appropriate'
      ],
      bestFor: 'Businesses spending too much time on repetitive administrative work or moving information manually between tools.',
      ctaText: 'Automate Your Workflow',
      ctaLink: '/start-project?service=automation',
      tag: 'EFFICIENCY & WORKFLOWS'
    },
    {
      id: 'ai-solutions',
      number: '05',
      title: 'AI-Powered Solutions',
      icon: Bot,
      description: 'Use AI where it provides practical value, from answering common customer questions to helping teams find information and complete routine tasks.',
      delivers: [
        'AI-powered customer-support assistants',
        'Knowledge-base question answering',
        'LLM API integrations',
        'Retrieval-augmented generation (RAG) where appropriate',
        'AI-assisted document and information workflows',
        'Prompt and workflow design',
        'Streaming AI interfaces where suitable',
        'Human escalation and fallback workflows'
      ],
      bestFor: 'Businesses looking to make information easier to access or introduce AI into specific business processes.',
      ctaText: 'Explore AI Solutions',
      ctaLink: '/start-project?service=ai',
      tag: 'APPLIED INTELLIGENCE'
    },
    {
      id: 'maintenance',
      number: '06',
      title: 'Website & Application Maintenance',
      icon: Wrench,
      description: 'Keep your website and application reliable after launch through planned maintenance, technical checks, minor improvements, and ongoing support.',
      delivers: [
        'Bug investigation and fixes within agreed limits',
        'Routine updates and compatibility checks',
        'Backup verification where backups are configured',
        'Basic uptime and performance checks',
        'Deployment and hosting assistance',
        'Minor content updates',
        'Technical troubleshooting',
        'Ongoing improvement recommendations'
      ],
      bestFor: 'Businesses that need dependable technical support without managing every technical task internally.',
      ctaText: 'View Maintenance Plans',
      ctaLink: '/maintenance',
      tag: 'CONTINUOUS SUPPORT'
    }
  ];

  const workflowSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Understand your business, users, goals, current challenges, and constraints.'
    },
    {
      number: '02',
      title: 'Plan',
      description: 'Define the scope, features, priorities, timeline, and delivery approach.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Design, develop, test, and refine the solution with regular communication.'
    },
    {
      number: '04',
      title: 'Launch & Improve',
      description: 'Deploy the approved solution and provide agreed handover, maintenance, or ongoing development support.'
    }
  ];

  const principles = [
    {
      title: 'Business-First Thinking',
      description: 'We begin with the problem and desired outcome rather than pushing unnecessary technology.'
    },
    {
      title: 'Solutions That Fit',
      description: 'We select the tools, features, and architecture based on the requirements of each project.'
    },
    {
      title: 'Clear Communication',
      description: 'We explain scope, priorities, dependencies, and progress in a straightforward way.'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Our relationship does not have to end at launch. We can continue supporting and improving the solution through separately agreed services.'
    }
  ];

  const faqItems = [
    {
      question: 'Can I hire JustThings for only one service?',
      answer: 'Yes. You can engage us for a single service or combine services based on your requirements. We adapt to where you currently are—whether you need just a targeted website build, an internal workflow integration, or a complete digital product from wireframing to ongoing maintenance.'
    },
    {
      question: 'How much does a project cost?',
      answer: 'Pricing depends on scope, complexity, integrations, design requirements, and delivery timelines. We provide a transparent, detailed proposal after understanding your needs so you have full clarity before any work begins.'
    },
    {
      question: 'Can you work with an existing website or application?',
      answer: 'Yes. Existing systems can be assessed for improvements, integrations, maintenance, or further development. We perform an initial technical evaluation to assess code quality, architecture, and feasibility.'
    },
    {
      question: 'Do you provide support after launch?',
      answer: 'Yes. Post-launch maintenance and support can be arranged under an agreed plan or separate scope of work. We offer structured monthly plans covering updates, troubleshooting, health checks, and minor improvements.'
    },
    {
      question: 'How long does a project take?',
      answer: 'Timelines depend on project complexity, approvals, content readiness, and integrations. A focused landing page or simple website may take 2-4 weeks, whereas complex custom web applications or multi-step integrations may take 6-12 weeks. We establish a realistic, agreed timeline during the planning phase.'
    }
  ];

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="atmospheric-glow top-20 left-[-15%] opacity-30 pointer-events-none" />
      <div className="atmospheric-glow top-[45%] right-[-10%] opacity-25 pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-20 sm:mb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-6 border border-surface-stroke rounded-full px-4 py-1.5 bg-surface-container/60 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse" />
              <span className="font-mono text-xs uppercase text-electric-gold tracking-widest">
                WHAT WE DO
              </span>
            </div>

            <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white mb-6 uppercase tracking-tight leading-[1.05]">
              Digital Services Built Around{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-gold via-amber-200 to-amber-500">
                Your Business.
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-2xl mb-10 leading-relaxed border-l-2 border-electric-gold/80 pl-5">
              From your first website to custom business software, automation, and ongoing technical support, JustThings helps turn business requirements into digital solutions that work in the real world.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
              <Link
                to="/start-project"
                className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
              >
                <ScrambleText text="START A PROJECT" triggerOnParent scrambleColor="text-black/80 font-mono" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/solutions"
                className="glass-panel text-on-surface hover:text-electric-gold border border-surface-stroke hover:border-electric-gold/60 font-sans text-xs font-bold tracking-widest uppercase px-7 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ScrambleText text="EXPLORE OUR SOLUTIONS" triggerOnParent scrambleColor="text-data-cyan" />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Connected Digital Services Visual Composition */}
          <div className="lg:col-span-5">
            <div className="glass-panel border border-surface-stroke rounded-xl p-6 sm:p-8 relative overflow-hidden bg-surface-container-lowest/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
              <div className="flex items-center justify-between border-b border-surface-stroke pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs text-electric-gold uppercase tracking-wider">
                    ECOSYSTEM TOPOLOGY
                  </span>
                </div>
                <span className="font-mono text-[11px] text-on-surface-variant/70">
                  JT // INTEGRATED STACK
                </span>
              </div>

              {/* Central Architecture Map */}
              <div className="space-y-3">
                <div className="p-3.5 rounded bg-surface-container/60 border border-surface-stroke hover:border-electric-gold/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-pure-white">Web & Digital Presence</div>
                      <div className="font-mono text-[10px] text-on-surface-variant">Performant, responsive, search-ready</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">READY</span>
                </div>

                <div className="p-3.5 rounded bg-surface-container/60 border border-surface-stroke hover:border-electric-gold/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold">
                      <Code2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-pure-white">Custom Business Software</div>
                      <div className="font-mono text-[10px] text-on-surface-variant">Portals, admin panels, database workflows</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">SCALABLE</span>
                </div>

                <div className="p-3.5 rounded bg-surface-container/60 border border-surface-stroke hover:border-electric-gold/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-pure-white">Workflows & Integrations</div>
                      <div className="font-mono text-[10px] text-on-surface-variant">Automated CRM, APIs, data synchronization</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">CONNECTED</span>
                </div>

                <div className="p-3.5 rounded bg-surface-container/60 border border-surface-stroke hover:border-electric-gold/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-pure-white">Applied AI & Knowledge</div>
                      <div className="font-mono text-[10px] text-on-surface-variant">Assistants, RAG document search, LLMs</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-electric-gold bg-electric-gold/10 px-2 py-0.5 rounded border border-electric-gold/30">PRACTICAL</span>
                </div>

                <div className="p-3.5 rounded bg-surface-container/60 border border-surface-stroke hover:border-electric-gold/50 transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold">
                      <Wrench className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-sans font-bold text-xs sm:text-sm text-pure-white">Ongoing Technical Care</div>
                      <div className="font-mono text-[10px] text-on-surface-variant">Health checks, updates, troubleshooting</div>
                    </div>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">MONITORED</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-surface-stroke flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
                <span>HYBRID SERVICE MODEL</span>
                <span className="text-electric-gold">FIXED SCOPE + ONGOING CARE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SERVICES OVERVIEW */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
            CORE CAPABILITIES
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Everything You Need to Build, Improve, and Scale.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Every business has different goals. Choose a focused service or combine multiple capabilities to build a complete digital solution.
          </p>
        </div>

        {/* 6 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {serviceCategories.map((service) => {
            const IconComponent = service.icon;
            return (
              <article
                key={service.id}
                className="glass-panel border border-surface-stroke hover:border-electric-gold/60 p-6 sm:p-8 rounded-lg flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_30px_rgba(250,204,21,0.12)] group relative overflow-hidden"
              >
                {/* Subtle hover accent light */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-gold/5 rounded-full blur-2xl group-hover:bg-electric-gold/10 transition-colors pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-surface-container border border-surface-stroke group-hover:border-electric-gold/50 flex items-center justify-center text-electric-gold transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-on-surface-variant/70 border border-surface-stroke px-2.5 py-1 rounded">
                      {service.number}
                    </span>
                  </div>

                  <span className="font-mono text-[10px] text-electric-gold uppercase tracking-widest block mb-2">
                    {service.tag}
                  </span>

                  <h3 className="font-sans font-bold text-xl sm:text-2xl text-pure-white mb-3 group-hover:text-electric-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* What We Deliver */}
                  <div className="mb-6 pt-5 border-t border-surface-stroke/60">
                    <h4 className="font-mono text-[11px] text-pure-white uppercase tracking-wider font-semibold mb-3 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
                      What We Deliver
                    </h4>
                    <ul className="space-y-2">
                      {service.delivers.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface">
                          <Check className="w-3.5 h-3.5 text-electric-gold shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Best For */}
                  <div className="p-3.5 rounded bg-surface-container/50 border border-surface-stroke/70 mb-6">
                    <span className="font-mono text-[10px] text-electric-gold uppercase tracking-wider block mb-1">
                      BEST FOR:
                    </span>
                    <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                      {service.bestFor}
                    </p>
                  </div>
                </div>

                <Link
                  to={service.ctaLink}
                  className="w-full mt-2 bg-surface-container border border-surface-stroke hover:border-electric-gold hover:bg-electric-gold hover:text-black text-pure-white font-sans text-xs font-bold uppercase tracking-wider py-3 px-4 rounded text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <ScrambleText text={service.ctaText} triggerOnParent scrambleColor="" />
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: HOW WE WORK */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="glass-panel p-8 sm:p-12 md:p-16 rounded-xl border border-surface-stroke bg-surface-container-lowest/70 backdrop-blur-xl">
          <div className="max-w-3xl mb-12">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              DELIVERY PROCESS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              From Business Challenge to Working Solution.
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We keep the process clear, collaborative, and focused on measurable business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
            {workflowSteps.map((step, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded border border-surface-stroke bg-surface-container/40 relative group hover:border-electric-gold/50 transition-colors"
              >
                <div className="font-mono font-black text-3xl sm:text-4xl text-electric-gold/80 mb-4 group-hover:text-electric-gold transition-colors">
                  {step.number}
                </div>
                <h3 className="font-sans font-bold text-xl text-pure-white mb-3">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY JUSTTHINGS */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
            CORE PRINCIPLES
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Technology Should Solve Problems, Not Create More of Them.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            Our approach prioritizes long-term utility, clarity, and dependable engineering over temporary trends.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {principles.map((principle, idx) => (
            <div
              key={idx}
              className="p-8 rounded-lg glass-panel border border-surface-stroke hover:border-electric-gold/50 transition-colors"
            >
              <div className="w-10 h-10 rounded bg-electric-gold/10 border border-electric-gold/30 flex items-center justify-center text-electric-gold font-mono text-xs font-bold mb-5">
                0{idx + 1}
              </div>
              <h3 className="font-sans font-bold text-xl text-pure-white mb-3">
                {principle.title}
              </h3>
              <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: SERVICES FAQ */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              Services FAQ
            </h2>
            <p className="font-sans text-base text-on-surface-variant">
              Common questions about working with JustThings, scopes, pricing, and project delivery.
            </p>
          </div>

          <FaqAccordion items={faqItems} />
        </div>
      </section>

      {/* SECTION 6: FINAL CTA */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        <div className="glass-panel p-8 sm:p-14 md:p-16 rounded-xl border border-electric-gold/40 bg-gradient-to-br from-surface-container-low via-surface-container to-surface-container-lowest relative overflow-hidden text-center shadow-[0_0_50px_rgba(250,204,21,0.08)]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-electric-gold/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-3">
              NEXT STEPS
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-5 uppercase tracking-tight">
              Have a Business Challenge in Mind?
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Tell us what you want to improve, build, or automate. We'll help identify a practical starting point.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/start-project"
                className="w-full sm:w-auto bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
              >
                <ScrambleText text="START A PROJECT" triggerOnParent scrambleColor="text-black/80 font-mono" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/solutions"
                className="w-full sm:w-auto glass-panel text-pure-white hover:text-electric-gold border border-surface-stroke hover:border-electric-gold font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ScrambleText text="EXPLORE OUR SOLUTIONS" triggerOnParent scrambleColor="text-data-cyan" />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

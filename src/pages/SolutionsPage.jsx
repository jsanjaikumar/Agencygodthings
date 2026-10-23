import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  Building2, 
  BarChart3, 
  Boxes, 
  Bot, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  AlertCircle, 
  Check, 
  Compass, 
  Layers, 
  Workflow, 
  FileSpreadsheet, 
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';
import ScrambleText from '../components/ScrambleText';
import FaqAccordion from '../components/FaqAccordion';

export default function SolutionsPage() {
  const [selectedMatch, setSelectedMatch] = useState(null);

  useEffect(() => {
    document.title = 'Business Software & Digital Solutions | JustThings Agency';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = 'Discover custom lead management, booking, franchise, operations, inventory, and AI-support systems tailored to business needs.';
  }, []);

  const solutions = [
    {
      id: 'lead-management',
      name: 'Lead & Customer Management System',
      icon: Users,
      shortDesc: 'Organize enquiries, track prospects, and give your team a clear view of every customer interaction.',
      bestFor: 'Agencies, service businesses, consultants, sales teams, and B2B companies.',
      problem: 'Leads arrive through forms, email, calls, and messaging platforms, making it difficult to track follow-ups and understand the sales pipeline.',
      solution: 'A centralized lead-management system that helps your team capture enquiries, assign ownership, track progress, and record customer interactions.',
      features: [
        'Lead capture forms',
        'Centralized customer records',
        'Lead status and pipeline stages',
        'Team assignment',
        'Follow-up reminders',
        'Notes and interaction history',
        'Dashboard and reporting',
        'Email or messaging integrations where supported'
      ],
      ctaText: 'Build a Lead Management System',
      ctaLink: '/start-project?solution=lead-management'
    },
    {
      id: 'booking-system',
      name: 'Booking & Appointment System',
      icon: Calendar,
      shortDesc: 'Allow customers to view availability, request or schedule appointments, and receive booking updates.',
      bestFor: 'Clinics, consultants, salons, fitness businesses, service providers, and appointment-based companies.',
      problem: 'Manual scheduling creates avoidable back-and-forth communication, booking conflicts, and missed appointments.',
      solution: 'A booking system that organizes availability, appointments, customer information, and notifications.',
      features: [
        'Service selection',
        'Availability management',
        'Appointment booking',
        'Booking confirmation',
        'Rescheduling and cancellation rules',
        'Admin calendar',
        'Customer records',
        'Email or messaging notifications',
        'Payment integration when required'
      ],
      ctaText: 'Build a Booking System',
      ctaLink: '/start-project?solution=booking'
    },
    {
      id: 'franchise-portal',
      name: 'Franchise & Partner Management Portal',
      icon: Building2,
      shortDesc: 'Give franchise prospects and partners a structured way to submit information, track enquiries, and access relevant resources.',
      bestFor: 'Growing brands, franchise businesses, distributors, and partner-driven companies.',
      problem: 'Managing franchise enquiries, collecting applicant details, sharing documents, and coordinating follow-ups manually can become difficult as a brand expands.',
      solution: 'A dedicated franchise or partner portal that organizes applications and provides the business team with a centralized management interface.',
      features: [
        'Franchise opportunity pages',
        'Application forms',
        'Lead and application tracking',
        'Admin dashboard',
        'Applicant status management',
        'Document submission where required',
        'Email notifications',
        'Partner resources and onboarding content',
        'Role-based access where required'
      ],
      ctaText: 'Build a Franchise Portal',
      ctaLink: '/start-project?solution=franchise'
    },
    {
      id: 'operations-dashboard',
      name: 'Business Operations Dashboard',
      icon: BarChart3,
      shortDesc: 'Bring important operational information into one interface so teams can monitor activities, track tasks, and make better-informed decisions.',
      bestFor: 'Operations teams, agencies, service companies, and businesses with multiple workflows.',
      problem: 'Information is scattered across spreadsheets, documents, messaging platforms, and separate software tools.',
      solution: 'A customized dashboard that organizes relevant operational data and provides clear visibility into tasks, records, and progress.',
      features: [
        'KPI and summary cards',
        'Task and workflow tracking',
        'Team activity views',
        'Search and filtering',
        'Reports and exports',
        'Role-based access',
        'API integrations',
        'Notifications and alerts'
      ],
      ctaText: 'Build an Operations Dashboard',
      ctaLink: '/start-project?solution=operations'
    },
    {
      id: 'inventory-system',
      name: 'Inventory & Order Management System',
      icon: Boxes,
      shortDesc: 'Track products, inventory changes, orders, and fulfillment workflows through a centralized system.',
      bestFor: 'Retail businesses, distributors, wholesalers, and businesses managing physical products.',
      problem: 'Manual inventory tracking can create inconsistent stock records, delayed order processing, and limited visibility into product movement.',
      solution: 'An inventory and order-management application tailored to the business\'s products, locations, users, and order workflow.',
      features: [
        'Product and SKU records',
        'Stock level tracking',
        'Stock movement history',
        'Order management',
        'Low-stock alerts',
        'Supplier records',
        'Inventory reports',
        'CSV import/export',
        'Multi-location inventory where required'
      ],
      ctaText: 'Discuss Inventory Management',
      ctaLink: '/start-project?solution=inventory'
    },
    {
      id: 'ai-assistant',
      name: 'AI Customer Support & Knowledge Assistant',
      icon: Bot,
      shortDesc: 'Help customers or employees find answers using a knowledge assistant based on approved business information.',
      bestFor: 'Businesses with recurring customer questions, internal documentation, support workflows, or large knowledge bases.',
      problem: 'Teams repeatedly answer the same questions, and important information may be difficult to locate across documents and knowledge sources.',
      solution: 'An AI-powered assistant that retrieves relevant information from configured sources and responds with appropriate safeguards and fallback options.',
      features: [
        'Conversational interface',
        'Knowledge-base integration',
        'Document search',
        'Retrieval-augmented generation when suitable',
        'Source references where supported',
        'Escalation to a human',
        'Feedback collection',
        'Usage monitoring',
        'Access controls for private information'
      ],
      isAiNotice: true,
      ctaText: 'Explore an AI Assistant',
      ctaLink: '/start-project?solution=ai-assistant'
    }
  ];

  const matchingItems = [
    {
      pain: 'Losing track of enquiries',
      system: 'Lead & Customer Management System',
      icon: Users,
      id: 'lead-management'
    },
    {
      pain: 'Handling appointments manually',
      system: 'Booking & Appointment System',
      icon: Calendar,
      id: 'booking-system'
    },
    {
      pain: 'Expanding through franchise partners',
      system: 'Franchise & Partner Portal',
      icon: Building2,
      id: 'franchise-portal'
    },
    {
      pain: 'Managing work across spreadsheets',
      system: 'Business Operations Dashboard',
      icon: BarChart3,
      id: 'operations-dashboard'
    },
    {
      pain: 'Struggling with stock and orders',
      system: 'Inventory & Order Management System',
      icon: Boxes,
      id: 'inventory-system'
    },
    {
      pain: 'Repeating the same support answers',
      system: 'AI Customer Support Assistant',
      icon: Bot,
      id: 'ai-assistant'
    }
  ];

  const scopingSteps = [
    {
      number: '01',
      title: 'Understand',
      description: 'Map the current process, users, bottlenecks, and desired outcomes.'
    },
    {
      number: '02',
      title: 'Define',
      description: 'Identify essential features, permissions, integrations, and reporting needs.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Develop and test the agreed scope in practical stages.'
    },
    {
      number: '04',
      title: 'Improve',
      description: 'Collect feedback, resolve agreed issues, and plan additional capabilities where needed.'
    }
  ];

  const faqItems = [
    {
      question: 'Are these ready-made products?',
      answer: 'No. These are solution categories and architectural examples of systems we can design and build. Final functionality, screens, database models, and workflows are completely adapted to your agreed scope and business processes.'
    },
    {
      question: 'Can the system integrate with our existing software?',
      answer: 'Potentially, depending on the available APIs, access permissions, technical limitations, and third-party costs. We review your existing tools (CRMs, ERPs, accounting software, communication platforms) during the discovery and scoping phase.'
    },
    {
      question: 'Can you add features later?',
      answer: 'Yes. All systems we build are modular and scalable. New functionality, automated workflows, additional permission tiers, and expanded dashboards can be planned and delivered in future phases.'
    },
    {
      question: 'Will our team receive an admin dashboard?',
      answer: 'Where appropriate, the solution can include an administrative interface and role-based permissions, allowing leadership and team members to manage data, view reporting, and perform day-to-day operations safely.'
    },
    {
      question: 'How do you estimate pricing?',
      answer: 'We assess workflows, required features, user roles, third-party integrations, security requirements, and delivery priorities before preparing a detailed, transparent proposal.'
    }
  ];

  const scrollToSolution = (id) => {
    setSelectedMatch(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="min-h-screen pt-28 sm:pt-36 pb-24 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="atmospheric-glow top-24 right-[-10%] opacity-30 pointer-events-none" />
      <div className="atmospheric-glow top-[50%] left-[-15%] opacity-25 pointer-events-none" />

      {/* SECTION 1: HERO */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-20 sm:mb-28 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 border border-surface-stroke rounded-full px-4 py-1.5 bg-surface-container/60 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-electric-gold animate-pulse" />
            <span className="font-mono text-xs uppercase text-electric-gold tracking-widest">
              SOLUTIONS FOR REAL BUSINESS NEEDS
            </span>
          </div>

          <h1 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl text-pure-white mb-6 uppercase tracking-tight leading-[1.05]">
            Purpose-Built Systems for the Way{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-gold via-amber-200 to-amber-500">
              Your Business Works.
            </span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-on-surface-variant max-w-3xl mb-10 leading-relaxed border-l-2 border-electric-gold/80 pl-5">
            From lead management and booking workflows to operational dashboards and AI-powered support, JustThings builds digital systems that help businesses organize work, serve customers, and operate more efficiently.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-stretch sm:items-center">
            <Link
              to="/start-project"
              className="bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
            >
              <ScrambleText text="DISCUSS YOUR REQUIREMENTS" triggerOnParent scrambleColor="text-black/80 font-mono" />
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/services"
              className="glass-panel text-on-surface hover:text-electric-gold border border-surface-stroke hover:border-electric-gold/60 font-sans text-xs font-bold tracking-widest uppercase px-7 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <ScrambleText text="EXPLORE OUR SERVICES" triggerOnParent scrambleColor="text-data-cyan" />
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOLUTIONS OVERVIEW */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="font-mono text-xs text-electric-gold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
            TAILORED ARCHITECTURE
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Explore What We Can Build for Your Business.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            These are examples of systems we can design and develop. Each solution can be adapted to your workflow, users, integrations, and business priorities.
          </p>
        </div>

        {/* 6 Solution Cards / Sections */}
        <div className="space-y-10 sm:space-y-12">
          {solutions.map((sol, index) => {
            const IconComponent = sol.icon;
            const isHighlighted = selectedMatch === sol.id;
            return (
              <article
                key={sol.id}
                id={sol.id}
                className={`glass-panel border rounded-xl p-6 sm:p-10 md:p-12 transition-all duration-500 relative overflow-hidden ${
                  isHighlighted 
                    ? 'border-electric-gold shadow-[0_0_35px_rgba(250,204,21,0.25)] ring-1 ring-electric-gold bg-surface-container/70' 
                    : 'border-surface-stroke hover:border-surface-stroke/80 bg-surface-container-lowest/70'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-surface-stroke">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-surface-container border border-surface-stroke flex items-center justify-center text-electric-gold shrink-0">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 mb-1">
                        <span className="font-mono text-xs text-electric-gold uppercase tracking-wider">
                          SOLUTION // 0{index + 1}
                        </span>
                        <span className="text-surface-stroke">•</span>
                        <span className="font-mono text-[11px] text-on-surface-variant/70 uppercase">
                          CUSTOM BUILD
                        </span>
                      </div>
                      <h3 className="font-sans font-black text-2xl sm:text-3xl text-pure-white">
                        {sol.name}
                      </h3>
                    </div>
                  </div>

                  <Link
                    to={sol.ctaLink}
                    className="self-start lg:self-center bg-electric-gold text-black font-sans text-xs font-black tracking-wider uppercase px-6 py-3 rounded hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.2)] group shrink-0"
                  >
                    <ScrambleText text={sol.ctaText} triggerOnParent scrambleColor="text-black/80 font-mono" />
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Body row: 3 columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                  {/* Left Column: Description & Best For */}
                  <div className="lg:col-span-4 space-y-6">
                    <div>
                      <h4 className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mb-2">
                        OVERVIEW
                      </h4>
                      <p className="font-sans text-sm text-on-surface leading-relaxed">
                        {sol.shortDesc}
                      </p>
                    </div>

                    <div className="p-4 rounded bg-surface-container/60 border border-surface-stroke">
                      <span className="font-mono text-[10px] text-electric-gold uppercase tracking-wider block mb-1.5 font-bold">
                        TYPICAL USERS / BEST FOR:
                      </span>
                      <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
                        {sol.bestFor}
                      </p>
                    </div>
                  </div>

                  {/* Middle Column: Problem & Proposed Solution */}
                  <div className="lg:col-span-4 space-y-6 border-t lg:border-t-0 lg:border-l border-surface-stroke pt-6 lg:pt-0 lg:pl-8">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                        <h4 className="font-mono text-xs text-rose-400 uppercase tracking-wider font-bold">
                          THE BUSINESS PROBLEM
                        </h4>
                      </div>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                        {sol.problem}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <h4 className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-bold">
                          PROPOSED SYSTEM
                        </h4>
                      </div>
                      <p className="font-sans text-sm text-pure-white leading-relaxed">
                        {sol.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Key Features */}
                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-surface-stroke pt-6 lg:pt-0 lg:pl-8">
                    <h4 className="font-mono text-xs text-electric-gold uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric-gold" />
                      KEY SYSTEM FEATURES
                    </h4>
                    <ul className="space-y-2.5">
                      {sol.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-on-surface font-sans">
                          <Check className="w-3.5 h-3.5 text-electric-gold shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {sol.isAiNotice && (
                      <div className="mt-5 p-3.5 rounded bg-surface-container/60 border border-electric-gold/30 text-[11px] text-on-surface-variant leading-relaxed flex items-start gap-2">
                        <AlertCircle className="w-4 h-4 text-electric-gold shrink-0 mt-0.5" />
                        <span>
                          <strong>Implementation Note:</strong> We design AI solutions with strict boundaries, source citations, and human-in-the-loop escalations. Knowledge quality, data sanitization, access controls, and safety testing are integral parts of the build.
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: SOLUTION MATCHING GUIDE */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="glass-panel p-8 sm:p-12 md:p-14 rounded-xl border border-surface-stroke bg-surface-container-lowest/80 backdrop-blur-xl">
          <div className="max-w-3xl mb-10">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              DIAGNOSTIC MATRIX
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              Not Sure Which System You Need?
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Identify your primary operational friction point below to jump to the purpose-built system designed to resolve it.
            </p>
          </div>

          {/* Interactive Mapping Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {matchingItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  onClick={() => scrollToSolution(item.id)}
                  className="p-5 rounded-lg border border-surface-stroke bg-surface-container/40 hover:border-electric-gold hover:bg-surface-container cursor-pointer transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="mb-4">
                    <span className="font-mono text-[10px] text-rose-400 uppercase tracking-wider block mb-1">
                      CHALLENGE
                    </span>
                    <p className="font-sans font-bold text-base text-pure-white group-hover:text-electric-gold transition-colors">
                      "{item.pain}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-surface-stroke flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <IconComp className="w-4 h-4 text-electric-gold" />
                      <span className="font-sans text-xs font-semibold text-on-surface group-hover:text-white">
                        {item.system}
                      </span>
                    </div>
                    <span className="text-xs text-electric-gold font-mono group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-6 rounded-lg bg-surface-container/60 border border-surface-stroke flex flex-col sm:flex-row justify-between items-start sm:items-center gap-5">
            <div>
              <h4 className="font-sans font-bold text-base text-pure-white mb-1">
                Have a unique operational bottleneck?
              </h4>
              <p className="font-sans text-sm text-on-surface-variant">
                If your challenge doesn't fit one category, we can discuss your workflow and identify the right approach.
              </p>
            </div>
            <Link
              to="/start-project"
              className="bg-electric-gold text-black font-sans text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded hover:bg-white transition-colors shrink-0 flex items-center gap-2 shadow-[0_0_15px_rgba(250,204,21,0.2)]"
            >
              <span>Tell Us About Your Business</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW CUSTOM SOLUTIONS ARE SCOPED */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mb-12">
          <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
            Designed Around Your Workflow.
          </h2>
          <p className="font-sans text-base sm:text-lg text-on-surface-variant leading-relaxed">
            We scope and engineer custom business applications methodically to ensure immediate adoption and measurable ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {scopingSteps.map((step, idx) => (
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
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Note */}
        <div className="p-5 rounded-lg bg-surface-container/50 border border-surface-stroke text-sm text-on-surface-variant flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-electric-gold shrink-0 mt-0.5" />
          <p>
            <strong>Pragmatic Engineering:</strong> Not every business needs a large custom application. Where a simpler website, integration, or existing platform is sufficient, we will always recommend the simpler option.
          </p>
        </div>
      </section>

      {/* SECTION 5: SOLUTIONS FAQ */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 mb-24 sm:mb-32 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-electric-gold uppercase tracking-widest block mb-2">
              CLARIFICATIONS & ARCHITECTURE
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-4 uppercase tracking-tight">
              Solutions FAQ
            </h2>
            <p className="font-sans text-base text-on-surface-variant">
              Everything you need to know about custom software development, integrations, and administration.
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
              START ARCHITECTING
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl text-pure-white mb-5 uppercase tracking-tight">
              Let's Build the Right System for Your Business.
            </h2>
            <p className="font-sans text-base sm:text-lg text-on-surface-variant mb-8 leading-relaxed">
              Share your current process and the challenge you want to solve. We'll help you identify a sensible approach and the next steps.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/start-project"
                className="w-full sm:w-auto bg-electric-gold text-black font-sans text-xs font-black tracking-widest uppercase px-8 py-4 rounded hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.25)] group"
              >
                <ScrambleText text="DISCUSS YOUR REQUIREMENTS" triggerOnParent scrambleColor="text-black/80 font-mono" />
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto glass-panel text-pure-white hover:text-electric-gold border border-surface-stroke hover:border-electric-gold font-sans text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ScrambleText text="EXPLORE SERVICES" triggerOnParent scrambleColor="text-data-cyan" />
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

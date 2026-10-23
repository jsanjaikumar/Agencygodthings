import stockImg from './stock.png';
import clientImg from './client.png';
import aiImg from './ai.png';
import devdudesImg from './Devdudes.png';
import cinescoutImg from './Cinescout.png';
import businessImg from './business.png';

export const projects = [
  {
    id: "stockwise",
    code: "01",
    tag: "Business Software · SaaS",
    title: "Stockwise",
    headline: "Inventory, without the chaos.",
    description: "A centralized inventory and operations management platform designed to help growing businesses track stock, manage suppliers, monitor orders, and understand their business performance.",
    services: [
      "SaaS Product Development",
      "Dashboard UI Development",
      "Full-Stack Engineering"
    ],
    features: [
      "Inventory overview and stock monitoring",
      "Low-stock alerts",
      "Supplier and purchase order management",
      "Business analytics and reporting"
    ],
    metrics: [
      { label: "Inventory Accuracy", value: "99.8%" },
      { label: "Stockout Reduction", value: "45%" },
      { label: "Architecture", value: "Full-Stack" }
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
    image: stockImg,
    color: "#facc15",
    accent: "electric-gold",
    cta: "Explore Project",
    status: "Concept Project",
    details: "A centralized inventory and operations management platform designed to help growing businesses track stock, manage suppliers, monitor orders, and understand their business performance with real-time operations telemetry."
  },
  {
    id: "clientflow",
    code: "02",
    tag: "SaaS · Customer Management",
    title: "Clientflow",
    headline: "Every lead. Every conversation. One place.",
    description: "A lightweight CRM platform that helps businesses organize leads, manage customer relationships, track sales opportunities, and streamline follow-ups through one intuitive workspace.",
    services: [
      "SaaS Development",
      "CRM Platform Engineering",
      "Dashboard Development"
    ],
    features: [
      "Lead and contact management",
      "Visual sales pipeline",
      "Follow-up reminders",
      "Sales activity dashboard"
    ],
    metrics: [
      { label: "Pipeline Visibility", value: "100%" },
      { label: "Follow-up Velocity", value: "3x Faster" },
      { label: "Storage Engine", value: "PostgreSQL" }
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
    image: clientImg,
    color: "#33e4ff",
    accent: "data-cyan",
    cta: "Explore Project",
    status: "Concept Project",
    details: "Streamlines lead intake and customer lifecycle tracking through an intuitive visual sales pipeline, automated follow-up reminders, and consolidated sales activity telemetry."
  },
  {
    id: "mindbase-ai",
    code: "03",
    tag: "Artificial Intelligence · Knowledge Management",
    title: "Mindbase AI",
    headline: "Your team's knowledge, ready to answer.",
    description: "An AI-powered knowledge assistant that helps teams search internal documents, ask questions in natural language, and find relevant information through answers grounded in their uploaded content.",
    services: [
      "AI Application Development",
      "LLM Integration",
      "Retrieval-Augmented Generation (RAG)"
    ],
    features: [
      "Document upload and processing",
      "AI-powered knowledge search",
      "Context-aware answers with source references",
      "Team workspaces and access permissions"
    ],
    metrics: [
      { label: "Query Retrieval", value: "<1.5s" },
      { label: "Source Grounding", value: "100%" },
      { label: "Pipeline", value: "RAG + Vector DB" }
    ],
    stack: ["React", "Tailwind CSS", "Node.js", "LLM API", "RAG", "Vector Database"],
    image: aiImg,
    color: "#facc15",
    accent: "electric-gold",
    cta: "Explore Project",
    status: "Concept Project",
    details: "Combines vector embeddings with retrieval-augmented generation to deliver natural language answers grounded strictly in uploaded workspace documentation with verifiable source references."
  },
  {
    id: "devdudes",
    code: "04",
    tag: "Developer Community · Full-Stack Platform",
    title: "DevDudes",
    headline: "Find your people. Build something great.",
    description: "A developer networking platform designed to help developers discover like-minded people, connect with peers, exchange ideas, and find opportunities to collaborate on technical projects.",
    services: [
      "Full-Stack Development",
      "Real-Time Communication",
      "Authentication and Platform Engineering"
    ],
    features: [
      "Developer profiles and discovery",
      "Connection and networking workflows",
      "Real-time messaging",
      "Secure authentication and user management"
    ],
    metrics: [
      { label: "Socket Latency", value: "<50ms" },
      { label: "Messaging Engine", value: "Socket.IO" },
      { label: "Authentication", value: "JWT + Bcrypt" }
    ],
    stack: ["React", "Node.js", "Socket.IO", "JWT", "MongoDB"],
    image: devdudesImg,
    color: "#ffecb9",
    accent: "primary",
    cta: "Explore Project",
    status: "Existing Project",
    details: "Built for developer networking with real-time bidirectional communication via Socket.IO, secure JWT authentication protocols, and peer discovery workflows."
  },
  {
    id: "cinescout",
    code: "05",
    tag: "Web Application · Movie Discovery",
    title: "CineScout",
    headline: "Your next favorite movie is closer than you think.",
    description: "A modern movie discovery platform that makes it easier to explore trending titles, search for movies, and discover detailed movie information through a responsive, intuitive interface.",
    services: [
      "Frontend Engineering",
      "API Integration",
      "Responsive Web Application Development"
    ],
    features: [
      "Intelligent debounced movie search",
      "Trending movie discovery",
      "Movie details and metadata",
      "Loading states and responsive layouts"
    ],
    metrics: [
      { label: "Search Debounce", value: "300ms" },
      { label: "State Cache", value: "TanStack Query" },
      { label: "Deployment", value: "Vercel Live" }
    ],
    stack: ["React", "Tailwind CSS", "Appwrite", "OMDb API", "TanStack Query"],
    image: cinescoutImg,
    color: "#facc15",
    accent: "electric-gold",
    cta: "View Live Project",
    liveUrl: "https://cine-scout-full-stack-movie-search.vercel.app/",
    status: "Existing Project",
    details: "Production movie discovery web application featuring intelligent debounced search queries, TanStack Query asynchronous state caching, and live metadata from OMDb API and Appwrite."
  },
  {
    id: "local-business-platform",
    code: "06",
    tag: "Web Design · Digital Business Solutions",
    title: "Local Business Digital Platform",
    headline: "Helping local businesses stand out online.",
    description: "A digital presence solution designed for local businesses such as restaurants, cafes, gyms, and service providers. The goal is to help businesses present their offerings, attract customers, and make enquiries easier.",
    services: [
      "Business Website Development",
      "Landing Page Design and Development",
      "Contact and Enquiry Integration"
    ],
    features: [
      "Responsive business website",
      "Services, menus, or pricing sections",
      "Contact and enquiry forms",
      "WhatsApp and contact integration"
    ],
    metrics: [
      { label: "Mobile Usability", value: "100%" },
      { label: "Enquiry Routing", value: "WhatsApp / Direct" },
      { label: "Performance", value: "99+ Lighthouse" }
    ],
    stack: ["React", "Tailwind CSS", "JavaScript", "API Integrations"],
    image: businessImg,
    color: "#33e4ff",
    accent: "data-cyan",
    cta: "Explore Project",
    status: "Concept Project",
    details: "Tailored digital presence system designed for restaurants, cafes, gyms, and local service providers, featuring responsive service menus, conversion-focused enquiry forms, and WhatsApp integration."
  }
];

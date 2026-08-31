"use client";
import Head from "next/head";
import { AiFillGithub, AiFillMail, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineExternalLink, HiOutlineX, HiArrowNarrowRight } from "react-icons/hi";
import Link from 'next/link';
import Image from 'next/image';
import profileImage from './assets/Profile2.jpg';
import hqctrl1 from './assets/hqctrl1.png';
import databillity1 from './assets/databillity1.png';
import claw1 from './assets/claw1.jpeg';
import myDiaryParent1 from './assets/MyDiaryParent1.png';
import fullstack from './assets/fullstack.png';
import scale from './assets/scale.png';
import robust from './assets/robust.png';
import { useState, useEffect } from "react";

const caseStudies = [
  {
    id: "hqctrl",
    title: "HQCtrl",
    subtitle: "Multi-tenant ERP with Conversational AI Assistant",
    category: "SAAS / ERP & AI",
    shortDesc: "Scalable multi-tenant ERP platform for HR, payroll automation, attendance tracking, and operations featuring an MCP-driven conversational AI assistant.",
    role: "Software Engineer @ Codelign",
    timeline: "Sept 2025 – Present",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    iconBg: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    image: hqctrl1,
    tags: ["Next.js", "Prisma", "PostgreSQL", "MCP", "JWT", "Tailwind CSS"],
    overview: "Architected and built HQCtrl from the ground up — a modular multi-tenant ERP centralizing HR management, payroll calculations, attendance tracking, and workforce insights.",
    customer: "SaaS platform designed for growing companies (50–500+ employees) requiring automated HR workflows and natural language access to company records.",
    businessNeed: "Businesses struggle with fragmented tools for attendance, slow manual payroll calculations, and no unified natural language interface to query company data.",
    result: "Engineered 7 core modules with sub-second queries, reduced payroll preparation time by over 80%, and enabled natural language operations via Model Context Protocol.",
    keyFacts: [
      {
        title: "AI Assistant (MCP)",
        desc: "Designed custom tools using Model Context Protocol (MCP), enabling employees to query leave balances, attendance, and business metrics in natural language."
      },
      {
        title: "Multi-Tenant Architecture",
        desc: "Implemented strict tenant isolation, granular Role-Based Access Control (RBAC), and persistent JWT sessions with PostgreSQL & Prisma."
      },
      {
        title: "Automated Payroll & Attendance",
        desc: "Built flexible salary structures, automated calculations, and real-time attendance tracking integrated directly with employee records."
      },
      {
        title: "Full-Stack Web Presence",
        desc: "Developed end-to-end features with global search, live notifications, and built and deployed the public product landing application."
      }
    ],
    link: "https://www.hqctrl.com"
  },
  {
    id: "databillity",
    title: "Databillity",
    subtitle: "Fintech Onboarding & High-Performance Subscriptions",
    category: "FINTECH / AUTH & PAYMENTS",
    shortDesc: "Seamless onboarding pipeline with Google/Microsoft SSO, Stripe payment processing, and serverless GraphQL APIs optimized for 40% faster response times.",
    role: "Software Engineer @ DevFlovv",
    timeline: "Nov 2023 – Aug 2025",
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    iconBg: "bg-teal-500/20 text-teal-400 border-teal-500/30",
    image: databillity1,
    tags: ["React", "TypeScript", "GraphQL", "Redux Saga", "Stripe", "OAuth SSO", "Serverless"],
    overview: "Engineered a high-conversion user onboarding and billing infrastructure with single sign-on authentication, Stripe recurring subscriptions, and optimized data layers.",
    customer: "SaaS and fintech clients requiring friction-free enterprise onboarding and secure recurring billing.",
    businessNeed: "High drop-off during onboarding and slow API round-trips when fetching nested user subscription and billing histories.",
    result: "Achieved a 40% reduction in API response times through optimized GraphQL queries and eliminated onboarding friction via single-click SSO and Stripe integration.",
    keyFacts: [
      {
        title: "Enterprise SSO & Onboarding",
        desc: "Built scalable onboarding workflows in React & TypeScript integrating Google and Microsoft SSO for seamless single-click access."
      },
      {
        title: "Stripe Subscription Engine",
        desc: "Integrated Stripe Checkout, customer portal, and webhooks to handle subscription tiers, recurring billing, and transaction audit trails."
      },
      {
        title: "GraphQL Optimization (-40% Latency)",
        desc: "Streamlined GraphQL schemas and batch resolvers, cutting redundant payload overhead and improving response speeds by 40%."
      },
      {
        title: "Robust State Orchestration",
        desc: "Implemented Redux Saga to cleanly manage complex asynchronous side effects and transactional state across serverless microservices."
      }
    ],
    link: "https://databillity.com"
  },
  {
    id: "cybernetiq",
    title: "CYBERNETIQ – CLAW",
    subtitle: "Firewall Configuration Parser & 3D Network Rule Graph",
    category: "CYBERSECURITY / NETWORK TOPOLOGY",
    shortDesc: "Security engine parsing Cisco & Fortinet firewall configurations into Neo4j graph databases with interactive 3D rule visualization in Three.js.",
    role: "Software Engineer @ DevFlovv",
    timeline: "Nov 2023 – Aug 2025",
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    iconBg: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    image: claw1,
    tags: ["Python", "Flask", "Neo4j", "Three.js", "PHP", "Parse Cloud", "Redux Observable"],
    overview: "Engineered automated parsers and an interactive graph visualization platform transforming complex multi-vendor firewall and switch configuration files into intuitive 3D topology models.",
    customer: "Network security analysts and SOC teams monitoring large-scale enterprise network perimeters and firewall rule matrices.",
    businessNeed: "Auditing thousands of lines of raw firewall rules across Cisco and Fortinet devices was manual, error-prone, and lacked spatial relationship insights.",
    result: "Automated configuration ingestion to structured Neo4j graph storage and rendered complex network paths interactively with Three.js in real time.",
    keyFacts: [
      {
        title: "Multi-Vendor Config Parsers",
        desc: "Developed high-performance parsers in Python and PHP to extract interfaces, security zones, addresses, and firewall policies from Cisco and Fortinet configs."
      },
      {
        title: "Neo4j Network Topology Graph",
        desc: "Modelled intricate relationships between nodes, subnets, and policies in Neo4j, enabling rapid Cypher queries on network reachability and vulnerability paths."
      },
      {
        title: "Interactive 3D Three.js Visualizer",
        desc: "Rendered interactive 3D graph representations of firewall rules and switch routes, allowing engineers to visually inspect traffic flows and rule conflicts."
      },
      {
        title: "Reactive Data Pipelines",
        desc: "Built Flask APIs and integrated frontend state using Parse Cloud functions with Redux Observable for continuous streaming updates."
      }
    ],
    link: "https://github.com/HadiaK99"
  },
  {
    id: "mydiary",
    title: "MyDiary",
    subtitle: "Playful Children's Journal & Parent Analytics Hub",
    category: "EDTECH / FULL STACK APP",
    shortDesc: "Dual-interface digital journal pairing an illustrative planner and habit tracker for kids with a comprehensive oversight and analytics hub for parents.",
    role: "Full Stack Creator (Personal Project)",
    timeline: "2025 – Present",
    gradient: "from-amber-500/20 via-rose-500/10 to-transparent",
    iconBg: "bg-amber-500/20 text-amber-400 border-amber-500/30",
    image: myDiaryParent1,
    tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS", "JWT Auth"],
    overview: "Designed and engineered a full-stack journal application featuring a playful planner for kids to log habits, emotions, and goals, paired with a parent portal for progress analytics, activity governance, and motivational feedback.",
    customer: "Families seeking a structured, safe, and engaging digital habit-building tool for children with parental guidance.",
    businessNeed: "Existing habit trackers are either too utilitarian for young children or lack parental visibility and granular control over activities.",
    result: "Built a production-ready Next.js 15 platform with responsive custom styling, 3-tier role security (Child, Parent, Admin), and real-time habit completion analytics.",
    keyFacts: [
      {
        title: "Interactive Child Experience",
        desc: "Crafted hand-drawn styled planner sheets with visual trackers for hydration, rest, emotion logging, and dynamic daily task checklists."
      },
      {
        title: "Parent Analytics & Reporting Hub",
        desc: "Built multi-child dashboards showing daily entry stats, score trends, read-only past journal sheets, and milestone insights."
      },
      {
        title: "Dynamic Activity Governance",
        desc: "Allowed parents to configure custom categories, toggle activity visibility, and tune scoring modes (group baseline vs. individual point overrides)."
      },
      {
        title: "3-Tier Role Architecture & Fast Next.js 15",
        desc: "Architected secure data isolation with 7-day JWT sessions, relational Prisma models, and a modern token styling system."
      }
    ],
    link: "https://github.com/HadiaK99"
  }
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (activeCaseStudy) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeCaseStudy]);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveCaseStudy(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Hadia Khan Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">developedbyhadia</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl dark:fill-white" onClick={() => setDarkMode(!darkMode)} />
              </li>
              <li>
                <Link className="bg-gradient-to-r from-cyan-400 to-cyan-700 py-4 px-2 text-white rounded-md ml-8"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-cyan-500 font-semibold md:text-6xl tracking-tight"> Hadia Khan </h2>
            <h3 className="text-xl font-sans font-medium py-2 md:text-2xl tracking-wide dark:text-white">Developer and Engineer.</h3>
            <p className="font-sans text-md py-5 leading-8 text-gray-600 md:text-xl max-w-xl mx-auto dark:text-gray-300">
              Full Stack Developer by title, professional problem solver by nature—React, TypeScript, Node.js, and a touch of caffeine to fuel my magic.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-500">
            <a href="https://www.linkedin.com/in/hadia-khan-7b11861a5/" target="_blank" rel="noopener noreferrer">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/HadiaK99" target="_blank" rel="noopener noreferrer">
              <AiFillGithub />
            </a>
            <a href="mailto:hadiak54321@gmail.com" target="_blank" rel="noopener noreferrer">
              <AiFillMail />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:w-96 md:h-96 ring-4 ring-cyan-500/30 dark:ring-cyan-400/40 shadow-xl">
            <Image src={profileImage} alt="Hadia Khan" layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-cyan-400">Services I offer</h3>
            <p className="font-sans text-md py-2 leading-8 text-gray-600 dark:text-gray-400">
              Code whisperer by day, bug wrangler by night.
            </p>
          </div>
          <div className="lg:flex gap-10 ">
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="fullstack" src={fullstack} width={100} height={100} />
              <h3 className="text-lg font-semibold pt-8 pb-2 tracking-tight dark:text-gray-300">Full-Stack Development</h3>
              <p className="font-sans py-2 dark:text-gray-200">Turning ideas into production-ready applications with modern frontend, backend, and cloud technologies—built to be fast, reliable, and actually enjoyable to use.</p>
              <h4 className="py-4 font-semibold text-cyan-600">Technologies I Use</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">React, Next.js, TypeScript</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Node.js, Express, Python</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">GraphQL, REST APIs</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">SQL, PostgreSQL, Neo4j</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="robust" src={robust} width={100} height={100} />
              <h3 className="text-lg font-bold pt-8 pb-2 tracking-tight dark:text-gray-300">Clean &amp; Maintainable Code</h3>
              <p className="font-sans py-2 dark:text-gray-200">Writing code that future-me won&apos;t have to fight with. I focus on modular architecture, reusable components, efficient APIs, and code that&apos;s built to evolve as the product grows.</p>
              <h4 className="py-4 font-bold text-cyan-600">Languages and Frameworks I Use</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">JavaScript (ES6+), TypeScript</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Python, SQL</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Redux Saga</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Git, GitHub</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Docker, Redis</p>
            </div>
            <div className="text-center justify-items-center shadow-lg p-10 rounded-xl my-10">
              <Image alt="scale" src={scale} width={100} height={100} />
              <h3 className="text-lg font-semibold pt-8 pb-2 tracking-tight dark:text-gray-300">Scalable System Architecture</h3>
              <p className="font-sans py-2 dark:text-gray-200">Designing systems that don&apos;t fall apart when the user count goes up. From serverless backends to authentication, payments, and third-party integrations, I build the pieces that keep applications running smoothly.</p>
              <h4 className="py-4 font-semibold text-cyan-600">Technologies &amp; Services</h4>
              <p className="text-gray-700 py-1 dark:text-gray-400">Google &amp; Microsoft SSO</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Stripe Payment Integration</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">GraphQL APIs &amp; Optimized Queries</p>
              <p className="text-gray-700 py-1 dark:text-gray-400">Automated Workflows</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl font-semibold py-1 dark:text-cyan-400">Portfolio</h3>
            <p className="font-sans text-md py-2 leading-8 text-gray-600 dark:text-gray-300">
              A collection of things I&apos;ve <span className="text-cyan-500">built</span>, <span className="text-cyan-600">broken</span>, <span className="text-cyan-700">fixed</span>, and somehow made work—thoughtfully crafted from pixels to production.
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {caseStudies.map((study) => {
              const IconComp = study.icon;
              return (
                <div
                  key={study.id}
                  onClick={() => setActiveCaseStudy(study)}
                  className="group relative flex flex-col justify-between bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
                >
                  {/* Card Visual Header Banner */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${study.gradient} flex items-center justify-center border-b border-gray-100 dark:border-gray-700/50 overflow-hidden`}>
                    {study.image ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-radial from-cyan-500/10 to-transparent pointer-events-none" />
                        <div className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl border ${study.iconBg} shadow-lg backdrop-blur-md transform group-hover:scale-110 transition-transform duration-300`}>
                          {IconComp && <IconComp className="text-3xl" />}
                        </div>
                      </>
                    )}

                    {/* Hover "View Case Study" Button Pill */}
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 z-20">
                      <span className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        View Case Study <HiArrowNarrowRight className="text-lg" />
                      </span>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-7 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Tag / Category */}
                      <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {study.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-2xl font-bold pt-1 pb-2 text-gray-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                        {study.title}
                      </h3>

                      {/* Short Description */}
                      <p className="font-sans text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {study.shortDesc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-6">
                      {study.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-medium font-sans px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-700/80 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-600/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Case Study Slide-Over Drawer Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setActiveCaseStudy(null)}
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-2xl bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-full shadow-2xl border-l border-gray-200 dark:border-gray-800 overflow-y-auto z-10 flex flex-col animate-in slide-in-from-right duration-300">

            {/* Sticky Header Top Bar */}
            <div className="sticky top-0 z-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 md:px-8 py-5 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                {activeCaseStudy.category}
              </span>

              <div className="flex items-center gap-3">
                {activeCaseStudy.link && (
                  <a
                    href={activeCaseStudy.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-semibold bg-cyan-500 hover:bg-cyan-600 text-white px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                  >
                    {activeCaseStudy.link.includes("github.com") ? "GitHub" : "Visit Project"} <HiOutlineExternalLink className="text-sm" />
                  </a>
                )}
                <button
                  onClick={() => setActiveCaseStudy(null)}
                  className="flex items-center gap-1 text-xs font-semibold bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
                  aria-label="Close Case Study"
                >
                  Close <HiOutlineX className="text-sm" />
                </button>
              </div>
            </div>

            {/* Main Modal Body */}
            <div className="px-6 md:px-8 py-8 space-y-8 flex-grow">

              {/* Title & Subtitle */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">
                  {activeCaseStudy.title}
                </h2>
                <p className="font-sans text-base text-gray-500 dark:text-gray-400 pt-1">
                  {activeCaseStudy.subtitle}
                </p>
              </div>

              {/* Overview paragraph */}
              <p className="font-sans text-base leading-relaxed text-gray-700 dark:text-gray-300">
                {activeCaseStudy.overview}
              </p>

              {/* Context / Role Info Card */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700">
                {activeCaseStudy.image ? (
                  <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 flex-shrink-0 shadow-sm">
                    <Image
                      src={activeCaseStudy.image}
                      alt={activeCaseStudy.title}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className={`p-3 rounded-lg border ${activeCaseStudy.iconBg}`}>
                    {(() => {
                      const Icon = activeCaseStudy.icon;
                      return Icon ? <Icon className="text-xl" /> : null;
                    })()}
                  </div>
                )}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    Role &amp; Context
                  </h4>
                  <p className="font-sans text-sm font-semibold text-gray-900 dark:text-gray-200">
                    {activeCaseStudy.role} <span className="text-gray-400 font-normal">({activeCaseStudy.timeline})</span>
                  </p>
                  <p className="font-sans text-xs text-gray-600 dark:text-gray-400 pt-0.5">
                    {activeCaseStudy.customer}
                  </p>
                </div>
              </div>

              {/* Problem Solved & Result Side-by-Side Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                    Business Need
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {activeCaseStudy.businessNeed}
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                    Result &amp; Impact
                  </h4>
                  <p className="font-sans text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {activeCaseStudy.result}
                  </p>
                </div>
              </div>

              {/* Technologies Used Badges */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCaseStudy.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium font-sans px-3 py-1 rounded-full bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200/80 dark:border-cyan-800/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Facts / Core Engineering Contributions */}
              <div className="pt-2">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Facts &amp; Contributions
                </h4>
                <div className="space-y-4">
                  {activeCaseStudy.keyFacts.map((fact, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-cyan-500 flex-shrink-0" />
                      <p className="font-sans text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                        <strong className="text-gray-900 dark:text-white">{fact.title}:</strong> {fact.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

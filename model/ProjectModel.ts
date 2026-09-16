export interface Model {
  id: number;
  href: string;
  title: string;
  type: string;
  img: string;
  link: string;
  description: string;
  longDescription?: string;
  date: string;
  technology: string[];
}

export let ProjectModelFrReversed: Array<Model> = [
  {
    id: 1,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Application Web",
    img: `/assets/image/trink.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description:
      "Cette application est un réseau social destiné aux dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent.",
    date: "Septembre 2022 - Mai 2023",
    technology: ["AdonisJS", "ReactJS", "MaterialUI", "Sqlite"],
  },
  {
    id: 2,
    href: "https://webmaster-landing.vercel.app",
    title: "Webmaster",
    type: "Site Web",
    img: `/assets/image/webmaster.PNG`,
    link: "",
    description:
      "Un page d'accueil pour une entreprise qui vise à fournir une plateforme efficace et optimisée permettant à l'entreprise de gérer ses prestations, d'attirer de nouveaux clients et d'améliorer son processus de développement.",
    date: "Août 2024",
    technology: ["Next JS", "ReactJS", "Shadcn UI", "Tailwind"],
  },
  {
    id: 3,
    href: "http://jupiter.fr",
    title: "Jupiter",
    type: "Application Web",
    img: `/assets/image/Jupiter.png`,
    link: "",
    description:
      "C'est un application web qui sert à achéter/transferer des forfaits et aussi les transferts d'argent avec les Mobile Money",
    date: "Juillet 2023 - Aout 2023",
    technology: ["Flask", "ReactJs", "MaterialUI", "Firebase"],
  },
  {
    id: 4,
    href: "https://midas-stability.vercel.app/fr",
    title: "Image Upscaler",
    type: "Application IA",
    img: `/assets/image/upscaler.png`,
    link: "",
    description:
      "C'est un application web qui permet de générer des images et aussi modifier certains images à partir d'un Intelligence Artificiel de génération",
    date: "Mars 2024 - Mai 2024",
    technology: ["Flask", "ReactJs", "Shadcn UI", "Prisma", "Postgre SQL"],
  },
  {
    id: 5,
    href: "https://open-myst-web-app.vercel.app/",
    title: "OpenMyst",
    type: "Application Web",
    img: `/assets/image/openmyst.PNG`,
    link: "",
    description:
      "Open Myst est une plateforme de visualisation 3D qui rassemble les données les plus fiables disponibles sur la vie de Jésus.",
    longDescription:
      "OpenMyst est une application immersive de visualisation cartographique 3D construite avec Next.js, Mapbox GL et Firebase. Elle rassemble et structure des données historiques et géographiques complexes pour offrir une exploration interactive temporelle et spatiale. Grâce à l'intégration de la 3D, les utilisateurs peuvent suivre des itinéraires historiques et consulter des contextes détaillés.",
    date: "Mai 2024 - Décembre 2024",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 6,
    href: "https://didascale.vercel.app/fr",
    title: "Didache",
    type: "Application IA",
    img: `/assets/image/didache.PNG`,
    link: "",
    description:
      "Didache est une application de chat immersive et multi-utilisateurs alimentée par l'IA qui explore les Pères de l'Église, les personnalités chrétiennes, les conciles, les événements chrétiens.",
    date: "Janvier 2025 - Février 2025",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 7,
    href: "https://riah-market.vercel.app/fr",
    title: "Riah market",
    type: "Application Web",
    img: `/assets/image/riah-market.png`,
    link: "",
    description:
      "Riah market est une plateforme de marché NFT alimentée par l'IA, permettant aux utilisateurs d'explorer et d'acheter des œuvres d'art numériques uniques.",
    date: "Mai 2025 - Juin 2025",
    technology: [
      "Next.js",
      "React.js",
      "Shadcn UI",
      "PostgreSQL",
      "Hardhat",
      "Solidity",
    ],
  },
  {
    id: 8,
    href: "https://web-companies-two.vercel.app/",
    title: "Web Ltd",
    type: "Site Web",
    img: "/assets/image/web_compagnie.png",
    link: "",
    description:
      "Développement et intégration du site vitrine de Web Compagnie France, filiale de l'agence d'origine mauricienne, marquant son implantation sur le marché français.",
    date: "Juillet 2025 - Août 2025",
    technology: ["Next.js", "React.js", "Shadcn UI", "Drupal"],
  },
  {
    id: 9,
    href: "https://www.aetheris-dna.com",
    title: "Aetheris LTD et DNA",
    type: "Site Web",
    img: "/assets/image/Aetheris.png",
    link: "",
    description:
      "Développement et intégration du site vitrine de Aetheris LTD et DNA qui offres des service de gestion ERP et configuration des modules Odoo au sein des entreprise B2B. Cette application se relie avec le CRM Odoo pour dinamyser ses conténune",
    date: "Décembre 2025 - Juin 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Odoo"],
  },
  {
    id: 10,
    href: "https://github.com/Herman-Riah19/Artifex-app",
    title: "Artifex APP",
    type: "Application Web",
    img: "/assets/image/artifex.png",
    link: "",
    description:
      "Artifex est une plateforme moderne de gestion des smart contracts destinée aux équipes blockchain, startups Web3 et entreprises souhaitant concevoir, déployer, auditer et superviser leurs contrats intelligents de manière sécurisée et centralisée.",
    longDescription:
      "Artifex APP est une suite logicielle dédiée à la gestion et au cycle de vie complet des Smart Contracts Web3. Conçue sous forme de monorepo microservice avec Next.js et Ts.ED, elle permet d'écrire, tester, simuler l'exécution, calculer le coût en gaz et déployer en toute sécurité des contrats intelligents sur plusieurs réseaux blockchain (Ethereum, Polygon, Arbitrum). L'application comprend également un tableau de bord en temps réel pour le suivi des transactions et la détection d'anomalies.",
    date: "Janvier 2026 - Mars 2026",
    technology: [
      "Web 3",
      "Monorepo Microservice",
      "TS.ED",
      "Next.js",
      "React.js",
      "Shadcn UI",
      "Prisma",
      "Postgre SQL",
    ],
  },
  {
    id: 11,
    href: "https://cv-generator-sable-two.vercel.app/",
    title: "Générateur de CV ATS",
    type: "Application IA",
    img: `/assets/image/cv-generator.png`,
    link: "",
    description:
      "Générateur de CV intelligent compatible ATS (Applicant Tracking System) qui utilise l'IA locale via LM Studio pour analyser, optimiser et générer des CV adaptés aux systèmes de recrutement automatisés. L'application se connecte aux modèles LLMs locaux pour une personnalisation avancée des contenus.",
    longDescription:
      "Cette application web exploite les modèles de langage IA locaux (via LM Studio & Ollama) pour optimiser et adapter les CV aux filtres automatisés ATS (Applicant Tracking System). Elle garantit une confidentialité totale des données en évitant l'envoi vers des serveurs tiers. L'utilisateur peut importer une fiche de poste et son CV, puis bénéficier d'une analyse d'écart sémantique, d'une recommandation de mots-clés clés et de la génération d'un CV optimisé prêt au téléchargement.",
    date: "Mars 2026 - Avril 2026",
    technology: [
      "Next.js",
      "React.js",
      "Shadcn UI",
      "LM Studio",
      "Ollama",
      "Local AI",
    ],
  },
  {
    id: 12,
    href: "https://github.com/Herman-Riah19/hydroid-ai",
    title: "Hydroid AI",
    type: "Application IA",
    img: "/assets/image/hydroid.png",
    link: "https://github.com/Herman-Riah19/hydroid-ai",
    description:
      "ThreatLens est une plateforme d'intelligence et d'analyse de la sécurité web. Construite en monorepo Turborepo avec un backend Ts.ED, un frontend Next.js et un scanner de vulnérabilités auto-hébergé avec le support de LM Studio.",
    longDescription:
      "Hydroid AI / ThreatLens est une solution d'intelligence et d'analyse de la sécurité web de pointe. Basée sur une architecture monorepo Turborepo, elle combine un backend puissant en Ts.ED (Node.js/TypeScript) et un frontend réactif en Next.js. Elle embarque un scanner automatisé de vulnérabilités web auto-hébergé couplé à des modèles d'IA locaux via LM Studio et Ollama. L'application permet d'auditer en temps réel les sites web, de détecter les failles XSS, injections SQL et mauvaises configurations, puis d'obtenir des conseils de remédiation automatisés.",
    date: "Avril 2026 - Juillet 2026",
    technology: [
      "Turborepo",
      "Ts.ED",
      "Next.js",
      "React.js",
      "Shadcn UI",
      "LM Studio",
      "Local AI",
      "Docker",
    ],
  },
  {
    id: 13,
    href: "https://digitalstudio-mada.com/",
    title: "Digital Studio",
    type: "Site Web",
    img: "/assets/image/digital-studio.png",
    link: "",
    description:
      "Landing page et portfolio du studio Digital Studio, mettant en avant le travail d'un cameraman et réalisateur à travers une présentation élégante de ses prestations, projets et réalisations.",
    date: "Juin 2026 - Août 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Tailwind CSS"],
  },
];

export const ProjectModelEnReversed: Array<Model> = [
  {
    id: 1,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Web Application",
    img: `/assets/image/trink.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description:
      "This application is a social network designed for digital illustrators and AI image generators, showcasing their talent.",
    date: "September 2022 - May 2023",
    technology: ["AdonisJS", "ReactJS", "MaterialUI", "Sqlite"],
  },
  {
    id: 2,
    href: "https://webmaster-landing.vercel.app",
    title: "Webmaster",
    type: "Website",
    img: `/assets/image/webmaster.PNG`,
    link: "",
    description:
      "A landing page for a company that aims to provide an efficient and optimized platform for the company to manage its services, attract new clients, and improve its development process.",
    date: "August 2024",
    technology: ["Next JS", "ReactJS", "Shadcn UI", "Tailwind"],
  },
  {
    id: 3,
    href: "http://jupiter.fr",
    title: "Jupiter",
    type: "Web Application",
    img: `/assets/image/Jupiter.png`,
    link: "",
    description:
      "This is a web application for buying/transferring plans and also for transferring money using Mobile Money.",
    date: "July 2023 - August 2023",
    technology: ["Flask", "ReactJs", "MaterialUI", "Firebase"],
  },
  {
    id: 4,
    href: "https://midas-stability.vercel.app/fr",
    title: "Image Upscaler",
    type: "AI Application",
    img: `/assets/image/upscaler.png`,
    link: "",
    description:
      "This is a web application that allows you to generate images and also modify certain images using an AI generation system.",
    date: "March 2024 - May 2024",
    technology: ["Flask", "ReactJs", "Shadcn UI", "Prisma", "Postgre SQL"],
  },
  {
    id: 5,
    href: "https://open-myst-web-app.vercel.app/",
    title: "OpenMyst",
    type: "Web Application",
    img: `/assets/image/openmyst.PNG`,
    link: "",
    description:
      "Open Myst is a 3D visualization platform that brings together the most reliable data available on the life of Jesus.",
    date: "May 2024 - December 2024",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 6,
    href: "https://didascale.vercel.app/fr",
    title: "Didache",
    type: "AI Application",
    img: `/assets/image/didache.PNG`,
    link: "",
    description:
      "Didache is an immersive, multi-user chat application powered by AI that explores the Church Fathers, Christian figures, councils, and Christian events.",
    date: "January 2025 - February 2025",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 7,
    href: "https://riah-market.vercel.app/fr",
    title: "Riah market",
    type: "Web Application",
    img: `/assets/image/riah-market.png`,
    link: "",
    description:
      "Riah market is an AI-powered NFT marketplace platform, allowing users to explore and purchase unique digital artworks.",
    date: "May 2025 - June 2025",
    technology: [
      "Next.js",
      "React.js",
      "Shadcn UI",
      "PostgreSQL",
      "Hardhat",
      "Solidity",
    ],
  },
  {
    id: 8,
    href: "https://web-companies-two.vercel.app/",
    title: "Web Ltd",
    type: "Website",
    img: "/assets/image/web_compagnie.png",
    link: "",
    description:
      "Development and integration of the showcase website for Web Compagnie France, a subsidiary of the original Mauritius-based agency, marking its entry into the French market.",
    date: "July 2025 - August 2025",
    technology: ["Next.js", "React.js", "Shadcn UI", "Drupal"],
  },
  {
    id: 9,
    href: "https://www.aetheris-dna.com/",
    title: "Aetheris DNA",
    type: "Website",
    img: "/assets/image/Aetheris.png",
    link: "",
    description:
      "Development and integration of the Aetheris LTD and DNA showcase website, which offers ERP management services and Odoo module configuration for B2B companies. The application is connected to the Odoo CRM to dynamically manage and update its content.",
    date: "December 2025 - June 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Odoo"],
  },
  {
    id: 10,
    href: "https://github.com/Herman-Riah19/Artifex-app",
    title: "Artifex APP",
    type: "Web Application",
    img: "/assets/image/artifex.png",
    link: "",
    description:
      "Artifex is a modern smart contract management platform designed for blockchain teams, Web3 startups, and enterprises that want to design, deploy, audit, and monitor their smart contracts in a secure and centralized environment.",
    longDescription:
      "Artifex APP is a comprehensive software platform designed for full Web3 smart contract management. Architected as a microservice monorepo using Next.js and Ts.ED, it allows developers to write, test, simulate gas costs, and deploy smart contracts securely across multiple blockchains (Ethereum, Polygon, Arbitrum). Includes a real-time monitoring dashboard for on-chain events and automated security auditing.",
    date: "January 2026 - March 2026",
    technology: [ "Web3", "Monorepo Microservices", "TS.ED", "Next.js", "React.js", "Shadcn UI", "Prisma", "PostgreSQL" ],
  },
  {
    id: 11,
    href: "https://cv-generator-sable-two.vercel.app/",
    title: "ATS CV Generator",
    type: "AI Application",
    img: `/assets/image/cv-generator.png`,
    link: "",
    description:
      "ATS-compatible intelligent CV generator that uses local AI via LM Studio to analyze, optimize, and generate resumes tailored to automated recruitment systems. The application connects to local LLM models for advanced content personalization.",
    longDescription:
      "This web application leverages local AI language models (via LM Studio & Ollama) to optimize resumes specifically for Applicant Tracking System (ATS) recruitment filters. Ensuring 100% data privacy without uploading data to third-party APIs, users can compare their resumes against job descriptions, receive semantic keyword recommendations, and generate tailored ATS-friendly resumes.",
    date: "March 2026 - April 2026",
    technology: [
      "Next.js",
      "React.js",
      "Shadcn UI",
      "Prisma",
      "PostgreSQL",
      "LM Studio",
      "Ollama",
      "Local AI",
    ],
  },
  {
    id: 12,
    href: "https://github.com/Herman-Riah19/hydroid-ai",
    title: "Hydroid AI Sec",
    type: "AI Application",
    img: "/assets/image/hydroid.png",
    link: "https://github.com/Herman-Riah19/hydroid-ai",
    description:
      "Hydroid AI is a web security intelligence and analysis platform. Built as a Turborepo monorepo with a Ts.ED backend, a Next.js frontend, and a self-hosted vulnerability scanner with LM Studio support.",
    longDescription:
      "Hydroid AI / ThreatLens is a cutting-edge web security intelligence and vulnerability scanning solution. Built on a Turborepo monorepo architecture combining a high-performance Ts.ED TypeScript backend and a Next.js frontend. It features an automated self-hosted web vulnerability scanner integrated with local AI LLMs via LM Studio and Ollama to perform real-time security auditing, XSS/SQLi detection, and smart remediation guidance.",
    date: "April 2026 - July 2026",
    technology: [
      "Turborepo",
      "Ts.ED",
      "Next.js",
      "React.js",
      "Shadcn UI",
      "LM Studio",
      "Local AI",
      "Docker",
    ],
  },
  {
    id: 13,
    href: "https://digitalstudio-mada.com/",
    title: "Digital Studio",
    type: "Website",
    img: "/assets/image/digital-studio.png",
    link: "",
    description:
      "Landing page and portfolio for Digital Studio, showcasing the work of a cameraman and director through an elegant presentation of services, projects, and productions.",
    date: "June 2026 - August 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Tailwind CSS"],
  },
];

export const ProjectModelFr: Array<Model> = [...ProjectModelFrReversed].reverse();
export const ProjectModelEn: Array<Model> = [...ProjectModelEnReversed].reverse();

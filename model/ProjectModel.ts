export interface Model {
  id: number;
  href: string;
  title: string;
  type: string;
  img: string;
  link: string;
  description: string;
  date: string;
  technology: string[];
}

export let ProjectModelFrReversed: Array<Model> = [
  {
    id: 1,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Réseau Social",
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
    type: "Landing page",
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
    type: "Application de Crowfunding",
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
    type: "Generateur image",
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
    type: "Similateur 3D",
    img: `/assets/image/openmyst.PNG`,
    link: "",
    description:
      "Open Myst est une plateforme de visualisation 3D qui rassemble les données les plus fiables disponibles sur la vie de Jésus.",
    date: "Mai 2024 - Décembre 2024",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 6,
    href: "https://didascale.vercel.app/fr",
    title: "Didache",
    type: "IA pour Encyclopedie Eglise",
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
    type: "NFT market powered by AI",
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
    type: "Site vitrine / Landing page",
    img: "/assets/image/web_compagnie.png",
    link: "",
    description:
      "Développement et intégration du site vitrine de Web Compagnie France, filiale de l'agence d'origine mauricienne, marquant son implantation sur le marché français.",
    date: "Juillet 2025 - Août 2025",
    technology: ["Next.js", "React.js", "Shadcn UI", "Drupal"],
  },
  {
    id: 9,
    href: "https://aetheris-ltd.vercel.app/",
    title: "Aetheris LTD",
    type: "Site vitrine / Landing page",
    img: "/assets/image/Aetheris.png",
    link: "",
    description:
      "Développement et intégration du site vitrine de Aetheris LTD qui offres des service de gestion ERP et configuration des modules Odoo au sein des entreprise B2B. Cette application se relie avec le CRM Odoo pour dinamyser ses conténune",
    date: "Décembre 2025 - Février 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Odoo"],
  },
  {
    id: 10,
    href: "https://github.com/Herman-Riah19/Artifex-app",
    title: "Artifex APP",
    type: "Gestion des Contrat Intélligent",
    img: "/assets/image/artifex.png",
    link: "",
    description:
      "Artifex est une plateforme moderne de gestion des smart contracts destinée aux équipes blockchain, startups Web3 et entreprises souhaitant concevoir, déployer, auditer et superviser leurs contrats intelligents de manière sécurisée et centralisée.",
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
    href: "",
    title: "Générateur de CV ATS",
    type: "Application Web IA",
    img: `/assets/image/cv-generator.png`,
    link: "",
    description:
      "Générateur de CV intelligent compatible ATS (Applicant Tracking System) qui utilise l'IA locale via LM Studio pour analyser, optimiser et générer des CV adaptés aux systèmes de recrutement automatisés. L'application se connecte aux modèles LLMs locaux pour une personnalisation avancée des contenus.",
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
];

export const ProjectModelEnReversed: Array<Model> = [
  {
    id: 1,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Social Network",
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
    type: "Landing page",
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
    type: "Crowdfunding Application",
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
    type: "Image Generator",
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
    type: "3D Simulator",
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
    type: "AI for Church Encyclopedia",
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
    type: "NFT market powered by AI",
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
    type: "Showcase Website / Landing page",
    img: "/assets/image/web_compagnie.png",
    link: "",
    description:
      "Development and integration of the showcase website for Web Compagnie France, a subsidiary of the original Mauritius-based agency, marking its entry into the French market.",
    date: "July 2025 - August 2025",
    technology: ["Next.js", "React.js", "Shadcn UI", "Drupal"],
  },
  {
    id: 9,
    href: "https://aetheris-ltd.vercel.app/",
    title: "Aetheris LTD",
    type: "Showcase Website / Landing Page",
    img: "/assets/image/Aetheris.png",
    link: "",
    description:
      "Development and integration of the Aetheris LTD showcase website, which offers ERP management services and Odoo module configuration for B2B companies. The application is connected to the Odoo CRM to dynamically manage and update its content.",
    date: "December 2025 - February 2026",
    technology: ["Next.js", "React.js", "Shadcn UI", "Odoo"],
  },
  {
    id: 10,
    href: "https://github.com/Herman-Riah19/Artifex-app",
    title: "Artifex APP",
    type: "Smart Contract Management",
    img: "/assets/image/artifex.png",
    link: "",
    description:
      "Artifex is a modern smart contract management platform designed for blockchain teams, Web3 startups, and enterprises that want to design, deploy, audit, and monitor their smart contracts in a secure and centralized environment.",
    date: "January 2026 - March 2026",
    technology: [ "Web3", "Monorepo Microservices", "TS.ED", "Next.js", "React.js", "Shadcn UI", "Prisma", "PostgreSQL" ],
  },
  {
    id: 11,
    href: "",
    title: "ATS CV Generator",
    type: "AI Web Application",
    img: `/assets/image/cv-generator.png`,
    link: "",
    description:
      "ATS-compatible intelligent CV generator that uses local AI via LM Studio to analyze, optimize, and generate resumes tailored to automated recruitment systems. The application connects to local LLM models for advanced content personalization.",
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
];

export const ProjectModelFr: Array<Model> = [...ProjectModelFrReversed].reverse();
export const ProjectModelEn: Array<Model> = [...ProjectModelEnReversed].reverse();

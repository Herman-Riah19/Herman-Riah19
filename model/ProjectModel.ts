
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

export let ProjectModelFr: Array<Model> = [
  {
    id: 1,
    href: "https://didascale.vercel.app/fr",
    title: "Didache",
    type: "IA pour Encyclopedie Eglise",
    img: `/assets/image/didache.PNG`,
    link: "",
    description: "Didache est une application de chat immersive et multi-utilisateurs alimentée par l'IA qui explore les Pères de l'Église, les personnalités chrétiennes, les conciles, les événements chrétiens.",
    date: "Janvier 2025 - Février 2025",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 2,
    href: "https://open-myst-web-app.vercel.app/",
    title: "OpenMyst",
    type: "Similateur 3D",
    img: `/assets/image/openmyst.PNG`,
    link: "",
    description: "Open Myst est une plateforme de visualisation 3D qui rassemble les données les plus fiables disponibles sur la vie de Jésus.",
    date: "Mai 2024 - Décembre 2024",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 3,
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
    id: 4,
    href: "http://jupiter.fr",
    title: "Jupiter",
    type: "Application de Crowfunding",
    img: `/assets/image/Jupiter.png`,
    link: "",
    description: "C'est un application web qui sert à achéter/transferer des forfaits et aussi les transferts d'argent avec les Mobile Money",
    date: "Juillet 2023 - Aout 2023",
    technology: ["Flask", "ReactJs", "MaterialUI", "Firebase"],
  },
  {
    id: 5,
    href: "https://webmaster-landing.vercel.app",
    title: "Webmaster",
    type: "Landing page",
    img: `/assets/image/webmaster.PNG`,
    link: "",
    description: "Un page d'accueil pour une entreprise qui vise à fournir une plateforme efficace et optimisée permettant à l’entreprise de gérer ses prestations, d’attirer de nouveaux clients et d’améliorer son processus de développement.",
    date: "Août 2024",
    technology: ["Next JS", "ReactJS", "Shadcn UI", "Tailwind"],
  },
  {
    id: 6,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Réseau Social",
    img: `/assets/image/trink.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description: "Cette application est un réseau social destiné aux dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent.",
    date: "Septembre 2022 - Mai 2023",
    technology: ["AdonisJS", "ReactJS", "MaterialUI", "Sqlite"],
  },
];

export const ProjectModelEn: Array<Model> = [
  {
    id: 1,
    href: "https://didascale.vercel.app/fr",
    title: "Didache",
    type: "Ai and Church Encyclopedie",
    img: `/assets/image/didache.PNG`,
    link: "",
    description: "Didache is an immersive, multi-user chat application powered by AI that explores the Church Fathers, Christian figures, councils, Christian events.",
    date: "January 2025 - Febroary 2025",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 2,
    href: "https://open-myst-web-app.vercel.app/",
    title: "OpenMyst",
    type: "3D Similator",
    img: `/assets/image/openmyst.PNG`,
    link: "",
    description: "Open Myst is a 3D visualization platform that brings together the most reliable data available on the life of Jesus.",
    date: "May 2024 - December 2024",
    technology: ["NextJS", "ReactJs", "Shadcn UI", "Firebase", "Mapbox"],
  },
  {
    id: 3,
    href: "https://midas-stability.vercel.app",
    title: "Image Upscaler",
    type: "Image Generator",
    img: `/assets/image/upscaler.png`,
    link: "",
    description: "This is a web application that allows generating images and also modifying certain images using an AI-based generation system.",
    date: "March 2024 - May 2024",
    technology: ["Flask", "ReactJs", "Shadcn UI", "Prisma", "Postgre SQL"],
  },
  {
    id: 4,
    href: "http://jupiter.fr",
    title: "Jupiter",
    type: "Crowdfunding Application",
    img: `/assets/image/Jupiter.png`,
    link: "/",
    description: "This is a web application for buying/transferring plans and also for transferring money using Mobile Money.",
    date: "July 2023 - August 2023",
    technology: ["Flask", "ReactJs", "MaterialUI", "Firebase"],
  },
  {
    id: 5,
    href: "https://webmaster-landing.vercel.app",
    title: "Webmaster",
    type: "Landing page",
    img: `/assets/image/webmaster.PNG`,
    link: "",
    description: "A business landing page that aims to provide an efficient and optimized platform for the business to manage its services, attract new customers and improve its development process.",
    date: "August 2024",
    technology: ["Next JS", "ReactJS", "Shadcn UI", "Tailwind"],
  },
  {
    id: 6,
    href: "https://github.com/Herman-Riah19/TryInc",
    title: "TryInk",
    type: "Social Network",
    img: `/assets/image/trink.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description: "This application is a social network designed for digital illustrators and AI image generators, showcasing their talent.",
    date: "September 2022 - May 2023",
    technology: ["AdonisJS", "ReactJS", "MaterialUI", "Sqlite"],
  },
];

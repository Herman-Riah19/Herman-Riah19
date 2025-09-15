interface ResumeModel {
  title: string;
  start: string;
  end: string;
  badges: string[];
  href: string;
  logoUrl: string;
  company: string;
  location: string;
  description: string;
}

const diplomes: Array<ResumeModel> = [
  {
    title: "Licence en Informatique, Électronique et Télécommunications",
    start: "2017",
    end: "2020",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/gsi.jpg",
    company: "GSI Madagascar",
    location: "Analakely, Antananarivo",
    description:
      "Spécialisé en informatique et réseaux de télécommunications, avec des connaissances en programmation d'applications de bureau et web. Configuration et dépannage des réseaux informatiques fonctionnant sur des infrastructures GNU/Linux.",
  },
  {
    title: "Baccalauréat Technique en Management",
    start: "2016",
    end: "2017",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/METFP.jpg",
    company: "Institut d'Enseignement Technique",
    location: "Amboanjombe, Antananarivo",
    description:
      "Spécialisé en gestion d'entreprise, finance et comptabilité, avec pour objectif de se lancer dans le domaine de l'entrepreneuriat et de la comptabilité. Ce parcours a été suivi au niveau secondaire pour intégrer un institut supérieur.",
  },
  {
    title: "Brevet d'Études Professionnelles en Management",
    start: "2015",
    end: "2016",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/METFP.jpg",
    company: "Institut d'Enseignement Technique",
    location: "Amboanjombe, Antananarivo",
    description:
      "Ce diplôme équivaut à un Diplôme Technique Supérieur, mais au niveau secondaire, axé sur la gestion et l'informatique de base (bureautique, Word, Excel, PowerPoint). Formation inter-lycées pour intégrer les étudiants dans le marché du travail.",
  },
];

const experiences: Array<ResumeModel> = [
  {
    title: "Développeur Frontend Freelance",
    start: "2025-07-01",
    end: "Maintenant",
    badges: ["Next.js", "React.js", "Shadcn UI", "Drupal"],
    href: "/",
    logoUrl: "/assets/icon/web-ltd.svg",
    company: "Web Compagnie France",
    location: "Paris, France (à distance)",
    description:
      "Conception et intégration du site vitrine de Web Compagnie France, filiale d’une agence basée à l'île Maurice, afin de soutenir son implantation sur le marché français. Utilisation de technologies modernes telles que Next.js, React.js, Shadcn UI et Drupal pour assurer performance et évolutivité.",
  },
  {
    title: "Développeur Full stack",
    start: "Février 2024",
    end: "Février 2025",
    badges: [
      "Python",
      "Flask",
      "OpenAI API",
      "Next JS",
      "TypeScript",
      "Postgre SQL",
      "Stripe",
      "Firebase",
      "Force graph 3d",
      "MapBox GL",
      "AWS",
    ],
    href: "/",
    logoUrl: "/assets/icon/synapse.jpg",
    company: "Synergy Mad",
    location: "Full remote",
    description:
      "<ul class='list-disc'><li class='text-sm font-regular text-justify'>Conception de l’application Didache, une encyclopédie de l'Église, intégrant une frise chronologique, une carte interactive et un chat assisté par IA.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Développement de l’application web Gnose IA, une plateforme conversationnelle dotée d'une IA capable d’analyser des corpus soumis par les utilisateurs ou des fichiers PDF.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Participation à la réalisation de l’application OpenMyst, une plateforme simulant la vie de Jésus où j'intègre une carte en 3D, une frise chronologique et un arbre généalogique. </li>" +
      "</ul>",
  },
  {
    title: "Développeur Python",
    start: "Août 2023",
    end: "Décembre 2023",
    badges: ["Python", "Beautiful Soap", "Selenium", "Tor"],
    href: "/",
    logoUrl: "/assets/icon/quantium.png",
    company: "Quantium",
    location: "Faravohitra, Antananarivo",
    description:
      "<ul class='list-disc'><li class='text-sm font-regular text-justify list-disc'>Développement d’un outil de génération de leads pour faciliter la prospection et l’optimisation SEO des sites clients, améliorant leur visibilité en ligne. </li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Rédaction de scripts de web scraping pour la collecte automatisée de données pertinentes, soutenant l’intelligence économique et les stratégies marketing.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Analyser et vérifier des listes d'emails clients obtenus pour l'envoi de spam publicitaire</li>" +
      "</ul>",
  },
  {
    title: "Développeur Fullstack",
    start: "Juillet 2023 ",
    end: "Août 2023",
    badges: ["Python", "Flask", "Next JS", "TypeScript", "Firebase", "Stripe"],
    href: "https://fanampiana.com",
    logoUrl: "/assets/icon/fpay.jpg",
    company: "Fpay",
    location: "Andohalo, Antananarivo",
    description:
      "<ul class='list-disc'><li class='text-sm font-regular text-justify list-disc'>Contribuer sur le développement de Jupiter ou je travail sur l'authentification, la structuration des bases de données et l’intégration de ces derniers sur un Front. </li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Développement d’une API pour déclencher des codes USSD pour les transferts d'argent via mobile money, facilitant des transactions financières accessibles. </li>" +
      "</ul>",
  },
  {
    title: "Bénévolat en Technicien informatique et multimédia",
    start: "Septembre 2021",
    end: "Juin 2023",
    badges: [
      "Next JS",
      "TypeScript",
      "Postgre SQL",
      "Adobe Premier",
      "Photoshop",
      "Figma",
    ],
    href: "/",
    logoUrl: "/assets/icon/shine.jpg",
    company: "Bureau Église Évangélique Shine",
    location: "Andravoahangy, Antananarivo",
    description:
      "<ul class='list-disc'><li class='text-sm font-regular text-justify list-disc'>Développement d'un générateur de QR Code pour les invitations aux événements religieux en utilisant AdonisJS pour vérifier la validité des QR codes scannés.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Maintenance des appareils informatiques et vérification des installations réseau pour assurer leur bon fonctionnement lors des jours de culte</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Montage vidéo des prêches du pasteur et conception des jaquettes et stickers pour les supports DVD</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Création de supports multimédias tels que des flyers, cartes de vœux et couvertures de la Bible pour les événements religieux</li>" +
      "</ul>",
  },
  {
    title: "Stagiaire en Technicien informatique",
    start: "Janvier 2020",
    end: "Novembre 2020",
    badges: ["PHP", "Angular", "TypeScript", "Bootstrap", "MySQL"],
    href: "/",
    logoUrl: "/assets/icon/METFP.jpg",
    company:
      "Ministère de l'Enseignement Technique et de la Formation Professionnelle",
    location: "Ampefiloha, Antananarivo",
    description:
      "<ul class='list-disc'><li class='text-sm font-regular text-justify list-disc'>Développement d’une bibliothèque en ligne, où j'intègre une page de cours vidéo et un lecteur PDF pour améliorer l’expérience utilisateur et l’accessibilité. </li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Mise en place d’un pare-feu avec authentification des employés via Active Directory, filtrage des connexions et déploiement de l’application en locale.</li>" +
      "</ul>",
  },
  {
    title: "Stagiaire en Domotique",
    start: "Mars 2019",
    end: "Décembre 2019",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/stem.jpg",
    company: "STEM for Good",
    location: "Ankorondrano, Antananarivo",
    description:
      "Pendant mon stage chez STEM for Good, j'ai été formé au développement de plusieurs projets domotiques, notamment un robot équilibrant avec Arduino et C++, ainsi qu'un générateur de son avec Arduino jouant la musique 'Tia Zaza' en jouant avec les fréquences sonores.",
  },
  {
    title: "Formation de base en programmation",
    start: "2018",
    end: "2019",
    badges: [],
    href: "https://www.sololearn.com/",
    logoUrl: "/assets/icon/Sololearn.png",
    company: "SoloLearn.com",
    location: "En ligne",
    description:
      "Un cours à distance sur la plateforme SoloLearn, où j'ai approfondi mes connaissances en Python, C/C++, JavaScript et Dart, avec la participation à divers challenges et compétitions régulières au sein de la communauté.",
  },
];

const hobbies: Array<ResumeModel> = [
  {
    title: "Développeur Fullstack",
    start: "Août 2021",
    end: "Octobre 2023",
    badges: [],
    href: "https://github.com/Herman-Riah19/TryInc",
    logoUrl: "/assets/icon/trinkz.svg",
    company: "Projet Personnel",
    location: "Imeritsiatosika, Antananarivo",
    description:
      "J'ai utilisé mes compétences en AdonisJS, React et Inertia JS pour :<ul class='list-disc'>" +
      "<li class='text-sm font-regular text-justify list-disc'>Créer un réseau social pour les dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent et leur spécialité tout en protégeant leurs droits. <a href='https://github.com/Herman-Riah19/TryInc'>Code source</a></li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Développer une application de galerie de photos locale. <a href='https://github.com/Herman-Riah19/LoopbackReactProject'>Code source</a></li>" +
      "</ul>",
  },
  {
    title: "Intégrateur React JS",
    start: "Mars 2023",
    end: "Mars 2023",
    badges: [],
    href: "https://dash-dark-game.netlify.app",
    logoUrl: "/assets/icon/nft.png",
    company: "Freelance",
    location: "Andravoahangy, Antananarivo",
    description:
      "Lors d'une mission freelance, j'ai intégré une application de vente de NFT de jeux vidéos japonais en utilisant ReactJS et Material UI, en assurant la page de dashboard de l'application selon les détails du design fourni par le client. <a href='https://dash-dark-game.netlify.app'>Site</a>",
  },
  {
    title: "Développeur Wordpress",
    start: "Août 2021",
    end: "Août 2021",
    badges: [],
    href: "https://github.com/Herman-Riah19?tab=repositories",
    logoUrl: "/assets/icon/nft.png",
    company: "Freelance",
    location: "67Ha, Antananarivo",
    description:
      "J'ai développé un site web multilingue pour un musicien en utilisant PHP et Wordpress, mettant en valeur son talent en guitare pour élargir son réseau de communication à l'international et obtenir une signature numérique avancée pour sa carrière musicale.",
  },
  {
    title: "Développeur Fullstack",
    start: "Septembre 2020",
    end: "Décembre 2020",
    badges: [],
    href: "https://github.com/Herman-Riah19?tab=repositories",
    logoUrl: "/assets/icon/rainbow.jpg",
    company: "Rainbow MDG By Pass",
    location: "By Pass, Antananarivo",
    description:
      "J'ai été contacté par une agence de mode féminine pour développer un e-commerce en utilisant TypeScript, MySQL, Angular, Express et NodeJS pour leur permettre de vendre leurs produits depuis leur propre plateforme.",
  },
  {
    title: "Développeur Fullstack",
    start: "2017",
    end: "2020",
    badges: [],
    href: "https://github.com/Herman-Riah19?tab=repositories",
    logoUrl: "/assets/icon/gsi.jpg",
    company: "GSI",
    location: "Analakely, Antananarivo",
    description:
      "Durant mes études à l'université GSI, j'ai réalisé plusieurs projets personnels pour améliorer mes compétences en développement et me préparer au monde professionnel. Voici quelques projets marquants :<ul class='list-disc'><li class='text-sm font-regular text-justify list-disc'>Développement d'une application web dynamique avec PHP/MySQL pour la gestion des listes de voitures à vendre, en tenant compte des différentes catégories et prix des voitures.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Développement d'un site web statique résumant les différents cours appris à l'université GSI, en tant qu'exercice d'intégration avec HTML, CSS et JavaScript.</li>" +
      "<li class='text-sm font-regular text-justify list-disc'>Pour mon projet de fin d'études, développement d'un logiciel de dimensionnement des réseaux de télécommunication 4G utilisant C++ et le framework Qt, pour calculer et planifier la capacité de fréquence et le nombre de pylônes à installer selon l'environnement.</li>" +
      "</ul>",
  },
];

export { type ResumeModel, diplomes, experiences, hobbies };

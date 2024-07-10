interface ResumeModel {
  title: string;
  start: string;
  end: string;
  badges: string[],
  href: string;
  logoUrl: string;
  company: string;
  location: string;
  description: string;
}

const diplome: Array<ResumeModel> = [
  {
    title: "Licence en Informatique, Électronique et Télécommunications",
    start: "2017",
    end: "2020",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/gsi.jpg",
    company: "GSI Madagascar",
    location: "Analakely, Antananarivo",
    description: "Spécialisé en informatique et réseaux de télécommunications, avec des connaissances en programmation d'applications de bureau et web. Configuration et dépannage des réseaux informatiques fonctionnant sur des infrastructures GNU/Linux."
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
    description: "Un cours à distance sur la plateforme SoloLearn, où j'ai approfondi mes connaissances en Python, C/C++, JavaScript et Dart, avec la participation à divers challenges et compétitions régulières au sein de la communauté."
  },
  {
    title: "Formation en systèmes embarqués, Arduino",
    start: "2018",
    end: "2019",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/stem.jpg",
    company: "Stem for Good",
    location: "Ankorondrano, Antananarivo",
    description: "Cours d'apprentissage de création de robots et de domotique en utilisant des Arduinos et divers matériels électroniques."
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
    description: "Spécialisé en gestion d'entreprise, finance et comptabilité, avec pour objectif de se lancer dans le domaine de l'entrepreneuriat et de la comptabilité. Ce parcours a été suivi au niveau secondaire pour intégrer un institut supérieur."
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
    description: "Ce diplôme équivaut à un Diplôme Technique Supérieur, mais au niveau secondaire, axé sur la gestion et l'informatique de base (bureautique, Word, Excel, PowerPoint). Formation inter-lycées pour intégrer les étudiants dans le marché du travail."
  },
];

const experience: Array<ResumeModel> = [
  {
    title: "Lead Développeur Python",
    start: "Août 2023",
    end: "Octobre 2023",
    badges: [],
    href: "/",
    logoUrl: "/assets",
    company: "Quantium",
    location: "Faravohitra, Antananarivo",
    description:
      "En tant que Lead Développeur en Python, j'ai dirigé une équipe de développeurs chez Quantium pour :<ul><li>Programmer un script de génération de leads pour améliorer le référencement d'un site</li>" +
      "<li>Écrire des scripts de web scraping pour la collecte de données de clients potentiels</li>" +
      "<li>Analyser et vérifier des listes d'emails clients obtenus pour l'envoi de spam publicitaire</li>" +
      "<li>Développer une application SaaS pour la gestion des données dans un commerce</li>" +
      "</ul>"
  },
  {
    title: "Développeur Fullstack",
    start: "Juillet 2023 ",
    end: "Août 2023",
    badges: [],
    href: "https://fanampiana.com",
    logoUrl: "/assets/icon/fpay.jpg",
    company: "Fpay",
    location: "Andohalo, Antananarivo",
    description:
      "En tant que développeur Fullstack chez Fpay, j'ai contribué à la réalisation de projets en utilisant Flask pour le backend et React pour le frontend :<ul><li>Conception d'une plateforme de crowdfunding [Flask, ReactJS et Firebase], intégration de l'authentification, des offres forfaitaires des opérateurs mobiles, et des codes USSD sous forme d'API pour des transactions mobiles comme l'achat de forfaits internet, transfert d'argent via Mobile Money, et paiement des abonnements Canal+.</li>" +
      "<li>Refonte d'une application de gestion d'agence développée en Flask et réécrite en Next JS pour améliorer les performances utilisateur.</li>" +
      "</ul>"
  },
  {
    title: "Développeur Fullstack",
    start: "Août 2021",
    end: "Octobre 2023",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/nft.png",
    company: "Projet Personnel",
    location: "Imeritsiatosika, Antananarivo",
    description:
      "J'ai utilisé mes compétences en AdonisJS, React et Inertia JS pour :<ul>" +
      "<li>Créer un réseau social pour les dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent et leur spécialité tout en protégeant leurs droits. <a href='https://github.com/Herman-Riah19/TryInc'>Code source</a></li>" +
      "<li>Développer une application de galerie de photos locale. <a href='https://github.com/Herman-Riah19/LoopbackReactProject'>Code source</a></li>" +
      "</ul>"
  },
  {
    title: "Intégrateur React JS",
    start: "Mars 2023",
    end: "Mars 2023",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/nft.png",
    company: "Freelance",
    location: "Andravoahangy, Antananarivo",
    description:
      "Lors d'une mission freelance, j'ai intégré une application de vente de NFT de jeux vidéos japonais en utilisant ReactJS et Material UI, en assurant la page de dashboard de l'application selon les détails du design fourni par le client. <a href='https://dash-dark-game.netlify.app'>Site</a>"
  },
  {
    title: "Bénévolat en Technicien informatique et multimédia",
    start: "Septembre 2021",
    end: "Juin 2023",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/shine.jpg",
    company: "Bureau Église Évangélique Shine",
    location: "Andravoahangy, Antananarivo",
    description:
      "Durant 2 ans en tant que bénévole au sein de l'Église Évangélique Shine, j'ai assuré plusieurs tâches en tant que technicien informatique et multimédia :<ul><li>Maintenance des appareils informatiques et vérification des installations réseaux pour assurer leur fonctionnalité durant les jours de travail</li>" +
      "<li>Montage vidéo des prêches du pasteur et conception des jaquettes et stickers pour représenter les supports en DVD</li>" +
      "<li>Création de supports multimédias tels que les flyers, les cartes de vœux et les couvertures de la Bible pour les événements religieux</li>" +
      "<li>Développement d'un générateur de QR Code pour les invitations lors des événements religieux en utilisant AdonisJS pour vérifier la validité des QR codes scannés. <a href='https://github.com/Herman-Riah19/QRCodeGenerate'>Source code</a></li>" +
      "</ul>"
  },
  {
    title: "Développeur Wordpress",
    start: "Août 2021",
    end: "Août 2021",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/nft.png",
    company: "Freelance",
    location: "67Ha, Antananarivo",
    description:
      "J'ai développé un site web multilingue pour un musicien en utilisant PHP et Wordpress, mettant en valeur son talent en guitare pour élargir son réseau de communication à l'international et obtenir une signature numérique avancée pour sa carrière musicale."
  },
  {
    title: "Développeur Fullstack",
    start: "Septembre 2020",
    end: "Décembre 2020",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/rainbow.jpg",
    company: "Rainbow MDG By Pass",
    location: "By Pass, Antananarivo",
    description:
      "J'ai été contacté par une agence de mode féminine pour développer un e-commerce en utilisant TypeScript, MySQL, Angular, Express et NodeJS pour leur permettre de vendre leurs produits depuis leur propre plateforme."
  },
  {
    title: "Stagiaire en Technicien informatique",
    start: "Janvier 2020",
    end: "Novembre 2020",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/METFP.jpg",
    company:
      "Ministère de l'Enseignement Technique et de la Formation Professionnelle",
    location: "Ampefiloha, Antananarivo",
    description:
      "Durant mon stage au Ministère de l'Enseignement Technique et de la Formation Professionnelle, dans le département de l'information (INFor), j'ai participé à :<ul><li>Développement d'une application web de bibliothèque en ligne [PHP, MySQL, Bootstrap], intégration des vidéos du Ministère via des liens YouTube, et déploiement du site sur un serveur</li>" +
      "<li>Installation d'un pare-feu avec PfSense et Debian pour filtrer la connexion sur le site, intégration de la sécurité d'authentification pour que seuls les employés puissent se connecter à internet, et blocage de certains sites web pendant les heures de travail.</li>" +
      "</ul>"
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
      "Durant mon stage chez STEM for Good, j'ai été formé au développement de plusieurs projets domotiques, notamment un robot équilibrant avec Arduino et C++, ainsi qu'un générateur de son avec Arduino jouant la musique 'Tia Zaza' en jouant avec les fréquences sonores."
  },
  {
    title: "Développeur Fullstack",
    start: "2017",
    end: "2020",
    badges: [],
    href: "/",
    logoUrl: "/assets/icon/gsi.jpg",
    company: "GSI",
    location: "Analakely, Antananarivo",
    description:
      "Durant mes études à l'université GSI, j'ai réalisé plusieurs projets personnels pour améliorer mes compétences en développement et me préparer au monde professionnel. Voici quelques projets marquants :<ul><li>Développement d'une application web dynamique avec PHP/MySQL pour la gestion des listes de voitures à vendre, en tenant compte des différentes catégories et prix des voitures.</li>" +
      "<li>Développement d'un site web statique résumant les différents cours appris à l'université GSI, en tant qu'exercice d'intégration avec HTML, CSS et JavaScript.</li>" +
      "<li>Pour mon projet de fin d'études, développement d'un logiciel de dimensionnement des réseaux de télécommunication 4G utilisant C++ et le framework Qt, pour calculer et planifier la capacité de fréquence et le nombre de pylônes à installer selon l'environnement.</li>" +
      "</ul>"
  },
];

export { type ResumeModel, diplome, experience }

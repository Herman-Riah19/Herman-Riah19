
export interface Model {
    id: number;
    href: string;
    title: string;
    type: string;
    img: string;
    link: string;
    description: string;
    date: string;
    technology: string;
}

export let ProjectModel: Array<Model> = [
  {
    id: 1,
    href: "/",
    title: "Image Upscaler",
    type: "Generateur image",
    img: `/assets/image/upscaler.png`,
    link: "http://jupiter.fr",
    description:
      "C'est un application web qui permet de générer des images et aussi modifier certains images à partir d'un Intelligence Artificiel de génération",
    date: "Juillet 2023 - Aout 2023",
    technology: "Flask/ReactJs/MaterialUI/Firebase",
  },
  {
    id: 2,
    href: "/",
    title: "Jupiter",
    type: "Application de Crowfunding",
    img: `/assets/image/Jupiter.png`,
    link: "http://jupiter.fr",
    description:
      "C'est un application web qui sert à achéter/transferer des forfaits et aussi les transferts d'argent avec les Mobile Money",
    date: "Juillet 2023 - Aout 2023",
    technology: "Flask/ReactJs/MaterialUI/Firebase",
  },
  {
    id: 3,
    href: "/",
    title: "TryInk",
    type: "Réseau Social",
    img: `/assets/image/trink.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description:
      "Cette application est un réseau social destiné aux dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent.",
    date: "Septembre 2022 - Mai 2023",
    technology: "AdonisJS/ReactJS/MaterialUI/Sqlite",
  },
  {
    id: 4,
    href: "/",
    title: "Rainbow",
    type: "Fashion E-Commerce",
    img: `/assets/image/raimbow1.png`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description: "C'est un application de vente en ligne pour le compte d'un distributeur des vêtements artisanals pour les Femmes",
    date: "Novembre 2020",
    technology: "NodeJS/Express/Angular/MySQL",
  },
];
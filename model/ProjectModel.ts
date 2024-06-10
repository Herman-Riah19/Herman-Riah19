import Rainbow from "../assets/image/raimbow1.png"
import Jupiter from "../assets/image/Jupiter.png"
import Trink from "../assets/image/1676461341750.png"
export interface Model {
    id: number;
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
    title: "Jupiter",
    type: "Application de Crowfunding",
    img: `${Jupiter}`,
    link: "http://jupiter.fr",
    description:
      "C'est un application web qui sert à achéter/transferer des forfaits et aussi les transferts d'argent avec les Mobile Money",
    date: "Juillet 2023 - Aout 2023",
    technology: "Flask/ReactJs/MaterialUI/Firebase",
  },
  {
    id: 2,
    title: "TryInk",
    type: "Réseau Social",
    img: `${Trink}`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description:
      "Cette application est un réseau social destiné aux dessinateurs numériques et générateurs d'images par IA, mettant en avant leur talent.",
    date: "Septembre 2022 - Mai 2023",
    technology: "AdonisJS/ReactJS/MaterialUI/Sqlite",
  },
  {
    id: 3,
    title: "Rainbow",
    type: "Fashion E-Commerce",
    img: `${Rainbow}`,
    link: "https://github.com/Herman-Riah19/TryInc",
    description: "C'est un application de vente en ligne pour le compte d'un distributeur des vêtements artisanals pour les Femmes",
    date: "Novembre 2020",
    technology: "NodeJS/Express/Angular/MySQL",
  },
];
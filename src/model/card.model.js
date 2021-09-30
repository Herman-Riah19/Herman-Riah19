import {default as bureau} from "../asset/product/bureau.jpg";
import {default as ps5} from "../asset/product/portfolio-1.jpg";
import {default as verre} from "../asset/product/portfolio-2.jpg";
import {default as appareilPhoto} from "../asset/product/portfolio-3.jpg";
import {default as fleur} from "../asset/product/portfolio-4.jpg";
import {default as parfun} from "../asset/product/portfolio-5.jpg";
import {default as deodoran} from "../asset/product/portfolio-6.jpg";
import {default as jus} from "../asset/product/portfolio-7.jpg";
import {default as siege} from "../asset/product/portfolio-8.jpg";

import { default as Dim } from "../asset/projet/accueil_dim4.PNG";
import { default as Dashboard } from "../asset/projet/dashbord.PNG";
import { default as Rain } from "../asset/projet/raimbow.png";

const products = [
    {
        name: "Bureau gamer",
        price: 1500,
        image: bureau,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Play Station 5",
        price: 500,
        image: ps5,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Verre de Bierre",
        price: 23,
        image: verre,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Appareil Photo",
        price: 200,
        image: appareilPhoto,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Fleur",
        price: 12,
        image: fleur,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Parfun ",
        price: 100,
        image: parfun,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Eau de toilette",
        price: 120,
        image: deodoran,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Jus naturel",
        price: 35,
        image: jus,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Un mini-bureau",
        price: 58,
        image: siege,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Fleur",
        price: 12,
        image: fleur,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Parfun ",
        price: 100,
        image: parfun,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
    {
        name: "Eau de toilette",
        price: 120,
        image: deodoran,
        description: "Beau à vendre chezhvous car ça vous va très bien"
    },
];

const projets = [
    {
        name: "Dimensionnement 4G",
        image: Dim,
        description: "Beau à vendre chezhvous car ça vous va très bien",
        tech: ["C++", "Qt 5.13.0"]
    },
    {
        name: "Dashboard",
        image: Dashboard,
        description: "Beau à vendre chezhvous car ça vous va très bien",
        tech: ["HTML/CSS", "Bootstrap 4", "Sass"]
    },
    {
        name: "Rainbow MDG",
        image: Rain,
        description: "Beau à vendre chezhvous car ça vous va très bien",
        tech: ["Typescript", "Angular", "Node JS"]
    },
]

export { products, projets } ;
import Nextjs from "@/assets/icon/nextjs.svg"
import React from "@/assets/icon/react.svg"
import Angular from "@/assets/icon/angular.svg"
import Svelte from "@/assets/icon/svelte.svg"
import Node from "@/assets/icon/node.png"
import Adonisjs from "@/assets/icon/adonisjs.svg"
import Flask from "@/assets/icon/flask.svg"
import PrismaIcon from "@/assets/icon/prisma.svg"
import MongodbIcon from "@/assets/icon/mongodb.svg"
import SqliteIcon from "@/assets/icon/sqlite.svg"
import MysqlIcon from "@/assets/icon/mysql.svg"
import Archlinux from "@/assets/icon/archlinux.svg"

import Typescript from "@/assets/icon/file-type-typescript-official.svg"
import Python from "@/assets/icon/python.svg"
import JavaScript from "@/assets/icon/javascript.png";
import Firebase from "@/assets/icon/firebase.svg";

import Vite from "@/assets/icon/vitejs.svg";
import Webpack from "@/assets/icon/webpack.svg";
import Apache from "@/assets/icon/apache.svg";
import Git from "@/assets/icon/git.svg";
import Github from "@/assets/icon/github.svg";
import Inertia from "@/assets/icon/inertia.svg";
import Joplin from "@/assets/icon/joplin.svg";
import Photoshop from "@/assets/icon/photoshop.svg";
import Figma from "@/assets/icon/figma.svg";
import Premier from "@/assets/icon/adobe-premiere.svg";
import VsCode from "@/assets/icon/vscode-dark.svg";
import MaterialUI from "@/assets/icon/materialui.svg";


export interface Model{
    id: number;
    name: string;
    language: string;
    type: string;
    icon: string;
    star: number;
}

export interface Language {
    id: number;
    name: string;
    icon: string;
    star: number;
}

export const LanguagesModel: Array<Language> = [
    {
        id:1,
        name: "TypeScript",
        icon: `${Typescript}`,
        star: 4
    },
    {
        id:2,
        name: "Python",
        icon: `${Python}`,
        star: 3.5
    },
]

export const Database: Array<Model> = [
  {
    id: 1,
    name: "Firebase",
    language: "Json",
    type: "Systeme de Gestion de Base de donne",
    icon: `${Firebase}`,
    star: 3,
  },
  {
    id: 2,
    name: "MySQL",
    language: "SQL",
    type: "Systeme de Gestion de Base de donne",
    icon: `${MysqlIcon}`,
    star: 4,
  },
  {
    id: 3,
    name: "SQLite",
    language: "SQL",
    type: "Systeme de Gestion de Base de donne",
    icon: `${SqliteIcon}`,
    star: 5,
  },
  {
    id: 4,
    name: "Prisma",
    language: "Prisma",
    type: "Modelisation",
    icon: `${PrismaIcon}`,
    star: 4,
  },
  {
    id: 5,
    name: "MongoDB",
    language: "Json",
    type: "Systeme de Gestion de Base de donne",
    icon: `${MongodbIcon}`,
    star: 2,
  },
];

export const Tools: Array<Model> = [
  {
    id: 1,
    name: "Node",
    language: "Compilateur",
    type: "Systemde d'Exploitation",
    icon: `${Node}`,
    star: 3,
  },
  {
    id: 2,
    name: "Vite JS",
    language: "Builder",
    type: "Systemde d'Exploitation",
    icon: `${Vite}`,
    star: 4,
  },
  {
    id: 3,
    name: "Webpack",
    language: "Builder",
    type: "Systemde d'Exploitation",
    icon: `${Webpack}`,
    star: 3,
  },
  {
    id: 4,
    name: "Git",
    language: "Versionning",
    type: "Systemde d'Exploitation",
    icon: `${Git}`,
    star: 3,
  },
  {
    id: 5,
    name: "Github",
    language: "Versionning",
    type: "Systemde d'Exploitation",
    icon: `${Github}`,
    star: 4,
  },
  {
    id: 6,
    name: "Figma",
    language: "Design UI/UX",
    type: "Systemde d'Exploitation",
    icon: `${Figma}`,
    star: 3,
  },
  {
    id: 7,
    name: "Apache",
    language: "Serveur",
    type: "Systemde d'Exploitation",
    icon: `${Apache}`,
    star: 3,
  },
  {
    id: 8,
    name: "Material UI",
    language: "UI Kit",
    type: "Systemde d'Exploitation",
    icon: `${MaterialUI}`,
    star: 4,
  },
];


export const TechnologieModel: Array<Model> = [
  {
    id: 1,
    name: "Flask",
    language: "Python",
    type: "Framework Back-End",
    icon: `${Flask}`,
    star: 3,
  },
  {
    id: 2,
    name: "Adonisjs",
    language: "TypeScript",
    type: "Framework Back-End",
    icon: `${Adonisjs}`,
    star: 3.5,
  },
  {
    id: 3,
    name: "React",
    language: "TypeScript",
    type: "Framework Front-End",
    icon: `${React}`,
    star: 4,
  },
  {
    id: 4,
    name: "Nextjs",
    language: "TypeScript",
    type: "Framework Rendering",
    icon: `${Nextjs}`,
    star: 4,
  },
  
];
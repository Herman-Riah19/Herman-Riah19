const Nextjs = "/assets/icon/nextjs.svg"
const React = "/assets/icon/react.svg"
const Angular = "/assets/icon/angular.svg"
const Svelte = "/assets/icon/svelte.svg"
const Node = "/assets/icon/node.png"
const Adonisjs = "/assets/icon/adonisjs.svg"
const Flask = "/assets/icon/flask.svg"
const PrismaIcon = "/assets/icon/prisma.svg"
const MongodbIcon = "/assets/icon/mongodb.svg"
const SqliteIcon = "/assets/icon/sqlite.svg"
const MysqlIcon = "/assets/icon/mysql.svg"
const Archlinux = "/assets/icon/archlinux.svg"

const Typescript = "/assets/icon/file-type-typescript-official.svg"
const Python = "/assets/icon/python.svg"
const JavaScript = "/assets/icon/javascript.png";
const Firebase = "/assets/icon/firebase.svg";

const Vite = "/assets/icon/vitejs.svg";
const Webpack = "/assets/icon/webpack.svg";
const Apache = "/assets/icon/apache.svg";
const Git = "/assets/icon/git.svg";
const Github = "/assets/icon/github.svg";
const Inertia = "/assets/icon/inertia.svg";
const Joplin = "/assets/icon/joplin.svg";
const Photoshop = "/assets/icon/photoshop.svg";
const Figma = "/assets/icon/figma.svg";
const Premier = "/assets/icon/adobe-premiere.svg";
const VsCode = "/assets/icon/vscode-dark.svg";
const MaterialUI = "/assets/icon/materialui.svg";


export interface Techno{
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

export const Database: Array<Techno> = [
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

export const Tools: Array<Techno> = [
  {
    id: 1,
    name: "Node",
    language: "TypeScript / JavaScript",
    type: "Compilateur",
    icon: `${Node}`,
    star: 3,
  },
  {
    id: 2,
    name: "Vite JS",
    language: "TypeScript / JavaScript",
    type: "Builder",
    icon: `${Vite}`,
    star: 4,
  },
  {
    id: 3,
    name: "Webpack",
    language: "TypeScript",
    type: "Builder",
    icon: `${Webpack}`,
    star: 3,
  },
  {
    id: 4,
    name: "Git",
    language: "Versionning",
    type: "Versionning",
    icon: `${Git}`,
    star: 3,
  },
  {
    id: 5,
    name: "Github",
    language: "Versionning",
    type: "Repository",
    icon: `${Github}`,
    star: 4,
  },
  {
    id: 6,
    name: "Figma",
    language: "Design UI/UX",
    type: "Logiciel",
    icon: `${Figma}`,
    star: 3,
  },
  {
    id: 7,
    name: "Apache",
    language: "Serveur",
    type: "Serveur",
    icon: `${Apache}`,
    star: 3,
  },
  {
    id: 8,
    name: "Material UI",
    language: "TypeScript / JavaScript",
    type: "UI Kit",
    icon: `${MaterialUI}`,
    star: 4,
  },
];


export const TechnologieModel: Array<Techno> = [
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
    type: "Framework Front End",
    icon: `${React}`,
    star: 4,
  },
  {
    id: 4,
    name: "Nextjs",
    language: "TypeScript",
    type: "Framework Rendering",
    icon: `${Nextjs}`,
    star: 5,
  },
  {
    id: 5,
    name: "Angular",
    language: "TypeScript",
    type: "Framework Front End",
    icon: `${Angular}`,
    star: 3,
  },
  {
    id: 6,
    name: "Svelt",
    language: "TypeScript",
    type: "Framework Front End",
    icon: `${Svelte}`,
    star: 2,
  },
  
];
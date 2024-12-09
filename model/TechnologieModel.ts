
const Node = "/assets/icon/node.png"
const Archlinux = "/assets/icon/archlinux.svg"

const Typescript = "/assets/icon/file-type-typescript-official.svg"
const Python = "/assets/icon/python.svg"

const Vite = "/assets/icon/vitejs.svg";
const Webpack = "/assets/icon/webpack.svg";
const Apache = "/assets/icon/apache.svg";
const Git = "/assets/icon/git.svg";
const Github = "/assets/icon/github.svg";
const Inertia = "/assets/icon/inertia.svg";
const Figma = "/assets/icon/figma.svg";
const VsCode = "/assets/icon/vscode-dark.svg";
const MaterialUI = "/assets/icon/materialui.svg";
const ShadcnUI = "/assets/icon/shadcn-ui.svg"

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


export const TechnologieModel: Array<Techno> = [
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
    name: "Inertia",
    language: "Adapter",
    type: "Versionning",
    icon: `${Inertia}`,
    star: 5,
  },
  {
    id: 6,
    name: "Github",
    language: "Versionning",
    type: "Repository",
    icon: `${Github}`,
    star: 4,
  },
  {
    id: 7,
    name: "Figma",
    language: "Design UI/UX",
    type: "Logiciel",
    icon: `${Figma}`,
    star: 18,
  },
  {
    id: 8,
    name: "Apache",
    language: "Serveur",
    type: "Serveur",
    icon: `${Apache}`,
    star: 3,
  },
  {
    id: 9,
    name: "Chadcn UI",
    language: "TypeScript / JavaScript",
    type: "UI Kit",
    icon: `${ShadcnUI}`,
    star: 5,
  },
  {
    id: 10,
    name: "Material UI",
    language: "TypeScript / JavaScript",
    type: "UI Kit",
    icon: `${MaterialUI}`,
    star: 4,
  },
  {
    id: 11,
    name: "VS code",
    language: "Code Editor",
    type: "UI Kit",
    icon: `${VsCode}`,
    star: 4,
  },
  {
    id: 12,
    name: "ArchLinux",
    language: "Operating System",
    type: "UI Kit",
    icon: `${Archlinux}`,
    star: 4,
  },

];
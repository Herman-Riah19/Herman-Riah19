"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Server, Code2, Layers, Database } from "lucide-react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { cn } from "@/lib/utils";

type Level = "Expert" | "Avancé" | "Advanced" | "Intermédiaire" | "Intermediate";

interface Skill {
  name: string;
  level: number;
  tag: Level | string;
  note?: string;
}

const levelLabel = (level: number, isFr: boolean): string => {
  if (level >= 90) return "Expert";
  if (level >= 80) return isFr ? "Avancé" : "Advanced";
  return isFr ? "Intermédiaire" : "Intermediate";
};

// Backend frameworks first
const backendFrameworks: Skill[] = [
  { name: "NestJS", level: 87, tag: "Expert", note: "Node.js backend" },
  { name: "FastAPI", level: 84, tag: "Expert", note: "Python API" },
  { name: "Django", level: 82, tag: "Expert", note: "Python full-stack" },
  { name: "Flask", level: 80, tag: "Expert", note: "Python microservices" },
  { name: "Rust", level: 75, tag: "Avancé", note: "Système / Backend" },
];

// Frontend frameworks after
const frontendFrameworks: Skill[] = [
  { name: "Next.js", level: 94, tag: "Expert", note: "React framework" },
  { name: "React", level: 90, tag: "Expert", note: "UI library" },
  { name: "Tailwind CSS", level: 92, tag: "Expert", note: "Utility-first CSS" },
  { name: "Framer Motion", level: 85, tag: "Avancé", note: "Animations" },
];

const languages: Skill[] = [
  { name: "TypeScript", level: 95, tag: "Expert", note: "5+ ans — Next / Nest" },
  { name: "Python", level: 92, tag: "Expert", note: "Django / Flask / FastAPI" },
  { name: "JavaScript", level: 88, tag: "Avancé" },
  { name: "HTML / CSS", level: 90, tag: "Expert", note: "Tailwind / SCSS" },
  { name: "Rust", level: 75, tag: "Avancé", note: "Système / Backend" },
];

const architectures: Skill[] = [
  { name: "Monorepo", level: 92, tag: "Expert", note: "Turborepo / Nx / pnpm" },
  { name: "Microservices", level: 90, tag: "Expert", note: "Event-driven / Docker" },
  { name: "REST / GraphQL", level: 88, tag: "Avancé", note: "API design" },
  { name: "PostgreSQL / Prisma", level: 86, tag: "Avancé", note: "Database / ORM" },
  { name: "CI/CD Docker AWS", level: 84, tag: "Avancé", note: "Deployment" },
];

function SkillRow({ skill, isFr }: { skill: Skill; isFr: boolean }) {
  const label = skill.tag === "Avancé" || skill.tag === "Advanced" || skill.tag === "Intermédiaire" || skill.tag === "Intermediate"
    ? levelLabel(skill.level, isFr)
    : skill.tag;

  return (
    <div className="py-4 border-b border-border/30 last:border-0">
      <div className="flex items-baseline justify-between gap-2 mb-1">
        <span className="font-mono text-sm uppercase tracking-wider text-foreground truncate">
          {skill.name}
        </span>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground shrink-0">
          {skill.level}%
        </span>
      </div>
      <div className="h-1 w-full bg-border/30 overflow-hidden rounded-full">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <div className="mt-2 flex items-center justify-between gap-2">
        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {skill.note && (
          <span className="font-mono text-[9px] text-muted-foreground/40 truncate max-w-[50%]">
            {skill.note}
          </span>
        )}
      </div>
    </div>
  );
}

interface SkillBlockProps {
  icon: React.ElementType;
  index: string;
  title: string;
  items: Skill[];
}

function SkillBlock({ icon: Icon, index, title, items }: SkillBlockProps) {
  return (
    <div className="bg-card border border-border p-6 sm:p-8 rounded-none">
      <div className="flex items-center gap-2 mb-6">
        <Icon className="w-5 h-5 text-muted-foreground" />
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          {index} // {title}
        </span>
      </div>
      <div className="space-y-0">
        {items.map((skill) => (
          <SkillRow key={skill.name} skill={skill} isFr={true} />
        ))}
      </div>
    </div>
  );
}

export const Skills = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const safeMotion = useSafeMotion();

  return (
    <section id="skill" className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 3} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-12">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <span className="font-mono w-3.5 h-3.5 shrink-0">_</span>
              <span>02 // Stack & Skills</span>
            </div>
            <h2 className="font-serif text-5xl sm:text-6xl tracking-tight leading-[1.05] text-foreground" data-testid="tech-title">
              {isFr ? "Compétences" : "Skills"}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {isFr
                ? "Backend en premier, frontend ensuite. Spécialiste TypeScript, Python, Rust, et architectures scalables."
                : "Backend first, frontend after. TypeScript, Python, Rust specialist, and scalable architectures."}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border" data-testid="tech-content">
          <SkillBlock
            icon={Server}
            index="01"
            title={isFr ? "Backend" : "Backend"}
            items={backendFrameworks}
          />
          <SkillBlock
            icon={Code2}
            index="02"
            title={isFr ? "Frontend" : "Frontend"}
            items={frontendFrameworks}
          />
          <SkillBlock
            icon={Layers}
            index="03"
            title={isFr ? "Langages" : "Languages"}
            items={languages}
          />
          <SkillBlock
            icon={Database}
            index="04"
            title={isFr ? "Architectures" : "Architecture"}
            items={architectures}
          />
        </div>

        <div className="flex items-center justify-between pt-6 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>Stack // TS · PY · Rust · Next · Django</div>
          <div>Approche // Sobre & efficace</div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { useLocale } from "next-intl";
import { Bot, Boxes, Languages, Layers, Terminal } from "lucide-react";
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

const languages: Skill[] = [
  { name: "TypeScript", level: 95, tag: "Expert", note: "5+ ans — Next / Nest" },
  { name: "Python", level: 92, tag: "Expert", note: "Django / Flask / FastAPI" },
  { name: "JavaScript", level: 88, tag: "Avancé" },
  { name: "HTML / CSS", level: 90, tag: "Expert", note: "Tailwind / SCSS" },
  { name: "PHP", level: 72, tag: "Intermédiaire", note: "Laravel" },
  { name: "Go", level: 68, tag: "Intermédiaire", note: "Microservices" },
];

const frameworks: Skill[] = [
  { name: "Next.js", level: 94, tag: "Expert" },
  { name: "React", level: 90, tag: "Expert" },
  { name: "Flask", level: 90, tag: "Expert" },
  { name: "NestJS", level: 87, tag: "Avancé" },
  { name: "Django", level: 75, tag: "Avancé" },
  { name: "FastAPI", level: 60, tag: "Intermédiaire" },
  { name: "Tailwind / Framer", level: 88, tag: "Avancé" },
];

const agenticAI: Skill[] = [
  { name: "Opencode", level: 93, tag: "Expert", note: "Daily driver" },
  { name: "Skills design", level: 90, tag: "Expert" },
  { name: "Commands / Agents", level: 90, tag: "Expert" },
  { name: "Code rules / AGENTS.md", level: 90, tag: "Expert" },
  { name: "Prompt eng. / MCP / RAG", level: 84, tag: "Avancé" },
  { name: "OpenAI / HuggingFace", level: 82, tag: "Avancé" },
];

const architectures: Skill[] = [
  { name: "Monorepo", level: 92, tag: "Expert", note: "Turborepo / Nx / pnpm" },
  { name: "Microservices", level: 90, tag: "Expert", note: "Event-driven / Docker" },
  { name: "REST / GraphQL", level: 88, tag: "Avancé" },
  { name: "PostgreSQL / Prisma", level: 86, tag: "Avancé" },
  { name: "CI/CD Docker AWS", level: 84, tag: "Avancé" },
];

function SkillRow({ skill, isFr, accent }: { skill: Skill; isFr: boolean; accent?: boolean }) {
  const label = skill.tag === "Avancé" || skill.tag === "Advanced" || skill.tag === "Intermédiaire" || skill.tag === "Intermediate"
    ? levelLabel(skill.level, isFr)
    : skill.tag;
  const isTop = skill.level >= 90;
  return (
    <div className="py-2.5 border-b border-border/60 last:border-0">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-mono text-xs uppercase tracking-wider text-foreground truncate">
          {skill.name}
        </span>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground shrink-0">
          {skill.level}%
        </span>
      </div>
      <div className="mt-1.5 h-1 w-full bg-border">
        <div
          className={cn("h-full", isTop || accent ? "bg-primary" : "bg-foreground/70")}
          style={{ width: `${skill.level}%` }}
        />
      </div>
      <div className="mt-1 flex items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        {skill.note && (
          <span className="font-mono text-[10px] text-muted-foreground/70 truncate">
            {skill.note}
          </span>
        )}
      </div>
    </div>
  );
}

export const Skills = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const safeMotion = useSafeMotion();

  const blocks = [
    { icon: Languages, index: "01", title: isFr ? "Langages" : "Languages", items: languages, highlight: false },
    { icon: Layers, index: "02", title: "Frameworks", items: frameworks, highlight: false },
    { icon: Bot, index: "03", title: isFr ? "IA agentique" : "Agentic AI", items: agenticAI, highlight: true },
    { icon: Boxes, index: "04", title: isFr ? "Architectures" : "Architecture", items: architectures, highlight: true },
  ];

  return (
    <section id="skill" className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 3} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // Stack & Skills</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none" data-testid="tech-title">
              {isFr ? "Compétences" : "Skills"}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {isFr
                ? "Spécialiste TypeScript & Python, IA agentique avec Opencode, et architectures monorepo / microservices."
                : "TypeScript & Python specialist, agentic AI with Opencode, and monorepo / microservices architectures."}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border" data-testid="tech-content">
          {blocks.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.index} className="bg-card p-6 sm:p-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    <Icon className="w-4 h-4 text-foreground" />
                    {block.index} // {block.title}
                  </span>
                  {block.highlight && (
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 bg-primary text-primary-foreground">
                      {block.index === "04" ? (isFr ? "Spécialité" : "Specialty") : "Core"}
                    </span>
                  )}
                </div>
                <div>
                  {block.items.map((skill) => (
                    <SkillRow key={skill.name} skill={skill} isFr={isFr} accent={block.highlight} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-4 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>Stack // TS · PY · Next · Opencode</div>
          <div>Level // Expert first</div>
        </div>
      </div>
    </section>
  );
};

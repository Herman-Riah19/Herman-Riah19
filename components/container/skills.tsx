"use client";

import React from "react";
import { useLocale } from "next-intl";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { cn } from "@/lib/utils";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";

export interface TechStackItem {
  name: string;
  slug: string;
  category: string;
  invertDark?: boolean;
}

export const STACK_ROW_A: TechStackItem[] = [
  { name: "TypeScript", slug: "typescript", category: "Language" },
  { name: "Next.js", slug: "nextdotjs", category: "Framework", invertDark: true },
  { name: "Python", slug: "python", category: "Language" },
  { name: "NestJS", slug: "nestjs", category: "Backend" },
  { name: "React", slug: "react", category: "Frontend" },
  { name: "Rust", slug: "rust", category: "Systems", invertDark: true },
  { name: "FastAPI", slug: "fastapi", category: "Backend" },
  { name: "Django", slug: "django", category: "Backend" },
  { name: "Tailwind CSS", slug: "tailwindcss", category: "Styling" },
  { name: "Node.js", slug: "nodedotjs", category: "Runtime" },
  { name: "JavaScript", slug: "javascript", category: "Language" },
];

export const STACK_ROW_B: TechStackItem[] = [
  { name: "PostgreSQL", slug: "postgresql", category: "Database" },
  { name: "Docker", slug: "docker", category: "DevOps" },
  { name: "GraphQL", slug: "graphql", category: "API Design" },
  { name: "Prisma", slug: "prisma", category: "ORM", invertDark: true },
  { name: "AWS", slug: "amazonwebservices", category: "Cloud" },
  { name: "Redis", slug: "redis", category: "Cache / DB" },
  { name: "MongoDB", slug: "mongodb", category: "NoSQL" },
  { name: "Flask", slug: "flask", category: "Microservices", invertDark: true },
  { name: "Git", slug: "git", category: "Version Control" },
  { name: "Linux", slug: "linux", category: "OS", invertDark: true },
  { name: "Turborepo", slug: "turborepo", category: "Monorepo" },
];

function TechCard({ item }: { item: TechStackItem }) {
  return (
    <div className="mx-3 inline-flex items-center gap-3.5 px-5 py-3.5 rounded-xl border border-border/80 bg-card/70 hover:bg-card hover:border-primary/50 transition-all duration-300 shadow-sm backdrop-blur-sm select-none group">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-muted/40 p-2 group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
        <img
          src={`https://cdn.simpleicons.org/${item.slug}`}
          alt={item.name}
          width={24}
          height={24}
          loading="lazy"
          decoding="async"
          className={cn(
            "h-6 w-6 object-contain transition-transform duration-300 group-hover:scale-110",
            item.invertDark && "dark:invert"
          )}
        />
      </div>
      <div className="flex flex-col text-left">
        <span className="font-mono text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
          {item.name}
        </span>
        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          {item.category}
        </span>
      </div>
    </div>
  );
}

export function ScrollBasedVelocityImagesDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-8">
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={6} direction={1} className="py-4">
          {STACK_ROW_A.map((tech, idx) => (
            <TechCard key={`demo-a-${tech.name}-${idx}`} item={tech} />
          ))}
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
          {STACK_ROW_B.map((tech, idx) => (
            <TechCard key={`demo-b-${tech.name}-${idx}`} item={tech} />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-1/4 bg-gradient-to-r to-transparent z-10" />
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-1/4 bg-gradient-to-l to-transparent z-10" />
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

        <div
          className="relative flex w-full flex-col items-center justify-center overflow-hidden py-4 border-y border-border/60 bg-muted/5"
          data-testid="tech-content"
        >
          <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={6} direction={1} className="py-3">
              {STACK_ROW_A.map((tech, idx) => (
                <TechCard key={`skill-a-${tech.name}-${idx}`} item={tech} />
              ))}
            </ScrollVelocityRow>
            <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-3">
              {STACK_ROW_B.map((tech, idx) => (
                <TechCard key={`skill-b-${tech.name}-${idx}`} item={tech} />
              ))}
            </ScrollVelocityRow>
          </ScrollVelocityContainer>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-1/4 bg-gradient-to-r to-transparent z-10" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-1/4 bg-gradient-to-l to-transparent z-10" />
        </div>

        <div className="flex items-center justify-between pt-6 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>Stack // TS · PY · Rust · Next · Django</div>
          <div>Approche // Sobre & efficace</div>
        </div>
      </div>
    </section>
  );
};

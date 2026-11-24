"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
  Bot,
  Code2,
  Server,
  Cloud,
  Terminal as TerminalIcon,
  Sparkles,
  Zap,
  Activity,
  CheckCircle2,
  Workflow,
  Cpu,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/registry/magicui/terminal";
import { HexagonPattern } from "@/registry/magicui/hexagon-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { cn } from "@/lib/utils";

export const ServicesSection = () => {
  const t = useTranslations("Home.Features");
  const safeMotion = useSafeMotion();

  const agenticStack = [
    "Opencode",
    "MCP Servers",
    "Autonomous Swarms",
    "Claude Code & Cline",
    "Self-Healing Tests",
    "RAG & Tool Calling",
  ];

  const webStack = ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Framer Motion"];
  const backendStack = ["NestJS", "FastAPI", "Rust", "PostgreSQL", "Redis", "GraphQL", "tRPC"];
  const devopsStack = ["Docker", "GitHub Actions", "AWS", "Dokploy", "GitLab CI", "Linux"];

  return (
    <section
      id="services"
      className="w-full bg-background text-foreground font-mono border-t border-border"
    >
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-24">
        {/* Section Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 4} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-12 sm:mb-16">
            <div
              className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest"
              data-testid="features-title"
            >
              <TerminalIcon className="w-3.5 h-3.5 text-primary" />
              <span>03 // {t("Title")}</span>
            </div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-[1.05] text-foreground"
              data-testid="features-checkout"
            >
              {t("Checkout")}
            </h2>
            <p
              className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl"
              data-testid="features-description"
            >
              {t("Description")}
            </p>
          </div>
        </BlurFade>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {/* Card 0: Agentic Coding & Autonomous AI (Hero Feature - Large Banner) */}
          <div className="lg:col-span-12 xl:col-span-8 relative group rounded-2xl border border-border/80 bg-card p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col justify-between space-y-6">
            <HexagonPattern
              width={42}
              height={42}
              hexagons={[
                [1, 1],
                [3, 2],
                [5, 1],
                [7, 3],
                [9, 2],
                [11, 4],
              ]}
              className="mask-[radial-gradient(420px_circle_at_center,white,transparent)] opacity-40 inset-0 -skew-y-3"
            />
            <BorderBeam
              size={120}
              duration={10}
              colorFrom="#06b6d4"
              colorTo="#10b981"
            />

            <div className="relative z-10 space-y-6">
              {/* Card Header */}
              <div
                className="flex items-center justify-between flex-wrap gap-2"
                data-testid="feature-0-header"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <Bot className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                    01 // Flagship
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[10px] tracking-wider uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Agent Core Active</span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3
                  className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground flex items-center gap-2"
                  data-testid="feature-0-title"
                >
                  {t("feature1.title")}
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                </h3>
                <p
                  className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl"
                  data-testid="feature-0-content"
                >
                  {t("feature1.text")}
                </p>
              </div>

              {/* Embedded Live Agentic Coding Terminal */}
              <div className="w-full pt-2">
                <Terminal className="max-w-none shadow-xl border-border/80">
                  <TypingAnimation duration={25} delay={100}>
                    &gt; opencode agent:orchestrate --task=&quot;implement-service-with-mcp&quot;
                  </TypingAnimation>

                  <AnimatedSpan delay={350} className="text-emerald-400">
                    ✔ Connected to MCP servers: postgres, github, terminal-sandbox
                  </AnimatedSpan>

                  <AnimatedSpan delay={700} className="text-cyan-400">
                    ✔ Architecture plan: 3 modules decomposed &amp; verified against code rules
                  </AnimatedSpan>

                  <AnimatedSpan delay={1050} className="text-blue-400">
                    ✔ Agent-Coder: Generated NestJS / FastAPI endpoints &amp; schema migrations
                  </AnimatedSpan>

                  <AnimatedSpan delay={1400} className="text-emerald-400">
                    ✔ Agent-QA: 24/24 unit &amp; integration tests passed in 0.8s
                  </AnimatedSpan>

                  <AnimatedSpan delay={1750} className="text-amber-400 font-medium">
                    ★ Autonomous review passed: PR #42 generated &amp; ready for deployment
                  </AnimatedSpan>
                </Terminal>
              </div>
            </div>

            {/* Chips & Footer */}
            <div className="relative z-10 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {agenticStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono border border-border/60 bg-muted/30 text-foreground/80 hover:border-primary/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground shrink-0">
                SWARM // MCP-READY
              </span>
            </div>
          </div>

          {/* Card 1: Modern Web Engineering (Col 12 / 4) */}
          <div className="lg:col-span-12 xl:col-span-4 relative group rounded-2xl border border-border/80 bg-card p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div
                className="flex items-center justify-between"
                data-testid="feature-1-header"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg border border-border bg-muted/40 text-foreground">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    02 // Frontend
                  </span>
                </div>
                <Zap className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-2">
                <h3
                  className="font-serif text-2xl tracking-tight text-foreground"
                  data-testid="feature-1-title"
                >
                  {t("feature2.title")}
                </h3>
                <p
                  className="font-sans text-sm text-muted-foreground leading-relaxed"
                  data-testid="feature-1-content"
                >
                  {t("feature2.text")}
                </p>
              </div>

              {/* Visual Metrics Widget */}
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/40 pb-2 text-[10px] uppercase text-muted-foreground tracking-wider">
                  <span>Core Web Vitals</span>
                  <span className="text-emerald-500 font-semibold">100% Score</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-lg bg-card/60 border border-border/40">
                    <div className="text-sm font-bold text-foreground">0.5s</div>
                    <div className="text-[9px] text-muted-foreground uppercase">LCP</div>
                  </div>
                  <div className="p-2 rounded-lg bg-card/60 border border-border/40">
                    <div className="text-sm font-bold text-foreground">0 ms</div>
                    <div className="text-[9px] text-muted-foreground uppercase">CLS</div>
                  </div>
                  <div className="p-2 rounded-lg bg-card/60 border border-border/40">
                    <div className="text-sm font-bold text-foreground">18 ms</div>
                    <div className="text-[9px] text-muted-foreground uppercase">INP</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                  <span>Architecture</span>
                  <span className="text-foreground">App Router · RSC · SSR</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {webStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-border/60 bg-muted/30 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                SUB-SECOND LCP
              </span>
            </div>
          </div>

          {/* Card 2: High-Performance APIs & Microservices (Col 6) */}
          <div className="lg:col-span-6 relative group rounded-2xl border border-border/80 bg-card p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div
                className="flex items-center justify-between"
                data-testid="feature-2-header"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg border border-border bg-muted/40 text-foreground">
                    <Server className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    03 // Architecture
                  </span>
                </div>
                <Activity className="w-4 h-4 text-cyan-500" />
              </div>

              <div className="space-y-2">
                <h3
                  className="font-serif text-2xl tracking-tight text-foreground"
                  data-testid="feature-2-title"
                >
                  {t("feature3.title")}
                </h3>
                <p
                  className="font-sans text-sm text-muted-foreground leading-relaxed"
                  data-testid="feature-2-content"
                >
                  {t("feature3.text")}
                </p>
              </div>

              {/* Endpoint Status Mockup */}
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-500">
                      GET
                    </span>
                    <span className="text-foreground text-[11px] font-semibold">
                      /api/v1/stream/data
                    </span>
                  </div>
                  <span className="text-[10px] text-emerald-500 font-semibold">
                    200 OK · 11ms
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] pt-1 text-muted-foreground border-t border-border/40">
                  <div className="flex justify-between">
                    <span>Protocol:</span>
                    <span className="text-foreground">REST / gRPC / tRPC</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine:</span>
                    <span className="text-foreground">NestJS + Rust</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {backendStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-border/60 bg-muted/30 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                HIGH THROUGHPUT
              </span>
            </div>
          </div>

          {/* Card 3: Cloud, DevOps & CI/CD (Col 6) */}
          <div className="lg:col-span-6 relative group rounded-2xl border border-border/80 bg-card p-6 sm:p-8 overflow-hidden shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div
                className="flex items-center justify-between"
                data-testid="feature-3-header"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-lg border border-border bg-muted/40 text-foreground">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    04 // Operations
                  </span>
                </div>
                <Workflow className="w-4 h-4 text-purple-500" />
              </div>

              <div className="space-y-2">
                <h3
                  className="font-serif text-2xl tracking-tight text-foreground"
                  data-testid="feature-3-title"
                >
                  {t("feature4.title")}
                </h3>
                <p
                  className="font-sans text-sm text-muted-foreground leading-relaxed"
                  data-testid="feature-3-content"
                >
                  {t("feature4.text")}
                </p>
              </div>

              {/* CI/CD Pipeline Steps Visual */}
              <div className="rounded-xl border border-border/60 bg-muted/20 p-4 space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between text-[10px] uppercase text-muted-foreground pb-1">
                  <span>CI/CD Pipeline Workflow</span>
                  <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> All Passing
                  </span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 text-center text-[10px]">
                  <div className="p-2 rounded bg-card/60 border border-emerald-500/30 text-emerald-500 font-semibold">
                    Lint &amp; Test
                  </div>
                  <div className="p-2 rounded bg-card/60 border border-emerald-500/30 text-emerald-500 font-semibold">
                    Docker Build
                  </div>
                  <div className="p-2 rounded bg-card/60 border border-emerald-500/30 text-emerald-500 font-semibold">
                    Security Scan
                  </div>
                  <div className="p-2 rounded bg-card/60 border border-emerald-500/30 text-emerald-500 font-semibold">
                    Deploy Prod
                  </div>
                </div>
                <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1 border-t border-border/40">
                  <span>Target</span>
                  <span className="text-foreground">AWS ECS / Dokploy / Vercel (Zero-Downtime)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap gap-1.5">
                {devopsStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[10px] font-mono border border-border/60 bg-muted/30 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                ZERO DOWNTIME
              </span>
            </div>
          </div>
        </div>

        {/* Section Footer */}
        <div className="flex items-center justify-between pt-6 mt-10 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>SERVICES // AGENTIC CODING · FULL-STACK · CLOUD</div>
          <div>STANDARDS // PROD-READY &amp; CLEAN ARCHITECTURE</div>
        </div>
      </div>
    </section>
  );
};

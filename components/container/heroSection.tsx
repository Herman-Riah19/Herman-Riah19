"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Mail,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Terminal,
  Bot,
  Sparkles,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { SlideInFromBottom } from "../animation/animationScroll";
import { HexagonPattern } from "@/registry/magicui/hexagon-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";

export const HeroSection = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const safeMotion = useSafeMotion();

  const isFr = locale === "fr";

  const heroData = {
    location: "Antananarivo, Madagascar",
    status: isFr ? "DISPONIBLE POUR MISSIONS" : "AVAILABLE FOR ROLES",
    email: t("Email"),
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between bg-background text-foreground font-mono overflow-hidden border-b border-border pt-20 pb-8">
      {/* Subtle Background Hexagon Pattern */}
      <HexagonPattern
        width={48}
        height={48}
        hexagons={[
          [2, 2],
          [4, 1],
          [6, 3],
          [8, 2],
          [10, 4],
          [12, 1],
          [14, 3],
        ]}
        className="mask-[radial-gradient(ellipse_70%_60%_at_50%_40%,white,transparent)] opacity-25 inset-0 -skew-y-3 pointer-events-none"
      />

      <div className="relative z-10 w-full h-full flex-1 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
        {/* Top Status Bar */}
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4 pt-2">
          <BlurFade delay={BLUR_FADE_DELAY * 1} visibleByDefault={safeMotion}>
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{heroData.status}</span>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 1.5} visibleByDefault={safeMotion}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-foreground" />
              <span className="hidden sm:inline">{heroData.location}</span>
              <span className="hidden md:inline text-muted-foreground/40">// LAT: -18.87° LONG: 47.50°</span>
            </div>
          </BlurFade>
        </div>

        {/* Main Hero Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-8 lg:py-6">
          {/* Technical Left Dossier */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <SlideInFromBottom delay={0.1}>
              <div className="space-y-3">
                {/* Dossier Header & Hello */}
                <div className="flex items-center gap-3 text-xs uppercase text-muted-foreground tracking-widest flex-wrap">
                  <div className="flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-primary" />
                    <span>00 // SYSTEM DOSSIER</span>
                  </div>
                  <span className="text-border">|</span>
                  <span
                    data-testid="home-hello"
                    className="text-primary font-semibold tracking-wider lowercase"
                  >
                    {t("Hello")}
                  </span>
                </div>

                {/* Hero Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight text-foreground leading-[1.05]">
                  <span data-testid="home-firstname">{t("Firstname")}</span>{" "}
                  <span
                    data-testid="home-lastname"
                    className="italic font-light text-muted-foreground block sm:inline"
                  >
                    {t("Lastname")}
                  </span>
                </h1>

                {/* Services / Speciality Badge */}
                <div
                  data-testid="home-service"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-card/80 backdrop-blur-sm text-xs font-mono text-foreground/90 shadow-sm max-w-full flex-wrap"
                >
                  <Bot className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-semibold text-primary">SPECIALITY:</span>
                  <span className="text-muted-foreground">{t("Services")}</span>
                </div>
              </div>
            </SlideInFromBottom>

            {/* Slogan */}
            <SlideInFromBottom delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl font-sans">
                {t("Slogan")}
              </p>
            </SlideInFromBottom>

            {/* Specs Grid */}
            <SlideInFromBottom delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border my-2 text-left shadow-sm">
                <div className="bg-card p-3.5 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block tracking-wider">
                    EXPERIENCE
                  </span>
                  <span className="text-sm font-semibold text-card-foreground">5+ YEARS</span>
                </div>
                <div className="bg-card p-3.5 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block tracking-wider">
                    CORE FOCUS
                  </span>
                  <span className="text-sm font-semibold text-card-foreground">FULL-STACK &amp; AI</span>
                </div>
                <div className="bg-card p-3.5 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block tracking-wider">
                    AGENTIC
                  </span>
                  <span className="text-sm font-semibold text-primary">OPENCODE / MCP</span>
                </div>
                <div className="bg-card p-3.5 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block tracking-wider">
                    ENVIRONMENT
                  </span>
                  <span className="text-sm font-semibold text-card-foreground">ARCH / HYPRLAND</span>
                </div>
              </div>
            </SlideInFromBottom>

            {/* Action Buttons & Contact Info */}
            <SlideInFromBottom delay={0.4}>
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6 bg-foreground text-background hover:bg-foreground/90 transition-colors"
                  >
                    <Link href={`/${locale}/contact`}>
                      <Mail className="w-4 h-4 mr-2" />
                      {isFr ? "Me contacter" : "Contact me"}
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6 border-border hover:bg-muted/50 transition-colors"
                  >
                    <Link href={`/${locale}/about`}>
                      <FileText className="w-4 h-4 mr-2" />
                      {t("Resume")}
                    </Link>
                  </Button>

                  <div className="flex items-center gap-1 border-l border-border pl-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-none w-10 h-10 text-muted-foreground hover:text-foreground"
                    >
                      <Link
                        href="https://github.com/Herman-Riah19"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="w-4 h-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-none w-10 h-10 text-muted-foreground hover:text-foreground"
                    >
                      <Link
                        href="https://www.linkedin.com/in/hermann-razafindranaivo/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Email Display */}
                <div className="flex items-center gap-2 pt-1">
                  <span className="text-[10px] text-muted-foreground uppercase tracking-widest">
                    DIRECT //
                  </span>
                  <a
                    href={`mailto:${heroData.email}`}
                    data-testid="home-email"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors underline decoration-border underline-offset-4"
                  >
                    {heroData.email}
                  </a>
                </div>
              </div>
            </SlideInFromBottom>
          </div>

          {/* Right Portrait & Visual Container */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full">
            <SlideInFromBottom delay={0.3} className="w-full">
              <div className="relative w-full aspect-[4/5] max-w-sm lg:max-w-md mx-auto border border-border bg-card p-3 shadow-xl rounded-none group overflow-hidden">
                {/* Luminous Animated Border Beam */}
                <BorderBeam
                  size={140}
                  duration={9}
                  colorFrom="#06b6d4"
                  colorTo="#10b981"
                />

                {/* Floating HUD status top right */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-background/90 backdrop-blur-md shadow-md text-[10px] font-mono text-foreground uppercase tracking-widest pointer-events-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>SYS // ONLINE</span>
                </div>

                {/* Floating HUD status bottom left */}
                <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-2.5 py-1 rounded-full border border-border/80 bg-background/90 backdrop-blur-md shadow-md text-[10px] font-mono text-foreground uppercase tracking-wider pointer-events-none">
                  <Bot className="w-3.5 h-3.5 text-primary" />
                  <span>AGENTIC CODING ACTIVE</span>
                </div>

                {/* Technical Corner Crosshairs */}
                <span className="absolute top-1.5 left-1.5 text-[9px] font-mono text-muted-foreground/40 pointer-events-none select-none">
                  +
                </span>
                <span className="absolute bottom-1.5 right-1.5 text-[9px] font-mono text-muted-foreground/40 pointer-events-none select-none">
                  +
                </span>

                {/* Minimal Kanji typography */}
                <span className="absolute top-12 left-4 text-xs font-serif text-muted-foreground/40 pointer-events-none z-10 select-none">
                  力
                </span>
                <span className="absolute bottom-12 right-4 text-xs font-serif text-muted-foreground/40 pointer-events-none z-10 select-none">
                  美
                </span>

                {/* Center target ring */}
                <div className="absolute inset-0 flex items-center justify-center opacity-15 pointer-events-none">
                  <div className="w-[85%] h-[85%] rounded-full border border-border" />
                </div>

                {/* Image */}
                <div className="relative w-full h-full overflow-hidden grayscale contrast-[1.15] group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700 ease-out">
                  <Image
                    src="/assets/image/profile-remove.png"
                    alt="Hero portrait"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center scale-[1.02] group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </SlideInFromBottom>
          </div>
        </div>

        {/* Bottom Footer : System Footnote */}
        <div className="flex items-center justify-between pt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>EDITION // 2026.1</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span>SYSTEM ACTIVE · AGENT CORE READY</span>
          </div>
          <div>SCROLL DOWN ↓</div>
        </div>
      </div>
    </section>
  );
};

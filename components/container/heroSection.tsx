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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { SlideInFromBottom } from "../animation/animationScroll";

export const HeroSection = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const safeMotion = useSafeMotion();

  const isFr = locale === "fr";

  const heroData = {
    location: "Antananarivo, Madagascar",
    status: isFr ? "DISPONIBLE POUR MISSIONS" : "AVAILABLE FOR ROLES",
  };

  return (
    <section className="w-full min-h-screen flex flex-col justify-between bg-background text-foreground font-mono overflow-hidden border-b border-border pt-20 pb-8">

      <div className="relative w-full h-full flex-1 px-4 sm:px-8 lg:px-12 flex flex-col justify-between">
        <div className="flex items-center justify-between gap-4 border-b border-border pb-4 pt-2">
          <BlurFade delay={BLUR_FADE_DELAY * 1} visibleByDefault={safeMotion}>
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-widest text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>{heroData.status}</span>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 1.5} visibleByDefault={safeMotion}>
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5 text-foreground" />
              <span className="hidden sm:inline">{heroData.location}</span>
            </div>
          </BlurFade>
        </div>

        {/* --- MAIN HERO BODY --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-8 lg:py-0">

          {/* DOSSIER TECHNIQUE (GAUCHE) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <SlideInFromBottom delay={0.1}>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>00 // SYSTEM DOSSIER</span>
                </div>

                <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-tight text-foreground leading-none">
                  {t("Firstname")}{" "}
                  <span className="italic font-light text-muted-foreground block sm:inline">
                    {t("Lastname")}
                  </span>
                </h1>
              </div>
            </SlideInFromBottom>

            <SlideInFromBottom delay={0.2}>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl font-sans">
                {t("Slogan")}
              </p>
            </SlideInFromBottom>

            {/* SPECS GRID (UTILISANT CARD & BORDER DU DESIGN SYSTEM) */}
            <SlideInFromBottom delay={0.3}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border border border-border my-2 text-left">
                <div className="bg-card p-3 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block">EXPERIENCE</span>
                  <span className="text-sm font-semibold text-card-foreground">5+ YEARS</span>
                </div>
                <div className="bg-card p-3 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block">FOCUS</span>
                  <span className="text-sm font-semibold text-card-foreground">FULL-STACK</span>
                </div>
                <div className="bg-card p-3 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block">STACK</span>
                  <span className="text-sm font-semibold text-card-foreground">TS / NEXT / GO</span>
                </div>
                <div className="bg-card p-3 space-y-1">
                  <span className="text-[10px] uppercase text-muted-foreground block">SYSTEM</span>
                  <span className="text-sm font-semibold text-card-foreground">ARCH / HYPR</span>
                </div>
              </div>
            </SlideInFromBottom>

            {/* BOUTONS D'ACTION (BOUTONS NATIVE SHADCN / TAILWIND) */}
            <SlideInFromBottom delay={0.4}>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6"
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
                  className="rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6"
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
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </SlideInFromBottom>
          </div>

          {/* PORTRAIT CONTAINER (DROITE) */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-full">
            <SlideInFromBottom delay={0.3} className="w-full">
              <div className="relative w-full aspect-[4/5] max-w-sm lg:max-w-md mx-auto border border-border bg-card p-2 shadow-sm">

                {/* Visual Circle Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-[85%] h-[85%] rounded-full border border-border" />
                </div>

                {/* Kanji Overlay (Ryoku Vibe) */}
                <span className="absolute top-4 right-4 text-xs font-serif text-muted-foreground/60 pointer-events-none z-10">
                  力
                </span>
                <span className="absolute bottom-4 left-4 text-xs font-serif text-muted-foreground/60 pointer-events-none z-10">
                  美
                </span>

                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/assets/image/hero-portrait.jpg"
                    alt="Hero portrait"
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
            </SlideInFromBottom>
          </div>

        </div>

        {/* --- BOTTOM FOOTER : SYSTEM FOOTNOTE --- */}
        <div className="flex items-center justify-between pt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>EDITION // 2026.1</div>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
            <span>SYSTEM ACTIVE</span>
          </div>
          <div>SCROLL DOWN ↓</div>
        </div>

      </div>
    </section>
  );
};
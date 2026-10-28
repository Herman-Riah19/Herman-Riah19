"use client";

import { BLUR_FADE_DELAY } from "@/lib/constant";
import React from "react";
import BlurFade from "@/components/container/blur-fade";
import { useTranslations } from "next-intl";
import Markdown from "react-markdown";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import Image from "next/image";

export const About = () => {
  const t = useTranslations("Welcome");
  const safeMotion = useSafeMotion();

  return (
    <section
      id="about"
      className="w-full min-w-0 max-w-full overflow-hidden bg-[#0d0f12] text-zinc-300 font-mono py-12 px-6 sm:px-12 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Colonne Gauche : Image avec cadres/coins stylisés */}
        <BlurFade delay={BLUR_FADE_DELAY * 2} visibleByDefault={safeMotion} className="lg:col-span-5 w-full">
          <div className="relative group w-full aspect-[4/5] max-w-md mx-auto lg:max-w-none border border-zinc-800 p-2 bg-black/40">
            {/* Repères / Coins graphiques style HUD/Cyberpunk */}
            <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-zinc-400 z-10" />
            <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-zinc-400 z-10" />
            <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-zinc-400 z-10" />
            <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-zinc-400 z-10" />

            {/* Image avec filtre monochrome/duotone optionnel pour imiter le look matriciel */}
            <div className="relative w-full h-full overflow-hidden grayscale contrast-[1.2] group-hover:grayscale-0 transition-all duration-500">
              <Image
                src="/assets/image/profile.png" // Remplacez par le chemin de votre image
                alt={t("AboutTitle") || "Profile"}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </BlurFade>

        {/* Colonne Droite : Contenu Texte */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          {/* Header & Titre */}
          <BlurFade delay={BLUR_FADE_DELAY * 4} visibleByDefault={safeMotion}>
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-zinc-500 font-mono">
                <span>05 // THE MAKER</span>
                <span className="text-zinc-600">人</span>
              </div>
              
              <h2
                className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.1] text-zinc-100 font-normal"
                data-testid="about-title"
              >
                {t("AboutTitle")}
              </h2>
            </div>
          </BlurFade>

          {/* Description Markdown */}
          <BlurFade delay={BLUR_FADE_DELAY * 6} visibleByDefault={safeMotion}>
            <div data-testid="about-content" className="pt-2 min-w-0">
              <Markdown
                className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed break-words space-y-4"
                components={{
                  p: ({ node, ...props }) => (
                    <p className="text-zinc-400 leading-relaxed font-sans text-sm sm:text-base mb-4" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-zinc-200 font-mono text-sm uppercase tracking-wider font-semibold mt-6 mb-2" {...props} />
                  ),
                }}
              >
                {t("About")}
              </Markdown>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
};
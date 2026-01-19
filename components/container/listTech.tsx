"use client"
import React from "react";
import TechnologieEn from "@/markdown/technologie_en.mdx";
import TechnologieFr from "@/markdown/technologie_fr.mdx";
import { useLocale } from "next-intl";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export const ListTech = () => {
  const local = useLocale();
    const safeMotion = useSafeMotion();
  return (
    <section id="skill" className="mt-2">
      <BlurFade delay={BLUR_FADE_DELAY * 3} visibleByDefault={safeMotion}>
        <h2 className="text-xl font-bold" data-testid="tech-title">Skill</h2>
      </BlurFade>
      <div className="prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert" data-testid="tech-content">
        {local === "fr" ? <TechnologieFr /> : <TechnologieEn />}
      </div>
    </section>
  );
};

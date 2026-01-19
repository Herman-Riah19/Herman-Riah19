"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import React from "react";
import BlurFade from "./blur-fade";
import { useTranslations } from "next-intl";
import Markdown from "react-markdown";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export const About = () => {
  const t = useTranslations("Welcome");
  const safeMotion = useSafeMotion();

  return (
    <section id="about" className="mt-4">
      <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
          <div className="space-y-2">
            <h2
              className="text-3xl font-bold tracking-tighter sm:text-5xl"
              data-testid="about-title"
            >
              {t("AboutTitle")}
            </h2>
          </div>
        </div>
      </BlurFade>
      <BlurFade
        delay={BLUR_FADE_DELAY * 4}
        visibleByDefault={safeMotion}
        className="text-justify"
      >
        <div data-testid="about-content">
          <Markdown className="prose max-w-full text-pretty font-sans text-lg text-primary dark:prose-invert">
            {t("About")}
          </Markdown>
        </div>
      </BlurFade>
    </section>
  );
};

"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import React from "react";
import BlurFade from "./blur-fade";
import { useTranslations } from "next-intl";
import Markdown from "react-markdown";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { Terminal } from "lucide-react";

export const About = () => {
  const t = useTranslations("Welcome");
  const safeMotion = useSafeMotion();

  return (
    <section id="about" className="w-full min-w-0 max-w-full overflow-hidden bg-background text-foreground font-mono border border-border">
      <div className="p-4 sm:p-8 min-w-0">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 mb-4 sm:mb-6 min-w-0">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">01 // Brief</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-5xl tracking-tight leading-[1.05] break-words"
              data-testid="about-title"
            >
              {t("AboutTitle")}
            </h2>
          </div>
        </BlurFade>
        <BlurFade
          delay={BLUR_FADE_DELAY * 4}
          visibleByDefault={safeMotion}
        >
          <div data-testid="about-content" className="border-t border-border pt-4 min-w-0">
            <Markdown className="prose max-w-full min-w-0 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed break-words [overflow-wrap:break-word] dark:prose-invert prose-p:break-words">
              {t("About")}
            </Markdown>
          </div>
        </BlurFade>
      </div>
    </section>
  );
};

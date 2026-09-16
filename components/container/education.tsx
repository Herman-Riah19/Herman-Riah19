"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { diplomes, ResumeModel } from "@/model/ResumeModel";
import React, { useEffect, useState } from "react";
import { CardResume } from "../card/card-resume";
import BlurFade from "./blur-fade";
import { useLocale } from "next-intl";
import { diplomasEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { Terminal } from "lucide-react";

export const Education = () => {
  const local = useLocale();
  const [localDiplomes, setLocalDiplomes] = useState<ResumeModel[]>([]);
  const safeMotion = useSafeMotion();

  useEffect(() => {
    if (local === "fr") {
      setLocalDiplomes(diplomes);
    } else {
      setLocalDiplomes(diplomasEn);
    }
  }, [local]);

  return (
    <section id="education" className="w-full bg-background text-foreground font-mono border border-border">
      <div className="p-6 sm:p-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // Formation</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl tracking-tight leading-none"
              data-testid="education-title"
            >
              Educations
            </h2>
          </div>
        </BlurFade>
        <div data-testid="education-content" className="grid grid-cols-1 gap-px bg-border border border-border">
          {localDiplomes.map((work, id) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              visibleByDefault={safeMotion}
            >
              <CardResume
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

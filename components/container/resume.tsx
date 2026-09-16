"use client"
import React, { useEffect, useState } from "react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { experiences, ResumeModel } from "@/model/ResumeModel";
import { CardResume } from "@/components/card/card-resume";
import { useLocale } from "next-intl";
import { experiencesEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { Terminal } from "lucide-react";

export const Resume = () => {
  const local = useLocale();
  const [localExperiences, setLocalExperiences] = useState<ResumeModel[]>([]);
  const safeMotion = useSafeMotion();

  useEffect(() => {
    if (local === "fr") {
      setLocalExperiences(experiences);
    } else {
      setLocalExperiences(experiencesEn);
    }
  }, [local]);

  return (
    <section id="resume" className="w-full bg-background text-foreground font-mono border border-border">
      <div className="p-6 sm:p-8">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // Experience</span>
            </div>
            <h2
              className="font-serif text-3xl sm:text-4xl tracking-tight leading-none"
              data-testid="resume-title"
            >
              Experiences
            </h2>
          </div>
        </BlurFade>
        <div data-testid="resume-content" className="grid grid-cols-1 gap-px bg-border border border-border">
          {localExperiences.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <CardResume
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.title}
                subtitle={work.company}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
};

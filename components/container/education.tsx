"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { diplomes, ResumeModel } from "@/model/ResumeModel";
import React, { useEffect, useState } from "react";
import { CardResume } from "../card/card-resume";
import BlurFade from "./blur-fade";
import { useLocale } from "next-intl";
import { diplomasEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";

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
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-1 mt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
            <div className="space-y-2">
              <h2
                className="text-3xl font-bold tracking-tighter sm:text-5xl"
                data-testid="education-title"
              >
                Educations
              </h2>
            </div>
          </div>
        </BlurFade>
        <div data-testid="education-content">
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

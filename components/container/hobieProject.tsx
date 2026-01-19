"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import React, { useEffect, useState } from "react";
import BlurFade from "./blur-fade";
import { hobbies, ResumeModel } from "@/model/ResumeModel";
import { useLocale, useTranslations } from "next-intl";
import { CardHackathon } from "@/components/card/card-hackathon";
import { hobbiesEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export const HobieProject = () => {
  const t = useTranslations("Hobies");
  const local = useLocale();
  const [localHobies, setLocalHobies] = useState<ResumeModel[]>([]);
    const safeMotion = useSafeMotion();

  useEffect(() => {
    if (local === "fr") {
      setLocalHobies(hobbies);
    } else {
      setLocalHobies(hobbiesEn);
    }
  }, [local]);

  return (
    <section id="hobbies">
      <div className="flex min-h-0 flex-col gap-y-3 mt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 13} visibleByDefault={safeMotion}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm" data-testid="hobie-title">
                {t("SideProject")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-testid="hobie-intro">
                {t("Intro")}
              </h2>
              <p className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert">
                {t("Description")}
              </p>
            </div>
          </div>
        </BlurFade>
        <ul
          style={{ listStyleType: "none" }}
          className="mb-4 ml-4 divide-y divide-dashed border-l"
          data-testid="hobie-list"
        >
          {localHobies.map((work, id) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              visibleByDefault={safeMotion}
            >
              <CardHackathon
                key={work.company}
                image={work.logoUrl}
                location={work.company}
                title={work.title}
                links={work.href}
                dates={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </ul>
      </div>
    </section>
  );
};

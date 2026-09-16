"use client";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import React, { useEffect, useState } from "react";
import BlurFade from "./blur-fade";
import { hobbies, ResumeModel } from "@/model/ResumeModel";
import { useLocale, useTranslations } from "next-intl";
import { CardHackathon } from "@/components/card/card-hackathon";
import { hobbiesEn } from "@/model/resumeModelEn";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { Terminal } from "lucide-react";

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
    <section id="hobbies" className="w-full bg-background text-foreground font-mono border border-border">
      <div className="p-6 sm:p-8">
        <BlurFade delay={BLUR_FADE_DELAY * 13} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 mb-6">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest" data-testid="hobie-title">
              <Terminal className="w-3.5 h-3.5" />
              <span>06 // {t("SideProject")}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl tracking-tight leading-none" data-testid="hobie-intro">
              {t("Intro")}
            </h2>
            <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-xl">
              {t("Description")}
            </p>
          </div>
        </BlurFade>
        <ul
          style={{ listStyleType: "none" }}
          className="m-0 p-0 grid grid-cols-1 gap-px bg-border border border-border"
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

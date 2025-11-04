import React, { useEffect, useState } from "react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { experiences, ResumeModel } from "@/model/ResumeModel";
import { CardResume } from "@/components/card/card-resume";
import { useLocale } from "next-intl";
import { experiencesEn } from "@/model/resumeModelEn";

const Resume = () => {
  const local = useLocale();
  const [localExperiences, setLocalExperiences] = useState<ResumeModel[]>([]);

  useEffect(() => {
    if (local === "fr") {
      setLocalExperiences(experiences);
    } else {
      setLocalExperiences(experiencesEn);
    }
  }, [local]);
  return (
    <section id="resume" className="mt-4">
      <div className="flex min-h-0 flex-col gap-y-3 mt-4">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Experiences
              </h2>
            </div>
          </div>
        </BlurFade>
        {localExperiences.map((work, id) => (
          <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
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
    </section>
  );
};

export default Resume;

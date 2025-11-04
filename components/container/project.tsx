"use client";
import React, { useEffect, useState } from "react";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";
import { CardProject } from "../card/cardProject";
import { ProjectModelFr, ProjectModelEn, Model } from "@/model/ProjectModel";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LinkButton } from "../magicui/link-button";

export const Projects = () => {
  const t = useTranslations("Project");
  const path = usePathname();
  const local = useLocale();
  const [localProjects, setLocalProject] = useState<Model[]>([]);

  useEffect(() => {
    if (local === "fr") {
      if (path === `/fr/projects`) {
        setLocalProject(ProjectModelFr);
        return;
      }
      setLocalProject(ProjectModelFr.slice(0, 4));
    } else {
      if (path === `/en/projects`) {
        setLocalProject(ProjectModelEn);
        return;
      }
      setLocalProject(ProjectModelEn.slice(0, 4));
    }
  }, [local]);

  return (
    <section id="projects" className="mt-4">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {t("Title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {t("Checkout")}
              </h2>
              <p className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert">
                {t("Description")}
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1 max-w-[800px] mx-auto">
          {localProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <CardProject
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.date}
                tags={project.technology}
                image={project.img}
                links={project.link}
              />
            </BlurFade>
          ))}
        </div>
        <LinkButton link={`/${local}/projects`} title={t("OtherProject")} />
      </div>
    </section>
  );
};

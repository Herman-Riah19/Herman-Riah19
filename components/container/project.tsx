"use client";
import React, { useEffect, useState } from "react";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";
import { CardProject } from "@/components/card/cardProject";
import { ProjectModelFr, ProjectModelEn, Model } from "@/model/ProjectModel";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { LinkButton } from "@/components/magicui/link-button";
import { useSafeMotion } from "@/hooks/useSafeMotion";
import { cn } from "@/lib/utils";

export const Projects = () => {
  const t = useTranslations("Project");
  const path = usePathname();
  const local = useLocale();
  const [localProjects, setLocalProject] = useState<Model[]>([]);
  const [filter, setFilter] = useState("all");
  const safeMotion = useSafeMotion();

  useEffect(() => {
    if (local === "fr") {
      if (path === `/fr/projects`) {
        setLocalProject(ProjectModelFr);
      } else {
        setLocalProject(ProjectModelFr.slice(0, 4));
      }
    } else {
      if (path === `/en/projects`) {
        setLocalProject(ProjectModelEn);
      } else {
        setLocalProject(ProjectModelEn.slice(0, 4));
      }
    }
    setFilter("all");
  }, [local, path]);

  const isProjectsPage = path === `/${local}/projects`;

  const filters = [
    { key: "all", label: t("FilterAll") },
    { key: "website", label: t("FilterWebsite") },
    { key: "webapp", label: t("FilterWebApp") },
    { key: "aiapp", label: t("FilterAIApp") },
  ];

  const filterLabels: Record<string, string> = {
    website: t("FilterWebsite"),
    webapp: t("FilterWebApp"),
    aiapp: t("FilterAIApp"),
  };

  const filteredProjects =
    filter === "all"
      ? localProjects
      : localProjects.filter((project) => project.type === filterLabels[filter]);

  return (
    <section id="projects" className="mt-4">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {t("Title")}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl" data-testid="projects-checkout">
                {t("Checkout")}
              </h2>
              <p className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert" data-testid="projects-description">
                {t("Description")}
              </p>
            </div>
          </div>
        </BlurFade>
        {isProjectsPage && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "inline-block rounded-full px-4 py-1.5 text-sm transition-colors",
                  filter === f.key
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-foreground/10"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-3 sm:grid-cols-1 max-w-[800px] mx-auto" >
          {filteredProjects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              visibleByDefault={safeMotion}
            >
              <CardProject
                id={project.id ?? id}
                key={project.title}
                href={project.href}
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
        <div className="max-w-lg mx-auto py-2">
          {path !== `/${local}/projects` && (
            <LinkButton link={`/${local}/projects`} title={t("OtherProject")} />
          )}
        </div>
      </div>
    </section>
  );
};

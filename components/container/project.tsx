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
import { ProjectDetailModal } from "@/components/modal/project-detail-modal";
import { Terminal } from "lucide-react";

export const Projects = () => {
  const t = useTranslations("Project");
  const path = usePathname();
  const local = useLocale();
  const [localProjects, setLocalProject] = useState<Model[]>([]);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Model | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const safeMotion = useSafeMotion();

  useEffect(() => {
    if (local === "fr") {
      if (path === `/fr/projects`) {
        setLocalProject(ProjectModelFr);
      } else {
        setLocalProject(ProjectModelFr.slice(0, 6));
      }
    } else {
      if (path === `/en/projects`) {
        setLocalProject(ProjectModelEn);
      } else {
        setLocalProject(ProjectModelEn.slice(0, 6));
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

  const handleOpenModal = (project: Model) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 11} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>03 // {t("Title")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none text-foreground" data-testid="projects-checkout">
              {t("Checkout")}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl" data-testid="projects-description">
              {t("Description")}
            </p>
          </div>
        </BlurFade>

        {isProjectsPage && (
          <div className="flex flex-wrap items-center gap-px bg-border border border-border w-fit mb-8">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                className={cn(
                  "px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors",
                  filter === f.key
                    ? "bg-foreground text-background"
                    : "bg-card text-muted-foreground hover:text-foreground"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        )}

        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
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
                link={project.link}
                project={project}
                onSelect={handleOpenModal}
                locale={local}
              />
            </BlurFade>
          ))}
        </div>

        <div className="max-w-lg py-6">
          {path !== `/${local}/projects` && (
            <LinkButton link={`/${local}/projects`} title={t("OtherProject")} />
          )}
        </div>

        <div className="flex items-center justify-between pt-4 mt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>ARCHIVE // 03</div>
          <div>SCROLL →</div>
        </div>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        locale={local}
      />
    </section>
  );
};

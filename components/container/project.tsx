"use client";
import React, { useEffect, useState } from "react";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";
import { CardProject } from "../card/cardProject";
import { ProjectModelFr, ProjectModelEn, Model } from "@/model/ProjectModel";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";

export const Projects = () => {
  const t = useTranslations("Project");
  const local = useLocale();
  const [localProjects, setLocalProject] = useState<Model[]>([]);

  useEffect(() => {
    if (local === "fr") {
      setLocalProject(ProjectModelFr.slice(0, 4));
    } else {
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
        <Link
          href={`/${local}/about`}
          className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] "
        >
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-xl font-medium">
            {t("OtherProject")}
          </AnimatedGradientText>
          <ChevronRight 
            className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </Link>
      </div>
    </section>
  );
};

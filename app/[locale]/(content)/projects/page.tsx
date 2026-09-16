import { HobieProject } from "@/components/container/hobieProject";
import { Projects } from "@/components/container/project";
import { LinkButton } from "@/components/magicui/link-button";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

export default async function ProjectPage (){
  const locale = await getLocale();
  const t = await getTranslations("Home");

  return (
    <div className="w-full bg-background text-foreground font-mono">
      <Projects />
      <div className="px-4 sm:px-8 lg:px-12 pb-6">
        <HobieProject />
        <div className="py-6">
          <LinkButton link={`/${locale}/about`} title={t("Resume")} />
        </div>
      </div>
    </div>
  );
};

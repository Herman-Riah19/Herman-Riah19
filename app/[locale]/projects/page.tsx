import HobieProject from "@/components/container/hobieProject";
import { Projects } from "@/components/container/project";
import { LinkButton } from "@/components/magicui/link-button";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

export default async function ProjectPage (){
  const locale = await getLocale();
  const t = await getTranslations("Home");

  return (
    <section className="flex flex-col gap-4">
      <Projects />
      <HobieProject />
      <LinkButton link={`/${locale}/about`} title={t("Resume")} />
    </section>
  );
};

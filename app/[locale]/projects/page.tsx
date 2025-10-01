import HobieProject from "@/components/container/hobieProject";
import { Projects } from "@/components/container/project";
import Footer from "@/components/footer";
import { LinkButton } from "@/components/magicui/link-button";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

const PageProjects = async () => {
  const locale = await getLocale();
  const t = await getTranslations("Home");

  return (
    <section className="flex flex-col gap-4">
      <Projects />
      <HobieProject />
      <LinkButton link={`/${locale}/about`} title={t("Resume")} />
      <Footer />
    </section>
  );
};

export default PageProjects;

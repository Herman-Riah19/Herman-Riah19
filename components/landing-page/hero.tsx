"use client";

import React from "react";
import { Terminal } from "@/components/magicui/terminal";
import { useLocale, useTranslations } from "next-intl";
import { LinkButton } from "@/components/magicui/link-button";

export default function Hero() {
  const local = useLocale();
  const t = useTranslations("Home");

  const code = `const project = {
    name: "Portfolio",
    stack: ["TypeScript", "Next.js", React", "Node.js", "PostgreSQL"],
    description: ${t('Developper')}
  }`;

  return (
    <section className="container mx-auto grid md:grid-cols-2 gap-10 py-20">
      <div>
        <p className="text-[#ffaa40] font-semibold mb-2">{t('Hello')}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {t('Presentation')}
        </h1>
        <p className="text-muted-foreground text-2xl mb-6 max-w-xl">
          {t('Developper')}
        </p>
        <div className="flex gap-4 mb-6">
          <LinkButton link={`/${local}/projects`} title={t("Project")} />
        </div>
      </div>
      <div>
        <Terminal>
          <span>{code}</span>
        </Terminal>
      </div>
    </section>
  );
}

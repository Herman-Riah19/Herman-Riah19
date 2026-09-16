"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { Code2, Server, Bot, Cloud, Terminal } from "lucide-react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export const ServicesSection = () => {
  const t = useTranslations("Home.Features");
  const safeMotion = useSafeMotion();

  const services = [
    {
      icon: Code2,
      title: t("feature1.title"),
      description: t("feature1.text"),
    },
    {
      icon: Server,
      title: t("feature2.title"),
      description: t("feature2.text"),
    },
    {
      icon: Bot,
      title: t("feature3.title"),
      description: t("feature3.text"),
    },
    {
      icon: Cloud,
      title: t("feature4.title"),
      description: t("feature4.text"),
    },
  ];

  return (
    <section id="services" className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 6} visibleByDefault={safeMotion}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // {t("Title")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none text-foreground">
              {t("Checkout")}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {t("Description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <BlurFade
                key={index}
                delay={BLUR_FADE_DELAY * 7 + index * 0.1}
                visibleByDefault={safeMotion}
              >
                <div className="group relative bg-card p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="p-3 border border-border bg-background inline-block text-foreground">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl tracking-tight text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
                    <span>SYS.MOD</span>
                    <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

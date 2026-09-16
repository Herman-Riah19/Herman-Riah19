import React from "react";
import { useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "@/components/container/blur-fade";
import { Brain, Cable, Cloud, Code, Terminal } from "lucide-react";

export default function Features() {
  const t = useTranslations("Home");
  const features = [
    {
      icon: Code,
      title: t("Features.feature1.title"),
      text: t("Features.feature1.text"),
    },
    {
      icon: Cable,
      title: t("Features.feature2.title"),
      text: t("Features.feature2.text"),
    },
    {
      icon: Brain,
      title: t("Features.feature3.title"),
      text: t("Features.feature3.text"),
    },
    {
      icon: Cloud,
      title: t("Features.feature4.title"),
      text: t("Features.feature4.text"),
    },
  ];
  return (
    <section
      id="features"
      className="w-full bg-background text-foreground font-mono border-t border-border"
    >
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // {t("Features.Title")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none" data-testid="features-checkout">
              {t("Features.Checkout")}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl" data-testid="features-description">
              {t("Features.Description")}
            </p>
          </div>
        </BlurFade>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-px bg-border border border-border">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                className="bg-card p-6 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex p-3 border border-border bg-background">
                    <Icon strokeWidth={1.5} className="size-5 text-foreground" />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">0{idx + 1}</span>
                </div>
                <div className="text-lg font-serif tracking-tight" data-testid={`feature-${idx}-title`}>{f.title}</div>
                <div className="font-sans text-sm text-muted-foreground leading-relaxed" data-testid={`feature-${idx}-content`}>
                  {f.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

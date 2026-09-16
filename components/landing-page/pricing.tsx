"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "@/components/container/blur-fade";
import { AnimateWelcomeBack } from "../animation/animateWelcome";
import { Terminal } from "lucide-react";

export default function Pricing() {
  const t = useTranslations("Home");

  const services = [
    {
      title: t("Pricing.column1.title"),
      price: t("Pricing.column1.price"),
      features: [
        t("Pricing.column1.features.feature1"),
        t("Pricing.column1.features.feature2"),
        t("Pricing.column1.features.feature3"),
        t("Pricing.column1.features.feature4"),
        t("Pricing.column1.features.feature5"),
      ],
      popular: false,
    },
    {
      title: t("Pricing.column2.title"),
      price: t("Pricing.column2.price"),
      features: [
        t("Pricing.column2.features.feature1"),
        t("Pricing.column2.features.feature2"),
        t("Pricing.column2.features.feature3"),
        t("Pricing.column2.features.feature4"),
        t("Pricing.column2.features.feature5"),
      ],
      popular: true,
    },
    {
      title: t("Pricing.column3.title"),
      price: t("Pricing.column3.price"),
      features: [
        t("Pricing.column3.features.feature1"),
        t("Pricing.column3.features.feature2"),
        t("Pricing.column3.features.feature3"),
        t("Pricing.column3.features.feature4"),
        t("Pricing.column3.features.feature5"),
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="w-full bg-background text-foreground font-mono border-t border-border"
    >
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col space-y-3 max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
              <Terminal className="w-3.5 h-3.5" />
              <span>04 // {t("Pricing.Title")}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-none text-foreground">
              {t("Pricing.Checkout")}
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              {t("Pricing.Description")}
            </p>
          </div>
        </BlurFade>
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border max-w-6xl">
          {services.map((service, idx) => (
            <AnimateWelcomeBack key={idx}>
              <Card className="relative overflow-hidden rounded-none border-0 bg-card h-full flex flex-col shadow-sm">
                <CardHeader className="p-6 sm:p-8 pb-4 border-b border-border">
                  <CardTitle className="flex justify-between items-center font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {service.title}
                    {service.popular && (
                      <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-1 bg-primary text-primary-foreground">
                        Populaire
                      </span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 sm:p-8 pt-6 flex flex-col flex-grow">
                  <div className="font-serif text-4xl tracking-tight mb-6 text-foreground">{service.price}</div>
                  <ul className="space-y-3 mb-8 text-muted-foreground font-sans text-sm flex-grow">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 border-b border-border/60 pb-2 last:border-0">
                        <span className="text-foreground text-sm leading-none mt-0.5">—</span> {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className="mt-auto">
                    <Button className="w-full rounded-none font-mono text-xs uppercase tracking-wider h-11 px-6" variant={service.popular ? "default" : "outline"}>
                      Me contacter
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </AnimateWelcomeBack>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 mt-8 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>TIERS // 04</div>
          <div>SYSTEM ACTIVE</div>
        </div>
      </div>
    </section>
  );
}

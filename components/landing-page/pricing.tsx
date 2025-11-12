"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/magicui/border-beam";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "@/components/container/blur-fade";
import { MagicCard } from "@/components/ui/magic-card";
import { AnimateWelcomeBack } from "../animation/animateWelcome";

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
      id="services"
      className="container mx-auto py-16 flex flex-col gap-10"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {t("Pricing.Title")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("Pricing.Checkout")}
            </h2>
            <p className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert">
              {t("Pricing.Description")}
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <AnimateWelcomeBack key={idx}>
            <Card className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <MagicCard>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    {service.title}
                    {service.popular && (
                      <span className="text-sm">Populaire</span>
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-4">{service.price}</div>
                  <ul className="space-y-1 mb-4 ml-4 text-muted-foreground text-sm">
                    {service.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                  <a href="#contact">
                    <Button className="w-full">Me contacter</Button>
                  </a>
                </CardContent>
              </MagicCard>
              <BorderBeam duration={8} size={100} />
            </Card>
          </AnimateWelcomeBack>
        ))}
      </div>
    </section>
  );
}

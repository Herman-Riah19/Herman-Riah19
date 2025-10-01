"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { BorderBeam } from "@/components/magicui/border-beam";

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
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="services"
      className="container mx-auto py-16 flex flex-col gap-10"
    >
      <h2 className="text-2xl font-bold">{t("Pricing.header")}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s) => (
          <Card
            key={s.title}
            className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                {s.title}
                {s.popular && <span className="text-sm">Populaire</span>}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-4">{s.price}</div>
              <ul className="space-y-1 mb-4 ml-4 text-muted-foreground text-sm">
                {s.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact">
                <Button className="text-black w-full">Me contacter</Button>
              </a>
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        ))}
      </div>
    </section>
  );
}

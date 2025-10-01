import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "../magicui/border-beam";
import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations("Home");
  const features = [
    {
      title: t("Features.feature1.title"),
      text: t("Features.feature1.text"),
    },
    {
      title: t("Features.feature2.title"),
      text: t("Features.feature2.text"),
    },
    {
      title: t("Features.feature3.title"),
      text: t("Features.feature3.text"),
    },
    {
      title: t("Features.feature4.title"),
      text: t("Features.feature4.text"),
    },
  ];
  return (
    <section
      id="features"
      className="container mx-auto py-16 flex flex-col gap-10"
    >
      <h2 className="text-2xl font-bold">{t("Features.header")}</h2>
    
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f) => (
          <Card
            key={f.title}
            className="relative overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-lg">{f.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              {f.text}
            </CardContent>
            <BorderBeam duration={8} size={100} />
          </Card>
        ))}
      </div>
    </section>
  );
}

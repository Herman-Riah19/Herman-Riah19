import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BorderBeam } from "../magicui/border-beam";
import { useTranslations } from "next-intl";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "../container/blur-fade";
import { MagicCard } from "../ui/magic-card";
import { Brain, Cable, Cloud, Code } from "lucide-react";

export default function Features() {
  const t = useTranslations("Home");
  const features = [
    {
      icon: <Code strokeWidth={1.5} className="size-10  text-foreground mb-4" />,
      title: t("Features.feature1.title"),
      text: t("Features.feature1.text"),
    },
    {
      icon: <Cable strokeWidth={1.5} className="size-10  text-foreground mb-4" />,
      title: t("Features.feature2.title"),
      text: t("Features.feature2.text"),
    },
    {
      icon: <Brain strokeWidth={1.5} className="size-10  text-foreground mb-4" />,
      title: t("Features.feature3.title"),
      text: t("Features.feature3.text"),
    },
    {
      icon: <Cloud strokeWidth={1.5} className="size-10  text-foreground mb-4" />,
      title: t("Features.feature4.title"),
      text: t("Features.feature4.text"),
    },
  ];
  return (
    <section
      id="features"
      className="container mx-auto py-16 flex flex-col gap-10"
    >
      <BlurFade delay={BLUR_FADE_DELAY * 11}>
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
              {t("Features.Title")}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {t("Features.Checkout")}
            </h2>
            <p className="prose max-w-full text-pretty font-sans text-lg text-secondary/80 dark:prose-invert">
              {t("Features.Description")}
            </p>
          </div>
        </div>
      </BlurFade>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, idx) => (
          <Card
            key={idx}
            className={`relative overflow-hidden border-none shadow-none`}
          >
            <MagicCard className="h-full m-0 p-0">
              <CardHeader>
                {f.icon}
                <CardTitle className="text-lg">{f.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {f.text}
              </CardContent>
            </MagicCard>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { useLocale, useTranslations } from "next-intl";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { CardProfile } from "@/components/card/card-profile";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import Pricing from "@/components/landing-page/pricing";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Safari } from "@/components/magicui/safari";
import { MailContact } from "@/components/landing-page/contact";
import { VerticalScroll } from "@/components/animation/animationScroll";
import { Slogan } from "@/components/landing-page/slogan";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

const languages = [
  "typescript",
  "javascript",
  "Python",
  "php",
  "html5",
  "css3",
];
const frameworks = [
  "flask",
  "django",
  "nodedotjs",
  "adonisjs",
  "express",
  "nextdotjs",
  "React",
  "laravel",
  "angular",
];
const databases = ["postgresql", "mysql", "firebase", "mongodb"];

const BentoGridInfo = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const imagesLanguages = languages.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  const imagesFrameworks = frameworks.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  const imagesDatabases = databases.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  const features = [
    {
      name: `${t("Firstname")} ${t("Lastname")}`,
      description: t("Slogan"),
      href: "#",
      className: "col-span-3 lg:col-span-1 lg:row-span-2 h-[100vh] lg:h-full",
      cta: t("Email"),
      background: (
        <div className="absolute left-14">
          <CardProfile />
        </div>
      ),
    },
    {
      name: "",
      description: "",
      href: `/${locale}/about`,
      className: "col-span-3 lg:col-span-2 lg:row-span-1",
      cta: t("Resume"),
      background: (
        <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center sm:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            {t("Developper")}
          </span>
          <OrbitingCircles iconSize={40}>
            {imagesLanguages.map((img, idx) => (
              <img key={idx} src={img} alt="language" width="200" height="200" />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            {imagesFrameworks.map((img, idx) => (
              <img key={idx} src={img} alt="framework" width="200" height="200" />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={50} speed={3}>
            {imagesDatabases.map((img, idx) => (
              <img key={idx} src={img} alt="db" width="200" height="200" />
            ))}
          </OrbitingCircles>
        </div>
      ),
    },
    {
      name: t("Project"),
      description: t("Checkout"),
      href: `/${locale}/projects`,
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      cta: t("Discover"),
      background: (
        <div className="absolute flex h-[300px] w-full min-w-[320px] flex-col items-center justify-center overflow-hidden">
          <DotPattern
            className={cn(
              "m-0 p-0 w-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute -top-16 left-2 right-2"
            imageSrc="/assets/image/Jupiter.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute -top-6 left-14 right-2"
            imageSrc="/assets/image/trink.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-4 left-24 right-2"
            imageSrc="/assets/image/ChatGnoseIA.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-14 left-[8.5rem] right-2"
            imageSrc="/assets/image/upscaler.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-28 left-[11.5rem] right-2"
            imageSrc="/assets/image/openmyst.PNG"
          />
        </div>
      ),
    },
    {
      name: t("Blog"),
      description: t("BlogDescription"),
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      href: `/${locale}/blog`,
      cta: t("BlogDescription"),
      background: (
        <div className="absolute flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Blog
          </span>
          <Globe className="top-28" />
        </div>
      ),
    },
  ];

  return (
    <BentoGrid className="grid sm:w-auto lg:w-full grid-cols-3 gap-2 sm:m-2 lg:m-0 p-0">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

// ----- LANDING PAGE (MAIN) -----
export default function LandingPage() {
  return (
    <main className="p-4">
      <VerticalScroll>
        <Hero />
      </VerticalScroll>
      <VerticalScroll>
        <div className="max-w-6xl mx-auto py-2">
          <BentoGridInfo />
        </div>
      </VerticalScroll>
      <NeonGradientCard className="m-0 p-0">
        <VerticalScroll>
          <Features />
        </VerticalScroll>
        <VerticalScroll>
          <Pricing />
        </VerticalScroll>
      </NeonGradientCard>
      <Slogan />
      <VerticalScroll className="bg-transparent">
        <MailContact />
      </VerticalScroll>
    </main>
  );
}

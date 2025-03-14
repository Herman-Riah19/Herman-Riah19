"use client"
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { cn } from "@/lib/utils";
import { Globe } from '@/components/ui/globe';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import { Safari } from '@/components/magicui/safari';
import { CardProfile } from '@/components/card/card-profile';
import { DotPattern } from '@/components/magicui/dot-pattern';

const languages = ["typescript", "javascript", "Python", "php", "html5", "css3"];
const frameworks = ["flask", "django", "nodedotjs", "adonisjs", "express", "nextdotjs", "React", "laravel", "angular"]
const databases = ["postgresql", "mysql", "firebase", "mongodb"]

const PageHome = () => {
  const t = useTranslations("Home");
  const locale = useLocale();
  const imagesLanguages = languages.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const imagesFrameworks = frameworks.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );
  const imagesDatabases = databases.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  const features = [
    {
      // Icon: "",
      name: t("Presentation"),
      description: t("Slogan"),
      href: "#",
      className: "col-span-3 lg:col-span-1 lg:row-span-2 h-[100vh] lg:h-full",
      cta: "hermanrazafinbdranaivo@gmail.com",
      background: (
        <div className="absolute left-14">
          <CardProfile />
        </div>
      ),
    },
    {
      // Icon: BellIcon,
      name: "",
      description: "",
      href: `/${locale}/about`,
      className: "col-span-3 lg:col-span-2 lg:row-span-1",
      cta: t("Cta"),
      background: (
        <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-0 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center sm:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            {t("Developper")}
          </span>
          <OrbitingCircles iconSize={40}>
            {imagesLanguages.map(img => <img src={img} alt="language" width="200" height="200" />)}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            {imagesFrameworks.map(img => <img src={img} alt="language" width="200" height="200" />)}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={50} speed={3}>
            {imagesDatabases.map(img => <img src={img} alt="language" width="200" height="200" />)}
          </OrbitingCircles>
        </div>
      ),
    },
    {
      // Icon: "",
      name: t("Project"),
      description: t("Checkout"),
      href: `/${locale}/about/#projects`,
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      cta: t("Cta"),
      background: (
        <div className="absolute flex h-[300px] w-full min-w-[320px] flex-col items-center justify-center overflow-hidden">
          <DotPattern
            className={cn(
              "m-0 p-0 w-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
          <Safari url="magicui.design"
            className="size-60 absolute -top-16 left-2 right-2"
            imageSrc="/assets/image/Jupiter.png" />
          <Safari url="magicui.design"
            className="size-60 absolute -top-8 left-14 right-2"
            imageSrc="/assets/image/trink.png" />
          <Safari url="magicui.design"
            className="size-60 absolute -top-0 left-24 right-2"
            imageSrc="/assets/image/openmyst.PNG" />
          <Safari url="magicui.design"
            className="size-60 absolute top-8 left-36 right-2"
            imageSrc="/assets/image/didache.PNG" />
        </div>
      ),
    },
    {
      // Icon: File,
      name: t("Resume"),
      description: t("Experiences"),
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      href: `/${locale}/about`,
      cta: t("Cta"),
      background: (
        <div className="absolute flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            CV
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      ),
    },
  ];

  return (
    <BentoGrid className="grid sm:w-auto lg:w-full grid-cols-3 gap-2 overflow-y-hidden sm:m-2 lg:m-0 p-0">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default PageHome;

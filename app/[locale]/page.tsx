"use client"
import { useLocale, useTranslations } from 'next-intl'
import React from 'react'
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import {
  BellIcon,
  File,
  Projector,
} from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { PersonIcon } from '@radix-ui/react-icons';
import { Globe } from '@/components/ui/globe';
import { OrbitingCircles } from '@/components/magicui/orbiting-circles';

const languages = ["typescript", "javascript", "Python", "php", "html5","css3"];
const frameworks = ["flask", "django", "nodedotjs", "express", "nextdotjs","React"]
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
      Icon: PersonIcon,
      name: t("Presentation"),
      description: t("Slogan"),
      href: "",
      className: "col-span-3 lg:col-span-1 lg:row-span-2 h-[100vh] lg:h-full",
      cta: t("Cta"),
      background: <img src={"/assets/image/profile.jpg"} className="absolute -top-10 h-[80vh] w-full p-0 m-0" />,
    },
    {
      Icon: BellIcon,
      name: t("Developper"),
      description: t("Speciality"),
      href: `/${locale}/about/#skill`,
      className: "col-span-3 lg:col-span-2 lg:row-span-1",
      cta: t("Cta"),
      background: (
        <div className="absolute flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
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
      Icon: Projector,
      name: t("Project"),
      description: t("Checkout"),
      href:`/${locale}/about/#projects`,
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      cta: t("Cta"),
      background: (
        <DotPattern
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
        )}
      />),
    },
    {
      Icon: File,
      name: t("Resume"),
      description: t("Experiences"),
      className: "col-span-3 lg:col-span-1 lg:row-span-1",
      href: `/${locale}/about`,
      cta: t("Cta"),
      background: (
        <Globe
          className={cn(
            "top-28"
          )}
        />
      ),
    },
  ];

  return (
    <BentoGrid className="grid w-full grid-cols-3 gap-2">
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}

export default PageHome;

"use client"
import { useLocale, useTranslations } from "next-intl";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { CardProfile } from "@/components/card/card-profile";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { Safari } from "@/components/magicui/safari";
import { Terminal } from "lucide-react";

const languages = [
  "typescript",
  "javascript",
  "Python",
  "php",
  "html5",
  "rust",
];
const frameworks = [
  "flask",
  "django",
  "nodedotjs",
  "adonisjs",
  "nestjs",
  "express",
  "nextdotjs",
  "React",
  "laravel",
  "angular",
];
const databases = ["postgresql", "mysql", "firebase", "mongodb"];

export const BentoGridInfo = () => {
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
      href: `/${locale}/contact`,
      className: "col-span-3 lg:col-span-1 lg:row-span-2 h-[100vh] lg:h-full",
      cta: t("Email"),
      background: (
        <div className="relative flex h-full w-full items-start justify-center overflow-hidden p-2">
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
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
          <span className="absolute top-6 pointer-events-none whitespace-pre-wrap text-center font-serif text-5xl lg:text-7xl tracking-tight leading-none text-muted-foreground/60">
            {t("Developper")}
          </span>
          <OrbitingCircles iconSize={40}>
            {imagesLanguages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="language"
                width="200"
                height="200"
              />
            ))}
          </OrbitingCircles>
          <OrbitingCircles iconSize={30} radius={100} reverse speed={2}>
            {imagesFrameworks.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt="framework"
                width="200"
                height="200"
              />
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
        <div className="relative flex h-[300px] w-full min-w-[320px] flex-col items-center justify-center overflow-hidden">
          <DotPattern
            className={cn(
              "m-0 p-0 w-full [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute -top-16 left-2 right-2"
            imageSrc="/assets/image/trink.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute -top-6 left-14 right-2"
            imageSrc="/assets/image/Jupiter.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-4 left-24 right-2"
            imageSrc="/assets/image/hydroid.png"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-14 left-[8.5rem] right-2"
            imageSrc="/assets/image/openmyst.PNG"
          />
          <Safari
            url="magicui.design"
            className="size-60 absolute top-28 left-[11.5rem] right-2"
            imageSrc="/assets/image/upscaler.png"
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
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden border-b border-border bg-background px-40 pb-40 pt-8 md:pb-60">
          <span className="pointer-events-none whitespace-pre-wrap text-center font-serif text-7xl tracking-tight leading-none text-muted-foreground/60">
            Blog
          </span>
          <Globe className="top-28" />
        </div>
      ),
    },
  ];

  return (
    <section className="w-full bg-background text-foreground font-mono border-t border-border">
      <div className="px-4 sm:px-8 lg:px-12 py-16 lg:py-20">
        <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest mb-3">
          <Terminal className="w-3.5 h-3.5" />
          <span>01 // SYSTEM OVERVIEW</span>
        </div>
        <BentoGrid className="grid sm:w-auto lg:w-full grid-cols-3 p-0">
          {features.map((feature, idx) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <div>INDEX // 01-04</div>
          <div>SYSTEM ACTIVE</div>
        </div>
      </div>
    </section>
  );
};

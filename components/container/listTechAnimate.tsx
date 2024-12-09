"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/animation/animatedList";
import { Techno, TechnologieModel } from "@/model/TechnologieModel";
import Image from "next/image";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import BlurFade from "./blur-fade";

const Notification = ({ name, language, icon, type, star }: Techno) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
        >
          <Image src={icon} alt={name} width={50} height={50} />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{star}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {language}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo() {
  return (
    <div className="relative flex max-h-[400px] min-h-[400px] w-full  flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">Tools</h2>
      </BlurFade>
      <AnimatedList>
        {TechnologieModel.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}

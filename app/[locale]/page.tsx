"use client";

import React from "react";
import { MailContact } from "@/components/landing-page/contact";
import { VerticalScroll } from "@/components/animation/animationScroll";
import { Slogan } from "@/components/landing-page/slogan";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { ProjectsVerticalScroll } from "@/components/container/project";
import { AnimateWelcome } from "@/components/animation/animateWelcome";
import Features from "@/components/landing-page/features";
import Hero from "@/components/landing-page/hero";
import Pricing from "@/components/landing-page/pricing";
import { BentoGridInfo } from "@/components/container/bentoGridInfo";

export default function LandingPage() {
  return (
    <main className="p-4">
      <VerticalScroll>
        <Hero />
      </VerticalScroll>
      <div className="max-w-6xl mx-auto py-2">
        <BentoGridInfo />
      </div>
      <NeonGradientCard className="m-0 p-0">
        <Features />
        <ProjectsVerticalScroll />
        <Pricing />
      </NeonGradientCard>
      <Slogan />
      <AnimateWelcome>
        <MailContact />
      </AnimateWelcome>
    </main>
  );
}

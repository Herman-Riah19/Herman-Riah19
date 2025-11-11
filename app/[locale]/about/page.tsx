"use client";
import React from "react";
import About from "@/components/container/about";
import Welcome from "@/components/container/welcome";
import ListTech from "@/components/container/listTech";
import InfoContact from "@/components/container/info-contact";
import Resume from "@/components/container/resume";
import Education from "@/components/container/education";
import { Projects } from "@/components/container/project";
import HobieProject from "@/components/container/hobieProject";
import Profile from "@/components/container/profile";
import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";

export default async function AboutPage() {
  return (
    <div id="home">
      <section className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="md:col-span-1 md:sticky">
          <Profile />
        </div>
        <div className="md:col-span-2 lg:col-span-3 max-w-3xl flex flex-col gap-2">
          <Welcome />
          <InfoContact />
          <About />
          <Resume />
          <NeonGradientCard>
            <Education />
            <ListTech />
            <Projects />
          </NeonGradientCard>
          <HobieProject />
        </div>
      </section>
    </div>
  );
}

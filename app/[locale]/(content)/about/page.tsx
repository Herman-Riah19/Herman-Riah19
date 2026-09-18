"use server";
import React from "react";
import { About } from "@/components/container/about";
import { Welcome } from "@/components/container/welcome";
import { ListTech } from "@/components/container/listTech";
import { InfoContact } from "@/components/container/info-contact";
import { Resume } from "@/components/container/resume";
import { Education } from "@/components/container/education";
import { Projects } from "@/components/container/project";
import { HobieProject } from "@/components/container/hobieProject";
import { Profile } from "@/components/container/profile";

export default async function AboutPage() {
  return (
    <div id="home" className="w-full bg-background text-foreground font-mono">
      <div className="px-4 sm:px-8 lg:px-12 py-10 lg:py-14">
        <div className="flex flex-col items-start lg:flex-row gap-6">
          
          <div className="w-full lg:w-1/3 shrink-0 lg:sticky lg:top-5">
            <Profile />
          </div>

          <div className="w-full lg:w-2/3 flex flex-col gap-6 min-w-0">
            <Welcome />
            <InfoContact />
            <About />
            <ListTech />
            <Education />
            <Resume />
            <Projects />
            <HobieProject />
          </div>

        </div>
      </div>
    </div>
  );
}
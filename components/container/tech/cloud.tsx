"use client"
import React from "react"
import IconCloud from "@/components/tool/iconCloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "adonisjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "flask",
  "vercel",
  "testinglibrary",
  "jest",
  "vite",
  "docker",
  "git",
  "linux",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "shadcnui",
  "python",
  "figma",
];

export function CloudDemo() {
  return (
    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

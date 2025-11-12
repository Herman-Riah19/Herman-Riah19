"use client";

import React from "react";
import { useTranslations } from "next-intl";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Facebook, Github, Instagram, Linkedin } from "lucide-react";
import { DotPattern } from "../magicui/dot-pattern";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

export default function Hero() {
  const t = useTranslations("Home");

  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const slideLeft = {
    hidden: { x: 60, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <section className="bg-transparent relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg m-1 overflow-x-hidden">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)] w-full"
        )}
        width={100}
        height={80}
        squares={[100, 100]}
        squaresClassName="hover:fill-foreground-500"
      />
      <div className="m-4 grid lg:grid-cols-2 h-screen">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-left relative justify-center items-center lg:items-start flex flex-col p-4 lg:p-8"
        >
          <Badge className="text-sm lg:text-md text-center tracking-wide mb-5">
            {t("Services")}
          </Badge>

          <AnimatedGradientText className="text-3xl">
            {t("Hello")}
          </AnimatedGradientText>

          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            {t("Firstname")}
          </h1>

          <h1 className="text-4xl lg:text-6xl font-extrabold mb-3 bg-gradient-to-b from-primary to-blue-500/30 bg-clip-text text-transparent">
            {t("Lastname")}
          </h1>

          <p className="text-xl text-muted-foreground">{t("Email")}</p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            className="flex justify-center gap-4 mt-8"
          >
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-3 rounded-full transition-colors",
                  "bg-background border border-foreground/10 hover:bg-primary hover:text-primary-foreground"
                )}
              >
                {s.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={slideLeft}
          initial="hidden"
          animate="visible"
          className="mt-10 flex flex-col justify-center"
        >
          <div className="flex justify-center ">
            <Card
              className={cn(
                "relative overflow-hidden border-0 p-4 rounded-full shadow-xl",
                "bg-background/80 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                "transform-gpu dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
              )}
            >
              <Image
                src="/assets/image/profile-remove.png"
                alt="Profile"
                width={500}
                height={500}
                className="relative rounded-full z-10"
              />
              <DotPattern />
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const socials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/riah.hermann/",
    icon: <Facebook className="fill-primary w-6 h-6 " />
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hermannriah/",
    icon: <Instagram className="w-6 h-6 " />
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/hermann-razafindranaivo-174378237/",
    icon: <Linkedin className="fill-primary w-6 h-6 " />
  },
  {
    name: "GitHub",
    href: "https://www.github.com/Herman-Riah19",
    icon: <Github className="w-6 h-6 " />
  },
];

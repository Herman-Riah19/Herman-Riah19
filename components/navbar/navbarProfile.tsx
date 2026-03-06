"use client";

import React, { useEffect } from "react";
import {
  Code,
  Codesandbox,
  FileQuestion,
  HomeIcon,
  Lightbulb,
  NotebookIcon,
  Workflow,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

export const NavbarProfile = () => {
  const t = useTranslations("Navbar");

  const scrollToSection = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const hash = window.location.hash;
    console.log(hash);
    if (hash) {
      const targetId = hash.substring(1);
      scrollToSection(targetId);
    }

    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        const href = link.getAttribute("href");

        if (href && href.startsWith("#")) {
          const targetId = href.substring(1);
          scrollToSection(targetId);
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", () => {});
      });
    };
  }, []);

  const pages = [
    { href: "#home", icon: HomeIcon, label: t("Home") },
    { href: "#about", icon: FileQuestion, label: t("About") },
    { href: "#skill", icon: Code, label: "Skill" },
    { href: "#education", icon: NotebookIcon, label: t("Education") },
    { href: "#resume", icon: Workflow, label: t("Resume") },
    { href: "#projects", icon: Codesandbox, label: t("Projects") },
    { href: "#hobbies", icon: Lightbulb, label: t("Hobbies") },
  ];

  return (
    <div className="sm:hidden md:flex flex-col gap-2 items-start mt-4">
      {pages.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "w-full nav-link text-secondary sm:text-md md:text-lg flex flex-row gap-2",
          )}
        >
          <item.icon className="size-4 m-1 text-primary" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};


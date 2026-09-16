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
import { ArrowUpRight } from "lucide-react";

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
    <nav className="grid grid-cols-1 gap-px bg-border border border-border font-mono">
      {pages.map((item, i) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "nav-link group flex items-center justify-between gap-2 bg-card px-3 py-2.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
          )}
        >
          <span className="flex items-center gap-2.5 min-w-0">
            <span className="text-[10px] text-muted-foreground/60 tabular-nums">
              0{i + 1}
            </span>
            <item.icon className="size-4 shrink-0" />
            <span className="truncate">{item.label}</span>
          </span>
          <ArrowUpRight className="size-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
        </Link>
      ))}
    </nav>
  );
};

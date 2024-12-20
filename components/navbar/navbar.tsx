"use client"
import React, { useEffect } from "react";
import DarkTheme from "@/components/dark-theme";
import Link from "next/link";
import NavLangue from "./navLangue";
import { getLocale, getTranslations } from 'next-intl/server';
import { Dock, DockIcon } from "../container/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { CodeIcon, Download, FileQuestion, HomeIcon, Lightbulb, NotebookIcon, PencilLine, Workflow } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { useTranslations } from "next-intl";

const Navbar: React.FC = () => {
  const t = useTranslations('Navbar');

  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');

    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  const pages = [
    { href: "#home", icon: HomeIcon, label: "Home" },
    { href: "#about", icon: FileQuestion, label: "About" },
    { href: "#resume", icon: Workflow, label: "Resume" },
    { href: "#education", icon: NotebookIcon, label: "Education" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#hobbies", icon: Lightbulb, label: "Hobbies" },
  ];

  const handleDownload = () => {
    window.open('/assets/CV-Hermann_Razafindranaivo.pdf', '_blank');
  }

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {pages.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
            <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 nav-link"
                  )}
                  target={item.label === "Download" ? "_blank" : ""}
                >
                  <item.icon className="size-4 ml-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <DockIcon>
            <Tooltip>
            <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn( "size-12 nav-link" )}
                  onClick={handleDownload}
                >
                  <Download className="size-4 ml-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Download</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
         <Separator orientation="vertical" className="h-full py-2" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <DarkTheme />
            </TooltipTrigger>
            <TooltipContent>
              <p>Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLangue />
            </TooltipTrigger>
            <TooltipContent>
              <p>Langue</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
};

export default Navbar;

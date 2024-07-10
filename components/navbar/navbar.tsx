"use client"
import React, { useEffect } from "react";
import DarkTheme from "@/components/dark-theme";
import Link from "next/link";
import NavLangue from "./navLangue";
import { getLocale, getTranslations } from 'next-intl/server';
import { Dock, DockIcon } from "../container/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { CodeIcon, FileQuestion, HomeIcon, NotebookIcon, PencilLine, Workflow } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
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
    { href: "#", icon: PencilLine, label: "Notes" },
  ];

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
                >
                  <item.icon className="m-1 size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
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
    // <header className="sticky top-0 flex h-16 z-10 items-center gap-1 border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6">
    //   <Link
    //     href="/"
    //     className="flex items-center gap-6 text-lg font-semibold md:text-base"
    //   >
    //     <span className="font-semibold">Midas</span>
    //   </Link>
    //   <NavbarSheet pages={pages} />

    //   <nav className="flex flex-col text-lg font-medium sm:hidden md:flex justify-end md:flex-row md:items-center md:gap-3 md:text-sm lg:gap-6">
    //     {pages.map((page) => (
    //       <Link
    //         key={page.name}
    //         href={page.link}
    //         className="text-muted-foreground transition-colors hover:text-foreground w-[8vw]"
    //       >
    //         {page.name}
    //       </Link>
    //     ))}
    //   </nav>

    //   <div className="flex w-full justify-end gap-4 md:ml-auto md:gap-2 lg:gap-4">
    //     <NavLangue />
    //     <DarkTheme />
    //   </div>
    // </header>
  );
};

export default Navbar;

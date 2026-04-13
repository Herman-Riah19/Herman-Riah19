"use client";
import React from "react";
import { DarkTheme } from "@/components/dark-theme";
import NavLangue from "@/components/navbar/navLangue";
import { Dock, DockIcon } from "@/components/ui/dock";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CreditCard, Download, Home, Info, Phone, Rss, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export function Navbar () {
  const locale = useLocale();
  const route = useRouter(); 

  const handleDownload = () => {
    window.open(locale === "fr" ? 
      "/assets/CV_RAZAFINDRANAIVO_Hermann_Christian.pdf" : 
      "/assets/EN_CV_Hermann_Christian_-_dev_fullstack.pdf", "_blank");
  };

  const handleRedirect = (path: string) => {
    route.push(`/${locale}/${path}`);
  }

  const items = [
    {
      label: "Home",
      icon: <Home className="size-8" />,
      link: "/"
    },
    {
      label: "About",
      icon: <Info className="size-8" />,
      link: "/about"
    },
    {
      label: "Project",
      icon: <Store className="size-8" />,
      link: "/projects"
    },
    {
      label: "Pricing",
      icon: <CreditCard className="size-8" />,
      link: "/pricing"
    },
    {
      label: "Blog",
      icon: <Rss className="size-8" />,
      link: "/blog"
    },
    {
      label: "Contact",
      icon: <Phone className="size-8" />,
      link: "/contact"
    },
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 lg:left-24 mx-auto mb-4 flex origin-bottom h-full max-h-14">
      <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ">
        {items.map((item, idx) => (
        <DockIcon key={idx}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("size-12 nav-link flex items-center justify-center w-full")}
                onClick={() => handleRedirect(item.link)}
              >
                {item.icon}
              </Button>
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
                className={cn("size-12 nav-link flex items-center justify-center w-full")}
                onClick={handleDownload}
              >
                <Download className="size-8" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Download</p>
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
      </Dock>
    </div>
  );
};

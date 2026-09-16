"use client";
import React from "react";
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
      icon: <Home className="size-4" />,
      link: "/"
    },
    {
      label: "About",
      icon: <Info className="size-4" />,
      link: "/about"
    },
    {
      label: "Project",
      icon: <Store className="size-4" />,
      link: "/projects"
    },
    {
      label: "Pricing",
      icon: <CreditCard className="size-4" />,
      link: "/pricing"
    },
    {
      label: "Blog",
      icon: <Rss className="size-4" />,
      link: "/blog"
    },
    {
      label: "Contact",
      icon: <Phone className="size-4" />,
      link: "/contact"
    },
  ]

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14 font-mono">
      <Dock className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 gap-px">
        {items.map((item, idx) => (
        <DockIcon key={idx} className="rounded-none">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("size-10 rounded-none nav-link flex items-center justify-center w-full text-muted-foreground hover:text-foreground")}
                onClick={() => handleRedirect(item.link)}
              >
                {item.icon}
              </Button>
            </TooltipTrigger>
            <TooltipContent className="rounded-none border border-border bg-card font-mono text-[10px] uppercase tracking-widest">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        ))}
        <DockIcon className="rounded-none">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("size-10 rounded-none nav-link flex items-center justify-center w-full text-muted-foreground hover:text-foreground")}
                onClick={handleDownload}
              >
                <Download className="size-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="rounded-none border border-border bg-card font-mono text-[10px] uppercase tracking-widest">
              <p>Download</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon className="rounded-none">
          <Tooltip>
            <TooltipTrigger asChild>
              <NavLangue />
            </TooltipTrigger>
            <TooltipContent className="rounded-none border border-border bg-card font-mono text-[10px] uppercase tracking-widest">
              <p>Langue</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
};

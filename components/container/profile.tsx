"use client";

import React from "react";
import BlurFade from "@/components/container/blur-fade";
import { BLUR_FADE_DELAY } from "@/lib/constant";
import { EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { MapPin, Phone } from "lucide-react";
import { NavbarProfile } from "@/components/navbar/navbarProfile";
import { useSafeMotion } from "@/hooks/useSafeMotion";

export const Profile = () => {
  const safeMotion = useSafeMotion();

  return (
    <BlurFade
      delay={BLUR_FADE_DELAY}
      visibleByDefault={safeMotion}
      className="md:sticky md:top-24 flex flex-col"
    >
      <aside className="flex flex-col border border-border bg-card text-card-foreground shadow-sm font-mono overflow-hidden">
        <div className="flex items-center justify-between gap-2 border-b border-border px-4 py-3">
          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
            00 // Profile
          </span>
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Open
          </span>
        </div>

        <div className="p-2">
          <div className="relative w-full aspect-square overflow-hidden border border-border bg-background">
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div className="w-[85%] h-[85%] rounded-full border border-border" />
            </div>
            <span className="absolute top-3 right-3 text-xs font-serif text-muted-foreground/60 pointer-events-none z-10">
              力
            </span>
            <span className="absolute bottom-3 left-3 text-xs font-serif text-muted-foreground/60 pointer-events-none z-10">
              美
            </span>
            <img
              src="/assets/image/hero-portrait.jpg"
              alt="herman"
              data-testid="profile-image"
              className="relative h-full w-full object-cover object-container"
            />
          </div>
        </div>

        <div className="px-4 pb-3 flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-foreground shrink-0" />
          <span className="truncate">Antananarivo, Madagascar</span>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border border-y border-border">
          <a
            href="mailto:hermanrazafinbdranaivo@gmail.com"
            className="group flex items-center gap-3 bg-card px-4 py-3 hover:bg-accent transition-colors min-w-0"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-border bg-background shrink-0">
              <EnvelopeClosedIcon className="size-4" />
            </span>
            <span className="min-w-0">
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                Email
              </span>
              <span
                className="block truncate font-mono text-xs text-foreground"
                data-testid="profile-email"
              >
                hermanrazafinbdranaivo@gmail.com
              </span>
            </span>
          </a>
          <a
            href="tel:+261386062954"
            className="group flex items-center gap-3 bg-card px-4 py-3 hover:bg-accent transition-colors"
          >
            <span className="flex items-center justify-center w-8 h-8 border border-border bg-background shrink-0">
              <Phone className="size-4" />
            </span>
            <span>
              <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">
                Phone
              </span>
              <span
                className="block font-mono text-xs text-foreground"
                data-testid="profile-phone"
              >
                +261 38 60 629 54
              </span>
            </span>
          </a>
        </div>

        <div className="p-3">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground px-1 pb-2">
            Index // Nav
          </div>
          <NavbarProfile />
        </div>

        <div className="flex items-center justify-between border-t border-border px-4 py-3 text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>ED // 2026.1</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
            Active
          </span>
        </div>
      </aside>
    </BlurFade>
  );
};

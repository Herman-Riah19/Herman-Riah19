"use client"
import React from 'react'
import { useTranslations } from 'next-intl'
import { BlurFadeText } from '@/components/container/blur-fade-text';
import { BLUR_FADE_DELAY } from '@/lib/constant';
import { Terminal } from 'lucide-react';

export const Welcome = () => {
  const t = useTranslations('Welcome');
  
  return (
    <section className="w-full min-w-0 max-w-full overflow-hidden bg-background text-foreground font-mono border border-border">
      <div className="p-4 sm:p-8 space-y-3 min-w-0">
        <div className="flex items-center gap-2 text-xs uppercase text-muted-foreground tracking-widest">
          <Terminal className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">00 // System dossier</span>
        </div>
        <div className="flex flex-col space-y-1 min-w-0">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="font-serif text-[1.7rem] leading-[1.1] sm:text-5xl tracking-tight text-foreground break-words"
              yOffset={8}
              text={`${t("Presentation")}`}
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="font-serif text-lg leading-snug sm:text-3xl italic font-light tracking-tight text-muted-foreground break-words"
              yOffset={8}
              text={`${t("Developper")}`}
            />
        </div>
        <div className="flex items-center justify-between gap-2 pt-4 border-t border-border text-[10px] text-muted-foreground uppercase tracking-widest">
          <span className="truncate">Dossier // 00</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 bg-primary rounded-full"></span>
            Active
          </span>
        </div>
      </div>
    </section>
  )
}


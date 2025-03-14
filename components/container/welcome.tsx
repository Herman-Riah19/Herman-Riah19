"use client"
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import BlurFadeText from '@/components/container/blur-fade-text';
import { BLUR_FADE_DELAY } from '@/lib/constant';

const Welcome = () => {
  const t = useTranslations('Welcome')
  return (
    <section>
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="flex flex-col sm:items-center md:items-start sm:justify-center md:justify-start">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold sm:text-center md:text-start tracking-tighter sm:text-3xl xl:text-5xl/none"
              yOffset={8}
              text={`${t("Presentation")}`}
            />
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-xl font-thin tracking-tighter sm:text-3xl xl:text-5xl/none"
              yOffset={8}
              text={`${t("Developper")}`}
            />
        </div>
      </div>
    </section>
  )
}

export default Welcome


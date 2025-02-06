"use client"
import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import BlurFadeText from '@/components/container/blur-fade-text';
import BlurFade from '@/components/container/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BLUR_FADE_DELAY } from '@/lib/constant';

const Welcome = () => {
  const t = useTranslations('Welcome')
  return (
    <section id="hero">
      <div className="mx-auto w-full max-w-2xl space-y-8">
        <div className="gap-2 flex sm:block md:flex justify-between">
          <div className="flex-col flex flex-1 space-y-1.5">
            <BlurFadeText
              delay={BLUR_FADE_DELAY}
              className="text-3xl font-bold tracking-tighter sm:text-3xl xl:text-5xl/none"
              yOffset={8}
              text={`${t("Introduction")}`}
            />
            {/* <BlurFadeText
              className="max-w-[600px] md:text-xl text-justify"
              delay={BLUR_FADE_DELAY}
              text={t('Prompt')}
            /> */}
          </div>
          <BlurFade delay={BLUR_FADE_DELAY} className='m-2 flex items-center justify-center'>
            <Avatar className="size-28 sm:size-48 md:size-28 border">
              <AvatarImage alt={'herman'} src={"/assets/image/profile.jpg"} />
              <AvatarFallback>{"HR"}</AvatarFallback>
            </Avatar>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}

export default Welcome


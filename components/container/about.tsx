"use client"
import { BLUR_FADE_DELAY } from '@/lib/constant'
import React from 'react'
import BlurFade from './blur-fade'
import { useTranslations } from 'next-intl';
import Markdown from "react-markdown";

const About = () => {
  const t = useTranslations("Welcome");

  return (
    <section id="about" className='mt-2'>
      <BlurFade delay={BLUR_FADE_DELAY * 3}>
        <h2 className="text-xl font-bold">About</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 4} className='text-justify'>
        <Markdown className='prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert'>
          {t('About')}
        </Markdown>
      </BlurFade>
    </section>
  )
}

export default About
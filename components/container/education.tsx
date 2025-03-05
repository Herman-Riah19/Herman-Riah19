"use client"
import { BLUR_FADE_DELAY } from '@/lib/constant'
import { diplomes, ResumeModel } from '@/model/ResumeModel'
import React, { useEffect, useState } from 'react'
import { CardResume } from '../card/card-resume'
import BlurFade from './blur-fade'
import { useLocale } from 'next-intl'
import { diplomasEn } from '@/model/resumeModelEn'

const Education = () => {
  const local = useLocale();
  const [localDiplomes, setLocalDiplomes] = useState<ResumeModel[]>([])

  useEffect(() => {
    if(local === "fr") {
      setLocalDiplomes(diplomes)
    } else {
      setLocalDiplomes(diplomasEn)
    }
  }, [local])
  return (
    <section id="education">
        <div className="flex min-h-0 flex-col gap-y-1 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Educations</h2>
          </BlurFade>
          {localDiplomes.map((work, id) => (
            <BlurFade
              key={id}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <CardResume
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default Education
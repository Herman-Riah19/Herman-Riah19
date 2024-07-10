import { BLUR_FADE_DELAY } from '@/lib/constant'
import { diplome } from '@/model/ResumeModel'
import React from 'react'
import { CardResume } from '../card/card-resume'
import BlurFade from './blur-fade'

const Education = () => {
  return (
    <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Educations</h2>
          </BlurFade>
          {diplome.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <CardResume
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
  )
}

export default Education
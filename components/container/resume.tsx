import React from 'react'
import BlurFade from '@/components/container/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/constant'
import { experience } from '@/model/ResumeModel'
import { CardResume } from '@/components/card/card-resume'

const Resume = () => {
  return (
    <section id="resume">
        <div className="flex min-h-0 flex-col gap-y-3 mt-4">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {experience.map((work, id) => (
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

export default Resume
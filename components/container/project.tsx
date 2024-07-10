import React from 'react'
import { BLUR_FADE_DELAY } from '@/lib/constant';
import BlurFade from './blur-fade';
import { CardProject } from '../card/cardProject';
import { ProjectModel } from '@/model/ProjectModel';
import { useTranslations } from 'next-intl';

export const Projects = () => {
  const t = useTranslations('Project')
  return (
    <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t('Title')}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {t('Checkout')}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t('Description')}
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {ProjectModel.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <CardProject
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.date}
                  tags={project.technology}
                  image={project.img}
                  links={project.link}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
  )
}
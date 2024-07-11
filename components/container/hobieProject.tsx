import { BLUR_FADE_DELAY } from '@/lib/constant'
import React from 'react'
import BlurFade from './blur-fade'
import { hobies } from '@/model/ResumeModel'
import { CardResume } from '../card/card-resume'
import { useTranslations } from 'next-intl'

const HobieProject = () => {
    const t = useTranslations('Hobies')
    return (
        <section id="resume">
            <div className="flex min-h-0 flex-col gap-y-3 mt-4">
                <BlurFade delay={BLUR_FADE_DELAY * 13}>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                                {t('SideProject')}
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                               {t('Intro')}
                            </h2>
                            <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                {t('Description')}
                            </p>
                        </div>
                    </div>
                </BlurFade>
                {hobies.map((work, id) => (
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

export default HobieProject
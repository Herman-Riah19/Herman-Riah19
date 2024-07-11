import { BLUR_FADE_DELAY } from '@/lib/constant'
import React, { useEffect, useState } from 'react'
import BlurFade from './blur-fade'
import { hobbies, ResumeModel } from '@/model/ResumeModel'
import { useLocale, useTranslations } from 'next-intl'
import { CardHackathon } from '../card/card-hackathon'
import { hobbiesEn } from '@/model/resumeModelEn'

const HobieProject = () => {
    const t = useTranslations('Hobies')
    const local = useLocale();
    const [localHobies, setLocalHobies] = useState<ResumeModel[]>([])

    useEffect(() => {
        if (local === "fr") {
            setLocalHobies(hobbies)
        } else {
            setLocalHobies(hobbiesEn)
        }
    }, [local])
    return (
        <section id="hobbies">
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
                            <p className="prose max-w-full text-pretty font-sans text-lg text-muted-foreground dark:prose-invert">
                                {t('Description')}
                            </p>
                        </div>
                    </div>
                </BlurFade>
                <ul className='mb-4 ml-4 divide-y divide-dashed border-l'>
                {localHobies.map((work, id) => (
                    <BlurFade
                        key={work.company}
                        delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                    >
                        <CardHackathon
                            key={work.company}
                            image={work.logoUrl}
                            location={work.company}
                            title={work.title}
                            links={work.href}
                            dates={`${work.start} - ${work.end ?? "Present"}`}
                            description={work.description}
                        />
                    </BlurFade>
                ))}
                </ul>
            </div>
        </section>
    )
}

export default HobieProject
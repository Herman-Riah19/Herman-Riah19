
import React from 'react'
import TechnologieEn from "@/markdown/technologie_en.mdx"
import TechnologieFr from "@/markdown/technologie_fr.mdx"
import { useLocale } from 'next-intl'
import BlurFade from '@/components/container/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/constant'

const ListTech = () => {
    const local = useLocale()
    return (
        <section id="skill" className='mt-2'>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">Skill</h2>
            </BlurFade>
            <div className='prose max-w-full text-pretty font-sans text-md text-muted-foreground dark:prose-invert'>
                {local === "fr" ? <TechnologieFr /> : <TechnologieEn />}
            </div>
        </section>

    )
}

export default ListTech
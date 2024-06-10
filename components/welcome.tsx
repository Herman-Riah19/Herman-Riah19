import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale, useTranslations } from 'next-intl'
import { TechnologieModel } from '@/model/TechnologieModel'
import { ScrollArea } from '@/components/ui/scroll-area'
import AnimateFeature from './animation/animateFeature'
import CardTechnologie from './card/card-techno'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div className=' m-2'>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='h-[40vw]'>
                        <CardHeader className='m-5'>
                            <Badge className='w-32 m-2'>
                                {t('Based')}
                            </Badge>
                            <CardTitle className="sm:text-[3.4vw] lg:text-[4vw] 2xl:text-[3.8vw] font-normal uppercase m-2">
                                {t('Introduction')}
                            </CardTitle>
                            <CardDescription className='text-lg m-2 mt-10'>
                                {t('Prompt')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea>
                                <AnimateFeature>
                                    <div className='flex gap-2 w-max space-x-4 p-4'>
                                        {TechnologieModel.map(tech => (
                                            <CardTechnologie
                                                id={tech.id} 
                                                name={tech.name}
                                                language={tech.language}
                                                type={tech.type}
                                                icon={tech.icon}
                                                star={tech.star}/>
                                        ))}
                                    </div>
                                </AnimateFeature>
                            </ScrollArea>                            
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2 sm:hidden md:block'>
                    <Card className="h-full lg:col-span-3">
                        <CardContent
                            className="lg:h-[40vw] sm:h-full w-full rounded"
                            style={{ background: `url('/assets/image/profile.jpg') no-repeat center / cover` }} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Welcome
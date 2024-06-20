import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale, useTranslations } from 'next-intl'
import { TechnologieModel } from '@/model/TechnologieModel'
import { ScrollArea } from '@/components/ui/scroll-area'
import AnimateFeature from './animation/animateFeature'
import CardButtonTech from './card/cardButtonTech'
import InfoContact from './container/info-contact'
import { StarFilledIcon, ColorWheelIcon } from '@radix-ui/react-icons'
import { Link, PenTool, PenLine, Crop, SendToBack, ImageUp, DraftingCompass, Replace } from 'lucide-react'
import { Button } from './ui/button'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='xl:h-[30.5vw] lg:h-[40vw]'>
                        <CardHeader className='m-2'>
                            <div className="h-20 w-20 mb-1">
                                <Card
                                    className="h-full lg:col-span-3 rounded-[20vw] bg-secondary"
                                    style={{ background: `url('/assets/image/profile.jpg') no-repeat center / cover` }} >

                                </Card>
                            </div>
                            <CardTitle className="sm:text-[3vw] lg:text-[4vw] 2xl:text-[3vw] text-indent font-normal uppercase m-2">
                                {t('Introduction')}
                            </CardTitle>
                            <span className='sm:text-[3vw] lg:text-[4vw] 2xl:text-[3vw] font-bold uppercase text-secondary'>
                                {t('Developper')}
                            </span>
                        </CardHeader>
                        <CardContent>
                            <InfoContact />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2 sm:hidden md:block'>
                    <Card className="h-full lg:col-span-3">
                        <CardContent
                            className="xl:h-full lg:h-[38vw] sm:h-full w-full rounded"
                            style={{ background: "url('/assets/image/trink.png') no-repeat center / cover" }} />
                    </Card>
                </div>
            </div>
            <div className="sm:block md:grid grid-cols-5 gap-2 m-2">
                <Card className='sm:m-1 md:m-auto bg-secondary/20 dark:bg-secondary md:h-[26vw] lg:h-[20vw] xl:h-[14vw]'>
                    <CardHeader className="text-start m-2">
                        <CardTitle className="dark:text-white text-[3.5vw] w-[3.5vw]">48%</CardTitle>
                        <CardDescription className='text-start text-[#000] dark:text-white text-md'>
                            {t('SaveTime')}
                        </CardDescription>
                    </CardHeader>
                </Card>
                <Card className="sm:m-1 md:m-auto bg-primary/10 dark:bg-primary/50 md:h-[26vw] lg:h-[20vw] xl:h-[14vw]">
                    <CardHeader className="text-center">
                        <CardTitle className="flex justify-start m-2">
                            <StarFilledIcon className='h-[5vw] w-[5vw]' />
                        </CardTitle>
                        <CardDescription className='text-start text-[#000] dark:text-white text-md'>
                            {t('Goal')}
                        </CardDescription>
                    </CardHeader>
                </Card>
                <div className='sm:m-1 md:m-1 md:col-span-3'>
                    <Card className=" bg-accent/50 xl:h-[14vw] w-full mr-2">
                        <CardHeader className="text-start">
                            <CardTitle className="text-[2vw] uppercase">{t('Feature')}</CardTitle>
                            <CardDescription>{t('ChooseTool')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea>
                                <AnimateFeature>
                                    <div className='flex gap-2 w-max'>
                                        {TechnologieModel.map((tech) => (
                                            <div key={tech.id}>
                                                <CardButtonTech name={tech.name} icon={tech.icon} />
                                            </div>
                                        ))}
                                    </div>
                                </AnimateFeature>
                            </ScrollArea>

                        </CardContent>
                    </Card>
                </div>

            </div>
        </div>
    )
}

export default Welcome


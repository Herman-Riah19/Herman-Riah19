import { TechnologieModel } from '@/model/TechnologieModel'
import { StarFilledIcon } from '@radix-ui/react-icons'
import { ScrollArea } from '@radix-ui/react-scroll-area'
import React from 'react'
import AnimateFeature from '../animation/animateFeature'
import CardButtonTech from '../card/cardButtonTech'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../ui/card'
import { useTranslations } from 'next-intl'

const ListService = () => {
    const t = useTranslations('Welcome')
    return (
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
    )
}

export default ListService
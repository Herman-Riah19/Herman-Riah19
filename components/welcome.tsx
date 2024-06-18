import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale, useTranslations } from 'next-intl'
import { TechnologieModel } from '@/model/TechnologieModel'
import { ScrollArea } from '@/components/ui/scroll-area'
import AnimateFeature from './animation/animateFeature'
import CardButtonTech from './card/cardButtonTech'
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Github, Twitter, Instagram, Facebook, FacebookIcon } from 'lucide-react'
import { Button } from './ui/button'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div className=' m-2'>
            <div className="grid grid-cols-3 sm:block lg:grid gap-5 m-2">
                <div className='md:mb-2 col-span-2'>
                    <Card className='h-[40vw]'>
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
                        <CardContent className='m-1'>
                            <div className='grid grid-cols-3'>
                                <Card className='h-20 text-center bg-primary text-muted'>
                                    <CardTitle className='font-bold text-center text-lg uppercase'>Experiences</CardTitle>
                                    <CardDescription className='text-lg m-1'>3 ans</CardDescription>
                                </Card>
                                <Card className='h-20 text-center bg-primary text-muted'>
                                    <CardTitle className='font-bold text-center text-lg uppercase'>Projets</CardTitle>
                                    <CardDescription className='text-lg m-1'>5</CardDescription>
                                </Card>
                                <Card className='h-20 text-center bg-primary text-muted'>
                                    <CardTitle className='font-bold text-center text-lg uppercase'>Satify customer</CardTitle>
                                    <CardDescription className='text-lg m-1'>5</CardDescription>
                                </Card>
                            </div>
                            <ul className='grid grid-cols-2 gap-1 m-2'>
                                <li>
                                    <Button variant="outline" className='flex gap-4 bg-transparent w-full'>
                                        <Github />
                                        <span className='text-md text-secondarytext-normal'>Herman-Ria19</span>
                                    </Button>
                                </li>
                                <li >
                                    <Button variant="outline" className='flex gap-4 bg-transparent w-full'>
                                        <Twitter />
                                        <span className='text-md text-secondarytext-normal'>@hermannriah</span>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="outline" className='flex gap-4 bg-transparent w-full'>
                                        <Instagram />
                                        <span className='text-md text-secondarytext-normal'>@HermanRiah</span>
                                    </Button>
                                </li>
                                <li>
                                    <Button variant="outline" className='flex gap-4 bg-transparent w-full text-start'>
                                        <FacebookIcon />
                                        <span className='text-md text-secondarytext-normal'>Herman Riah Christian</span>
                                    </Button>
                                </li>
                                <li className='col-span-2'>
                                    <Button variant="outline" className='flex gap-4 bg-transparent w-full'>
                                        <EnvelopeClosedIcon />
                                        <span className='text-md text-secondarytext-normal'>hermanrazafinbdranaivo@gmail.com</span>
                                    </Button>
                                </li>
                            </ul>
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
                <div className='sm:hidden md:block'>
                    <div className='grid'>
                        <Card className="h-full lg:col-span-3 rounded-[0px] bg-secondary">
                            <CardContent
                                className="lg:h-[40vw] sm:h-full w-full rounded"
                                style={{ background: `url('/assets/image/profile-remove.png') no-repeat center / cover` }} />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome
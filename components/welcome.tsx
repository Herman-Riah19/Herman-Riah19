import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useLocale, useTranslations } from 'next-intl'
import InfoContact from './container/info-contact'
import { CloudDemo } from './container/tech/cloud'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='xl:h-[30.5vw] lg:h-[41vw]'>
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
                    <Card className="h-full lg:col-span-3 border-none bg-transparent">
                        <CardContent className="xl:h-full sm:h-full w-full rounded">
                            <CloudDemo />
                        </CardContent>
                    </Card>
                </div>
            </div>
            
        </div>
    )
}

export default Welcome


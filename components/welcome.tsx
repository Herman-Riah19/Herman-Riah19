import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { useLocale, useTranslations } from 'next-intl'
import InfoContact from './container/info-contact'
import { CloudDemo } from './container/tech/cloud'
import Presentation from './container/presentation'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='xl:h-[30.5vw] lg:h-[41vw] border-none'>
                        <CardHeader className='m-2 flex flex-col text-center'>
                            <Card
                                className=" h-20 w-20 lg:col-span-3 rounded-[20vw] bg-secondary"
                                style={{ background: `url('/assets/image/profile.jpg') no-repeat center / cover` }} >
                            </Card>

                        </CardHeader>
                        <CardContent>
                            <Presentation />
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

        </div >
    )
}

export default Welcome


"use client"
import React from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { useLocale, useTranslations } from 'next-intl'
import Technologie from "@/markdown/technologie.mdx";

const Welcome = () => {
    const t = useTranslations('Welcome')
    return (
        <div className='flex flex-col text-center'>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='xl:h-[30.5vw] lg:h-[41vw] border-none'>
                        <CardHeader className='m-2 flex flex-col '>
                            <h1 className='text-left max-w-md md:max-w-3xl text-3xl md:text-4xl mr-auto lg:text-6xl font-geist font-normal leading-0 md:leading-0 md:pb-0 mt-1'>
                                {t("Introduction")}
                            </h1>
                            <p className='text-left text-md text-primary m-2'>{t('Prompt')}</p>
                        </CardHeader>
                        <CardContent >
                            <Technologie />
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2 sm:hidden md:block'>
                    <Card
                        className=" h-[40vw] w-[30vw] lg:col-span-3 rounded-[20vw] bg-secondary"
                        style={{ background: `url('/assets/image/profile.jpg') no-repeat center / cover` }} >
                    </Card>
                </div>
            </div>

        </div >
    )
}

export default Welcome


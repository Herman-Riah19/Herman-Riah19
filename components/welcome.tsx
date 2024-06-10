import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const Welcome = () => {
    const t = useTranslations('Welcome')
    const locale = useLocale()
    return (
        <div className=' m-2'>
            <div className="grid grid-cols-5 sm:block lg:grid gap-5 m-2">
                <div className='col-span-3 md:mb-2'>
                    <Card className='xl:h-[30.5vw] lg:h-[100vw] bg-red'>
                        <CardHeader>
                            <Badge className='w-32'>
                                {t('Based')}
                            </Badge>
                            <CardTitle className="sm:text-[3.4vw] lg:text-[4vw] 2xl:text-[3.8vw] font-normal uppercase">
                                {t('Introduction')}
                            </CardTitle>
                            <CardDescription className='text-lg'>
                                {t('Prompt')}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href={`/${locale}/midas/generate`}>
                                <Button className='rounded-full'>{t('Generate')}</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
                <div className='col-span-2 sm:hidden md:block'>
                    <Card className="h-full lg:col-span-3">
                        <CardContent
                            className="xl:h-full lg:h-[100vw] sm:h-full w-full rounded"
                            style={{ background: `url('/assets/image/profile-remove.png') no-repeat center / cover` }} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Welcome
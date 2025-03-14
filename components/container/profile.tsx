"use client"
import React from 'react'
import BlurFade from '@/components/container/blur-fade';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BLUR_FADE_DELAY } from '@/lib/constant';
import { Button } from '@/components/ui/button';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import { Phone } from 'lucide-react';
import NavbarProfile from '@/components/navbar/navbarProfile';

const Profile = () => {
    return (
        <BlurFade delay={BLUR_FADE_DELAY} className='md:fixed flex flex-col sm:items-center md:items-start sm:justify-center md:justify-start'>
            <Avatar className="size-48 border">
                <AvatarImage alt={'herman'} src={"/assets/image/profile.jpg"} />
                <AvatarFallback>{"HR"}</AvatarFallback>
            </Avatar>
            <ul style={{listStyleType: "none"}} className="flex flex-col m-0">
                <li className='col-span-2'>
                    <Button variant="outline" className='w-full p-0 shadow-none bg-transparent text-secondary border-none gap-2 text-start'>
                        <EnvelopeClosedIcon className='size-4 m-1' />
                        <span className='sm:text-[12px] md:text-md text-normal'>hermanrazafinbdranaivo@gmail.com</span>
                    </Button>
                </li>
                <li>
                    <Button variant="outline" className='w-full p-0 shadow-none bg-transparent text-secondary border-none gap-2 text-start'>
                        <Phone className='size-4 m-1' />
                        <span className='sm:text-md md:text-lg font-normal'>+261 38 60 629 54</span>
                    </Button>
                </li>
            </ul>
            <NavbarProfile />
        </BlurFade>
    )
}

export default Profile
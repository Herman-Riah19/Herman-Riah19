import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Github, Twitter, Instagram, FacebookIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const InfoContact = () => {
    return (
        <ul className='md:grid sm:block grid-cols-2 gap-1 m-2'>
            <li className='m-2'>
                <Button variant="outline" className='p-0 bg-red border-none gap-2 w-full text-start'>
                    <Github />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>Herman-Ria19</span>
                </Button>
            </li>
            <li >
                <Button variant="outline" className='p-0 bg-red border-none gap-2 w-full text-start'>
                    <Twitter />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>@hermannriah</span>
                </Button>
            </li>
            <li className='m-2'>
                <Button variant="outline" className='p-0 bg-red border-none gap-2 w-full text-start'>
                    <Instagram />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>@HermanRiah</span>
                </Button>
            </li>
            <li className='m-2'>
                <Button variant="outline" className='p-0 bg-red border-none gap-2 w-full text-start'>
                    <FacebookIcon />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>Herman Riah Christian</span>
                </Button>
            </li>
            <li className='m-2'>
                <Button variant="outline" className='p-0 bg-red border-none gap-2 w-full text-start'>
                    <EnvelopeClosedIcon />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>hermanrazafinbdranaivo@gmail.com</span>
                </Button>
            </li>
        </ul>
    )
}

export default InfoContact
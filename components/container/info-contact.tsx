import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Github, Twitter, Instagram, FacebookIcon } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const InfoContact = () => {
    return (
        <ul className='md:grid sm:block grid-cols-3 gap-1 m-2'>
            <li className='col-span-2'>
                <Button variant="secondary" className='w-full p-0 bg-red border-none gap-2 text-start'>
                    <EnvelopeClosedIcon />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>hermanrazafinbdranaivo@gmail.com</span>
                </Button>
            </li>
            <li>
                <Button variant="secondary" className='w-full p-0 bg-red border-none gap-2 text-start'>
                    <Github />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>Herman-Ria19</span>
                </Button>
            </li>
            <li >
                <Button variant="secondary" className='w-full p-0 bg-red border-none gap-2 text-start'>
                    <Twitter />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>@hermannriah</span>
                </Button>
            </li>
            <li>
                <Button variant="secondary" className='w-full p-0 bg-red border-none gap-2 text-start'>
                    <Instagram />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>@HermanRiah</span>
                </Button>
            </li>
            <li>
                <Button variant="secondary" className='w-full p-0 bg-red border-none gap-2 text-start'>
                    <FacebookIcon />
                    <span className='sm:text-[12px] md:text-md text-white text-normal'>Herman Riah Christian</span>
                </Button>
            </li>
            
        </ul>
    )
}

export default InfoContact
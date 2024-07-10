import { EnvelopeClosedIcon } from '@radix-ui/react-icons'
import { Github, Twitter, Instagram, FacebookIcon } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import BlurFade from '@/components/container/blur-fade'
import { BLUR_FADE_DELAY } from '@/lib/constant'

const InfoContact = () => {
    return (
        <section id="about" className='mt-2'>
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <h2 className="text-xl font-bold">Contact</h2>
            </BlurFade>
            <ul className='md:grid sm:block grid-cols-3 gap-1 m-2'>
                <li className='col-span-2'>
                    <Button variant="secondary" className='w-full p-0 bg-secondary border-none gap-2 text-start'>
                        <EnvelopeClosedIcon className='m-2' />
                        <span className='sm:text-[12px] md:text-md text-normal'>hermanrazafinbdranaivo@gmail.com</span>
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" className='w-full p-0 bg-secondary border-none gap-2 text-start'>
                        <Github className='m-2' />
                        <span className='sm:text-[12px] md:text-md text-normal'>Herman-Ria19</span>
                    </Button>
                </li>
                <li >
                    <Button variant="secondary" className='w-full p-0 bg-secondary border-none gap-2 flex flex-row text-start'>
                        <Twitter className='m-2' />
                        <span className='sm:text-[12px] md:text-md text-normal'>@hermannriah</span>
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" className='w-full p-0 bg-secondary border-none gap-2 text-start'>
                        <Instagram className='m-2' />
                        <span className='sm:text-[12px] md:text-md text-normal'>@HermanRiah</span>
                    </Button>
                </li>
                <li>
                    <Button variant="secondary" className='w-full p-0 bg-secondary border-none gap-2 text-start'>
                        <FacebookIcon className='m-2' />
                        <span className='sm:text-[12px] md:text-md text-normal'>Herman Riah Christian</span>
                    </Button>
                </li>

            </ul>
        </section>

    )
}

export default InfoContact
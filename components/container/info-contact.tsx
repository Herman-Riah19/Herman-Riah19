"use client"

import React from 'react';
import { Github, Twitter, Instagram, FacebookIcon } from 'lucide-react';
import Link from 'next/link';

const InfoContact = () => {
    return (
        <section className='mt-2'>
            <ul style={{listStyleType: "none"}} className='md:grid sm:block grid-cols-3 gap-2 m-2'>
                <li>
                    <Link href="https://github.com/Herman-Riah19" className='w-full rounded-md flex flex-row p-0 bg-secondary border-none gap-2 text-start text-white dark:text-black'>
                        <Github className='m-2' />
                        <span className='sm:text-md md:text-lg text-normal mt-2'>Herman-Ria19</span>
                    </Link>
                </li>
                <li >
                    <Link href="https://x.com/HermannRiah" className='w-full rounded-md flex flex-row p-0 bg-secondary border-none gap-2 text-start text-white dark:text-black'>
                        <Twitter className='m-2' />
                        <span className='sm:text-md md:text-lg text-normal mt-2'>@hermannriah</span>
                    </Link>
                </li>
                <li>
                    <Link href="https://web.facebook.com/riah.hermann/" className='w-full rounded-md flex flex-row p-0 bg-secondary border-none gap-2 text-start text-white dark:text-black'>
                        <FacebookIcon className='m-2' />
                        <span className='sm:text-md md:text-lg text-normal mt-2'>Herman Riah Christian</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}

export default InfoContact
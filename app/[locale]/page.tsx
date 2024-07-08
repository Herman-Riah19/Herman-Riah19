import About from '@/components/container/about'
import Features from '@/components/container/features'
import Hero from '@/components/container/hero'
import InfoContact from '@/components/container/info-contact'
import ListTech from '@/components/container/listTech'
import { AnimatedListDemo } from '@/components/container/listTechAnimate'
import Presentation from '@/components/container/presentation'
import { CloudDemo } from '@/components/container/tech/cloud'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/welcome'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'

const HermanPage = () => {
  const message = useMessages()

  return (
    <div>
      <NextIntlClientProvider messages={message}>
        <Navbar />
      </NextIntlClientProvider>
      <section>
        <Welcome />
        <Hero />
        <Features />
      </section>
      <Footer />
    </div>
  )
}

export default HermanPage
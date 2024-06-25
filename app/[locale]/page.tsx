import About from '@/components/container/about'
import Features from '@/components/container/features'
import Hero from '@/components/container/hero'
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
      <main role='main'>
      <img
        className="absolute top-0 z-0 -translate-y-1/2"
        src={"https://farmui.vercel.app/bg-back.png"}
        width={1000}
        height={1000}
        alt="back bg"
      />
      <div className="absolute -z-1 inset-0  h-[600px] w-full bg-transparent opacity-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        <Hero />
        <AnimatedListDemo />
        <About />
        <CloudDemo />
        <Welcome />
        <Features />
      </main>
      <Footer  />
    </div>
  )
}

export default HermanPage
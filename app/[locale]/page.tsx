
import About from '@/components/container/about'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/container/welcome'
import React from 'react'
import ListTech from '@/components/container/listTech'
import InfoContact from '@/components/container/info-contact'
import { AnimatedListDemo } from '@/components/container/listTechAnimate'
import Resume from '@/components/container/resume'

const HermanPage = () => {
  return (
    <div>
        <Navbar />
        <section>
          <Welcome />
          <About />
          <InfoContact />
          <ListTech />
          <AnimatedListDemo />
          <Resume />
        </section>
        <Footer />
    </div>
  )
}

export default HermanPage
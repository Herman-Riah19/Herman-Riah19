"use client"
import About from '@/components/container/about'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/container/welcome'
import React from 'react'
import ListTech from '@/components/container/listTech'
import InfoContact from '@/components/container/info-contact'
import Resume from '@/components/container/resume'
import Education from '@/components/container/education'
import { Projects } from '@/components/container/project'
import HobieProject from '@/components/container/hobieProject'
import { AnimatedListDemo } from '@/components/container/listTechAnimate'

const HermanPage = () => {
  
  return (
    <div>
      <Navbar />
      <section id="home">
        <Welcome />
        <About />
        <InfoContact />
        <Resume />
        <Education />
        <ListTech />
        <AnimatedListDemo />
        <Projects />
        <HobieProject />
      </section>
      <Footer />
    </div>
  )
}

export default HermanPage
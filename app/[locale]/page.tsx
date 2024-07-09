
import Features from '@/components/container/features'
import Hero from '@/components/container/hero'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/welcome'
import React from 'react'

const HermanPage = () => {
  return (
    <div>
      
        <Navbar />

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
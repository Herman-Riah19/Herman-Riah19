
import About from '@/components/container/about'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar/navbar'
import Welcome from '@/components/container/welcome'
import React from 'react'

const HermanPage = () => {
  return (
    <div>
        <Navbar />
        <section>
          <Welcome />
          <About />
        </section>
        <Footer />
    </div>
  )
}

export default HermanPage
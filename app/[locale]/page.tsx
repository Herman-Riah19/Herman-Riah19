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
        <Welcome />
      </main>
    </div>
  )
}

export default HermanPage
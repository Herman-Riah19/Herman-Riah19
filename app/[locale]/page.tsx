import Navbar from '@/components/navbar/navbar'
import { NextIntlClientProvider, useMessages } from 'next-intl'
import React from 'react'

const HermanPage = () => {
  const message = useMessages()

  return (
    <div>
      <NextIntlClientProvider messages={message}>
        <Navbar />
      </NextIntlClientProvider>
    </div>
  )
}

export default HermanPage
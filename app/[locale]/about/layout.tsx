import React from 'react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Herman Riah",
  description: "Resume",
  icons: {
    icon: 'next.svg'
  }
}

const layout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="py-12 sm:py-24 px-6 max-w-6xl mx-auto">
        {children}
    </div>
  )
}

export default layout
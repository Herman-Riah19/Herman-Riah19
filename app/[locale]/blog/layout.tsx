import type { Metadata } from "next";
import React from 'react'

export const metadata: Metadata = {
  title: "Blog - Herman Riah",
  description: "All my blog",
  icons: {
    icon: 'next.svg'
  },
  authors: [{ name: "Herman Riah", url: "https://hermanriah.com" }],
  keywords: ["blog", "herman riah", "articles", "tech", "development"],
  openGraph: {
    title: "Blog - Herman Riah",
    description: "All my blog",
    url: "https://hermanriah.com/blog",
    siteName: "Herman Riah Blog",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Blog - Herman Riah"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Herman Riah",
    description: "All my blog",
    images: ["/og-image.png"]
  }
}

const LayoutBlog = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <div className="py-12 sm:py-16 px-6 max-w-6xl mx-auto">
        {children}
    </div>
  )
}

export default LayoutBlog
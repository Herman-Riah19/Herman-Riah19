import { Footer } from '@/components/footer'
import React from 'react'

export default function LayoutContent({ children }: { children: React.ReactNode}) {
  return (
    <div className="w-full bg-background text-foreground font-mono">
      <div className="mx-auto w-full max-w-[1400px] border-x border-border">
        {children}
      </div>
      <Footer />
    </div>
  )
}

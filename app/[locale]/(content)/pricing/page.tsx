import Features from '@/components/landing-page/features'
import Pricing from '@/components/landing-page/pricing'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import React from 'react'

export default function PagePricing() {
  return (
    <div className="flex flex-col gap-4 max-w-6xl mx-auto">
      <NeonGradientCard className="m-0 p-0">
        <Features />
        <Pricing />
      </NeonGradientCard>
    </div>
  )
}

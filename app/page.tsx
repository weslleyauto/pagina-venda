'use client'

import { useState, useEffect } from 'react'
import Hero from '@/components/sales/hero'
import WhatIs from '@/components/sales/what-is'
import ForWhom from '@/components/sales/for-whom'
import BeforeAfter from '@/components/sales/before-after'
import Science from '@/components/sales/science'
import Includes from '@/components/sales/includes'
import Testimonials from '@/components/sales/testimonials'
import SocialProof from '@/components/sales/social-proof'
import HowWorks from '@/components/sales/how-works'
import Pricing from '@/components/sales/pricing'
import FAQ from '@/components/sales/faq'
import FinalCTA from '@/components/sales/final-cta'

export default function Page() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <WhatIs />
      <ForWhom />
      <BeforeAfter />
      <Science />
      <Includes />
      <Testimonials />
      <SocialProof />
      <HowWorks />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  )
}

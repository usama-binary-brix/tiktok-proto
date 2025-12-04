import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import GradientBanner from './components/GradientBanner'
import HowItWorks from './components/HowItWorks'
import WhyChoose from './components/WhyChoose'
import WhatYouCanDo from './components/WhatYouCanDo'
import PayoutsTracking from './components/PayoutsTracking'
import Examples from './components/Examples'
import Footer from './components/Footer'
import { GoAlert } from 'react-icons/go'

function App() {
  const [showBetaBanner, setShowBetaBanner] = useState(true)

  return (
    <div className="min-h-screen bg-[#F0F4EF]">
      {/* Beta Banner */}

        {showBetaBanner && (
  <div
    className="bg-gradient-to-r from-[#6699FF] to-[#FF3366] text-white py-3 px-4 relative mx-[10%] mt-5 rounded-lg"
  >
   <p className="text-center text-sm md:text-base flex justify-center items-center gap-1">
  <span className="font-bold flex items-center gap-1">
    <GoAlert className="inline-block text-lg" />
    This platform is currently in Beta.
  </span>
  All tasks posted during beta are still fully paid.
</p>

    <button
      onClick={() => setShowBetaBanner(false)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
)}

   
      <Navbar />
      <Hero />
      <GradientBanner />
      <HowItWorks />
      <WhyChoose />
      <WhatYouCanDo />
      <PayoutsTracking />
      <Examples />
      <Footer />
    </div>
  )
}

export default App

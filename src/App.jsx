import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import Footer from './components/Footer'
import SetupOneKey from './components/SetupOneKey'
import FeatureGrid from './components/FeatureGrid'
import Slider from './components/Slider'
import HeroSection from './components/HeroSection'
import BlackWarpBackground from './components/BlackWrapBackground'
import RootLayout from './RootLayout'
function App() {
  return (
    <RootLayout>
      <div className='flex flex-col items-center py-8'>
      <Navbar />
      <HeroSection />
      <Slider />
      <FeatureGrid />
      <div className="mb-40">
        <Pg />
      </div>
      <BlackWarpBackground />
      <div className="mb-20 "> 
      <SetupOneKey />
      </div>
      <Footer />
    </div>
      </RootLayout>
    
  )
}

export default App

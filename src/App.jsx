import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import Footer from './components/Footer'
import SetupOneKey from './components/SetupOneKey'
import FeatureGrid from './components/FeatureGrid'
import Slider from './components/Slider'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center py-8'>
      <Navbar />
      <HeroSection />
      <Slider />
      <FeatureGrid />
      <div className="mb-40">
        <Pg />
      </div>
      <div className="mb-20">
        <SetupOneKey />
      </div>
      <Footer />
    </div>
  )
}

export default App

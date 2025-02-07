import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import Footer from './components/Footer'
import SetupOneKey from './components/SetUpOneKey'
import FeatureGrid from './components/FeatureGrid'
import Slider from './components/Slider'
import HeroSection from './components/HeroSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeroSection />
      <Slider />
      <FeatureGrid />
      <div className="mb-100"> {/* Added wrapper with margin-bottom */}
        <Pg />
      </div>
      <div className="mb-20 "> 
      <SetupOneKey />
      </div>
      <Footer />
    </>
  )
}

export default App
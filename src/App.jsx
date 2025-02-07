import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Pg from './components/Pg'
import Footer from './components/Footer'
import SetupOneKey from './components/SetupOneKey'
import FeatureGrid from './components/FeatureGrid'
import Slider from './components/Slider'
import HeroSection from './components/HeroSection'
import p1 from './assets/p1.png'
import p2 from './assets/p2.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col items-center py-8'>
      <Navbar />
      <HeroSection />
      <div className='w-full flex items-center justify-center -mt-45 relative h-[600px] z-10'>
        <div className='w-[500px] h-[500px] blur-sm shadow-2xl bg-purple-500 rounded-full'></div>
        <div className='bg-purple-500 h-[300px] w-[600px] blur-3xl rounded-full absolute bottom-0 left-[20%]
         '></div>
        <div className='bg-purple-500 h-[300px] w-[600px] blur-3xl rounded-full absolute top-0 right-[20%]
         '></div>
        <img src={p2} className='absolute top-0 left-[24%] w-[300px] ' />
        <img src={p1} className='absolute top-0 w-[1000px]' />
      </div>
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

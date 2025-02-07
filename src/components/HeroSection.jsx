import React from 'react';
import { useState } from 'react';

const HeroSection = () => {
  // const [hoveredButton, setHoveredButton] = useState(null);
  const [active, setActive] = useState('start');
  return (
    <div className="w-[90%]  bg-[#f3f4f6]  flex flex-col items-center justify-center pb-50 rounded-b-[40px] mb-10 ">
      <div className='w-full h-[85px] flex flex-row justify-between items-center'>
        <div className='w-1/5 h-full bg-white rounded-br-[40px] '></div>
        <div className='w-3/5 h-full bg-[white] flex flex-col items-center justify-start'>
          <div className='w-full h-full bg-[#f3f4f6] rounded-t-[40px] '>
          </div>
        </div>
        <div className='w-1/5 h-full bg-white rounded-bl-[40px] '></div>
      </div>
      <div className='w-full h-24 bg-white'>
        <div className='w-full h-full bg-[#f3f4f6] rounded-t-[40px]'>

        </div>
      </div>
      <h1 className="text-4xl mt-12 md:text-6xl lg:text-7xl font-bold text-center max-w-7xl mx-auto leading-tight tracking-wider text-gray-900">
        <span className="block mb-2">AI Agent + AI WhatsApp</span>
        <span className="block mb-2">Marketing Campaigns For</span>
        <span className="block mb-2">Ecom That Get You Sales &</span>
        <span className="block">Automate Support</span>
      </h1>


      <div className="flex mt-12 bg-white p-1 rounded-full relative items-center w-full max-w-md overflow-hidden">
        <div
          className={`absolute w-1/2 rounded-full bg-lime-300 z-10 h-[88%]  transition-transform duration-400 transform 
          ${active === 'book' ? 'translate-x-[215px]' : 'translate-x-0'}`}
        ></div>

        {/* The two buttons take equal space using flex-1 */}
        <button
          onMouseEnter={() => setActive('start')}
          onMouseLeave={() => setActive('start')}
          className="flex-1 px-8 py-3 rounded-full text-base font-medium z-20 transition-all duration-300 text-center cursor-pointer"
        >
          Start free trial
        </button>
        <button
          onMouseEnter={() => setActive('book')}
          onMouseLeave={() => setActive('start')}
          className="flex-1 px-8 py-3 rounded-full text-base font-medium z-20 transition-all duration-300 text-center cursor-pointer"
        >
          Book a demo
        </button>
      </div>
     

      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
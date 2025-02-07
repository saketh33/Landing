import React from 'react';
import { useState } from 'react';

const HeroSection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center px-4 py-20">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center max-w-6xl mx-auto leading-tight tracking-tight text-gray-900">
        <span className="block mb-2">AI Agent + AI WhatsApp</span>
        <span className="block mb-2">Marketing Campaigns For</span>
        <span className="block mb-2">Ecom That Get You Sales &</span>
        <span className="block">Automate Support</span>
      </h1>
      
      <div className="flex gap-4 mt-12">
        <button 
          className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border
            ${hoveredButton === 'trial' 
              ? 'bg-[#c3f53b]  border-transparent' 
              : 'bg-white text-gray-800 border-gray-200'}`}
          onMouseEnter={() => setHoveredButton('trial')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Start free trial
        </button>
        <button 
          className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 border
            ${hoveredButton === 'demo' 
              ? 'bg-[#c3f53b] text-black border-transparent' 
              : 'bg-white text-gray-800 border-gray-200'}`}
          onMouseEnter={() => setHoveredButton('demo')}
          onMouseLeave={() => setHoveredButton(null)}
        >
          Book a demo
        </button>
      </div>
      
      {/* Floating Contact Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4">
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
          </svg>
        </button>
        <button className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 hover:scale-110">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
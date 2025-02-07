import React from 'react';
import { Github } from 'lucide-react';
import one from '../assets/1.png';
import two from '../assets/2.png';

const OneKeySetup = () => {
  return (
    <div className="bg-gray-0 p-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Hardware Wallet Setup Card */}
          <div className="bg-[#eff1f3] p-8 rounded-2xl">
            <h2 className="text-5xl font-bold mb-4">Set up your OneKey hardware wallet</h2>
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-black hover:text-white transition-colors  border border-gray-800">
              Getting started
            </button>
            <div className="mt-8 flex justify-center">
              <img 
                src={one} 
                alt="Hardware wallet illustration" 
                className="h-75 w-auto"
              />
            </div>
          </div>

          {/* Multi-chain Support Card */}
          <div className="bg-[#eff1f3] p-8 rounded-2xl">
            <h2 className="text-5xl font-bold mb-4">Multi-chain support</h2>
            <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-black hover:text-white transition-colors border border-gray-800">
              Check the full list
            </button>
            <div className="mt-8 flex justify-center">
              <img 
                src={two} 
                alt="Multi-chain support illustration" 
                className="h-75 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Stay in Touch Section */}
        <div className="mt-8 bg-[#92baa3] p-8 rounded-2xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Stay in touch</h2>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-700 hover:text-gray-900">
                  <div className="w-6 h-6 rounded-full bg-gray-700" />
                </a>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <button className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 text-white text-sm font-medium cursor-pointer hover:bg-black hover:text-white transition-colors">
                Subscribe to our notifications
              </button>
              <p className="text-xs text-gray-600 mt-2 max-w-md">
                Subscribe to our notifications. (For privacy reason, please enter an email other than the one you used to purchase OneKey. We also regularly delete order information to protect your privacy.)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneKeySetup;
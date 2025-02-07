import React from "react";
import Marquee from "react-fast-marquee";
import Dalfilo from "../assets/Dalfilo.svg";
import Hike from "../assets/Hike.svg";
import Latch from "../assets/Latch.svg";
import lat from "../assets/Lat.svg";
import Liforme from "../assets/Liforme.svg";
import Crazy from "../assets/CrazyKFarm.svg";
import Byr from "../assets/Byr.svg";
import Paw from "../assets/Paw.svg";
import Pharma from "../assets/Pharma.svg";
import Supermedia from "../assets/Supermedia.svg";
import Jackery from "../assets/Jackery.svg";
import Tropicfeel from "../assets/Tropicfeel.svg";

const Slider = () => {
  const svgImages = [Dalfilo, Hike, Latch, lat, Liforme, Crazy, Byr, Paw, Pharma, Supermedia, Jackery, Tropicfeel];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="w-full max-w-full px-4">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 text-black">
          We Welcome Everyone Who Is Interested In
        </h1>

        <div className="space-y-12">
          {/* First Marquee with SVGs */}
          <div className="w-full overflow-hidden">
            <Marquee gradient={false} speed={40}>
              <div className="flex gap-8">
                {svgImages.map((Svg, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] 
                                rounded-lg mx-4 overflow-hidden
                              transition-colors duration-300
                              "
                  >
                    <img
                      src={Svg}
                      alt={`SVG ${index + 1}`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-center mt-16 text-gray-800 max-w-4xl mx-auto">
          And to turn this interest into a valuable asset for your academic
          research and data science career.
        </p>
      </div>
    </div>
  );
};

export default Slider;
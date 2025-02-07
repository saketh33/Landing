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
  const svgImages = [
    Dalfilo,
    Hike,
    Latch,
    lat,
    Liforme,
    Crazy,
    Byr,
    Paw,
    Pharma,
    Supermedia,
    Jackery,
    Tropicfeel,
  ];

  return (
    <div className="bg-white -mt-40 flex items-center justify-center mb-30 w-full">
      <div className="w-full">
        <div className="space-y-12 w-full">
          <div className="w-full overflow-hidden ">
            <Marquee
              gradient={false}
              speed={200}
              pauseOnHover={true}
              pauseOnClick={false}
              // autoFill={true}
              style={{ willChange: "transform" }} // Hint for GPU acceleration
            >
              {/* 
                Use inline-flex and whitespace-nowrap to ensure all images remain in a single row.
                This helps the marquee measure the content correctly for seamless looping.
              */}
              <div className="flex whitespace-nowrap ">
                {svgImages.map((Svg, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center w-[100px] h-[100px] rounded-lg mx-2 overflow-hidden transition-colors duration-100"
                  >
                    <img
                      src={Svg}
                      alt={`Brand Logo ${index + 1}`}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;

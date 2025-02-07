import React from "react";
import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-20">
      <div className="w-full max-w-full px-4">
        <h1 className="text-4xl md:text-5xl font-light text-center mb-16 text-black">
          We Welcome Everyone Who Is Interested In
        </h1>
        
        <div className="space-y-12">
          <div className="w-full overflow-hidden">
            <Marquee gradient={false} speed={40}>
              <div className="flex gap-8">
                {[
                  "Data Science",
                  "Machine Learning",
                  "Statistical Modeling",
                  "Deep Learning",
                  "Big Data Analytics",
                  "Data Visualization"
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center px-10 py-4 text-2xl md:text-3xl font-light 
                             border-2 border-black text-black rounded-lg mx-4
                             hover:bg-[#c3f53b]  transition-colors duration-300
                             shadow-md hover:shadow-xl whitespace-nowrap"
                  >
                    {text}
                  </div>
                ))}
              </div>
            </Marquee>
          </div>

          <div className="w-full overflow-hidden">
            <Marquee gradient={false} speed={40} direction="right">
              <div className="flex gap-8">
                {[
                  "Artificial Intelligence",
                  "Data Visualization",
                  "Big Data Analytics",
                  "Data Mining",
                  "Machine Learning",
                  "Deep Learning"
                ].map((text, index) => (
                  <div
                    key={index}
                    className="flex items-center px-10 py-4 text-2xl md:text-3xl font-light 
                             border-2 border-black text-black rounded-lg mx-4
                             hover:bg-[#c3f53b]  transition-colors duration-300
                             shadow-md hover:shadow-xl whitespace-nowrap"
                  >
                    {text}
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
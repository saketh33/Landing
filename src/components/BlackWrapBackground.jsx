import React from 'react';
import { motion, useInView } from 'framer-motion';
import one from '../assets/warp1.png';
import two from '../assets/warp2.png';
import three from '../assets/warp3.png';

const Star = () => (
  <div className="absolute -top-1 -right-1 w-6 h-6">
    <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full" />
    </div>
  </div>
);

const Card = ({ title, description, color, image, circleBgColor, className = "", delay = 0, referenceElement }) => {
  const isInView = useInView(referenceElement, { once: true, amount: 0.3 });

  return (
    <motion.div 
      initial={{ x: 1000, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 1000, opacity: 0 }}
      transition={{ 
        duration: 0.8,
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      className={`relative rounded-2xl p-6 w-[320px] h-[420px] transform cursor-pointer ${color} ${className}`}
      style={{
        clipPath: 'polygon(0% 0%, 95% 0%, 100% 5%, 100% 100%, 0% 100%)',
      }}
    >
      <Star />
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="text-sm text-black/80 max-w-[80%]">{description}</p>
        <div 
          className="mt-6 w-48 h-48 flex items-center justify-center mx-auto rounded-full" 
          style={{ backgroundColor: circleBgColor }}
        >
          <div className="w-40 h-40 flex items-center justify-center rounded-full overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BlackWarpBackground = ({
  perspective = 150,
  className = "",
  beamSize = 5,
}) => {
  const headerRef = React.useRef(null);
  const cardsRef = React.useRef(null);
  const headerInView = useInView(headerRef, { once: true, amount: 0.3 });

  return (
    <div className="flex items-center justify-center min-h-screen w-full p-4">
      <div className={`relative rounded-2xl border border-gray-800 bg-black w-[1200px] h-[800px] overflow-hidden ${className}`}>
        <div
          style={{
            "--perspective": `${perspective}px`,
            "--grid-color": "rgba(255, 255, 255, 0.5)",
            "--beam-size": `${beamSize}%`,
          }}
          className="pointer-events-none absolute left-0 top-0 size-full overflow-hidden [clip-path:inset(0)] [container-type:size] [perspective:var(--perspective)] [transform-style:preserve-3d]"
        >
          {/* Grid sides */}
          <div className="absolute [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]" />
          <div className="absolute top-full [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:50%_0%] [transform:rotateX(-90deg)] [width:100cqi]" />
          <div className="absolute left-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [transform-origin:0%_0%] [transform:rotate(90deg)_rotateX(-90deg)] [width:100cqh]" />
          <div className="absolute right-0 top-0 [transform-style:preserve-3d] [background-size:var(--beam-size)_var(--beam-size)] [background:linear-gradient(var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_-0.5px_/var(--beam-size)_var(--beam-size),linear-gradient(90deg,_var(--grid-color)_0_1px,_transparent_1px_var(--beam-size))_50%_50%_/var(--beam-size)_var(--beam-size)] [container-type:inline-size] [height:100cqmax] [width:100cqh] [transform-origin:100%_0%] [transform:rotate(-90deg)_rotateX(-90deg)]" />
        </div>
        <div className="relative h-full w-full p-12">
      
            <div className="space-y-6">
              <h1 className="text-6xl font-bold text-white italic">
                Get to know more<br />about Hooked
              </h1>
              <p className="text-gray-300 max-w-xl">
                Empowering Web3 education and driving massive adoption through innovative, immersive, gamified, and socially-driven learning experiences.
              </p>
            </div>
          
          <div ref={cardsRef} className="relative mt-8" style={{ height: '460px' }}>
            <div className="absolute left-4 bottom-0 z-10">
              <Card 
                title="Mission"
                description="Fixing Web3 education dilemma for Web3 massive adoption"
                color="bg-[#C3F53B]"
                image={one}
                circleBgColor="#b5e8b5"
                className="transform -rotate-6 transition-all duration-300 hover:-translate-y-8 hover:scale-105 hover:z-40"
                delay={0.2}
                referenceElement={cardsRef}
              />
            </div>
            <div className="absolute left-[300px] bottom-[30px] z-20">
              <Card 
                title="Methodology"
                description="Enabling immersive, gamified, social learning experience"
                color="bg-gray-300"
                image={two}
                circleBgColor="#c7c7c7"
                className="transform -rotate-3 transition-all duration-300 hover:-translate-y-8 hover:scale-105 hover:z-40"
                delay={0.4}
                referenceElement={cardsRef}
              />
            </div>
            <div className="absolute left-[600px] bottom-[60px] z-30">
              <Card 
                title="Means"
                description="Leading intuitive onboarding path ranging from dApps to infrastructure and ecosystem offerings"
                color="bg-[#98E5FF]"
                image={three}
                circleBgColor="#a5cdfa"
                className="transform rotate-3 transition-all duration-300 hover:-translate-y-8 hover:scale-105 hover:z-40"
                delay={0.6}
                referenceElement={cardsRef}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackWarpBackground;
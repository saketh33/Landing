import React from 'react';
import { Settings, Rocket, Clock, Boxes, MessageSquare, Smile } from "lucide-react";

const FeatureCard = ({ icon: Icon, title }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center p-6 bg-gray-100 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-xl h-48">
      {/* Grey gradient circle in background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon container with animations */}
      <div className="relative mb-4">
        <div className="w-14 h-14 rounded-full bg-gray-200 flex items-center justify-center transform group-hover:scale-110 transition-all duration-500">
          <Icon className="w-7 h-7 text-gray-700 transform group-hover:rotate-12 transition-transform duration-500" />
        </div>
        {/* Animated ring */}
        <div className="absolute inset-0 rounded-full border-2 border-gray-300/50 scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
      </div>

      {/* Text with animation */}
      <h3 className="text-gray-900 font-medium text-center text-sm sm:text-base relative transform group-hover:translate-y-1 transition-transform duration-500 px-2">
        {title}
      </h3>

      {/* Decorative dots */}
      <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-1 h-1 rounded-full bg-gray-600" />
        <div className="w-1 h-1 rounded-full bg-gray-500" />
        <div className="w-1 h-1 rounded-full bg-gray-400" />
      </div>
    </div>
  );
};

const FeatureGrid = () => {
  const features = [
    { icon: Settings, title: "AI Agent in WhatsApp" },
    { icon: Rocket, title: "Live in 30 Seconds" },
    { icon: Clock, title: "No annual contracts" },
    { icon: Boxes, title: "Automatic AI Training" },
    { icon: MessageSquare, title: "Active 24/7 in 95+ languages" },
    { icon: Smile, title: "No tech skills needed" }
  ];

  return (
    <div className="p-6 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
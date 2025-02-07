// RootLayout.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const RootLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleReload = () => {
      setIsLoading(true);
    };

    window.addEventListener('beforeunload', handleReload);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeunload', handleReload);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="page-transition"
            initial={{ height: '150vh' }}  // Increased height to ensure full coverage
            animate={{ height: '0vh' }}
            exit={{ height: '0vh' }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="fixed inset-0 w-full z-[9999] origin-bottom"
            style={{
              backgroundColor: '#C3F53B',
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            {/* Subtle gradient overlay for smoothness */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ 
          duration: 0.7,
          delay: 0.3
        }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RootLayout;
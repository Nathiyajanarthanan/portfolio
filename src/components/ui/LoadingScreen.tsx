import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center"
      >
        <div className="absolute w-32 h-32 border-t-2 border-primary rounded-full animate-spin"></div>
        <div className="absolute w-24 h-24 border-r-2 border-accent rounded-full animate-spin-slow"></div>
        <div className="absolute w-16 h-16 border-b-2 border-secondary rounded-full animate-spin"></div>
        <span className="text-xl font-bold text-gradient">AI</span>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

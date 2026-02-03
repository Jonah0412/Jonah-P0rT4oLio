import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 800); // Wait a bit after 100%
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center pointer-events-none"
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#c5e6a6] animate-pulse" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.5em] ml-1">Hanssen Studio</span>
          </div>
        </motion.div>

        <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            className="absolute inset-y-0 left-0 bg-white"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <motion.span 
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/20 text-[10px] font-mono tabular-nums"
        >
          {progress.toString().padStart(3, '0')}%
        </motion.span>
      </div>

      <div className="absolute bottom-12 text-white/10 text-[10px] uppercase font-bold tracking-widest">
        Visual Storytelling • Editorial • 2026
      </div>
    </motion.div>
  );
};

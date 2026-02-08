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
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] as const } }}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#c5e6a6]/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative flex flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-40 h-40 flex items-center justify-center"
        >
          <motion.div
            className="absolute inset-0 rounded-full border border-white/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-white/10"
            animate={{ rotate: -360 }}
            transition={{ duration: 14, ease: "linear", repeat: Infinity }}
          />
          <motion.div
            className="absolute w-3 h-3 rounded-full bg-[#c5e6a6]"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, ease: "linear", repeat: Infinity }}
            style={{ transformOrigin: "0 60px" }}
          />
          <div className="text-center">
            <div className="text-white text-xs font-bold uppercase tracking-[0.4em]">
              Gossip Duck
            </div>
            <div className="text-white/30 text-[10px] uppercase tracking-widest mt-2">
              Loading Portfolio
            </div>
          </div>
        </motion.div>

        <div className="w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#c5e6a6] via-white to-[#c5e6a6]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        <motion.span
          key={progress}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-white/30 text-[10px] font-mono tabular-nums"
        >
          {progress.toString().padStart(3, "0")}%
        </motion.span>
      </div>

      <div className="absolute bottom-12 text-white/10 text-[10px] uppercase font-bold tracking-widest">
        Creative Portfolio • 2025
      </div>
    </motion.div>
  );
};

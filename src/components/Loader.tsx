import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {progress < 100 && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0f18]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/30 animate-pulse" />
            <div className="absolute inset-2 rounded-full border-t-2 border-cyan-400 animate-spin" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse-glow" />
            </div>
          </div>
          <p className="mt-8 text-cyan-400 font-mono text-sm tracking-wider">
            INITIALIZING SAAJID.EXE
          </p>
          <p className="mt-2 text-cyan-500/60 text-xs">{progress}%</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
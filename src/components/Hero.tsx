import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="command-center"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video - Local file */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/background.mp4"
      />
      
      {/* Subtle dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 z-1" />
      
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.1] tracking-tighter"
        >
          MOHAMMED
          <br />
          SAAJID KHAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-cyan-400 text-sm sm:text-base md:text-lg tracking-wider mt-6"
        >
          AI Engineer • Full Stack Developer 
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-muted-foreground max-w-2xl mx-auto mt-6 text-base sm:text-lg leading-relaxed"
        >
          Building intelligent systems and immersive digital experiences focused on solving real-world problems through AI and innovation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="command-center"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background Video */}
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
      
      {/* Text Content - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12 lg:p-16 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tighter text-white">
            MOHAMMED
            <br />
            SAAJID KHAN
          </h1>

          <p className="text-cyan-400 text-sm sm:text-base md:text-lg tracking-wider mt-4">
            AI Engineer • Full Stack Developer
          </p>

          <p className="text-white/70 max-w-xl mt-4 text-sm sm:text-base leading-relaxed">
            Building intelligent systems and immersive digital experiences focused on solving real-world problems through AI and innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

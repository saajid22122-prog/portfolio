import { motion } from "framer-motion";
import { Cpu, Sparkles, Globe, Rocket } from "lucide-react";
import Silk from "./Silk";

const stats = [
  { icon: Cpu, label: "Experience", value: "2+ years" },
  { icon: Sparkles, label: "Hackathons", value: "4+ finals" },
  { icon: Globe, label: "Projects", value: "5+" },
  { icon: Rocket, label: "Innovation", value: "Always" },
];

const Identity = () => {
  return (
    <section id="identity" className="relative py-28 px-6 overflow-hidden">
      {/* Silk Background Effect */}
      <Silk
        speed={3}
        scale={1.2}
        color="#1a3a5c"
        noiseIntensity={0.8}
        rotation={0.2}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50 z-1" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white">Identity</h2>
          <div className="w-20 h-px bg-cyan-500/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-white/80 text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Mohammed Saajid Khan</span>, an AI engineer and full‑stack developer 
              who thrives at the intersection of intelligence and creativity. I build AI systems that solve real problems — 
              from healthcare diagnostics to intelligent marketing — and I love the adrenaline of hackathons.
            </p>
            <p className="text-white/70 text-lg leading-relaxed">
              My work is driven by <span className="text-cyan-400">curiosity</span>, <span className="text-cyan-400">craftsmanship</span>, 
              and a deep desire to make technology feel human. Every project is an opportunity to push the boundary of what's possible.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 text-center backdrop-blur-md"
                style={{
                  background: "rgba(10, 20, 30, 0.6)",
                  border: "1px solid rgba(0, 255, 255, 0.2)",
                }}
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-display text-white">{stat.value}</div>
                <div className="text-xs text-cyan-400 uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;

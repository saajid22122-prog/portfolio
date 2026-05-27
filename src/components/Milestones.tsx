import { motion } from "framer-motion";
import { Award, Medal, Cpu, Sparkles } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "SIH Internal Winner",
    desc: "Secured Top 50 in Smart India Hackathon internal round with AI healthcare solution.",
    icon: Award,
  },
  {
    year: "2024-26",
    title: "4+ Hackathon Finalist",
    desc: "Top finalist in multiple national‑level hackathons including Ai ignite, SIH, and more.",
    icon: Medal,
  },
  {
    year: "2024-2026",
    title: "AI‑Powered websites",
    desc: "Built and deployed apps and websites for multiple projects.",
    icon: Cpu,
  },
  {
    year: "2024-26",
    title: "Immersive Tech Exploration",
    desc: "Started experimenting with Three.js, WebXR, and spatial computing.",
    icon: Sparkles,
  },
];

const Milestones = () => {
  return (
    <section id="milestones" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">Milestones</h2>
          <div className="w-20 h-px bg-cyan-500/40 mx-auto mt-4" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-cyan-500/20 md:-translate-x-px" />

          {timeline.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="flex-1 md:text-right">
                <div className="glass-card p-6">
                  <div className="flex items-center gap-3 mb-2 md:justify-end">
                    <item.icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-xs text-cyan-400 font-mono">{item.year}</span>
                  </div>
                  <h3 className="text-xl font-display mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
              <div className="w-12 flex justify-center relative z-10">
                <div className="w-3 h-3 rounded-full bg-cyan-400 border-2 border-background shadow-lg" />
              </div>
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Milestones;
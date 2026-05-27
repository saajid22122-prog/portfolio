import { motion } from "framer-motion";
import { Cpu, Sparkles, Globe, Rocket } from "lucide-react";

const stats = [
  { icon: Cpu, label: "Experience", value: "2+ years" },
  { icon: Sparkles, label: "Hackathons", value: "4+ finals" },
  { icon: Globe, label: "Projects", value: "5+" },
  { icon: Rocket, label: "Innovation", value: "Always" },
];

const Identity = () => {
  return (
    <section id="identity" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">Identity</h2>
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
            <p className="text-muted-foreground text-lg leading-relaxed">
              I'm <span className="text-foreground font-medium">Mohammed Saajid Khan</span>,currently pursuing my 2nd year B.Tech in Computer Science and Business Systems (CSBS) at Rajalakshmi Engineering College, Chennai, with a CGPA of 8.34 and as an IEEE TEMS Member. Passionate about Artificial Intelligence, Full Stack Development, and immersive digital experiences.My interests include AI-driven applications, computer vision, conversational systems, and modern interactive web experiences.

            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
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
                className="glass-card p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-display">{stat.value}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Identity;
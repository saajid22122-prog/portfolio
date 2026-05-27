import { motion } from "framer-motion";

const skills = [
  "Python", "TensorFlow", "OpenCV", "Flask",
  "React", "TypeScript", "Node.js", "Three.js",
  "PyTorch", "MongoDB", "Tailwind", "Framer Motion",
];

const TechArsenal = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="tech-arsenal" className="py-28 px-6 bg-black/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">Tech Arsenal</h2>
          <div className="w-20 h-px bg-cyan-500/40 mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHovered(skill)}
              onHoverEnd={() => setHovered(null)}
              className="glass-card p-4 text-center cursor-pointer transition-all duration-300"
            >
              <div className={`text-sm font-mono ${hovered === skill ? "text-cyan-400" : "text-foreground"}`}>
                {skill}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechArsenal;

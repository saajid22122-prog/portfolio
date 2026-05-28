import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "MarketMate — AI Marketing Assistant",
    description:
      "An intelligent marketing platform that helps businesses generate complete AI-powered campaigns, get chat assistance, plan budgets, run A/B tests, and gain audience insights — all in seconds.",
    color: "#22c55e",
    url: "https://marketmate-alpha.vercel.app",
    github: "#",
    position: "left",
    features: ["Campaign Generator", "Chat Assistant", "Campaign Planner", "A/B Testing", "Audience Insights"],
  },
  {
    title: "Multi-Language Voice Tutoring Application",
    description:
      "An AI-powered conversational learning system helping children improve native language speaking skills through real-time voice interaction and grammar correction.",
    color: "#3b82f6",
    url: "#",
    github: "#",
    position: "left",
    features: ["Voice Recognition", "Grammar Correction", "Real-time Feedback"],
  },
  {
    title: "AI Acne Detection & Skincare System",
    description:
      "A full-stack AI healthcare platform using Deep Learning and Computer Vision to analyze acne severity and generate personalized skincare recommendations.",
    color: "#a855f7",
    url: "#",
    github: "#",
    position: "right",
    features: ["Deep Learning", "Computer Vision", "Personalized Recommendations"],
  },
  {
    title: "Vucan Gym Website",
    description:
      "A cinematic high-performance gym experience built with React, GSAP, and immersive modern web animations.",
    color: "#f97316",
    url: "https://vucan-gym.vercel.app",
    github: "#",
    position: "right",
    features: ["GSAP Animations", "Immersive Design", "High Performance"],
  },
];

const ProjectArchive = () => {
  // Split projects into left and right
  const leftProjects = projects.filter(p => p.position === "left");
  const rightProjects = projects.filter(p => p.position === "right");

  return (
    <section 
      id="project-archive" 
      className="relative py-28 px-6"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight text-white">Project Archive</h2>
          <div className="w-20 h-px bg-cyan-500/40 mx-auto mt-4" />
          <p className="text-white/70 mt-6 max-w-2xl mx-auto">
            Explore my featured work — intelligent systems and immersive experiences.
          </p>
        </motion.div>

        {/* Two-column layout: 2 left, 2 right */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {leftProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-2xl backdrop-blur-md p-6 md:p-8 hover:translate-x-2 transition-all duration-300"
                style={{
                  background: "rgba(10, 20, 30, 0.75)",
                  border: `1px solid ${project.color}40`,
                  boxShadow: `0 0 20px ${project.color}20`,
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color, boxShadow: `0 0 6px ${project.color}` }}
                    />
                    <h3 className="text-xl md:text-2xl font-display" style={{ color: "#fff" }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}50`,
                        color: project.color,
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-2 pt-3 border-t border-white/20 text-xs font-mono" style={{ color: project.color }}>
                  ⟡ interactive interface
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="rounded-2xl backdrop-blur-md p-6 md:p-8 hover:-translate-x-2 transition-all duration-300"
                style={{
                  background: "rgba(10, 20, 30, 0.75)",
                  border: `1px solid ${project.color}40`,
                  boxShadow: `0 0 20px ${project.color}20`,
                }}
              >
                <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color, boxShadow: `0 0 6px ${project.color}` }}
                    />
                    <h3 className="text-xl md:text-2xl font-display" style={{ color: "#fff" }}>
                      {project.title}
                    </h3>
                  </div>
                  
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}50`,
                        color: project.color,
                      }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
                
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{
                        background: `${project.color}15`,
                        color: project.color,
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="mt-2 pt-3 border-t border-white/20 text-xs font-mono" style={{ color: project.color }}>
                  ⟡ interactive interface
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectArchive;

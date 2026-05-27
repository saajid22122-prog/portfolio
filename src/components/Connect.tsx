import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

const Connect = () => {
  const [typed, setTyped] = useState("");
  const fullText = "initialize_connection()";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTyped(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="connect" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <div className="font-mono text-cyan-400 text-sm mb-2">$</div>
          <h2 className="font-display text-3xl md:text-5xl tracking-tight mb-4">
            {typed}
            <span className="terminal-cursor" />
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Ready to collaborate or explore my work? Reach out through any of these channels.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {/* GitHub */}
            <a href="https://github.com/saajid22122-prog" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-3 border-cyan-500/30 hover:bg-cyan-500/10">
                <Github className="w-5 h-5" /> GitHub
              </Button>
            </a>
            
            {/* LinkedIn - Fixed URL */}
            <a href="https://www.linkedin.com/in/mohammed-saajid-khan-m-a-4b1bb5321/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="gap-3 border-cyan-500/30 hover:bg-cyan-500/10">
                <Linkedin className="w-5 h-5" /> LinkedIn
              </Button>
            </a>
            
            {/* Email */}
            <a href="mailto:saajid010607@gmail.com">
              <Button variant="outline" className="gap-3 border-cyan-500/30 hover:bg-cyan-500/10">
                <Mail className="w-5 h-5" /> Email
              </Button>
            </a>
            
            {/* Resume - Place file in public folder */}
            <a href="/Saajid_Resume.pdf" download>
              <Button variant="outline" className="gap-3 border-cyan-500/30 hover:bg-cyan-500/10">
                <FileText className="w-5 h-5" /> Resume
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
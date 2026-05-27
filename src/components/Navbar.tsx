import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  "Command Center",
  "Identity",
  "Project Archive",
  "Milestones",
  "Tech Arsenal",
  "Connect",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Command Center");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase().replace(/ /g, "-"));
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setActive(id);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center">
        <div className="font-display text-2xl tracking-tight text-foreground">
          SAAJID<span className="text-cyan-400">.</span>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex gap-8">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`text-sm transition-all duration-300 ${
                active === s
                  ? "text-cyan-400 border-b border-cyan-400/50 pb-1"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mobile */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-nav px-6 py-4 flex flex-col gap-4"
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-left text-sm text-muted-foreground hover:text-foreground py-2"
            >
              {s}
            </button>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
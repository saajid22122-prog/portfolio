import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  "Identity",
  "Project Archive",
  "Milestones",
  "Tech Arsenal",
  "Connect",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
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
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.1, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-700 ${
        scrolled ? "bg-black/30 backdrop-blur-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16 lg:px-24 flex justify-between items-center">
        {/* Logo */}
        <div className="font-display text-xl tracking-[0.15em] text-white/90 font-light">
          S<span className="text-cyan-400/80">.</span>K
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`text-xs tracking-[0.15em] uppercase font-light transition-all duration-300 ${
                active === s
                  ? "text-cyan-400"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-white/80 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-md py-6 px-8 flex flex-col gap-5"
        >
          {sections.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className="text-left text-sm tracking-wide text-white/70 hover:text-white py-2"
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

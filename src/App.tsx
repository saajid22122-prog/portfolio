import { useEffect, useState } from "react";
import Lenis from "lenis";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Identity from "./components/Identity";
import ProjectArchive from "./components/ProjectArchive";
import Milestones from "./components/Milestones";
import TechArsenal from "./components/TechArsenal";
import Connect from "./components/Connect";
import ParticleSystem from "./components/ParticleSystem";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <>
      <ParticleSystem />
      <Navbar />
      <main>
        <Hero />
        <Identity />
        <ProjectArchive />
        <Milestones />
        <TechArsenal />
        <Connect />
      </main>
    </>
  );
}

export default App;
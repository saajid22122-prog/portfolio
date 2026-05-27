import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Fog, Sparkles } from "@react-three/drei";

const SceneContent = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#88aaff" />
      <fog attach="fog" args={["#0a0f18", 20, 60]} />
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      <Sparkles count={200} scale={20} size={0.3} speed={0.4} color="#66ccff" opacity={0.3} />
    </>
  );
};

const ThreeScene = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <SceneContent />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
      </Canvas>
    </div>
  );
};

export default ThreeScene;
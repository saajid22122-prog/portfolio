import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const ParticleField = () => {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 50;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30 - 20;
    }
    return pos;
  }, []);
  
  const pointsRef = useRef<THREE.Points>(null);
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#66ccff" size={0.08} transparent opacity={0.4} blending={THREE.AdditiveBlending} />
    </points>
  );
};

const ParticleSystem = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default ParticleSystem;
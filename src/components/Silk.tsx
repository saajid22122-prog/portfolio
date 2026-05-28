/* eslint-disable react/no-unknown-property */
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { forwardRef, useRef, useMemo, useLayoutEffect } from 'react';
import { Color } from 'three';

const hexToNormalizedRGB = (hex: string) => {
  hex = hex.replace('#', '');
  return [
    parseInt(hex.slice(0, 2), 16) / 255,
    parseInt(hex.slice(2, 4), 16) / 255,
    parseInt(hex.slice(4, 6), 16) / 255
  ];
};

const vertexShader = `
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vPosition = position;
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const fragmentShader = `
varying vec2 vUv;
varying vec3 vPosition;

uniform float uTime;
uniform vec3  uColor;
uniform float uSpeed;
uniform float uScale;
uniform float uRotation;
uniform float uNoiseIntensity;

// Improved noise function for better flow
float random (vec2 st) {
    return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
}

float noise(vec2 st) {
    vec2 i = floor(st);
    vec2 f = fract(st);
    float a = random(i);
    float b = random(i + vec2(1.0, 0.0));
    float c = random(i + vec2(0.0, 1.0));
    float d = random(i + vec2(1.0, 1.0));
    vec2 u = f*f*(3.0-2.0*f);
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec2 rotateUvs(vec2 uv, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  mat2  rot = mat2(c, -s, s, c);
  return rot * uv;
}

void main() {
  vec2 uv = rotateUvs(vUv * uScale, uRotation);
  
  // Create flowing waves
  float time = uTime * uSpeed;
  
  // Multiple wave layers for rich flow
  float wave1 = sin(uv.x * 3.0 + time) * cos(uv.y * 2.0 - time * 0.7);
  float wave2 = sin(uv.y * 4.0 - time * 1.2) * 0.6;
  float wave3 = sin((uv.x * 2.0 + uv.y * 1.5) * 1.8 + time * 1.5) * 0.4;
  float wave4 = cos((uv.y * 3.0 - uv.x * 2.0) * 1.2 - time) * 0.3;
  
  float pattern = 0.5 + (wave1 + wave2 + wave3 + wave4) * 0.35;
  
  // Add subtle noise
  float n = noise(uv * 4.0 + uTime * 0.3) * uNoiseIntensity * 0.15;
  pattern += n;
  
  // Clamp and create color
  pattern = clamp(pattern, 0.3, 0.9);
  
  vec3 finalColor = uColor * pattern;
  
  // Add subtle color variation based on waves
  finalColor += vec3(0.1, 0.05, 0.15) * (wave1 * 0.3);
  
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

const SilkPlane = forwardRef(function SilkPlane({ uniforms }: { uniforms: any }, ref: any) {
  const { viewport } = useThree();

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scale.set(viewport.width, viewport.height, 1);
    }
  }, [ref, viewport]);

  useFrame((state, delta) => {
    if (ref.current?.material?.uniforms?.uTime) {
      ref.current.material.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh ref={ref}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} transparent={false} />
    </mesh>
  );
});
SilkPlane.displayName = 'SilkPlane';

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  noiseIntensity?: number;
  rotation?: number;
}

const Silk = ({ speed = 1.5, scale = 1.5, color = '#1a3a5c', noiseIntensity = 0.8, rotation = 0.2 }: SilkProps) => {
  const meshRef = useRef();

  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRGB(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 }
    }),
    [speed, scale, noiseIntensity, color, rotation]
  );

  return (
    <Canvas 
      dpr={[1, 2]} 
      frameloop="always" 
      style={{ 
        position: 'absolute', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '100%', 
        zIndex: 0,
        pointerEvents: 'none'
      }}
    >
      <SilkPlane ref={meshRef} uniforms={uniforms} />
    </Canvas>
  );
};

export default Silk;

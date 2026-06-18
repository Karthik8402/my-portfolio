import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface PlanetProps {
  name: string;
  color: string;
  radius: number;
  speed: number;
  angleOffset: number;
  activeSkill: string | null;
  setActiveSkill: (name: string | null) => void;
}

function Planet({ name, color, radius, speed, angleOffset, activeSkill, setActiveSkill }: PlanetProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();
  const currentAngle = useRef(angleOffset);

  useFrame((state, delta) => {
    if (reducedMotion) {
      if (meshRef.current) {
        const x = radius * Math.cos(angleOffset);
        const y = radius * Math.sin(angleOffset);
        meshRef.current.position.set(x, y, 0);
      }
      return;
    }

    // Accumulate angle based on speed and delta time
    currentAngle.current += delta * speed;
    if (meshRef.current) {
      const x = radius * Math.cos(currentAngle.current);
      const y = radius * Math.sin(currentAngle.current);
      meshRef.current.position.set(x, y, 0);
    }
    state.invalidate();
  });

  return (
    <mesh
      ref={meshRef}
      onClick={(e) => {
        e.stopPropagation();
        setActiveSkill(activeSkill === name ? null : name);
      }}
    >
      <sphereGeometry args={[0.13, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.1}
        metalness={0.1}
      />
      {activeSkill === name && (
        <Html distanceFactor={6} center>
          <div className="px-2.5 py-1 rounded bg-zinc-950/95 border border-primary/40 text-white font-sans text-xs font-semibold whitespace-nowrap shadow-glow pointer-events-none select-none">
            {name}
          </div>
        </Html>
      )}
    </mesh>
  );
}

interface OrbitRingProps {
  radius: number;
  tube: number;
  color: string;
  rotation: [number, number, number];
  planets: { name: string; color: string; speed: number; offset: number }[];
  activeSkill: string | null;
  setActiveSkill: (name: string | null) => void;
}

function OrbitRing({ radius, tube, color, rotation, planets, activeSkill, setActiveSkill }: OrbitRingProps) {
  const ringRef = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (reducedMotion) return;
    if (ringRef.current) {
      // Slow background rotation of the ring
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.02;
    }
    state.invalidate();
  });

  return (
    <group rotation={rotation}>
      {/* Torus Ring */}
      <mesh ref={ringRef}>
        <torusGeometry args={[radius, tube, 12, 64]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.7}
          roughness={0.2}
          transparent={true}
          opacity={0.75}
        />
      </mesh>

      {/* Orbiting Planets */}
      {planets.map((planet) => (
        <Planet
          key={planet.name}
          name={planet.name}
          color={planet.color}
          radius={radius}
          speed={planet.speed}
          angleOffset={planet.offset}
          activeSkill={activeSkill}
          setActiveSkill={setActiveSkill}
        />
      ))}
    </group>
  );
}

function SkillOrbitScene() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  // Set up three distinct intersecting rings
  const rings = [
    {
      radius: 2.2,
      tube: 0.015,
      color: '#2563EB',
      rotation: [0.7, 0.3, 0] as [number, number, number],
      planets: [
        { name: 'React', color: '#61DAFB', speed: 0.4, offset: 0 },
        { name: 'Node.js', color: '#339933', speed: 0.4, offset: Math.PI },
      ],
    },
    {
      radius: 2.6,
      tube: 0.015,
      color: '#8B5CF6',
      rotation: [-0.6, 0.8, 0.4] as [number, number, number],
      planets: [
        { name: 'Java', color: '#ED8B00', speed: 0.3, offset: Math.PI / 3 },
        { name: 'Python', color: '#3776AB', speed: 0.3, offset: Math.PI * 1.33 },
      ],
    },
    {
      radius: 3.0,
      tube: 0.012,
      color: '#00FFFF',
      rotation: [1.3, -0.4, -0.6] as [number, number, number],
      planets: [
        { name: 'TypeScript', color: '#3178C6', speed: 0.2, offset: Math.PI / 1.5 },
        { name: 'FastAPI', color: '#009688', speed: 0.2, offset: Math.PI * 1.66 },
      ],
    },
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.0} color="#FFFFFF" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8B5CF6" />
      
      {rings.map((ring, idx) => (
        <OrbitRing
          key={idx}
          radius={ring.radius}
          tube={ring.tube}
          color={ring.color}
          rotation={ring.rotation}
          planets={ring.planets}
          activeSkill={activeSkill}
          setActiveSkill={setActiveSkill}
        />
      ))}
    </>
  );
}

export default function SkillOrbit() {
  return (
    <div
      className="w-full relative flex items-center justify-center bg-transparent select-none"
      style={{ height: '320px' }}
      onClick={() => {}}
    >
      <Suspense fallback={
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      }>
        <Canvas
          gl={{ alpha: true, antialias: true }}
          frameloop="demand"
          camera={{ position: [0, 0, 4.4], fov: 75 }}
          style={{ width: '100%', height: '100%', background: 'transparent' }}
        >
          <SkillOrbitScene />
        </Canvas>
      </Suspense>
    </div>
  );
}

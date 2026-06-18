import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const COLORS = ['#2563EB', '#06b6d4', '#7c3aed', '#ec4899'];

function SmoothShape({ color, position, type }: { color: string; position: [number, number, number]; type: 'sphere' | 'torus' | 'icosahedron' | 'octahedron' }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    meshRef.current.rotation.x = t.current * 0.03;
    meshRef.current.rotation.y = t.current * 0.05;
  });

  const geometry = useMemo(() => {
    switch (type) {
      case 'sphere': return new THREE.SphereGeometry(0.35, 16, 16);
      case 'torus': return new THREE.TorusGeometry(0.3, 0.08, 8, 24);
      case 'icosahedron': return new THREE.IcosahedronGeometry(0.3, 0);
      case 'octahedron': return new THREE.OctahedronGeometry(0.25, 0);
    }
  }, [type]);

  return (
    <Float speed={0.4} rotationIntensity={0.05} floatIntensity={0.08}>
      <mesh ref={meshRef} position={position} geometry={geometry}>
        <meshPhysicalMaterial
          color={color}
          transparent
          opacity={0.2}
          roughness={0.4}
          metalness={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingGeometry({ count = 6 }: { count?: number }) {
  const shapes = useMemo(() => {
    const types: ('sphere' | 'torus' | 'icosahedron' | 'octahedron')[] = ['sphere', 'torus', 'icosahedron', 'octahedron'];
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      color: COLORS[i % COLORS.length],
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 6 - 3,
      ] as [number, number, number],
      type: types[i % types.length],
    }));
  }, [count]);

  return (
    <>
      {shapes.map((s) => (
        <SmoothShape key={s.id} color={s.color} position={s.position} type={s.type} />
      ))}
    </>
  );
}

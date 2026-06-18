import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

function Capsule({ position, scale = 1, color = '#2563EB' }: { position: [number, number, number]; scale?: number; color?: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!groupRef.current) return;
    t.current += delta;
    groupRef.current.rotation.x = Math.sin(t.current * 0.12) * 0.1;
    groupRef.current.rotation.z = Math.cos(t.current * 0.15) * 0.1;
  });

  return (
    <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef} position={position} scale={scale}>
        <mesh position={[0, 0.4, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <MeshDistortMaterial color={color} transparent opacity={0.5} roughness={0.1} metalness={0.8} distort={0.05} speed={1} />
        </mesh>
        <mesh position={[0, -0.4, 0]}>
          <sphereGeometry args={[0.35, 16, 16]} />
          <MeshDistortMaterial color={color} transparent opacity={0.5} roughness={0.1} metalness={0.8} distort={0.05} speed={1} />
        </mesh>
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.35, 0.35, 0.8, 12]} />
          <meshPhysicalMaterial color={color} transparent opacity={0.45} roughness={0.1} metalness={0.8} />
        </mesh>
      </group>
    </Float>
  );
}

function Blob({ position, scale = 1, color = '#06b6d4' }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    meshRef.current.rotation.x = t.current * 0.08;
    meshRef.current.rotation.y = t.current * 0.12;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.7, 24, 24]} />
        <MeshDistortMaterial
          color={color}
          transparent
          opacity={0.4}
          roughness={0.2}
          metalness={0.6}
          distort={0.25}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

function RoundedBoxShape({ position, scale = 1, color = '#7c3aed' }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    meshRef.current.rotation.x = t.current * 0.15;
    meshRef.current.rotation.y = t.current * 0.2;
  });

  return (
    <Float speed={1} rotationIntensity={0.15} floatIntensity={0.25}>
      <RoundedBox ref={meshRef} position={position} args={[1, 1, 1]} radius={0.2} smoothness={4} scale={scale}>
        <meshPhysicalMaterial color={color} transparent opacity={0.35} roughness={0.1} metalness={0.7} />
      </RoundedBox>
    </Float>
  );
}

function RingShape({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    meshRef.current.rotation.x = Math.sin(t.current * 0.15) * 0.4;
    meshRef.current.rotation.z = Math.cos(t.current * 0.1) * 0.2;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusGeometry args={[0.8, 0.04, 16, 48]} />
      <meshPhysicalMaterial color="#2563EB" transparent opacity={0.2} roughness={0.3} metalness={0.8} />
    </mesh>
  );
}

function HelixRing({ position, scale = 1, color = '#ec4899' }: { position: [number, number, number]; scale?: number; color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    t.current += delta;
    meshRef.current.rotation.y = t.current * 0.05;
    meshRef.current.rotation.z = Math.sin(t.current * 0.1) * 0.15;
  });

  return (
    <Float speed={0.6} rotationIntensity={0.05} floatIntensity={0.15}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[0.6, 0.06, 12, 32]} />
        <meshPhysicalMaterial color={color} transparent opacity={0.3} roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  const shapes = useMemo(() => [
    { Component: Blob, props: { position: [-3.5, 0.5, -2] as [number, number, number], scale: 0.6 } },
    { Component: RoundedBoxShape, props: { position: [3.8, -0.3, -1.5] as [number, number, number], scale: 0.45 } },
    { Component: Capsule, props: { position: [-2.5, -1.5, -3] as [number, number, number], scale: 0.5 } },
    { Component: HelixRing, props: { position: [2.8, 1.8, -2.5] as [number, number, number], scale: 0.7, color: '#ec4899' } },
    { Component: Blob, props: { position: [0, -2.2, -4] as [number, number, number], scale: 0.4, color: '#7c3aed' } },
    { Component: RoundedBoxShape, props: { position: [-1, 2.5, -3.5] as [number, number, number], scale: 0.35, color: '#06b6d4' } },
    { Component: RingShape, props: { position: [0, 0, -5] as [number, number, number], scale: 2 } },
    { Component: RingShape, props: { position: [0, 0, -5] as [number, number, number], scale: 1.5 } },
    { Component: Capsule, props: { position: [1.5, -1, -1] as [number, number, number], scale: 0.3, color: '#06b6d4' } },
  ], []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#2563EB" />
      <pointLight position={[0, 3, 2]} intensity={0.3} color="#06b6d4" />

      {shapes.map(({ Component, props }, idx) => (
        <Component key={idx} {...props} />
      ))}
    </>
  );
}

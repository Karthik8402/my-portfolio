import { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleField3DProps {
  count?: number;
  color?: string;
  speed?: number;
  interactive?: boolean;
}

export default function ParticleField3D({ count = 60, color = '#2563EB', speed = 0.2, interactive = true }: ParticleField3DProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const velocitiesRef = useRef<{ vx: number; vy: number; vz: number }[]>([]);

  const geometry = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel: { vx: number; vy: number; vz: number }[] = [];
    const geo = new THREE.BufferGeometry();

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 8;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4 - 2;
      vel.push({
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        vz: (Math.random() - 0.5) * speed * 0.5,
      });
    }
    velocitiesRef.current = vel;
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));

    return geo;
  }, [count, speed]);

  useEffect(() => {
    return () => {
      geometry.dispose();
    };
  }, [geometry]);

  const particleTime = useRef(0);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    particleTime.current += delta;
    const pos = geometry.attributes.position.array as Float32Array;
    const vel = velocitiesRef.current;

    for (let i = 0; i < count; i++) {
      pos[i * 3] += vel[i].vx;
      pos[i * 3 + 1] += vel[i].vy;
      pos[i * 3 + 2] += vel[i].vz;

      if (interactive) {
        const dx = pos[i * 3] - mouseRef.current.x;
        const dy = pos[i * 3 + 1] - mouseRef.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 2 && dist > 0) {
          const force = (2 - dist) / 2;
          vel[i].vx += (dx / dist) * force * 0.02;
          vel[i].vy += (dy / dist) * force * 0.02;
        }
      }

      if (Math.abs(pos[i * 3]) > 4) vel[i].vx *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 3) vel[i].vy *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 4) vel[i].vz *= -1;

      vel[i].vx *= 0.999;
      vel[i].vy *= 0.999;
      vel[i].vz *= 0.999;
    }

    geometry.attributes.position.needsUpdate = true;
    pointsRef.current.rotation.y = particleTime.current * 0.02;
  });

  return (
    <points
      ref={pointsRef}
      geometry={geometry}
      onPointerMove={interactive ? (e) => {
        mouseRef.current = {
          x: (e.clientX / window.innerWidth) * 8 - 4,
          y: -(e.clientY / window.innerHeight) * 6 + 3,
        };
      } : undefined}
    >
      <pointsMaterial
        size={0.04}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

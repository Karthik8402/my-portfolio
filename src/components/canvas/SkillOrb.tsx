import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
}

interface SkillOrbProps {
  skills: Skill[];
}

export default function SkillOrb({ skills }: SkillOrbProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const t = useRef(0);

  useFrame((_state, delta) => {
    t.current += delta;
    if (sphereRef.current) {
      sphereRef.current.rotation.y = t.current * 0.08;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = t.current * 0.05;
    }
  });

  const tags = useMemo(() => {
    if (!skills.length) return [];
    const topSkills = skills.slice(0, 12);
    return topSkills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i + 1) / topSkills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        skill,
        x: 1.6 * Math.sin(phi) * Math.cos(theta),
        y: 1.6 * Math.sin(phi) * Math.sin(theta),
        z: 1.6 * Math.cos(phi),
        color: ['#2563EB', '#06b6d4', '#7c3aed', '#ec4899'][i % 4],
      };
    });
  }, [skills]);

  return (
    <group>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1.2, 24, 24]} />
        <meshPhysicalMaterial
          color="#2563EB"
          transparent
          opacity={0.08}
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>

      <mesh ref={glowRef}>
        <sphereGeometry args={[1.22, 24, 24]} />
        <meshBasicMaterial
          color="#2563EB"
          transparent
          opacity={0.03}
          side={THREE.BackSide}
        />
      </mesh>

      {tags.map((tag, i) => (
        <group key={i} position={[tag.x, tag.y, tag.z]}>
          <mesh>
            <planeGeometry args={[tag.skill.name.length * 0.12 + 0.2, 0.25]} />
            <meshBasicMaterial color="rgba(37, 99, 235, 0.08)" transparent opacity={0.2} depthWrite={false} />
          </mesh>
          <Text
            position={[0, 0, 0.01]}
            fontSize={0.12}
            color={tag.color}
            anchorX="center"
            anchorY="middle"
          >
            {tag.skill.name}
          </Text>
        </group>
      ))}
    </group>
  );
}

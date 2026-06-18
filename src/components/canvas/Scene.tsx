import { type ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor } from '@react-three/drei';

interface SceneProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  performance?: 'low' | 'medium' | 'high';
  onPerformanceChange?: (dpr: number) => void;
}

function SceneLoader() {
  return null;
}

export default function Scene({
  children,
  className = '',
  cameraPosition = [0, 0, 5],
  onPerformanceChange,
}: SceneProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        {onPerformanceChange && (
          <PerformanceMonitor
            onDecline={() => onPerformanceChange(0.75)}
            onFallback={() => onPerformanceChange(0.5)}
          />
        )}
        <Suspense fallback={<SceneLoader />}>
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import type { Engine } from "@tsparticles/engine";
import { useReducedMotion } from "../hooks/useReducedMotion";

// Must be declared outside the component to remain stable across renders
const initFn = async (engine: Engine) => {
  await loadFull(engine);
};

export default function ParticleBackground() {
  const reducedMotion = useReducedMotion();
  const particleCount = reducedMotion ? 32 : 82;

  const options = useMemo(
    () => ({
      fpsLimit: 60,
      background: {
        color: {
          value: "transparent",
        },
      },
      particles: {
        number: {
          value: particleCount,
          density: {
            enable: true,
            area: 900,
          },
        },
        shape: {
          type: ["circle", "triangle"],
          options: {
            triangle: {
              sides: 3,
            },
          },
        },
        color: {
          value: ["#38BDF8", "#22D3EE", "#60A5FA", "#A78BFA"],
        },
        opacity: {
          value: { min: 0.22, max: 0.62 },
          animation: {
            enable: !reducedMotion,
            speed: 0.35,
            sync: false,
            startValue: "random" as const,
          },
        },
        size: {
          value: { min: 1.1, max: 3.2 },
          animation: {
            enable: !reducedMotion,
            speed: 2,
            minimumValue: 0.8,
            sync: false,
          },
        },
        links: {
          enable: true,
          distance: 135,
          color: "#22D3EE",
          opacity: 0.18,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: reducedMotion ? 0.15 : 0.42,
          direction: "none" as const,
          random: true,
          straight: false,
          outModes: {
            default: "out" as const,
          },
        },
        shadow: {
          enable: true,
          color: "#22D3EE",
          blur: 6,
        },
      },
      interactivity: {
        detectsOn: "window" as const,
        events: {
          onHover: {
            enable: !reducedMotion,
            mode: "grab",
          },
        },
        modes: {
          grab: {
            distance: 150,
            links: {
              opacity: 0.35,
            },
          },
        },
      },
      emitters: reducedMotion
        ? []
        : [
            {
              position: { x: 18, y: 24 },
              rate: {
                quantity: 1,
                delay: 2.8,
              },
              particles: {
                move: {
                  direction: "top-right" as const,
                  speed: { min: 0.3, max: 0.7 },
                },
                opacity: {
                  value: { min: 0.18, max: 0.42 },
                },
                size: {
                  value: { min: 1.2, max: 2.8 },
                },
              },
            },
          ],
      detectRetina: true,
    }),
    [particleCount, reducedMotion]
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
        opacity: 0.9,
      }}
    >
      <ParticlesProvider init={initFn}>
        <Particles
          id="tsparticles"
          options={options}
          style={{ width: "100%", height: "100%" }}
        />
      </ParticlesProvider>
    </div>
  );
}

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        // fullScreen: { enable: true, zIndex: -1 }, // Ensures it's in the background
        background: { color: "" }, // Transparent background
        particles: {
          number: { value: 5 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 1 },
          size: { value: { min: 2, max: 4 } },
          move: {
            enable: true,
            speed: { min: 5, max: 10 },
            direction: "bottom-left",
            straight: true,
            outModes: { default: "out" },
            trail: { enable: true, length: 15, fillColor: "" },
          },
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
      }}
    />
  );
}

export default ParticlesBackground;

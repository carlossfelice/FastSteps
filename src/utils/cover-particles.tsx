import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticules = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    init && (
      <div className="absolute inset-0">
        <Particles
          id="tsParticles"
          options={{
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: false,
                },
                onHover: {
                  enable: false, // Habilita la interacción al pasar el mouse
                  mode: "repulse", // Las partículas se repelen al pasar el mouse
                },
              },
              modes: {
                repulse: {
                  distance: 100, // Distancia de repulsión
                  duration: 1, // Duración de la repulsión
                },
              },
            },
            particles: {
              color: {
                value: "#fff", // Color más brillante
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 0.5, // Reduce la velocidad de movimiento
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 50, // Aumenta el número de partículas
              },
              opacity: {
                value: 0.6, // Más opacidad para las partículas
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 2, max: 8 }, // Aumenta el tamaño de las partículas
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default CoverParticules;

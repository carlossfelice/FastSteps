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
                  enable: true, // Habilita la interacción al pasar el mouse
                  mode: "repulse", // Las partículas se repelen al pasar el mouse
                },
              },
            },
            particles: {
              color: {
                value: "fff", // Color más brillante
              },
              // links: {
              //   color: "#fff", // Color más brillante para los enlaces
              //   distance: 150,
              //   enable: true,
              //   opacity: 0.8, // Más opacidad para los enlaces
              //   width: 2, // Ancho del enlace
              // },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1, // Aumenta la velocidad de movimiento
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

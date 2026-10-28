import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

//! https://github.com/matteobruni/tsparticles/tree/main/components/react

function Particle() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          zIndex: -10,
        },
        fpsLimit: 1200,
        interactivity: {
          events: {
            // onClick: {
            //   enable: true,
            //   mode: "push",
            // },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 250,
            enable: true,
            opacity: 0.2,
            width: 0.7,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 4,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "squere",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
export default Particle;

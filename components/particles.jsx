import Particles from "react-tsparticles";
import { useState, useEffect } from "react";
import { useColorModeValue } from "@chakra-ui/react";

const ParticlesComponent = () => {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowParticles(true);
    }, 500);
  }, []);
  return (
    { showParticles } && (
      <Particles
        style={{ position: "fixed" }}
        options={{
          background: {
            color: {
              value: useColorModeValue("#ffffff", "#25252b"),
            },
            image: "url('')",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "20%",
          },
          fullScreen: {
            zIndex: -999,
          },
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: false,
                mode: "bubble",
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
              },
              grab: {
                distance: 400,
              },
              repulse: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: useColorModeValue("#D6BCFA", "#ffffff"),
            },
            links: {
              color: {
                value: "#ffffff",
              },
              distance: 150,
              opacity: 0.4,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 600,
                },
              },
              enable: true,
              path: {},
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: true,
              speed: 1,
              spin: {},
            },
            number: {
              density: {
                enable: true,
              },
              value: 160,
            },
            opacity: {
              random: {
                enable: true,
              },
              value: {
                min: 0,
                max: 1,
              },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                speed: 4,
                minimumValue: 0.3,
              },
            },
          },
        }}
      />
    )
  );
};

export default ParticlesComponent;

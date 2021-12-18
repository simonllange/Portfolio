import Head from "next/head";
import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Navbar from "../navbar";
import Particles from "react-tsparticles";
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <title>Simon L. Lange - Developer, designer, dreamer. </title>
        <meta
          name="description"
          content="Simon L. Lange - Web Developer, Designer and Dreamer."
        />
        <link rel="icon" href="/s-logo.png" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        <Particles
          style={{ position: "fixed" }}
          options={{
            background: {
              color: {
                // eslint-disable-next-line react-hooks/rules-of-hooks
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
                // eslint-disable-next-line react-hooks/rules-of-hooks
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
        {children}
      </Container>
    </Box>
  );
};

export default Main;

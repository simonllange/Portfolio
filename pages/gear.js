import {
  Container,
  Heading,
  Text,
  Box,
  useColorModeValue,
  LinkBox,
  Stack,
  AspectRatio,
  Image,
  VStack,
  LinkOverlay,
  HStack,
  Icon,
} from "@chakra-ui/react";
import Section from "../components/section";
import Link from "next/link";
import gearData from "../data/datagear.json";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import Particles from "react-tsparticles";

const GearPage = () => {
  return (
    <Container maxW="container.md">
      <Particles
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
            zIndex: -5,
          },
          interactivity: {
            events: {
              onClick: {
                enable: false,
                mode: "repulse",
              },
              onHover: {
                enable: true,
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
      <Section>
        <Heading mt={20} variant="section-title">
          Gear.
        </Heading>
        <Text>
          Her er en liste over det hardware jeg bruger til hverdag.{" "}
          <strong>Links er ikke affiliated.</strong> For at se hvilke
          redskaber/sprog jeg bruger, gå tilbage til{" "}
          <Link href="/#toolsPage" passHref>
            <Box
              display="inline-block"
              color={useColorModeValue("purple.400", "red.200")}
              cursor="pointer"
            >
              forsiden
            </Box>
          </Link>
        </Text>
      </Section>
      <Section>
        {gearData &&
          gearData.gearData.map(({ title, image, description, url }) => (
            <>
              <LinkBox role="group" as="article" my={10}>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  p={3}
                  spacing={6}
                  justifyContent={{ base: "center", md: "flex-start" }}
                  alignItems="center"
                  w="full"
                  my={5}
                >
                  <AspectRatio ratio={1} w="80px">
                    <Image alt={title} src={image} layout="fill" />
                  </AspectRatio>
                  <VStack spacing={0} alignItems="flex-start" flex={1} w="full">
                    <LinkOverlay href={url} isExternal>
                      <Heading pb={2} size="md">
                        {title}
                      </Heading>
                    </LinkOverlay>
                    <Text fontSize="smd">{description}</Text>
                  </VStack>
                  <HStack w={12} justifyContent="flex-start">
                    <Icon
                      boxSize={6}
                      as={ExternalLinkIcon}
                      // eslint-disable-next-line react-hooks/rules-of-hooks
                      color={useColorModeValue("purple.300", "red.200")}
                      opacity={0}
                      _groupHover={{ ml: 6, opacity: 1 }}
                      transitionProperty="all"
                      transitionDuration="slow"
                      transitionTimingFunction="ease-out"
                    />
                  </HStack>
                </Stack>
              </LinkBox>
            </>
          ))}
      </Section>
    </Container>
  );
};

export default GearPage;

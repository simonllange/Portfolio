import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Divider,
  Badge,
  Button,
  Stack,
  HStack,
  VStack,
  Text,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  Icon,
  Popover,
  PopoverBody,
  PopoverHeader,
  PopoverContent,
  PopoverTrigger,
  PopoverCloseButton,
  PopoverArrow,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import tools from "../data/data.json";
import programs from "../data/dataprogrammer.json";
import libraries from "../data/datalibraries.json";
import Particles from "react-tsparticles";

const Page = () => {
  return (
    <Container maxW="container.md">
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
      <Section>
        <Box my={12} align="center">
          <p>
            <Badge colorScheme={useColorModeValue("purple", "red")} mr={2}>
              Nyt
            </Badge>
            Ny hjemmeside er oppe og køre! Tag et kig 🥳
          </p>
        </Box>

        <Box mt={12} display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Simon L. Lange
            </Heading>
            <p>Web-entusiast ( Designer / Udvikler ) </p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 10, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor={useColorModeValue(
                "whiteAlpha.900",
                "whiteAlpha.800"
              )}
              borderWidth={4}
              borderStyle="solid"
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src="/images/avatar.jpg"
              alt="Simon"
            />
          </Box>
        </Box>
        <Box
          mt={12}
          display="flex"
          w={{ base: "100%", md: "60%" }}
          justifyContent="space-between"
        >
          <Box>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/simon-larsen-lange-ab5867213/"
            >
              <Button
                color="white"
                bg="#0077b5"
                _hover={{ backgroundColor: "#3d3d3d", transition: "0.4s" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                LinkedIn
                <Icon
                  pl={2}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  as={AiOutlineLinkedin}
                />
              </Button>
            </a>
          </Box>
          <Box>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/simonllange"
            >
              <Button
                color="white"
                bg="#8a3ab9"
                _hover={{ backgroundColor: "#3d3d3d", transition: "0.4s" }}
                fontSize={{ base: "xs", md: "md" }}
              >
                Instagram
                <Icon
                  pl={2}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  as={AiOutlineInstagram}
                />
              </Button>
            </a>
          </Box>
          <Box>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/simonllange"
            >
              <Button
                color={useColorModeValue("whiteAlpha.900", "black")}
                bg={useColorModeValue("black", "whiteAlpha.900")}
                _hover={{
                  backgroundColor: "#3d3d3d",
                  transition: "0.4s",
                  color: "white",
                }}
                fontSize={{ base: "xs", md: "md" }}
              >
                GitHub
                <Icon
                  pl={2}
                  fontSize={{ base: "2xl", md: "3xl" }}
                  as={AiOutlineGithub}
                />
              </Button>
            </a>
          </Box>
        </Box>
        <Divider my={12} borderColor="black.900" />
      </Section>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Om mig.
        </Heading>
        <Paragraph>
          Jeg er en uddannet webudvikler, med stor kærlighed til design og
          funktionalitet. Jeg er baseret i Kolding og har en rigtig stor passion
          for, at udvikle mig selv og komme frem til de bedste digitale
          løsninger, samt lærer det, som er den nye trend. Elsker at tænke på
          nye idéer, og at kunne manifestere idéerne med min kode. Når jeg ikke
          koder og designer, så elsker jeg at spille computer, se film, lave mad
          og øve mig i at tegne/lave skitser. På nuværende tidspunkt er jeg
          ledig, så hvis du har lyst til at tage en snak, skal du være velkommen
          til at kontakte mig på{" "}
          <a href="mailto:simonllange@gmail.com">
            <Box
              display="inline-block"
              color={useColorModeValue("purple.400", "red.200")}
            >
              simonllange@gmail.com
            </Box>
          </a>
        </Paragraph>
      </Section>
      <Section delay={0.1}>
        <Box display="flex" justifyContent="center" my={12}>
          <Link href="/portfolio" passHref>
            <Button
              color={useColorModeValue("black", "whiteAlpha.900")}
              rightIcon={<ChevronRightIcon />}
              bg={useColorModeValue("purple.200", "gray.600")}
              _hover={{
                transform: "scale(1.03)",
                backgroundColor: useColorModeValue("purple.300", "gray.700"),
                transition: "0.3s",
              }}
            >
              Se min portfolio
            </Button>
          </Link>
        </Box>
      </Section>
      <Box id="toolsPage" />
      <Box mt={24} />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Mine redskaber.
        </Heading>
        <Paragraph>
          Webudvikling er en verden med mange værktøjer, og jeg forsøger så vidt
          muligt at lære de ting som jeg synes virker mest oplagt og giver det
          bedste slutprodukt. Jeg har nemt ved at lærer nye ting, men som hver
          anden udvikler, så er det selvfølgelig svært at kunne det hele. Jeg
          drømmer om, at kunne kalde mig selv full-stack en dag, men på
          nuværende tidspunkt prøver jeg at blive den bedste front-end udvikler
          jeg kan være.
        </Paragraph>
      </Section>
      <Box mb={10} />
      <Section>
        <Heading as="h3" size="md">
          Programmer.
        </Heading>
        {programs &&
          programs.programs.map(({ title, image, description, url }) => (
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
      <Box my={16} />
      <Section>
        <Heading as="h3" size="md">
          Sprog.
        </Heading>
        {tools &&
          tools.tools.map(({ title, image, description, url }) => (
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
      <Box my={16} />
      <Section>
        <Heading as="h3" size="md">
          Andre libraries.
        </Heading>
        {libraries &&
          libraries.libraries.map(({ title, image, description, url }) => (
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
      <Text as="i" fontSize="md">
        Og mange flere...
      </Text>
    </Container>
  );
};

export default Page;

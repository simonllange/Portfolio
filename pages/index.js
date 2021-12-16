import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Divider,
  Badge,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";

const Page = () => {
  return (
    <Container maxW="container.md">
      <Box my={12} align="center">
        <p>
          <Badge colorScheme={useColorModeValue("blue", "red")} mr={2}>
            Nyt
          </Badge>
          Ny hjemmeside er oppe og køre! Tag ét kig 🥳
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
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor={useColorModeValue("whiteAlpha.900", "whiteAlpha.800")}
            borderWidth={4}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/avatar.jpg"
            alt="Simon"
          />
        </Box>
      </Box>
      <Divider my={12} borderColor="black.900" />
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Om mig
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Paragraph>
      </Section>
    </Container>
  );
};

export default Page;

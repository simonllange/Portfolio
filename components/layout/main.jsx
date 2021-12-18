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
        {children}
      </Container>
    </Box>
  );
};

export default Main;

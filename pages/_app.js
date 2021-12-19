import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/main";
import theme from "../lib/theme";
import Footer from "../components/footer";

const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
      <Footer />
    </ChakraProvider>
  );
};

export default Website;

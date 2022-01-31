import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "@fontsource/m-plus-rounded-1c";
import { GetServerSidePropsContext } from "next";
import Fonts from "../lib/fonts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  };
}

export default MyApp;

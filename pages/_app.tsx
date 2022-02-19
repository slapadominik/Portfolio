import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import "@fontsource/m-plus-rounded-1c";
import { GetServerSidePropsContext } from "next";
import Fonts from "../lib/Fonts";
import { useEffect } from "react";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

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

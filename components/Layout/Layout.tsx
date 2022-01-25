import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export const Layout = () => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dominik Słapa - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>Test123</Container>
    </Box>
  );
};

import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Router } from "next/router";
import React, { FC } from "react";
import { Navbar } from "../Navbar/Navbar";

export interface LayoutProps {
  router: Router;
}

export const Layout: FC<LayoutProps> = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dominik Słapa - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar path={router.asPath} />
      <Container>{children}</Container>
    </Box>
  );
};

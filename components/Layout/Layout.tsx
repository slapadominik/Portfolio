import { Box, Container } from "@chakra-ui/react";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import React, { FC } from "react";
import { Footer } from "../Footer/Footer";
import { Navbar } from "../Navbar/Navbar";

export interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dominik Słapa - Homepage</title>
        <link rel="icon" href="/mountaintop.png" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
    </Box>
  );
};

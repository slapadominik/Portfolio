import {
  Link,
  Container,
  Heading,
  Box,
  useColorModeValue,
  Image,
  Button,
} from "@chakra-ui/react";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { Section } from "../components/Section/Section";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Home = () => {
  return (
    <Container mt="4">
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
      >
        Hello, I&apos;m a full-stack developer based in Poland!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title" fontWeight={"500"}>
            Dominik Słapa
          </Heading>
          <p>Digital Craftsman ( Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Image
            borderColor="whiteAlpha.700"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="105px"
            display="inline-block"
            borderRadius="full"
            src="/profile.jpg"
            alt="Profile image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I&apos;m a full-stack developer based in Poland with a passion for
          building digital services. I have a knack for all things launching
          products, from planning and designing all the way to solving real-life
          problems with code. When not online, I love rock climbing, hiking and
          chilling in the mountains. Currently, I&apos;m working for Diagnostyka
          S.A.{" "}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  );
};

export default Home;

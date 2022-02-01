import NextLink from "next/link";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Center,
} from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Container height={"80vh"}>
      <Center height={"full"}>
        <Box>
          <Heading as="h1" textAlign={"center"}>
            Not found
          </Heading>
          <Text>The page you&apos;re looking for was not found.</Text>
          <Divider my={6} />
          <Box my={6} align="center">
            <NextLink href="/">
              <Button colorScheme="teal">Return to home</Button>
            </NextLink>
          </Box>
        </Box>
      </Center>
    </Container>
  );
};

export default NotFound;

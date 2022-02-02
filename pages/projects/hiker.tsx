import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Box,
  Stack,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Article } from "../../components/Article/Article";
import { Meta } from "../../components/Meta/Meta";
import { Title } from "../../components/Title/Title";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";
import { Image } from "@chakra-ui/react";

const LegalTalents = () => (
  <Article pageTitle="Hiker">
    <Container>
      <Title>
        Hiker <Badge>2020-2021</Badge>
      </Title>
      <Paragraph>
        Android application for searching partners for mountain trips (trekking,
        climbing, skiing).
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Source code</Meta>
          <Link href="https://github.com/slapadominik/Hiker.Android" isExternal>
            Android client <ExternalLinkIcon mx="2px" />
          </Link>
          ,{" "}
          <Link href="https://github.com/slapadominik/Hiker.API" isExternal>
            API <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Kotlin, Android Studio, C#, ASP.NET Core, SQL Server</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>Azure</span>
        </ListItem>
      </List>
      <Box mt={6}>
        <Stack direction={"row"} spacing={"10"}>
          <Image borderRadius="lg" w="50%" src="/hiker_login.png" alt={"abc"} />{" "}
          <Image borderRadius="lg" w="50%" src="/hiker_mapa.png" alt={"abc"} />
        </Stack>
        <Stack direction={"row"} spacing={"10"} mt={6} mb={6}>
          <Image borderRadius="lg" w="50%" src="/hiker_brief.png" alt={"abc"} />{" "}
          <Image
            borderRadius="lg"
            w="50%"
            src="/hiker_mountain.png"
            alt={"abc"}
          />
        </Stack>
      </Box>
    </Container>
  </Article>
);

export default LegalTalents;

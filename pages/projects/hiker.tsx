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
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

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
          <ProjectImage src="/hiker_login.png" alt={"Hiker"} />
          <ProjectImage src="/hiker_mapa.png" alt={"Hiker"} />
        </Stack>
        <Stack direction={"row"} spacing={"10"} mt={6} mb={6}>
          <Zoom>
            <Image borderRadius="lg" src="/hiker_brief.png" alt={"Hiker"} />{" "}
          </Zoom>
          <Zoom>
            <Image borderRadius="lg" src="/hiker_mountain.png" alt={"abc"} />
          </Zoom>
        </Stack>
      </Box>
    </Container>
  </Article>
);

export default LegalTalents;

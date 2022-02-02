import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Article } from "../../components/Article/Article";
import { Meta } from "../../components/Meta/Meta";
import { Title } from "../../components/Title/Title";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";

const Sfinks = () => (
  <Article pageTitle="Sfinks">
    <Container>
      <Title>
        Sfinks <Badge>2021</Badge>
      </Title>
      <Paragraph>
        Website rework and maintenance for local language school.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://sfinks-korepetycje.pl/" isExternal>
            https://sfinks-korepetycje.pl/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>OVH</span>
        </ListItem>
      </List>
      <Box mt={6}>
        <ProjectImage src="/sfinks2.png" alt="Sfinks" />
        <ProjectImage src="/sfinks1.png" alt="Sfinks" />
      </Box>
    </Container>
  </Article>
);

export default Sfinks;

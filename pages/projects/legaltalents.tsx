import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Article } from "../../components/Article/Article";
import { Meta } from "../../components/Meta/Meta";
import { Title } from "../../components/Title/Title";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";

const LegalTalents = () => (
  <Article pageTitle="LegalTalents">
    <Container>
      <Title>
        LegalTalents <Badge>2021</Badge>
      </Title>
      <Paragraph>
        A Markdown note-taking app with 100+ plugins, cross-platform and
        encrypted data sync support. The life-time revenue is more than $200k.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.legaltalents.pl/" isExternal>
            https://www.legaltalents.pl/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>NextJS, React, Chakra UI, Typescript, Strapi, PostgreSQL</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>Heroku, Vercel</span>
        </ListItem>
      </List>
      <Box mt={6}>
        <ProjectImage src="/lt_2.png" alt="LegalTalents" />
        <ProjectImage src="/lt_1.png" alt="LegalTalents" />
      </Box>
    </Container>
  </Article>
);

export default LegalTalents;

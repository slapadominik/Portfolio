import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Article } from "../../components/Article/Article";
import { Meta } from "../../components/Meta/Meta";
import { Title } from "../../components/Title/Title";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";

const Seeplaces = () => (
  <Article pageTitle="Seeplaces">
    <Container>
      <Title>
        Seeplaces <Badge>2020 - 2021</Badge>
      </Title>
      <Paragraph>
        E-commerce web application for local clothing brand.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://seeplaces.com/" isExternal>
            https://seeplaces.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Next.JS, React, Typescript, C#, ASP.NET Core, JQuery, Bootstrap 4
          </span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>Custom on-premises</span>
        </ListItem>
      </List>
      <Box mt={6}>
        <ProjectImage src="/seeplaces1.png" alt="MamZajawkę" />
        <ProjectImage src="/seeplaces2.png" alt="MamZajawkę" />
        <ProjectImage src="/seeplaces3.png" alt="MamZajawkę" />
      </Box>
    </Container>
  </Article>
);

export default Seeplaces;

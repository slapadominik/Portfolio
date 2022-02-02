import { Container, Badge, Link, List, ListItem, Box } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import { Article } from "../../components/Article/Article";
import { Meta } from "../../components/Meta/Meta";
import { Title } from "../../components/Title/Title";
import { ProjectImage } from "../../components/ProjectImage/ProjectImage";

const MamZajawke = () => (
  <Article pageTitle="MamZajawkę">
    <Container>
      <Title>
        MamZajawke <Badge>2018 - present</Badge>
      </Title>
      <Paragraph>
        E-commerce web application for local clothing brand.
      </Paragraph>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://mamzajawke.com/" isExternal>
            https://mamzajawke.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordpress, WooCommerce</span>
        </ListItem>
        <ListItem>
          <Meta>Deployment</Meta>
          <span>OVH</span>
        </ListItem>
      </List>
      <Box mt={6}>
        <ProjectImage src="/mz.png" alt="MamZajawkę" />
        <ProjectImage src="/mz2.png" alt="MamZajawkę" />
        <ProjectImage src="/mz3.png" alt="MamZajawkę" />
      </Box>
    </Container>
  </Article>
);

export default MamZajawke;

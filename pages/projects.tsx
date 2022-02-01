import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";

import legaltalents from "../public/legaltalents.png";
import mamzajawke from "../public/mamzajawke.jpg";
import hiker from "../public/hiker.png";
import seeplaces from "../public/seeplaces.png";
import sfinks from "../public/sfinks.png";
import { Section } from "../components/Section/Section";
import { Article } from "../components/Article/Article";
import { WorkGridItem } from "../components/GridItem/GridItem";

const Works = () => (
  <Article pageTitle="Works">
    <Container mt={4}>
      <Heading as="h3" fontSize={20} mb={4}>
        Personal projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="legaltalents"
            title="LegalTalents"
            thumbnail={legaltalents}
          >
            Modern job board for lawyers. The new way to find career
            opportunities using online map with offers.
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="mamzajawke"
            title="MamZajawkę"
            thumbnail={mamzajawke}
          >
            E-commerce web application for local clothing brand.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem id="hiker" title="Hiker" thumbnail={hiker}>
            Mobile application for searching hiking partners.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Contribution
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="seeplaces" thumbnail={seeplaces} title="Seeplaces">
            Multilingual, multi-currency e-commerce web application with
            excursions for tourists.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="sfinks"
            thumbnail={sfinks}
            title="Sfinks Korepetycje"
          >
            Website rework and maintenance for local language school.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Article>
);

export default Works;

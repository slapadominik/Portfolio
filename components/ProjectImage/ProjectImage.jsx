import { Image } from "@chakra-ui/react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const ProjectImage = ({ src, alt }) => (
  <Zoom>
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  </Zoom>
);

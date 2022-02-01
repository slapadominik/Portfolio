import { motion } from "framer-motion";
import Head from "next/head";
import { FC } from "react";
import { GridItemStyle } from "../GridItem/GridItem";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: -0, y: 20 },
};

export interface ArticleProps {
  pageTitle: string;
}

export const Article: FC<ArticleProps> = ({ children, pageTitle }) => (
  <motion.article
    initial="hidden"
    animate="enter"
    exit="exit"
    variants={variants}
    transition={{ duration: 0.4, type: "easeInOut" }}
    style={{ position: "relative" }}
  >
    <>
      {pageTitle && (
        <Head>
          <title>{pageTitle} - Takuya Matsuyama</title>
          <meta name="twitter:title" content={pageTitle} />
          <meta property="og:title" content={pageTitle} />
        </Head>
      )}
      {children}

      <GridItemStyle />
    </>
  </motion.article>
);

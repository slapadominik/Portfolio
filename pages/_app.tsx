import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout/Layout";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Layout router={router}>
      <Component {...pageProps} key={router.route} />
    </Layout>
  );
}

export default MyApp;

import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  // Providers - context/providers, theme, data
  // Layout
  //Props adicionales
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

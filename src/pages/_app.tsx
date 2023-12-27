import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { wrapper } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <>
      <Head>
        <title>Ricky And Morty</title>
        <meta
          name="description"
          content="Characters, locations, episodes and more."
        />
        <meta name="keywords" content="ricky, morty, rick, smith" />
      </Head>
      <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </>
  );
}
export default wrapper.withRedux(App);

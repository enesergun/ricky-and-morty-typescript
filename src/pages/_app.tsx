import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { wrapper } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { useStore } from "react-redux";

function App({ Component, pageProps }: AppProps) {
  const store: any = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PersistGate>
  );
}
export default wrapper.withRedux(App);

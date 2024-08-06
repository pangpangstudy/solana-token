import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";

import AppBar from "components/AppBar";

import Notification from "components/Notification";
import "@solana/wallet-adapter-react-ui/styles.css";
import "../styles/globals.css";
import { ContextProvider } from "contexts/ContextProvider";
import { Footer } from "components/Footer";
const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="bg-default-900">
      <Head>
        <title>Solana Token creator</title>
      </Head>
      <ContextProvider>
        <Notification />
        <AppBar />
        <Component {...pageProps} />
        <Footer />
      </ContextProvider>
      {/* Scripts */}
      <script src="assets/libs/preline/preline.js"> </script>
      <script src="assets/libs/swiper/swiper-bundle.min.js"> </script>
      <script src="assets/libs/gumshoejs/gumshoe.polyfills.min.js"> </script>
      <script src="assets/libs/lucide/lucide.min.js"> </script>
      <script src="assets/libs/aos/aos.js"> </script>
      <script src="assets/js/swiper.js"> </script>
      <script src="assets/js/theme.js"> </script>
    </div>
  );
};

export default App;

import type { AppProps } from "next/app";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import "src/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;

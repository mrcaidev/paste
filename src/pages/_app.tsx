import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import "src/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <Component {...pageProps} />
    <Footer />
    <ToastContainer position="top-center" theme="colored" />
  </>
);

export default App;

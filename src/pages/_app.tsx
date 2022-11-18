import type { AppProps } from "next/app";
import { Footer } from "src/components/footer";
import { Header } from "src/components/header";
import "src/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <main className="flex flex-col justify-center items-center gap-6 max-w-5xl min-h-screen px-8 py-20 mx-auto">
      <Component {...pageProps} />
    </main>
    <Footer />
  </>
);

export default App;

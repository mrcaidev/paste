import { Head, Html, Main, NextScript } from "next/document";

const Document = () => (
  <Html lang="en">
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
    <body className="bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;

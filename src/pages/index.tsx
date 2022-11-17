import Head from "next/head";

const Page = () => (
  <>
    <Head>
      <title>Home - Paste</title>
      <meta name="description" content="A simple markdown pastebin." />
      <link rel="canonical" href="https://paste.mrcai.dev/" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="Home - Paste" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://paste.mrcai.dev/banner.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://paste.mrcai.dev/" />
      <meta property="og:description" content="A simple markdown pastebin." />
      <meta property="og:locale" content="en_US" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mrcaidev" />
      <meta name="twitter:title" content="Home - Paste" />
      <meta name="twitter:description" content="A simple markdown pastebin." />
      <meta name="twitter:image" content="https://paste.mrcai.dev/banner.png" />
      <meta name="twitter:creator" content="@mrcaidev" />
    </Head>
    <h1 className="text-4xl">Hello</h1>
  </>
);

export default Page;

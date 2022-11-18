import { Head } from "src/components/head";

const Page = () => (
  <>
    <Head title="Home" description="A simple markdown pastebin.">
      <link rel="canonical" href="https://paste.mrcai.dev/" />
      <meta name="robots" content="index, follow" />
    </Head>
    <h1 className="text-4xl">Hello</h1>
  </>
);

export default Page;

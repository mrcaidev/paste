import { Head } from "src/components/head";

const Page = () => (
  <>
    <Head title="Home" description="A simple markdown pastebin.">
      <link rel="canonical" href="https://paste.mrcai.dev/" />
      <meta name="robots" content="index, follow" />
    </Head>
    <main className="max-w-5xl min-h-screen px-8 pt-20 mx-auto">
      <h1 className="text-4xl">Hello</h1>
    </main>
  </>
);

export default Page;

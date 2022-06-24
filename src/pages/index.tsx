import Head from "next/head";
import { Editor } from "src/components/editor";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Paste - MrCai</title>
      </Head>
      <Editor />
    </>
  );
}

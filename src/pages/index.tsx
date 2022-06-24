import "highlight.js/styles/atom-one-dark.css";
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

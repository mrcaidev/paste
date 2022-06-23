import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { Editor } from "src/components/editor";
import { TopBar } from "src/components/top-bar";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Paste - MrCai</title>
      </Head>
      <TopBar />
      <Box as="main" h="90vh">
        <Editor />
      </Box>
    </>
  );
}

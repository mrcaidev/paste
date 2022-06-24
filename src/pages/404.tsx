import { Center, Heading } from "@chakra-ui/react";
import Head from "next/head";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>404 - MrCai</title>
      </Head>
      <Center h="80vh">
        <Heading as="h1">Page Not Found</Heading>
      </Center>
    </>
  );
}

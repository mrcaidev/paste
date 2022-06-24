import {
  Box,
  Center,
  Heading,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useMemo } from "react";
import { usePaste } from "src/hooks/use-paste.hook";
import { parseMarkdown } from "src/utils/markdown";

export default function PastedPage() {
  const linkColor = useColorModeValue("blue.700", "blue.300");
  const {
    paste: { id, time, content },
    error,
    loading,
  } = usePaste();

  const html = useMemo(() => ({ __html: parseMarkdown(content) }), [content]);
  const title = useMemo(() => `${id ? id.slice(0, 8) : "Paste"} - MrCai`, [id]);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {loading ? (
        <Center h="100%">
          <Spinner colorScheme="blue" size="xl" thickness="5px" />
        </Center>
      ) : error ? (
        <Center h="100%">
          <Heading as="h1">{error}</Heading>
        </Center>
      ) : (
        <>
          <Center as="blockquote" py="10px">
            Pasted at: {time}
          </Center>
          <Box
            as="article"
            dangerouslySetInnerHTML={html}
            px={{ base: "40px", md: "80px", xl: "120px" }}
            pb="80px"
            flexGrow={1}
            overflow="auto"
            sx={{
              "& a": {
                color: linkColor,
                "&:hover": {
                  textDecor: "underline",
                },
              },
            }}
          />
        </>
      )}
    </>
  );
}

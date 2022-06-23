import { Box, SimpleGrid, Textarea, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, useMemo, useState } from "react";
import { parseMarkdown } from "src/utils/markdown";

export function Editor() {
  const bg = useColorModeValue("gray.200", "gray.800");
  const [md, setMd] = useState("");
  const handleMdChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMd(e.target.value);
  };
  const html = useMemo(() => ({ __html: parseMarkdown(md) }), [md]);

  return (
    <SimpleGrid
      gridTemplateRows={{ base: "1fr 1fr", lg: "1fr" }}
      gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
      gap="20px"
      h="100%"
      p="20px"
    >
      <Textarea
        value={md}
        onChange={handleMdChange}
        placeholder="Write some markdown here!"
        resize="none"
        h="100%"
        p="20px"
        fontFamily="Fira Code, Ubuntu Mono, Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"
        bg={bg}
        shadow="lg"
        rounded="lg"
        overflow="auto"
      />
      <Box
        as="article"
        dangerouslySetInnerHTML={html}
        h="100%"
        p="10px 30px"
        bg={bg}
        shadow="lg"
        rounded="lg"
        overflow="auto"
      />
    </SimpleGrid>
  );
}

import { SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { Markdown } from "./markdown";
import { Preview } from "./preview";

export function Editor() {
  const [md, setMd] = useState("");

  return (
    <SimpleGrid
      as="main"
      columns={{ base: 1, lg: 2 }}
      h="100%"
      gap="20px"
      p="20px"
    >
      <Markdown md={md} setMd={setMd} />
      <Preview md={md} />
    </SimpleGrid>
  );
}

import { Box, ButtonGroup, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useState } from "react";
import { Help } from "./help";
import { Markdown } from "./markdown";
import { Preview } from "./preview";
import { Stash } from "./stash";
import { Submit } from "./submit";
import { Sync } from "./sync";

export const Editor = memo(() => {
  const [markdown, setMarkdown] = useState("");

  return (
    <Box as="main">
      <Wrap px="30px" spacing="8px" justify="space-between">
        <WrapItem gap="8px">
          <ButtonGroup
            variant="solid"
            colorScheme="blue"
            size={{ base: "sm", md: "md" }}
            isAttached
          >
            <Stash markdown={markdown} />
            <Sync setMarkdown={setMarkdown} />
          </ButtonGroup>
          <Help />
        </WrapItem>
        <WrapItem>
          <Submit markdown={markdown} />
        </WrapItem>
      </Wrap>
      <SimpleGrid
        gridTemplateRows={{ base: "1fr 1fr", lg: "1fr" }}
        gridTemplateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        gap="20px"
        h="80vh"
        p="20px"
      >
        <Markdown markdown={markdown} setMarkdown={setMarkdown} />
        <Preview markdown={markdown} />
      </SimpleGrid>
    </Box>
  );
});

Editor.displayName = "Editor";

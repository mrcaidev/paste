import { Flex } from "@chakra-ui/react";
import { Editor } from "src/components/editor";
import { TopBar } from "src/components/top-bar";

export default function IndexPage() {
  return (
    <Flex direction="column" h="100%">
      <TopBar />
      <Editor />
    </Flex>
  );
}

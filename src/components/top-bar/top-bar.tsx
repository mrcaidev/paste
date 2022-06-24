import { Flex, Hide, Show } from "@chakra-ui/react";
import { Logo } from "./logo";
import { ToolkitHorizontal, ToolkitVertical } from "./toolkit";

export function TopBar() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      px="32px"
      py="16px"
      gap="20px"
      zIndex="999"
      backdropFilter="blur(5px)"
    >
      <Logo />
      <Show above="sm">
        <ToolkitHorizontal />
      </Show>
      <Hide above="sm">
        <ToolkitVertical />
      </Hide>
    </Flex>
  );
}

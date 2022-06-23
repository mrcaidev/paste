import { Flex, Hide, Show } from "@chakra-ui/react";
import { Logo } from "./logo";
import { ToolkitHorizontal, ToolkitVertical } from "./toolkit";

export function TopBar() {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px="32px"
      py="16px"
      gap="20px"
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

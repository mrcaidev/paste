import { Text } from "@chakra-ui/react";
import NextLink from "next/link";

export function Logo() {
  return (
    <Text
      as="h1"
      fontSize="4xl"
      fontWeight="1000"
      lineHeight="none"
      textAlign="center"
    >
      <NextLink href="https://www.mrcai.space">MRCAI</NextLink>
    </Text>
  );
}

import { Link, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      as="h1"
      fontSize="4xl"
      fontWeight="1000"
      lineHeight="none"
      textAlign="center"
    >
      <Link
        href="https://www.mrcai.space"
        isExternal
        _hover={{ textDecor: "none" }}
      >
        MRCAI
      </Link>
    </Text>
  );
}

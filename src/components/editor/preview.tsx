import { Box, useColorModeValue } from "@chakra-ui/react";
import { parseMarkdown } from "src/utils/markdown";

interface Props {
  markdown: string;
}

export const Preview = ({ markdown }: Props) => {
  const bg = useColorModeValue("gray.200", "gray.800");
  const linkColor = useColorModeValue("blue.700", "blue.300");

  const html = { __html: parseMarkdown(markdown) };

  return (
    <Box
      as="article"
      dangerouslySetInnerHTML={html}
      h="100%"
      p="10px 30px"
      bg={bg}
      shadow="lg"
      rounded="lg"
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
  );
};

Preview.displayName = "Preview";

import { Box, useColorModeValue } from "@chakra-ui/react";
import { memo, useMemo } from "react";
import { parseMarkdown } from "src/utils/markdown";

interface Props {
  md: string;
}

function PreviewComponent({ md }: Props) {
  const bg = useColorModeValue("gray.200", "gray.800");
  const html = useMemo(() => ({ __html: parseMarkdown(md) }), [md]);

  return (
    <Box>
      <Box
        as="article"
        dangerouslySetInnerHTML={html}
        h="100%"
        p="10px 30px"
        bg={bg}
        shadow="lg"
        rounded="md"
      />
    </Box>
  );
}

export const Preview = memo(
  PreviewComponent,
  (cur, next) => cur.md === next.md
);

Preview.displayName = "Preview";

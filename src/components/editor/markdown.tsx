import { Box, Textarea, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent, memo } from "react";

interface Props {
  md: string;
  setMd(md: string): void;
}

function MarkdownComponent({ md, setMd }: Props) {
  const bg = useColorModeValue("gray.200", "gray.800");

  const handleMdChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMd(e.target.value);
  };

  return (
    <Box>
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
      />
    </Box>
  );
}

export const Markdown = memo(
  MarkdownComponent,
  (cur, next) => cur.md === next.md
);

Markdown.displayName = "Markdown";

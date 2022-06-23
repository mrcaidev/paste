import { Textarea, useColorModeValue } from "@chakra-ui/react";
import { ChangeEvent } from "react";

interface Props {
  markdown: string;
  setMarkdown(md: string): void;
}

export const Markdown = ({ markdown, setMarkdown }: Props) => {
  const bg = useColorModeValue("gray.200", "gray.800");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setMarkdown(e.target.value);
  };

  return (
    <Textarea
      value={markdown}
      onChange={handleChange}
      placeholder="Write some markdown here!"
      resize="none"
      h="100%"
      p="20px"
      fontFamily="Fira Code, Ubuntu Mono, Consolas, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace"
      bg={bg}
      shadow="lg"
      rounded="lg"
      overflow="auto"
    />
  );
};

Markdown.displayName = "Markdown";

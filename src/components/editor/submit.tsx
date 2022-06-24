import { Button, Icon, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { MarkdownPostResponse } from "src/interfaces/markdown.interface";

interface Props {
  markdown: string;
}

export const Submit = memo(({ markdown }: Props) => {
  const toast = useToast();
  const router = useRouter();

  const handleSubmit = async () => {
    try {
      const res = await fetch("/api/markdown", {
        method: "POST",
        body: JSON.stringify({ content: markdown }),
        headers: { "Content-Type": "application/json" },
      });
      const { message, data }: MarkdownPostResponse = await res.json();

      if (!res.ok || data === null) {
        throw new Error(message);
      }

      toast({
        title: "Success",
        status: "success",
      });
      router.push(`/${data}`);
    } catch (e) {
      toast({
        title: String(e),
        status: "error",
      });
    }
  };

  return (
    <Button
      colorScheme="green"
      size={{ base: "sm", md: "md" }}
      leftIcon={<Icon as={FaPaperPlane} />}
      onClick={handleSubmit}
      disabled={markdown === ""}
    >
      Submit
    </Button>
  );
});

Submit.displayName = "Submit";

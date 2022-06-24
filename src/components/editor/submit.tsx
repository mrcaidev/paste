import { Button, Icon, useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { memo, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { PastePostResponse } from "src/interfaces/api.interface";

interface Props {
  markdown: string;
}

export const Submit = memo(({ markdown }: Props) => {
  const toast = useToast();
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const pasteMarkdown = async () => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/paste", {
        method: "POST",
        body: JSON.stringify({ content: markdown }),
        headers: { "Content-Type": "application/json" },
      });
      const { message, data }: PastePostResponse = await res.json();

      if (!res.ok || data === null) {
        toast({
          title: "Error",
          description: message,
          status: "error",
        });
        return;
      }

      toast({
        title: "Success",
        description: "Document has been pasted",
        status: "success",
      });
      router.push(data.url);
    } catch (e) {
      toast({
        title: "Error",
        description: String(e),
        status: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Button
      colorScheme="green"
      size={{ base: "sm", md: "md" }}
      leftIcon={<Icon as={FaPaperPlane} />}
      onClick={pasteMarkdown}
      disabled={markdown === "" || isSubmitting}
      isLoading={isSubmitting}
      loadingText="Submitting..."
    >
      Submit
    </Button>
  );
});

Submit.displayName = "Submit";

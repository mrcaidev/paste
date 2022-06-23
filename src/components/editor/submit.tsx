import { Button, Icon, useToast } from "@chakra-ui/react";
import { memo } from "react";
import { FaPaperPlane } from "react-icons/fa";

interface Props {
  markdown: string;
}

export const Submit = memo(({ markdown }: Props) => {
  const toast = useToast();
  const handleSubmit = () => {
    try {
      console.log(markdown);
      toast({
        title: "Success",
        status: "success",
      });
    } catch (e) {
      toast({
        title: "Error",
        description: String(e),
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
    >
      Submit
    </Button>
  );
});

Submit.displayName = "Submit";

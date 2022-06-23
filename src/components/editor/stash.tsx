import { Button, Icon, useToast } from "@chakra-ui/react";
import { memo } from "react";
import { FaBookmark } from "react-icons/fa";

interface Props {
  markdown: string;
}

export const Stash = memo(({ markdown }: Props) => {
  const toast = useToast();

  const handleStash = () => {
    try {
      localStorage.setItem("stash", markdown);
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
    <Button leftIcon={<Icon as={FaBookmark} />} onClick={handleStash}>
      Stash
    </Button>
  );
});

Stash.displayName = "Stash";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Icon,
  IconButton,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { memo, useRef } from "react";
import { FaSync } from "react-icons/fa";

interface Props {
  setMarkdown(md: string): void;
}

export const Sync = memo(({ setMarkdown }: Props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);
  const handleSync = () => {
    try {
      setMarkdown(localStorage.getItem("stash") ?? "");
      onClose();
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
    <>
      <IconButton
        icon={<Icon as={FaSync} />}
        aria-label="Sync with stashed draft"
        onClick={onOpen}
      />
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        leastDestructiveRef={cancelRef}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Sync with draft</AlertDialogHeader>
            <AlertDialogBody>
              Are you sure? Your current input will be completely erased, and
              cannot undo this action afterwards!
            </AlertDialogBody>
            <AlertDialogFooter gap="10px">
              <Button
                ref={cancelRef}
                variant="ghost"
                colorScheme="blue"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={handleSync}>
                Sync
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
});

Sync.displayName = "Sync";

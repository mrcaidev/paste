import {
  Button,
  Icon,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { memo } from "react";
import { MdHelp } from "react-icons/md";

export const Help = memo(() => {
  const titleColor = useColorModeValue("blue.800", "blue.200");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        variant="ghost"
        size={{ base: "sm", md: "md" }}
        leftIcon={<Icon as={MdHelp} />}
        onClick={onOpen}
      >
        Help
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Help</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text as="h2" textAlign="center" color={titleColor}>
              Welcome to pastebin!
            </Text>
            <Text as="h3">💡 How to use?</Text>
            <OrderedList pl="0">
              <ListItem>
                Write markdown on the left panel, and preview HTML on the right.
              </ListItem>
              <ListItem>
                You can temporarily save your draft by clicking the&nbsp;
                <Text as="strong">Stash</Text>&nbsp;button, and restore it by
                clicking the sync icon on its right.
              </ListItem>
              <ListItem>
                Once you finish, click the&nbsp;
                <Text as="strong">Submit</Text>
                &nbsp;button. You will be redirected to the page with contents
                you just wrote.
              </ListItem>
              <ListItem>Share the URL with your friends!</ListItem>
            </OrderedList>
            <Text as="h3">📣 Attention</Text>
            <UnorderedList pl="0">
              <ListItem>
                Submitted contents are expired in&nbsp;
                <Text as="strong">30 days</Text>.
              </ListItem>
              <ListItem>
                Drafts are stashed in your browser. Behaviors like cache
                cleaning may erase your draft.
              </ListItem>
            </UnorderedList>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              Got it!
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
});

Help.displayName = "Help";

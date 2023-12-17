import { FC, memo } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Architecture } from "../../types/architecture";
import { CardDetailContent } from "../atom/cardParts/CardDetailContent";

type Props = {
  architecture: Architecture | null;
  isOpen: boolean;
  onClose: () => void;
};

export const CardDetail: FC<Props> = memo((props) => {
  const { isOpen, onClose, architecture } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          <CardDetailContent architecture={architecture} />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            閉じる
          </Button>
          {/* <Button variant="ghost">Secondary Action</Button> */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

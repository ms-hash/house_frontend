import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { FC, memo } from "react";
//import { CategorySelect } from "../atom/subcontents/CategorySelect";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const MenuDrawer: FC<Props> = memo((props) => {
  const { onClose, isOpen } = props;
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>カテゴリ検索</DrawerHeader>
        <DrawerBody>
          {/* <CategorySelect /> */}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

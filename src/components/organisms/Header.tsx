import { FC, memo } from "react";
import {
  Box,
  Flex,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { FiGitlab } from "react-icons/fi";

import { PrimaryButton } from "../atom/button/PrtrimaryButton";
import { Title } from "../atom/headerFooter/Title";
import { MenuIcon } from "../atom/headerFooter/MenuIcon";
import { SearchForm } from "../atom/subcontents/SearchForm";
import { MenuDrawer } from "../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box>
        <Flex
          minH={"70px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
          <Title>Logo</Title>
          <Stack
            display={{ base: "none", md: "flex" }}
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            spacing={6}
          >
            <PrimaryButton
              icon={FiGitlab}
              bgColor1="#151f21"
              bgColor2="gray.900"
              paddingRight={1}
            >
              Gitlab
            </PrimaryButton>
          </Stack>
          <Box display={{ base: "flex", md: "none" }}>
            <SearchForm />
          </Box>
          <MenuIcon onOpen={onOpen} />
        </Flex>
        <MenuDrawer isOpen={isOpen} onClose={onClose} />
      </Box>
    </>
  );
});

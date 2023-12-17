import { FC, memo } from "react";
import { InputGroup, Input, InputRightAddon } from "@chakra-ui/react";
import { BiSearchAlt2 } from "react-icons/bi";

import { SecondaryButton } from "../button/SecondaryButton";
import { useText } from "../../../hooks/useText";
import { useAllArchitectures } from "../../../hooks/useAllArchitectures";

export const SearchForm: FC = memo(() => {
  const { searchData } = useAllArchitectures();
  const { text, onChangeSearchText  } = useText();
  const onClickSearch = () => searchData(text);
  return (
    <>
      <InputGroup borderRadius={5} size="md" pt={1}>
        <Input
          id="text"
          placeholder="名前"
          bg={"white"}
          value={text}
          onChange={onChangeSearchText}
        />
        <InputRightAddon p={0} border="none">
          <SecondaryButton
            bgColor1="purple.400"
            bgColor2="putple.600"
            icon={BiSearchAlt2}
            paddingRight={0}
            disabled={text === ""}
            onClick={onClickSearch}
          >
            {null}
          </SecondaryButton>
        </InputRightAddon>
      </InputGroup>
    </>
  );
});

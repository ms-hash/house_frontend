import { FC, memo } from "react";
import { GridItem } from "@chakra-ui/react";

import { Search } from "../molecules/Search";
import { CategoryList } from "../molecules/CategoryList";

export const NavList: FC = memo(() => {
  return (
    <>
      <GridItem
        pl={{ base: "none", md: 0 }}
        area={"nav"}
        bg="blackAlpha.50"
        display={{ base: "none", md: "flex" }}
        flexDirection={"column"}
      >
        <Search />
        <CategoryList />
      </GridItem>
    </>
  );
});

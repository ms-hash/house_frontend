import { FC, memo } from "react";
import { GridItem } from "@chakra-ui/react";
import { Header } from "../organisms/Header";

export const HeaderLayout: FC = memo(() => {
  return (
    <GridItem area={"header"}>
      <Header />
    </GridItem>
  );
});

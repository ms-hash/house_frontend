import { FC, memo } from "react";
import { GridItem } from "@chakra-ui/react";

export const FooterLayout: FC = memo(() => {
  return (
    <GridItem pl="2" bg="#171321" area={"footer"}>
      Footer
    </GridItem>
  );
});

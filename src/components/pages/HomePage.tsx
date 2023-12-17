import { FC, memo } from "react";
import { Grid } from "@chakra-ui/react";

import { HeaderLayout } from "../templates/HeaderLayout";
import { MainLayout } from "../templates/MainLayout";
import { FooterLayout } from "../templates/FooterLayout";

export const HomePage: FC = memo(() => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `
            "header header"
            "main main"
            "footer footer"
          `,
          md: `
            "header header"
            "main nav "
            "footer footer"
          `,
        }}
        p={{ base: 4, md: 10 }}
        gridTemplateRows={"70px 1fr 40px"}
        gridTemplateColumns={"1fr 250px"}
        h="100vh"
        gap="1"
        fontWeight="bold"
      >
        <HeaderLayout />
        <MainLayout />
        <FooterLayout />
      </Grid>
    </>
  );
});

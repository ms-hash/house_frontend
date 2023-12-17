import { FC, memo } from "react";
import { Center, GridItem, Text } from "@chakra-ui/react";

export const NotFound: FC = memo(() => {
  return (
    <GridItem pl={{ base: 0, md: 0 }} pt="30px" area={"main"} bg="white">
      <Center h="100vh">
        <Text fontSize="4xl">Not Found</Text>
      </Center>
    </GridItem>
  );
});

import { FC } from "react";
import { Flex, Heading, useBreakpointValue, useColorModeValue } from "@chakra-ui/react";
import { useAllArchitectures } from "../../../hooks/useAllArchitectures";

type Props = {
  children: React.ReactNode
};

export const Title: FC<Props> = (props) => {
  const { children } = props;
  const { getArchitectures } = useAllArchitectures();
  return (
    <Flex flex={{ base: 1 }} justify={{ base: "start", md: "center" }} onClick={getArchitectures}>
      <Heading
        textAlign={useBreakpointValue({ base: "center", md: "right" })}
        color={useColorModeValue("gray.800", "white")}
        fontSize={{ base: "lg", md: "3xl" }}
      >
        {children}
      </Heading>
    </Flex>
  );
};

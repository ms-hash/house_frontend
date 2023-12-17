import { FC, memo } from "react";
import { Center } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode
}

export const PrimaryLabel: FC<Props> = memo((props) => {
  const { children } = props;
  return(
    <>
      <Center bg="purple.500" h="50px" color="white" borderRadius="xl">
        {children}
      </Center>
    </>
  );
});
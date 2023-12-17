import { FC, memo } from "react";
import { Button, useColorModeValue, Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
  icon: IconType;
  bgColor1: string;
  bgColor2: string;
  paddingRight: number;
}

export const PrimaryButton: FC<Props> = memo((props) => {
  const { children, icon, bgColor1, bgColor2, paddingRight } = props;
  const bg = useColorModeValue(bgColor1, bgColor2);
  return (
    <Button
      bg={bg}
      color={"white"}
      rounded={"md"}
      _hover={{
        transform: "translateY(-2px)",
        variant: "outline",
        boxShadow: "lg",
      }}
    >
      <Box pr={paddingRight} pt={1}>
        <Icon as={icon} />
      </Box>
      <Box>{children}</Box>
    </Button>
  );
});

import { FC, memo } from "react";
import { Button, useColorModeValue, Box, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

type Props = {
  children: React.ReactNode;
  icon: IconType;
  bgColor1: string;
  bgColor2: string;
  paddingRight: number;
  disabled?: boolean;
  onClick: () => void;
};

export const SecondaryButton: FC<Props> = memo((props) => {
  const {
    children,
    icon,
    bgColor1,
    bgColor2,
    paddingRight,
    onClick,
    disabled = false,
  } = props;
  const bg = useColorModeValue(bgColor1, bgColor2);
  return (
    <Button
      bg={bg}
      color={"white"}
      rounded={"md"}
      isDisabled={disabled}
      _hover={{
        transform: "translateY(-2px)",
        variant: "outline",
        boxShadow: "lg",
      }}
      onClick={onClick}
    >
      <Box pr={paddingRight} pt={1}>
        <Icon as={icon} />
      </Box>
      <Box>{children}</Box>
    </Button>
  );
});

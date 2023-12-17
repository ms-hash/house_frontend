import { FC, memo } from "react";
import { Box, Text } from "@chakra-ui/react";

type Props = {
  name: string;
};

export const CardTitleBox: FC<Props> = memo((props) => {
  const { name } = props;
  return (
    <Box p="6" bg="white" pb={40}>
      <Text color="blackAlpha.700" as="b" fontSize="2xl">
        {name}
      </Text>
    </Box>
  );
});

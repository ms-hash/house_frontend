import { Badge } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  category: string;
}

export const BadgeLabel: FC<Props> = (props) => {
  const { category } = props;
  return (
    <Badge
      borderRadius="full"
      position="absolute"
      top={2}
      right={2}
      bg="purple.600"
      color="gray.50"
    >
      {category}
    </Badge>
  );
};

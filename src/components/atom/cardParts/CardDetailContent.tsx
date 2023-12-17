import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import { FC, memo } from "react";
import { Architecture } from "../../../types/architecture";

type Props = {
  architecture: Architecture | null;
};

export const CardDetailContent: FC<Props> = memo((props) => {
  const { architecture } = props;
  return (
    <>
      <Image src={architecture?.imageUrl} alt={architecture?.name} />
      <Card>
        <CardHeader>
          <Heading size="md">{architecture?.name}</Heading>
          <Tag bg="purple.600" color="gray.50">
            {architecture?.category.name}
          </Tag>
        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing="4">
            <Box>
              <Heading size="xs" textTransform="uppercase">
                所在地
              </Heading>
              <Text pt="2" fontSize="sm">
                {architecture?.address.prefecture}/{architecture?.address.city}/
                {architecture?.address.suite}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </>
  );
});

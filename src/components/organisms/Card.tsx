import { FC, memo } from "react";
import { Box, GridItem, Wrap, WrapItem } from "@chakra-ui/react";

import { useAllArchitectures } from "../../hooks/useAllArchitectures";
import { BadgeLabel } from "../atom/cardParts/BadgeLabel";
import { ImageBox } from "../atom/cardParts/ImageBox";
import { CardTitleBox } from "../atom/cardParts/CardTitleBox";

type Props = {
  onClick: (id: number) => void;
};

export const Card: FC<Props> = memo((props) => {
  const { onClick } = props;
  const { architectures } = useAllArchitectures();
  return (
    <>
      <GridItem pl={{ base: 0, md: 0 }} pt="30px" area={"main"} bg="white">
        <Wrap>
          {architectures.map((architecture) => (
            <WrapItem mx="auto" key={architecture.id}>
              <Box
                w="350px"
                h="350px"
                borderRadius="lg"
                overflow="hidden"
                position="relative"
                boxShadow={"2xl"}
                _hover={{
                  cursor: "pointer",
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                onClick={() => onClick(architecture.id)}
              >
                <BadgeLabel category={architecture.category.name} />
                <ImageBox
                  imageUrl={architecture.imageUrl}
                  name={architecture.name}
                />
                <CardTitleBox name={architecture.name} />
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </GridItem>
    </>
  );
});

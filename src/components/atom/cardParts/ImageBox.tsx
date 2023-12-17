import { FC, memo } from "react";
import { Image } from "@chakra-ui/react";

type Props = {
  imageUrl: string;
  name: string;
}

export const ImageBox: FC<Props> = memo((props) => {
  const { imageUrl, name } = props;
  return (
    <Image
      src={imageUrl}
      alt={name}
      w={350}
      h={250}
    />
  );
});

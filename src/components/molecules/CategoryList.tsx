import { FC, memo } from "react";
import { Box } from "@chakra-ui/react";

import { PrimaryLabel } from "../atom/subcontents/PrimaryLabel";
import { CategorySelect } from "../atom/subcontents/CategorySelect";

export const CategoryList: FC = memo(() => {
  return (
    <Box mt={20}>
      <PrimaryLabel>カテゴリ検索</PrimaryLabel>
      <CategorySelect />
    </Box>
  );
});

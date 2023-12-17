import { FC, memo } from "react";

import { SearchForm } from "../atom/subcontents/SearchForm";
import { PrimaryLabel } from "../atom/subcontents/PrimaryLabel";

export const Search: FC = memo(() => {
  return (
    <>
      <PrimaryLabel>検索</PrimaryLabel>
      <SearchForm />
    </>
  );
});

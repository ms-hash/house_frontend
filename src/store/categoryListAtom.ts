import { atom } from "recoil";
import { Category } from "../types/category";

export const userCategoryState = atom<Array<Category>>({
  key: "userCategoryListState",
  default: [],
});

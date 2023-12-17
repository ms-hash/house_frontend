import {Category} from "./category";

export type Architecture = {
  id: number;
  name: string;
  imageUrl: string;
  address: {
    prefecture: string;
    city: string;
    suite: string;
  };
  category: Category;
}
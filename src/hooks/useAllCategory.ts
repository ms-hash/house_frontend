import { useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import { client } from "../utils/axios";

import { useAllArchitectures } from "./useAllArchitectures";
import { userCategoryState } from "../store/categoryListAtom";
import { Architecture } from "../types/architecture";

export const useAllCategory = () => {
  const [loading, setLoading] = useState(false);
  const { setArchitectures } = useAllArchitectures();
  const [categories, setCategories] = useRecoilState(userCategoryState);

  const getCategories = useCallback(async () => {
    try {
      setLoading(true);
      const fetchCategories = await client.get(
        "/categories"
      );
      setCategories(fetchCategories.data);
    } finally {
      setLoading(false);
    }
  }, []);
  const categoryData = useCallback(async (id: number) => {
    try {
      setLoading(true);
      const fetchArchitectures = await client.get(
        "/architectures"
      );
      const searchedCategory = fetchArchitectures.data.filter(
        (item: Architecture) => item.category.id === id
      );
      setArchitectures(searchedCategory);
    } finally {
      setLoading(false);
    }
  }, []);
  return {
    categories,
    getCategories,
    loading,
    categoryData,
  };
};

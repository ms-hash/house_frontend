import { ChangeEvent, useState } from "react";
import { Category } from "../types/category";
import { client } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export const useCreateCategory = () => {
  const [valueCategory, setValueCategory] = useState<Category>({
    id: 0,
    name: "",
  });
  const createCategory = (params: Category) => {
    return client.post("/categories", params);
  };
  const deleteCategory = (id: number) => {
    return client.delete(`/categories/${id}`);
  };

  const navigate = useNavigate();
  const handleChangeCategory = (e: ChangeEvent<HTMLInputElement>) => {
    setValueCategory({
      ...valueCategory,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitCategory = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await createCategory(valueCategory);
      console.log(res);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createCategory,
    deleteCategory,
    handleChangeCategory,
    handleSubmitCategory,
    valueCategory,
    setValueCategory,
  };
};

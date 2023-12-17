import { ChangeEvent, useState } from "react";
import { Address } from "../types/address";
import { client } from "../utils/axios";
import { useNavigate } from "react-router-dom";

export const useCreateAddress = () => {
  const [valueAddress, setValueAddress] = useState<Address>({
    prefecture: "",
    city: "",
    suite: "",
    architecture_id: 0
  });
  const createAddress = (params: Address) => {
    return client.post("/addresses", params);
  };
  const deleteAddress = (id: number) => {
    return client.delete(`/addresses/${id}`);
  };

  const navigate = useNavigate();
  const handleChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setValueAddress({
      ...valueAddress,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitAddress = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await createAddress(valueAddress);
      console.log(res);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    createAddress,
    deleteAddress,
    handleChangeAddress,
    handleSubmitAddress,
    valueAddress,
    setValueAddress,
  };
};

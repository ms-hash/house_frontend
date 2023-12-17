import { ChangeEvent, useState } from "react";
import { CreateArchitecture } from "../types/createArchitecture";
import { client } from "../utils/axios";
//import { useNavigate } from "react-router-dom";

export const useCreateArchitecture = () => {
  const [valueArchitecture, setValueArchitecture] = useState<CreateArchitecture>({
    name: "",
    imageUrl: "",
    category_id: 0
  });
  const createArchitecture = (params: CreateArchitecture) => {
    return client.post(
      "/architectures", 
      JSON.stringify(params),
      {headers: {
        "Content-type": "application/json"
      }},
    );
  };
  const deleteArchitecture = (id: number) => {
    return client.delete(`/architectures/${id}`);
  };

  //const navigate = useNavigate();
  const handleChangeArchitecture = (e: ChangeEvent<HTMLInputElement>) => {
    setValueArchitecture({
      ...valueArchitecture,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmitArchitecture = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const res = await createArchitecture(valueArchitecture);
      console.log(res);
      //navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return {
    deleteArchitecture,
    handleChangeArchitecture,
    handleSubmitArchitecture,
    valueArchitecture,
  };
};

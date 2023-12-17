import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { userTextInput } from "../store/textInputAtom";

export const useText = () => {
  const [text, setText] = useRecoilState(userTextInput);
  const onChangeSearchText = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  return { text, onChangeSearchText }
}
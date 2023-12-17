import { atom } from "recoil";

export const userTextInput = atom<string>({
  key: "userTextInput",
  default: "",
});

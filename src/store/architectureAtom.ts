import { atom } from "recoil";
import { Architecture } from "../types/architecture";


export const userArchitectureState = atom<Array<Architecture>>({
  key: "userArchitectureState",
  default: [],
});
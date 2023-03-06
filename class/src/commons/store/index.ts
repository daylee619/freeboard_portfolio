import { atom } from "recoil";

export const isEditState = atom({
  key: "inEditState",
  default: false,
});

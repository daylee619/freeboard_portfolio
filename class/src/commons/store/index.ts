import { atom } from "recoil";

export const isEditState = atom({
  key: "inEditState",
  default: false,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

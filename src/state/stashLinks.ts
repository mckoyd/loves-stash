import { atom } from "recoil";
import { stashLinks } from "../data/stashLinks";

export const stashLinksState = atom({
  key: "stashLinkState",
  default: stashLinks,
});

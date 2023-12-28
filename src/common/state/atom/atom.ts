import { atom } from "recoil";

export const estadoMenuAtivo = atom({
  key: 'menuAtivo',
  default: false,
});

export const estadoLinkAtivo = atom({
  key: 'linkAtivo',
  default: 1,
});
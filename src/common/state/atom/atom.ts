import { atom } from "recoil";

export const estadoMenuAtivo = atom({
  key: 'menuAtivo',
  default: false,
});

export const estadoLinkAtivo = atom({
  key: 'linkAtivo',
  default: 1,
});

export const estadoQtdCardsVisiveis = atom({
  key: 'quantidadeCardsVisiveis',
  default: 5
});

export const estadoLimiteCardsVisiveis = atom({
  key: 'CardsVisiveis',
  default: false
});
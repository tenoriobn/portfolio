import { atom } from "recoil";

export const estadoMenuAtivo = atom({
  key: 'menuAtivo',
  default: false,
});

export const estadoLinkAtivo = atom({
  key: 'linkAtivo',
  default: 1,
});

export const estadoListaIdiomasAtivo = atom({
  key: 'listaIdiomasAtivo',
  default: false
});

export const estadoIdiomaAtivo = atom({
  key: 'idiomaAtivo',
  default: 1
});

export const estadoQtdCardsVisiveis = atom({
  key: 'quantidadeCardsVisiveis',
  default: 5
});

export const estadoLimiteCardsVisiveis = atom({
  key: 'cardsVisiveis',
  default: false
});

export const estadoImagemSelecionada = atom({
  key: 'imagemSelecionada',
  default: ''
});

export const estadoDesativaRolagem = atom({
  key: 'desativaRolagem',
  default: false
});
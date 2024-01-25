import { atom } from "recoil";

export const estadoMenuAtivo = atom({
  key: 'menuAtivo',
  default: false,
});

export const estadoDesativaRolagem = atom({
  key: 'desativaRolagem',
  default: false
});

export const estadoTrocaTema = atom({
  key: 'tema',
  default: true
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

export const estadoDadosFormularioEnviado = atom({
  key: 'dadosFormularioEnviado',
  default: false
});
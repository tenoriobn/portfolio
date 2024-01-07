export interface IEstilizacaoCardsVisiveis {
  $estilizacaoCardsVisiveis: number;
}

export interface IEstadoQtdCardsVisiveis {
  qtdCardsVisiveis: number;
  setQtdCardsVisiveis: React.Dispatch<React.SetStateAction<number>>;
}
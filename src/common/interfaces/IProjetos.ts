export interface IEstilizacaoCardsVisiveis {
  $estilizacaoCardsVisiveis: number;
  $trocaTema?: boolean;
}

export interface IEstadoQtdCardsVisiveis {
  qtdCardsVisiveis: number;
  setQtdCardsVisiveis: React.Dispatch<React.SetStateAction<number>>;
}
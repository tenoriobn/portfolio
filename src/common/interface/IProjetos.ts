import { IEstilizacaoCustomizada } from "./IEstilizacaoCustomizada";

export interface IEstilizacaoCardsVisiveis extends IEstilizacaoCustomizada {
  $estilizacaoCardsVisiveis: number;
}

export interface IEstadoQtdCardsVisiveis {
  qtdCardsVisiveis: number;
  setQtdCardsVisiveis: React.Dispatch<React.SetStateAction<number>>;
}

export interface ICardsProjetos {
  id: number
  imagem: string
  nome: string
  ferramentas: string
  descricao: string
  linkRepositorio: string
  linkHospedagem: string
}
import { css } from "styled-components";
import { cor } from "src/common/estilosGlobais/cores";
import { IEstilizacaoCustomizada } from "../interfaces/IEstilizacaoCustomizada";

export const estilosBorda = css<IEstilizacaoCustomizada>`
  border-radius: 2rem;
  box-shadow: 0px 0px 1rem .0625rem 
    ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaMedio)}
  ;
`;

export const estilosBordaCard = css<IEstilizacaoCustomizada>`
  border: .125rem solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  ${estilosBorda};
`;

export const estilosBordaBotaoEInputs = css<IEstilizacaoCustomizada>`
  border: .125rem solid ${(props) => (props.$trocaTema ? cor.azul : cor.cinzaClaro)};
  ${estilosBorda};

  &:hover {
    border-color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  }
`;
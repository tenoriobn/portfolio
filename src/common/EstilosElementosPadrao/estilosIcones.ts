import { css } from "styled-components";
import { cor } from "../Tema/cores";
import { IEstilizacaoCustomizada } from "../interface/IEstilizacaoCustomizada";

const estiloIcone = css<IEstilizacaoCustomizada>`
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  filter: drop-shadow(0rem 0rem 1rem ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaClaro)});
`;

export const estiloIconeCabecalho = css<IEstilizacaoCustomizada>`
  ${estiloIcone}
  width: 24px;
  height: 24px;

  path {
    transition: all .3s ease-in-out;
  }

  &:hover {
    path {
      fill: ${cor.branco};
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export const estiloIconeSocial = css<IEstilizacaoCustomizada>`
  ${estiloIcone};

  rect {
    fill: ${(props) => (props.$trocaTema ? cor.azul : cor.cinzaMedio)};
    stroke: ${(props) => (props.$trocaTema ? cor.azul : cor.cinzaMedio)};
    transition: all .3s ease-in-out;
  }

  path {
    fill: ${(props) => (props.$trocaTema ? cor.branco : cor.azul)};
    transition: all .3s ease-in-out;
  }

  &:hover {
    rect {
      fill: ${cor.branco};
      stroke: ${cor.branco};
    }

    path {
      fill: ${cor.azul};
    }
  }
`;
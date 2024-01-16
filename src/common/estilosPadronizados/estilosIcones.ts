import { css } from "styled-components";
import { cor } from "../EstilosGlobais/cores";
import { IEstilizacaoCustomizada } from "../interfaces/IEstilizacaoCustomizada";

export const estilosIcones = css<IEstilizacaoCustomizada>`
  display: flex;
  border-radius: 100%;
  cursor: pointer;
  filter: drop-shadow(0rem 0rem 1rem ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaMuitoClaro)});
  
  rect {
    fill: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
    stroke: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
    transition: all .3s ease-in-out;
  }

  path {
    fill: ${(props) => (props.$trocaTema ? cor.branco : cor.azul)};
    transition: all .3s ease-in-out;
  }

  &:hover {
    rect {
      fill: transparent!important;
      stroke: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
    }

    path {
      fill: ${(props) => (props.$trocaTema ? cor.branco : cor.branco)}
    }
  }
`;
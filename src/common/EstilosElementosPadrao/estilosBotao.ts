import { css } from "styled-components";
import { estilosBordaBotaoEInputs } from "./estilosBorda";
import { IEstilizacaoCustomizada } from "../interface/IEstilizacaoCustomizada";
import { cor } from "../Tema/cores";


export const estilosBotao = css<IEstilizacaoCustomizada>`
  ${estilosBordaBotaoEInputs};
  background: none;
  cursor: pointer;
  color: ${cor.branco};
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;
  padding: .75rem 1rem;

  transition: all .3s ease-in-out;

  &:hover {
    color: ${(props) => (props.$trocaTema ? cor.branco : cor.azul)};
    background: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  }
`;
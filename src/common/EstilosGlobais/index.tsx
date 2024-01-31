import { useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import fundoEscuro from "./assets/fundoEscuro.png";
import fundoClaro from "./assets/fundoClaro.png";
import { IEstilizacaoCustomizada } from "../interface/IEstilizacaoCustomizada";
import { cor } from "../Tema/cores";
import Tema from "../Tema";
import { estadoDesativaRolagem, estadoTrocaTema } from "../state/atom";

const EstiloGlobalPadrao = createGlobalStyle<IEstilizacaoCustomizada>`
  body {
    background-image: url(${(props) => (props.$trocaTema ? fundoEscuro : fundoClaro)});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${cor.branco};
    font-family: ${Tema.fonte.nunito};
    font-size: .875rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: .0175rem;
    overflow: ${(props) => (props.$desativaRolagem ? 'hidden' : 'inherit')};
    transition: all .3s ease-in-out;
    
    a {
      text-decoration: none;
    }

    button {
      background-color: transparent;
      outline: none;
    }
  }
`;

const EstilosGlobais = () => {
  const desativaRolagem = useRecoilValue(estadoDesativaRolagem);
  const trocaTema = useRecoilValue(estadoTrocaTema);

  return (
    <EstiloGlobalPadrao $trocaTema={trocaTema} $desativaRolagem={desativaRolagem} />
  );
};

export default EstilosGlobais;
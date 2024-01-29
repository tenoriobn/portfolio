import { useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import { estadoDesativaRolagem, estadoTrocaTema } from "../state/atom/atom";
import { IEstilizacaoCustomizada } from "../interfaces/IEstilizacaoCustomizada";
import Theme from "src/theme";
import fundoEscuro from "./assets/fundoEscuro.svg";
import fundoClaro from "./assets/fundoClaro.svg";
import { cor } from "src/common/EstilosGlobais/cores";

const GlobalStyles = createGlobalStyle<IEstilizacaoCustomizada>`
  body {
    background-image: url(${(props) => (props.$trocaTema ? fundoEscuro : fundoClaro)});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${cor.branco};
    font-family: ${Theme.font.nunito};
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
    <GlobalStyles $trocaTema={trocaTema} $desativaRolagem={desativaRolagem} />
  );
};

export default EstilosGlobais;

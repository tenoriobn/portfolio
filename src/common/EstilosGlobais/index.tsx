import { useRecoilValue } from "recoil";
import { createGlobalStyle } from "styled-components";
import { cor } from "./cores";
import Theme from "src/theme";
import background from "./background.svg";
import { estadoDesativaRolagem } from "../state/atom/atom";
import { IEstilizacaoDesativaRolagem } from "../interfaces/IEstilizacaoCustomizada";

const GlobalStyles = createGlobalStyle<IEstilizacaoDesativaRolagem>`
  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    color: ${cor.branco};
    font-family: ${Theme.font.nunito};
    font-size: .875rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: .0175rem;
    overflow: ${(props) => (props.$desativaRolagem ? 'hidden' : 'inherit')};
    
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

  return (
    <GlobalStyles $desativaRolagem={desativaRolagem} />
  );
};

export default EstilosGlobais;

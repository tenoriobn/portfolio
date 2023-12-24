import { createGlobalStyle } from "styled-components";
import Theme from "src/theme";
import { cor } from "./cores";

const EstilosGlobais = createGlobalStyle`

body {
  font-family: ${Theme.font.nunito};
  background: ${cor.fundo};
  color: ${cor.branco};
  font-size: .875rem;
  font-weight: 400;
	line-height: normal;
  letter-spacing: .0175rem;
  min-height: 100vh;
}

`;

export default EstilosGlobais;
import { createGlobalStyle } from "styled-components";
import Theme from "src/theme";
import { cor } from "./cores";

const EstilosGlobais = createGlobalStyle`
  body {
    background: ${cor.azulEscuro};
    color: ${cor.branco};
    font-family: ${Theme.font.nunito};
    font-size: .875rem;
    font-weight: 400;
    line-height: normal;
    letter-spacing: .0175rem;
    min-height: 100vh;
    padding: 0 1rem;

    box-sizing: border-box;
    width: 100%;

    @media (min-width: 375px) {
      padding: 0 1.5rem;
    }

    @media (min-width: 768px) {
      padding: 0 3rem;
    }

    @media (min-width: 990px) {
      width: 80%;
      max-width: 1440px;
      margin: 0 auto;
      padding: 0;
    }
  }
`;

export default EstilosGlobais;
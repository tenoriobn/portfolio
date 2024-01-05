import { createGlobalStyle } from "styled-components";
import { cor } from "./cores";
import Theme from "src/theme";
import background from "./background.svg";

const EstilosGlobais = createGlobalStyle`
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

    a {
      text-decoration: none;
    }

    button {
      background-color: transparent;
      outline: none;
    }
  }
`;

export default EstilosGlobais;
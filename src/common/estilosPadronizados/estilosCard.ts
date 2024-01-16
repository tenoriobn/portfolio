import { css } from "styled-components";
import { estilosBorda } from "./estilosBorda";

export const estilosCard = css`
  ${estilosBorda}
  box-sizing: border-box;
  cursor: pointer;
  max-width: 370px;
  width: 100%;
  padding: 1rem;
`;
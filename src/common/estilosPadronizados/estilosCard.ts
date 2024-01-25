import { css } from "styled-components";
import { estilosBordaCard } from "./estilosBorda";

export const estilosCard = css`
  ${estilosBordaCard}
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  padding: 1rem;
`;
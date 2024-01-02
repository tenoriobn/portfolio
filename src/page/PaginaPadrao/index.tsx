// import { Outlet } from "react-router-dom";
import EstilosGlobais from "src/common/EstilosGlobais";
import Cabecalho from "src/components/Cabecalho";
import Habilidades from "src/components/Habilidades";
import SobreMim from "src/components/SobreMim";
import Theme from "src/theme";
import styled, { ThemeProvider } from "styled-components";

const ContainerGlobal = styled.div`
  position: relative;
  display: grid;

  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 1rem;

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
`;

const Conteudo = styled.main`
  align-self: center;
`;

export default function PaginaPadrao() {
  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <ContainerGlobal>
        <Cabecalho />
        <Conteudo>
          <SobreMim />
          <Habilidades />
        </Conteudo>
      </ContainerGlobal>
    </ThemeProvider>
  );
}

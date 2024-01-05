import { useRecoilValue } from "recoil";
import EstilosGlobais from "src/common/EstilosGlobais";
import { IEstilizacaoMenuAtivo } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoMenuAtivo } from "src/common/state/atom/atom";
import Cabecalho from "src/components/Cabecalho";
import SobreMim from "src/components/SobreMim";
import Contatos from "src/components/Contatos";
import Formacoes from "src/components/Formacoes";
import Habilidades from "src/components/Habilidades";
import Projetos from "src/components/Projetos";
import Rodape from "src/components/Rodape";
import Theme from "src/theme";
import styled, { ThemeProvider } from "styled-components";

const ContainerGlobal = styled.div<IEstilizacaoMenuAtivo>`
  position: relative;


  box-sizing: border-box;
  min-height: 100vh;
  padding: 0 1rem;

  margin: 0 auto;
  width: 100%;

  @media (min-width: 375px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 990px) {
    width: 80%;
    max-width: 1158px;
    padding: 0;
  }

  @media (max-width: 1199px) {
    max-height: ${(props) => (props.$menuAtivo ? '100vh' : 'inherit')};
    overflow: ${(props) => (props.$menuAtivo ? 'hidden' : 'inherit')};
  }
`;

const Conteudo = styled.main<IEstilizacaoMenuAtivo>`
  align-self: center;

  @media (max-width: 1199px) {
    z-index: ${(props) => (props.$menuAtivo ? '-1' : 'inherit')};
  }
`;

export default function PaginaPadrao() {
  const menuAtivo = useRecoilValue(estadoMenuAtivo);

  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <ContainerGlobal $menuAtivo={menuAtivo}>
        <Cabecalho />
        <Conteudo $menuAtivo={menuAtivo}>
          <SobreMim />
          <Projetos />
          <Formacoes />
          <Habilidades />
          <Contatos />
        </Conteudo>
        <Rodape />
      </ContainerGlobal>
    </ThemeProvider>
  );
}

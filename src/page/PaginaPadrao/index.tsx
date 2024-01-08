import { useRecoilValue } from "recoil";
import EstilosGlobais from "src/common/EstilosGlobais";
import { IEstilizacaoDesativaRolagem } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoDesativaRolagem } from "src/common/state/atom/atom";
import Cabecalho from "src/components/Cabecalho";
import SobreMim from "src/components/SobreMim";
import Contatos from "src/components/Contatos";
import Formacoes from "src/components/Formacoes";
import Habilidades from "src/components/Habilidades";
import Projetos from "src/components/Projetos";
import Rodape from "src/components/Rodape";
import Theme from "src/theme";
import styled, { ThemeProvider } from "styled-components";

const ContainerGlobal = styled.div<IEstilizacaoDesativaRolagem>`
  position: relative;

  box-sizing: border-box;
  min-height: 100vh;
  max-height: ${(props) => (props.$desativaRolagem ? '100vh' : 'inherit')};
  overflow: ${(props) => (props.$desativaRolagem ? 'hidden' : 'inherit')};
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

  }
`;

const Conteudo = styled.main<IEstilizacaoDesativaRolagem>`
  align-self: center;

  @media (max-width: 1199px) {
    z-index: ${(props) => (props.$desativaRolagem ? '-1' : 'inherit')};
  }
`;

export default function PaginaPadrao() {
  const desativaRolagem = useRecoilValue(estadoDesativaRolagem);

  return (
    <ThemeProvider theme={Theme}>
      <EstilosGlobais />
      <ContainerGlobal $desativaRolagem={desativaRolagem}>
        <Cabecalho />
        <Conteudo $desativaRolagem={desativaRolagem}>
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

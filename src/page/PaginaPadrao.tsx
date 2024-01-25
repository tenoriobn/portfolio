import EstilosGlobais from "src/common/estilosGlobais";
import styled, { ThemeProvider } from "styled-components";
import useConfigurarI18n from "src/common/state/hooks/hooksTraducao/useConfigurarI18n";
import { I18nextProvider } from "react-i18next";
import Theme from "src/theme";
import Cabecalho from "src/components/Cabecalho";
import SobreMim from "src/components/SobreMim";
import Projetos from "src/components/Projetos";
import Formacoes from "src/components/Formacoes";
import Habilidades from "src/components/Habilidades";
import Contatos from "src/components/Contatos";
import Rodape from "src/components/Rodape";

const ContainerGlobal = styled.div`
  position: relative;
  box-sizing: border-box;
  min-height: 100vh;
  width: 100%;
`;

const Conteudo = styled.main`
  align-self: center;
  padding: 0 1rem;

  @media (min-width: 375px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 992px) {
    padding: 0;
    margin: 0 auto;
    width: 80%;
    max-width: 764px;
  }

  @media (min-width: 1200px) {
    max-width: 1158px;
  }
`;

export default function PaginaPadrao() {
  const i18n = useConfigurarI18n();
  if (!i18n) {
    return null;
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={Theme}>
        <EstilosGlobais />
        <ContainerGlobal>
          <Cabecalho />
          <Conteudo>
            <SobreMim />
            <Projetos />
            <Formacoes />
            <Habilidades />
            <Contatos />
          </Conteudo>
          <Rodape />
        </ContainerGlobal>
      </ThemeProvider>
    </I18nextProvider>
  );
}

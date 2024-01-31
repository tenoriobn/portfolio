import styled from "styled-components";
import Cabecalho from "../components/Cabecalho";
import SobreMim from "../components/SobreMim";
import Projetos from "../components/Projetos";
import Formacoes from "../components/Formacoes";
import Habilidades from "../components/Habilidades";
import Contatos from "../components/Contatos";
import Rodape from "../components/Rodape";

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

  return (
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
  );
}
import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";
import { cor } from "src/common/EstilosGlobais/cores";
import InformacoesContatos from "./InformacoesContatos";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const ContainerOpcoesContatos = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 2rem;
    border: .125rem solid ${cor.azul};
    box-shadow: 0rem 0rem 1rem .0625rem ${cor.azul};
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 992px) {
    margin-top: 5rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;


export default function Contatos() {

  return (
    <ContainerContatos>
      <TituloSecao titulo="Contatos" />
      <ContainerOpcoesContatos>
        <Formulario />
        <InformacoesContatos />
      </ContainerOpcoesContatos>
    </ContainerContatos>
  );
}

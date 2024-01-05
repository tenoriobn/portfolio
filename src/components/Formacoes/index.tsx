import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import CardsFormacoes from "./CardsFormacoes";

const ContainerFormacoes = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

export default function Formacoes() {
  return (
    <ContainerFormacoes>
      <TituloSecao titulo="Formacões" />
      <CardsFormacoes />
    </ContainerFormacoes>
  );
}

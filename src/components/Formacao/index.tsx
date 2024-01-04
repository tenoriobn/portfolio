import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import CardFormacao from "./CardFormacao";

const ContainerFormacao = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

export default function Formacao() {
  return (
    <ContainerFormacao>
      <TituloSecao titulo="Formacão" />
      <CardFormacao />
    </ContainerFormacao>
  );
}

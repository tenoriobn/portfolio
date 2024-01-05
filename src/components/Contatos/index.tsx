import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

export default function Contatos() {
  return (
    <ContainerContatos>
      <TituloSecao titulo="Contatos" />
      <Formulario />
    </ContainerContatos>
  );
}

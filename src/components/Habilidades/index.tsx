import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Ferramentas from "./Logotipos";

const ContainerHabilidades = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  max-width: 370px;
  width: 100%;

  padding: 3.25rem 0;

  @media (min-width: 768px) {
    max-width: 1158px;
  }

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

export default function Habilidades() {
  return (
    <ContainerHabilidades>
      <TituloSecao titulo="Habilidades" />
      <Ferramentas />
    </ContainerHabilidades>
  );
}

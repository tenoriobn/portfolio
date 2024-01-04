import styled from "styled-components";

const ContainerRodape = styled.footer`
  padding: 1.5rem;

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 3.125rem 0;

    p {
      font-size: 1rem;
    }
  }
`;

export default function Rodape() {
  return (
    <ContainerRodape>
      <p>©2023 Bruno Tenório - Todos os direitos reservados</p>
    </ContainerRodape>
  );
}

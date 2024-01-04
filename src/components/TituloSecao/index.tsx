import styled from "styled-components";

interface TituloSecaoProps {
  titulo: string;
}

const Titulo = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: .035rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: .06rem;
  }

  @media (min-width: 992px) {
    font-size: 3rem;
  }
`;

export default function TituloSecao({titulo}: TituloSecaoProps) {
  return (
    <Titulo>{titulo}</Titulo>
  );
}

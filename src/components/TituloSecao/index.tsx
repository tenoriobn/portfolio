import styled from "styled-components";
import { ITitulo } from "../../common/interface/ITitulo";

const Titulo = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  letter-spacing: .035rem;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    letter-spacing: .06rem;
  }

  @media (min-width: 992px) {
    font-size: 3rem;
    margin-bottom: 5rem;
  }
`;

export default function TituloSecao({titulo}: ITitulo) {
  return (
    <Titulo>{titulo}</Titulo>
  );
}
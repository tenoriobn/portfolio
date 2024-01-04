import styled from "styled-components";
import listaFerramentas from "src/data/listaFerramentas.json";
import { Link } from "react-router-dom";

const ContainerFerramentas = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 32px);
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 48px);
    row-gap: 5rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 64px);
    margin-top: 5rem;
  }
`;

const Icone = styled.img`
  filter: drop-shadow(0px 0px 6px rgba(23, 23, 23, 0.25));
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 992px) {
    width: 64px;
    height: 64px;
  }
`;

export default function Ferramentas() {
  return (
    <ContainerFerramentas>
      {listaFerramentas.map(ferramenta => (
        <Link
          to={ferramenta.link}
          key={ferramenta.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone src={ferramenta.icone} />
        </Link>
      ))}
    </ContainerFerramentas>
  );
}

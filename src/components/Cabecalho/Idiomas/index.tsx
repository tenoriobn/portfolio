import { Link } from 'react-router-dom';
import Global from "../global.svg?react";
import styled from 'styled-components';
import { cor } from 'src/common/EstilosGlobais/cores';
import ListaIdiomas from './ListaIdiomas';
import { useRecoilState } from 'recoil';
import { estadoListaIdiomasAtivo } from 'src/common/state/atom/atom';

const ContainerIdiomas = styled.li`
  list-style: none;
  position: relative;
`;

const Icone = styled.svg`
  filter: drop-shadow(0rem 0rem 1rem ${cor.azulColbato});
  cursor: pointer;
  width: 24px;
  height: 24px;

  path {
    fill: ${cor.azul};
    transition: fill 0.3s ease-in-out;
  }

  &:hover {
    path {
      fill: ${cor.branco};
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export default function Idiomas() {
  const [listaIdiomasAtivo, setListaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);

  return (
    <ContainerIdiomas>
      <Link to="#" role="button" onClick={() => setListaIdiomasAtivo(!listaIdiomasAtivo)}>
        <Icone as={Global} />
      </Link>
      <ListaIdiomas />
    </ContainerIdiomas>
  );
}

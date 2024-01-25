import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Link } from 'react-router-dom';
import { estadoListaIdiomasAtivo, estadoTrocaTema } from 'src/common/state/atom/atom';
import { IEstilizacaoCustomizada } from 'src/common/interfaces/IEstilizacaoCustomizada';
import { estiloIconeCabecalho } from 'src/common/estilosPadronizados/estilosIcones';
import Global from "../assets/global.svg?react";
import ListaIdiomas from './ListaIdiomas';

const ContainerIdiomas = styled.li`
  list-style: none;
  position: relative;
`;

const Icone = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeCabecalho};
`;

export default function Idiomas() {
  const [listaIdiomasAtivo, setListaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);
  const trocaTema = useRecoilValue(estadoTrocaTema);

  return (
    <ContainerIdiomas>
      <Link to="#" role="button" onClick={() => setListaIdiomasAtivo(!listaIdiomasAtivo)}>
        <Icone as={Global} $trocaTema={trocaTema} />
      </Link>
      <ListaIdiomas />
    </ContainerIdiomas>
  );
}

// import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoListaIdiomasAtivo, estadoTrocaTema } from "src/common/state/atom/atom";
import useTrocarIdioma from "src/common/state/hooks/hooksTraducao/useTrocarIdioma";
import listaIdiomas from "src/data/listaIdiomas.json";
import styled from "styled-components";

const ContainerListaIdiomas = styled.ul<IEstilizacaoCustomizada>`
  position: absolute;
  display: ${(props) => (props.$listaIdiomasAtivo ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .375rem;
  padding-top: .375rem;
  width: 100%;
`;

const Idioma = styled.option<IEstilizacaoCustomizada>`
  cursor: pointer;
  color: ${cor.cinzaClaro};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color .3s ease-in-out 0s;

  &:hover {
    color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  }

  &.idiomaAtivo {
    color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function ListaIdiomas() {
  const [listaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);
  const { trocarIdioma, idiomaAtivo } = useTrocarIdioma();
  const trocaTema = useRecoilValue(estadoTrocaTema);

  return (
    <ContainerListaIdiomas $listaIdiomasAtivo={listaIdiomasAtivo}>
      {listaIdiomas.map(idioma => (
        <Idioma
          key={idioma.id}
          onClick={() => trocarIdioma(idioma)}
          className={idiomaAtivo === idioma.id ? "idiomaAtivo" : ""}
          $trocaTema={trocaTema}
        >
          {idioma.nome}
        </Idioma>
      ))}
    </ContainerListaIdiomas>
  );
}

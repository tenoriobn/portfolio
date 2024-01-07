import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaolistaIdiomasAtivo } from "src/common/interfaces/IEstilizacaoCustomizada";
import { IIdioma } from "src/common/interfaces/IIdioma";
import { estadoIdiomaAtivo, estadoListaIdiomasAtivo } from "src/common/state/atom/atom";
import listaIdiomas from "src/data/listaIdiomas.json";
import styled from "styled-components";

const ContainerListaIdiomas = styled.ul<IEstilizacaolistaIdiomasAtivo>`
  position: absolute;
  display: ${(props) => (props.$listaIdiomasAtivo ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .375rem;
  padding-top: .375rem;
  width: 100%;
`;

const Idioma = styled(Link)`
  color: ${cor.cinzaClaro};
  font-size: 1rem;
  font-weight: 500;
  transition: color .3s ease-in-out 0s;

  &:hover {
    color: ${cor.branco};
  }

  &.idiomaAtivo {
    color: ${cor.azul};
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function ListaIdiomas() {
  const [idiomaAtivo, setIdiomaAtivo] = useRecoilState(estadoIdiomaAtivo);
  const [listaIdiomasAtivo, setListaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);

  const selecionarIdioma = (idioma: IIdioma) => {
    setIdiomaAtivo(idioma.id);
    setListaIdiomasAtivo(!listaIdiomasAtivo);
  };

  return (
    <ContainerListaIdiomas $listaIdiomasAtivo={listaIdiomasAtivo}>
      {listaIdiomas.map(idioma => (
        <li key={idioma.id}>
          <Idioma
            to="#"
            onClick={() => selecionarIdioma(idioma)}
            className={idiomaAtivo === idioma.id ? "idiomaAtivo" : ""}
          >
            {idioma.nome}
          </Idioma>
        </li>
      ))}
    </ContainerListaIdiomas>
  );
}

import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import styled from "styled-components";
import listaItensMenu from "src/data/listaItensMenu.json";
import { useRecoilState, useRecoilValue } from "recoil";
import { estadoLinkAtivo, estadoMenuAtivo } from "src/common/state/atom/atom";
import { Link } from "react-router-dom";

const ContainerMenuItens = styled.nav<IEstilizacaoCustomizada>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: ${(props) => (props.$menuAtivo ? '0' : '-100%')};
  width: 100%;
  height: 100vh;
  background-color: ${cor.azulEscuro};
  box-sizing: border-box;
  transition: left 0.3s ease-out 0s;

  @media (min-width: 1200px) {
    background-color: inherit;
    position: relative;
    left: inherit;
    width: inherit;
    height: inherit;
  }
`;

const Itens = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 1200px) {
    gap: 2rem;
    flex-direction: row;
  }
`;

const Item = styled.li`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;

  a {
    color: ${cor.cinzaClaro};
    text-decoration: none;
    transition: color .3s ease-in-out 0s;

    &:hover {
      color: ${cor.branco};
    }
  }

  a.active {
    color: ${cor.azul};
    text-shadow: 0px 0px 1rem ${cor.azulColbato};
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function MenuItens() {
  const menuAtivo = useRecoilValue(estadoMenuAtivo);
  const [linkAtivo, setLinkAtivo] = useRecoilState(estadoLinkAtivo);

  return (
    <ContainerMenuItens $menuAtivo={menuAtivo}>
      <Itens>
        {listaItensMenu.map(item => (
          <Item key={item.id}>
            <Link
              to={item.href}
              onClick={() => setLinkAtivo(item.id)}
              className={linkAtivo === item.id ? "active" : ""}
            >
              {item.nome}
            </Link>
          </Item>
        ))}
      </Itens>
    </ContainerMenuItens>
  );
}

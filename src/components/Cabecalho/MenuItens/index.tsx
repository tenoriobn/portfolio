import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaoMenuAtivo } from "src/common/interfaces/IEstilizacaoCustomizada";
import styled from "styled-components";
import listaItensMenu from "src/data/listaItensMenu.json";
import { useRecoilState, useRecoilValue } from "recoil";
import { estadoLinkAtivo, estadoMenuAtivo } from "src/common/state/atom/atom";
import { Link } from "react-router-dom";
import backgroundMenu from "./backgroundmenu.svg";

const ContainerMenuItens = styled.nav<IEstilizacaoMenuAtivo>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: left 0.3s ease-out 0s;

  @media (max-width: 1199px) {
    background: url(${backgroundMenu});
    background-repeat: no-repeat;
    background-size: cover;
    position: fixed;
    top: 0;
    left: ${(props) => (props.$menuAtivo ? '0' : '-100%')};
    width: 100%;
    min-height: 100vh;
    padding: 9rem 0;
    box-sizing: border-box;

    @media (min-width: 768px) {
      left: ${(props) => (props.$menuAtivo ? '0' : '-50%')};
      width: 50%;
      padding: 9.75rem 0;
    }
  }
`;

const ListaItens = styled.ul`
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
  text-align: center;

  a {
    color: ${cor.cinzaClaro};
    font-size: 1rem;
    font-weight: 700;
    transition: color .3s ease-in-out 0s;

    &:hover {
      color: ${cor.branco};
    }

    &.active {
      color: ${cor.azul};
      text-shadow: 0rem 0rem 1rem ${cor.azulColbato};
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export default function MenuItens() {
  const menuAtivo = useRecoilValue(estadoMenuAtivo);
  const [linkAtivo, setLinkAtivo] = useRecoilState(estadoLinkAtivo);

  return (
    <ContainerMenuItens $menuAtivo={menuAtivo}>
      <ListaItens>
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
      </ListaItens>
    </ContainerMenuItens>
  );
}

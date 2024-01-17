import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import styled from "styled-components";
// import listaItensMenu from "src/data/listaItensMenu.json";
import { useRecoilState, useRecoilValue } from "recoil";
import { estadoLinkAtivo, estadoMenuAtivo, estadoTrocaTema } from "src/common/state/atom/atom";
import { Link } from "react-router-dom";
import fundoMenuEscuro from "./fundoMenuEscuro.svg";
import fundoMenuClaro from "./fundoMenuClaro.svg";
import { useTranslation } from "react-i18next";
import { IMenuItens } from "src/common/interfaces/ICabecalho";

const ContainerMenuItens = styled.nav<IEstilizacaoCustomizada>`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: left 0.3s ease-out 0s;

  @media (max-width: 1199px) {
    background: url(${(props) => (props.$trocaTema ? fundoMenuEscuro : fundoMenuClaro)});
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

const Item = styled.li<IEstilizacaoCustomizada>`
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
      color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
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
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const listaMenuItens: IMenuItens[] = t('cabecalho.menuItens', { returnObjects: true });

  return (
    <ContainerMenuItens $menuAtivo={menuAtivo} $trocaTema={trocaTema}>
      <ListaItens>
        {listaMenuItens.map(item => (
          <Item key={item.id} $trocaTema={trocaTema}>
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

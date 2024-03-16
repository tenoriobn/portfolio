import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import fundoMenuEscuro from "../assets/fundoMenuEscuro.png";
import fundoMenuClaro from "../assets/fundoMenuClaro.png";
import { cor } from "../../../common/Tema/cores";
import { estadoMenuAtivo, estadoTrocaTema } from "../../../common/state/atom";
import { IMenuItens } from "../../../common/interface/ICabecalho";
import { IEstilizacaoCustomizada } from "../../../common/interface/IEstilizacaoCustomizada";
import { Link } from "react-scroll";

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
    cursor: pointer;
    color: ${cor.cinzaClaro};
    font-size: 1rem;
    font-weight: 700;
    transition: color .3s ease-in-out 0s;

    &:hover {
      color: ${cor.branco};
    }

    &.ativo {
      color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
      text-shadow: 0rem 0rem 1rem ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaClaro)};
    }

    @media (min-width: 768px) {
      font-size: 1.25rem;
    }
  }
`;

export default function MenuItens() {
  const [menuAtivo, useMenuAtivo] = useRecoilState(estadoMenuAtivo);
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const listaMenuItens: IMenuItens[] = t('cabecalho.menuItens', { returnObjects: true });

  return (
    <ContainerMenuItens $menuAtivo={menuAtivo} $trocaTema={trocaTema}>
      <ListaItens>
        {listaMenuItens.map(item => (
          <Item key={item.id} $trocaTema={trocaTema}>
            <Link
              activeClass="ativo"
              to={item.href}
              spy={true}
              smooth={true}
              offset={item.offset}
              duration={600}
              onClick={() => useMenuAtivo(false)}
            >
              {item.nome}
            </Link>
          </Item>
        ))}
      </ListaItens>
    </ContainerMenuItens>
  );
}
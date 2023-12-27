import styled from "styled-components";
import Global from "./global.svg?react";
import Lua from "./lua.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import { useState } from "react";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import menuItens from "src/data/menuItens.json";

const ContainerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;
  position: relative;
`;

const ContainerTitulo = styled.div`
  border: .125rem solid ${cor.azul};
  border-radius: 31.25rem;
  box-sizing: border-box;

  box-shadow: 0px 0px 1rem .375rem #0494fc4c;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;

  z-index: 5;

  transition: border-color 0.3s ease-out 0s;

  &:hover {
    border-color: ${cor.branco};
  }

  h1 {
    font-size: .875rem;
    font-weight: 700;
    line-height: normal;
    text-shadow: 0px 0px 44px rgba(255, 255, 255, 0.50);
    margin: 0;
  }

  @media (min-width: 768px) {
    width: 56px;
    height: 56px;

    h1 {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 992px) {
    width: 60px;
    height: 60px;

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const ContainerListaMenu = styled.div<IEstilizacaoCustomizada>`
  background-color: ${cor.azulEscuro};
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  
  position: fixed;
  left: ${(props) => (props.$menuAtivo ? '0' : '-100%')};
  top: 0;
  transition: left 0.3s ease-out 0s;

  width: 100%;
  height: 100vh;

  @media (min-width: 1200px) {
    background-color: inherit;
    position: relative;
    left: inherit;
    
    width: inherit;
    height: inherit;
  }
`;

const ListaItem = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
  }
`;

const Item = styled.li`
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

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
    text-shadow: 0px 0px 16px #0494fc4c;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ContainerIcones = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const Icone = styled.svg`
  cursor: pointer;
  filter: drop-shadow(0px 0px 16px #ffffff38);
  width: 24px;
  height: 24px;
  
  transition: path fill 0.3s ease-out;

  path {
    transition: fill 0.3s ease-in-out;
    fill: ${cor.azul};
  }

  &:hover {
    path {
      transition: fill 0.3s ease-in-out;
      fill: ${cor.branco};
    }
  }

  @media (min-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

export default function Menu() {
  const [menuAtivo, setMenuAtivo] = useState(false);
  const [linkAtivo, setLinkAtivo] = useState<number | null>(1);

  return (
    <header>
      <ContainerNav>
        <ContainerTitulo onClick={() => setMenuAtivo(!menuAtivo)}>
          <h1>BT</h1>
        </ContainerTitulo>

        <ContainerListaMenu $menuAtivo={menuAtivo}>
          <ListaItem>
            {menuItens.map(item => (
              <Item key={item.id}>
                <a 
                  href={item.href}
                  onClick={() => setLinkAtivo(item.id)}
                  className={linkAtivo === item.id ? "active" : ""}
                >{item.nome}</a>
              </Item>
            ))}
          </ListaItem>
        </ContainerListaMenu>

        <ContainerIcones>
          <Icone as={Global} />
          <Icone as={Lua} />
        </ContainerIcones>
      </ContainerNav>
    </header>
  );
}

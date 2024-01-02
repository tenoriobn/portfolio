import styled from "styled-components";
import Global from "./global.svg?react";
import Lua from "./lua.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import MenuItens from "./MenuItens";
import { estadoMenuAtivo } from "src/common/state/atom/atom";
import { useRecoilState } from "recoil";

const Header = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  box-sizing: border-box;

  padding: 0 1rem;

  @media (min-width: 375px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
  }

  @media (min-width: 990px) {
    width: 80%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0;
  }
`;

const ContainerMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 2rem 0;
`;

const BotaoMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 48px;
  height: 48px;
  border: .125rem solid ${cor.azul};
  border-radius: 31.25rem;
  box-shadow: 0rem 0rem 1rem .375rem ${cor.azulColbato};
  box-sizing: border-box;
  cursor: pointer;
  z-index: 5;
  transition: border-color 0.3s ease-out 0s;

  &:hover {
    border-color: ${cor.branco};
  }

  h1 {
    font-size: .875rem;
    font-weight: 700;
    line-height: normal;
    text-shadow: 0rem 0rem 2.75rem #ffffff7f;
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

const ContainerIcones = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const Icone = styled.svg`
  cursor: pointer;
  filter: drop-shadow(0rem 0rem 1rem #ffffff38);
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

export default function Cabecalho() {
  const [menuAtivo, setMenuAtivo] = useRecoilState(estadoMenuAtivo);

  return (
    <Header>
      <ContainerMenu>
        <BotaoMenu onClick={() => setMenuAtivo(!menuAtivo)}>
          <h1>BT</h1>
        </BotaoMenu>

        <MenuItens />

        <ContainerIcones>
          <Icone as={Global} />
          <Icone as={Lua} />
        </ContainerIcones>
      </ContainerMenu>
    </Header>
  );
}

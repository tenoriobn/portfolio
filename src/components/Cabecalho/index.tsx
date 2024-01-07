import styled from "styled-components";
import Lua from "./lua.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import MenuItens from "./MenuItens";
import { estadoMenuAtivo } from "src/common/state/atom/atom";
import { useRecoilState } from "recoil";
import Idiomas from "./Idiomas";

const ContainerMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position:sticky;
  left: 0;
  right: 0;
  top: 0;
  padding: 2rem 0;
  z-index: 2;
`;

const BotaoMenu = styled.button`
  border: .125rem solid ${cor.azul};
  border-radius: 31.25rem;
  box-shadow: 0rem 0rem 1rem .0625rem ${cor.azulColbato};
  box-sizing: border-box;
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: border-color 0.3s ease-out 0s;
  z-index: 2;

  h1 {
    color: ${cor.branco};
    font-size: .875rem;
    font-weight: 700;
    line-height: normal;
    text-shadow: 0rem 0rem 1rem ${cor.azulColbato};
    transition: color 0.3s ease-out 0s;
    margin: 0;
  }

  &:hover {
    border-color: ${cor.branco};

    h1 {
      color: ${cor.branco};
    }
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

  @media (min-width: 768px) {
    gap: 2rem;
  }
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

export default function Cabecalho() {
  const [menuAtivo, setMenuAtivo] = useRecoilState(estadoMenuAtivo);

  return (
    <ContainerMenu>
      <BotaoMenu onClick={() => setMenuAtivo(!menuAtivo)}>
        <h1>BT</h1>
      </BotaoMenu>
      <MenuItens />
      <ContainerIcones>
        <Idiomas />
        <Icone as={Lua} />
      </ContainerIcones>
    </ContainerMenu>
  );
}

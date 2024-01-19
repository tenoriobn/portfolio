import styled from "styled-components";
import Lua from "./lua.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import MenuItens from "./MenuItens";
import Idiomas from "./Idiomas";
import useAtivarMenu from "src/common/state/hooks/hookCabecalho/useAtivarMenu";
import { useRecoilState } from "recoil";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estilosBordaCard } from "src/common/estilosPadronizados/estilosBorda";
import { estiloIconeCabecalho } from "src/common/estilosPadronizados/estilosIcones";

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

const BotaoMenu = styled.button<IEstilizacaoCustomizada>`
  ${estilosBordaCard}
  border-color: ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaClaro)};
  box-sizing: border-box;
  cursor: pointer;
  width: 48px;
  height: 48px;
  transition: border-color 0.3s ease-out 0s;
  z-index: 2;

  h1 {
    color: ${cor.cinzaClaro};
    font-size: .875rem;
    font-weight: 700;
    line-height: normal;
    text-shadow: 0rem 0rem 1rem ${cor.azulColbato};
    transition: color 0.3s ease-out 0s;
    margin: 0;
  }

  &:hover {
    border-color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};

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

const ContainerPreferenciasUsuario = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const Tema = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeCabecalho};
`;

export default function Cabecalho() {
  const ativarMenu = useAtivarMenu();
  const [trocaTema, setTrocaTema] = useRecoilState(estadoTrocaTema);
  
  return (
    <ContainerMenu>
      <BotaoMenu $trocaTema={trocaTema} onClick={ativarMenu}>
        <h1>BT</h1>
      </BotaoMenu>
      <MenuItens />
      <ContainerPreferenciasUsuario>
        <Idiomas  />
        <Tema $trocaTema={trocaTema} as={Lua} onClick={() => setTrocaTema(!trocaTema)} />
      </ContainerPreferenciasUsuario>
    </ContainerMenu>
  );
}

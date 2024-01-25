import styled from "styled-components";
import { useRecoilState } from "recoil";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import useAtivarMenu from "src/common/state/hooks/hookCabecalho/useAtivarMenu";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estiloIconeCabecalho } from "src/common/estilosPadronizados/estilosIcones";
import { cor } from "src/common/EstilosGlobais/cores";
import MenuItens from "./MenuItens";
import Idiomas from "./Idiomas";
import Lua from "./assets/lua.svg?react";

const FundoMenu = styled.div<IEstilizacaoCustomizada>`
  position:sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;
  background: ${(props) => (props.$trocaTema ? cor.azulEscuro : cor.azulClaro)};
  backdrop-filter: blur(500px);
  transition: all .3s ease-in-out;
`;

const ContainerMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1rem;

  @media (min-width: 375px) {
    padding: 2rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2rem 3rem;
  }

  @media (min-width: 992px) {
    margin: 0 auto;
    max-width: 1524px;
  }

  @media (min-width: 1200px) {
    padding: 2rem 0px;
    width: 80%;
  }
`;

const BotaoMenu = styled.button<IEstilizacaoCustomizada>`
  border: .125rem solid ${(props) => (props.$trocaTema ? cor.azul : cor.cinzaClaro)};
  border-radius: 31.25rem;
  box-shadow: 0rem 0rem 1rem .0625rem ${(props) => (props.$trocaTema ? cor.azulColbato : cor.cinzaClaro)};
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
    <FundoMenu $trocaTema={trocaTema}>
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
    </FundoMenu>
  );
}

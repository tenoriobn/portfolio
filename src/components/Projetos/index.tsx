import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import CardProjetos from "./CardProjetos";
import { cor } from "src/common/EstilosGlobais/cores";
import { useRecoilValue } from "recoil";
import useAlternarQtdCardsVisiveis from "src/common/state/hooks/hooksProjetos/useAlternarQtdCardsVisiveis";
import { estadoLimiteCardsVisiveis, estadoTrocaTema } from "src/common/state/atom/atom";
import ImagemAmpliada from "./ImagemAmpliada";
import { useRef } from "react";
import { IEstilizacaoDesativaRolagem } from "src/common/interfaces/IEstilizacaoCustomizada";

const ContainerProjetos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const Botao = styled.button<IEstilizacaoDesativaRolagem>`
  background: none;
  border-radius: 2rem;
  border: 2px solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  box-shadow: 0px 0px 16px .5px ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  cursor: pointer;
  color: ${cor.branco};
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-top: 2rem;
  padding: 12px 16px;
`;

export default function Projetos() {
  const containerRef = useRef(null);
  const limiteCardsVisiveis = useRecoilValue(estadoLimiteCardsVisiveis);
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const alterarQtdCardsVisiveis = useAlternarQtdCardsVisiveis(containerRef);

  return (
    <ContainerProjetos ref={containerRef}>
      <TituloSecao titulo="Projetos" />
      <CardProjetos />
      <ImagemAmpliada /> 
      <Botao 
        onClick={alterarQtdCardsVisiveis}
        $trocaTema={trocaTema}
      >
        {limiteCardsVisiveis ? 'Ver menos' : 'Ver mais'}
      </Botao>
    </ContainerProjetos>
  );
}

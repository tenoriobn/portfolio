import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { estadoLimiteCardsVisiveis } from "src/common/state/atom/atom";
import useAlternarQtdCardsVisiveis from "src/common/state/hooks/hooksProjetos/useAlternarQtdCardsVisiveis";
import TituloSecao from "../TituloSecao";
import CardProjetos from "./CardProjetos";
import ImagemAmpliada from "./ImagemAmpliada";
import Botao from "../Botao";

const ContainerProjetos = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3.25rem 0;

  position: relative;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const BotaoProjetos = styled(Botao)`
  font-size: 1rem;
  margin-top: 2rem;
`;

export default function Projetos() {
  const containerRef = useRef(null);
  const alterarQtdCardsVisiveis = useAlternarQtdCardsVisiveis(containerRef);
  const limiteCardsVisiveis = useRecoilValue(estadoLimiteCardsVisiveis);
  const [t] = useTranslation("global");

  return (
    <ContainerProjetos id="projetos" ref={containerRef}>
      <TituloSecao titulo={t('projetos.tituloSecao')} />
      <CardProjetos />
      <ImagemAmpliada /> 
      <BotaoProjetos onClick={alterarQtdCardsVisiveis}>
        {limiteCardsVisiveis ? `${t('projetos.verMenos')}` : `${t('projetos.verMais')}`}
      </BotaoProjetos>
    </ContainerProjetos>
  );
}

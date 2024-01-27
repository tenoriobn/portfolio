import { RefObject } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState, useRecoilValue } from "recoil";
import { estadoLimiteCardsVisiveis, estadoQtdCardsVisiveis } from "../../atom/atom";
import useDefinirQtdPadraoCardsVisiveis from "./useDefinirQtdPadraoCardsVisiveis";
import { ICardsProjetos } from "src/common/interfaces/IProjetos";

const useAlternarQtdCardsVisiveis = (containerRef: RefObject<HTMLDivElement>) => {
  const [qtdCardsVisiveis, setQtdCardsVisiveis] = useRecoilState(estadoQtdCardsVisiveis);
  const limiteCardsVisiveis = useRecoilValue(estadoLimiteCardsVisiveis);
  const [t] = useTranslation("global");
  const listaProjetos:ICardsProjetos[] = t('projetos.cardsProjetos', { returnObjects: true });

  useDefinirQtdPadraoCardsVisiveis({ qtdCardsVisiveis, setQtdCardsVisiveis });

  const alternarQtdCardsVisiveis = () => {
    const novaQtdCards = window.innerWidth >= 1200 ? qtdCardsVisiveis + 3 : qtdCardsVisiveis + 2;
    setQtdCardsVisiveis(
      qtdCardsVisiveis > listaProjetos.length ? (window.innerWidth >= 1200 ? 7 : 5) : novaQtdCards
    );

    if (limiteCardsVisiveis && containerRef.current) {
      containerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return alternarQtdCardsVisiveis;
};

export default useAlternarQtdCardsVisiveis;

import { useRecoilState, useRecoilValue } from "recoil";
import { estadoLimiteCardsVisiveis, estadoQtdCardsVisiveis } from "../../atom/atom";
import listaProjetos from "src/data/listaProjetos.json";
import useDefinirQtdPadraoCardsVisiveis from "./useDefinirQtdPadraoCardsVisiveis";
import { RefObject } from "react";

const useAlternarQtdCardsVisiveis = (containerRef: RefObject<HTMLDivElement>) => {
  const [qtdCardsVisiveis, setQtdCardsVisiveis] = useRecoilState(estadoQtdCardsVisiveis);
  const limiteCardsVisiveis = useRecoilValue(estadoLimiteCardsVisiveis);

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

import { useRecoilState } from "recoil";
import { estadoQtdCardsVisiveis } from "../../atom/atom";
import listaProjetos from "src/data/listaProjetos.json";
import useDefinirQtdPadraoCardsVisiveis from "./useDefinirQtdPadraoCardsVisiveis";

const useAlternarQtdCardsVisiveis = () => {
  const [qtdCardsVisiveis, setQtdCardsVisiveis] = useRecoilState(estadoQtdCardsVisiveis);
  
  useDefinirQtdPadraoCardsVisiveis({ qtdCardsVisiveis, setQtdCardsVisiveis });

  const alternarQtdCardsVisiveis = () => {
    const novaQtdCards = window.innerWidth >= 1200 ? qtdCardsVisiveis + 3 : qtdCardsVisiveis + 2;
    setQtdCardsVisiveis(
      qtdCardsVisiveis > listaProjetos.length ? (window.innerWidth >= 1200 ? 7 : 5) : novaQtdCards
    );
  };

  return alternarQtdCardsVisiveis;
};

export default useAlternarQtdCardsVisiveis;

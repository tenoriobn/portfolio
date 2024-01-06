import { useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { estadoLimiteCardsVisiveis, estadoQtdCardsVisiveis } from "../atom/atom";
import listaProjetos from "src/data/listaProjetos.json";

const useAlternarQtdCardsVisiveis = () => {
  const [qtdCardsVisiveis, setQtdCardsVisiveis] = useRecoilState(estadoQtdCardsVisiveis);
  const setLimiteCardsVisiveis = useSetRecoilState(estadoLimiteCardsVisiveis);

  const definirQtdPadrao = () => {
    setQtdCardsVisiveis(window.innerWidth >= 1200 ? 7 : 5);
  };

  useEffect(() => {
    definirQtdPadrao();
    window.addEventListener("resize", definirQtdPadrao);
    return () => window.removeEventListener("resize", definirQtdPadrao);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setQtdCardsVisiveis]);

  useEffect(() => {
    qtdCardsVisiveis > listaProjetos.length ? setLimiteCardsVisiveis(true) : setLimiteCardsVisiveis(false);
  }, [qtdCardsVisiveis, setLimiteCardsVisiveis]);

  const alternarQtdCardsVisiveis = () => {
    const novaQtdCards = window.innerWidth >= 1200 ? qtdCardsVisiveis + 3 : qtdCardsVisiveis + 2;
    setQtdCardsVisiveis(
      qtdCardsVisiveis > listaProjetos.length ? (window.innerWidth >= 1200 ? 7 : 5) : novaQtdCards
    );
  };

  return alternarQtdCardsVisiveis;
};

export default useAlternarQtdCardsVisiveis;

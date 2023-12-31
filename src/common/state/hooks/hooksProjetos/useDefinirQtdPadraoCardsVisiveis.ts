import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { estadoLimiteCardsVisiveis } from "../../atom/atom";
import listaProjetos from "src/data/listaProjetos.json";
import { IEstadoQtdCardsVisiveis } from "src/common/interfaces/IProjetos";

const useDefinirQtdPadraoCardsVisiveis = ({ qtdCardsVisiveis, setQtdCardsVisiveis, }: IEstadoQtdCardsVisiveis) => {
  const setLimiteCardsVisiveis = useSetRecoilState(estadoLimiteCardsVisiveis);

  const definirQtdPadraoCardsVisiveis = () => {
    setQtdCardsVisiveis(window.innerWidth >= 1200 ? 7 : 5);
  };

  useEffect(() => {
    definirQtdPadraoCardsVisiveis();
    window.addEventListener("resize", definirQtdPadraoCardsVisiveis);
    return () => window.removeEventListener("resize", definirQtdPadraoCardsVisiveis);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setQtdCardsVisiveis]);

  useEffect(() => {
    qtdCardsVisiveis > listaProjetos.length ? setLimiteCardsVisiveis(true) : setLimiteCardsVisiveis(false);
  }, [qtdCardsVisiveis, setLimiteCardsVisiveis]);
  
  return  definirQtdPadraoCardsVisiveis;
};

export default useDefinirQtdPadraoCardsVisiveis;

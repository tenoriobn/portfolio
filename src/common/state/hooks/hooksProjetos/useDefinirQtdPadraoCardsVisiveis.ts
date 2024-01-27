import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { estadoLimiteCardsVisiveis } from "../../atom/atom";
import { IEstadoQtdCardsVisiveis } from "src/common/interfaces/IProjetos";
import { useTranslation } from "react-i18next";
import { ICardsProjetos } from "src/common/interfaces/IProjetos";

const useDefinirQtdPadraoCardsVisiveis = ({ qtdCardsVisiveis, setQtdCardsVisiveis, }: IEstadoQtdCardsVisiveis) => {
  const setLimiteCardsVisiveis = useSetRecoilState(estadoLimiteCardsVisiveis);
  const [t] = useTranslation("global");
  const listaProjetos:ICardsProjetos[] = t('projetos.cardsProjetos', { returnObjects: true });

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
  }, [qtdCardsVisiveis, setLimiteCardsVisiveis, listaProjetos]);
  
  return  definirQtdPadraoCardsVisiveis;
};

export default useDefinirQtdPadraoCardsVisiveis;

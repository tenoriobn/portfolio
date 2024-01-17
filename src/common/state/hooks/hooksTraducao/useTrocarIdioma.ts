import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { estadoIdiomaAtivo, estadoListaIdiomasAtivo } from "src/common/state/atom/atom";
import { IIdioma } from "src/common/interfaces/IIdioma";

const useTrocarIdioma = () => {
  const [idiomaAtivo, setIdiomaAtivo] = useRecoilState(estadoIdiomaAtivo);
  const [listaIdiomasAtivo, setListaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);

  const [, i18n] = useTranslation("global");

  const trocarIdioma = (idioma: IIdioma) => {
    i18n.changeLanguage(idioma.nome);

    setIdiomaAtivo(idioma.id);
    setListaIdiomasAtivo(!listaIdiomasAtivo);
  };

  return { trocarIdioma, idiomaAtivo };
};

export default useTrocarIdioma;

import { useRecoilState } from "recoil";
import { estadoDesativaRolagem, estadoMenuAtivo } from "../../atom/atom";
import { useEffect } from "react";

const useAtivarMenu = () => {
  const [menuAtivo, setMenuAtivo] = useRecoilState(estadoMenuAtivo);
  const [desativaRolagem, setDesativaRolagem] = useRecoilState(estadoDesativaRolagem);

  const ativarMenu = () => {
    if (window.innerWidth <= 1199) {
      setMenuAtivo(!menuAtivo);
      setDesativaRolagem(!desativaRolagem);
    }
  };

  useEffect(() => {
    const manipularTamanhoTela = () => {
      if (window.innerWidth > 1199) {
        setMenuAtivo(false);
        setDesativaRolagem(false);
      } else if (window.innerWidth <= 1199 && menuAtivo) {
        setDesativaRolagem(true);
      }
    };

    window.addEventListener('resize', manipularTamanhoTela);

    return () => {
      window.removeEventListener('resize', manipularTamanhoTela);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuAtivo]);

  return ativarMenu;
};

export default useAtivarMenu;

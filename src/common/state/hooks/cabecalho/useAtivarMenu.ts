import { useRecoilState, useSetRecoilState } from "recoil";
import { useEffect } from "react";
import { estadoDesativaRolagem, estadoMenuAtivo } from "../../atom";

const useAtivarMenu = () => {
  const [menuAtivo, setMenuAtivo] = useRecoilState(estadoMenuAtivo);
  const setDesativaRolagem = useSetRecoilState(estadoDesativaRolagem);

  const ativarMenu = () => {
    if (window.innerWidth <= 1199) {
      setMenuAtivo((prevMenuAtivo) => !prevMenuAtivo);
    }
  };

  useEffect(() => {
    const manipularTamanhoTela = () => {
      if (window.innerWidth > 1199) {
        setMenuAtivo(false);
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

  useEffect(() => {
    // Atualiza desativaRolagem quando menuAtivo muda
    setDesativaRolagem(menuAtivo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuAtivo]);

  // Novo useEffect para garantir que desativaRolagem seja definido como false quando menu é fechado
  useEffect(() => {
    if (!menuAtivo) {
      setDesativaRolagem(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menuAtivo]);

  return ativarMenu;
};

export default useAtivarMenu;

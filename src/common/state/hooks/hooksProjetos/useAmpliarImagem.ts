import { useRecoilState } from "recoil";
import { estadoDesativaRolagem, estadoImagemSelecionada } from "../../atom/atom";
import { useEffect, useRef } from "react";


const useAmpliarImagem = () => {
  const [imagemSelecionada, setImagemSelecionada] = useRecoilState(estadoImagemSelecionada);
  const [desativaRolagem, setDesativaRolagem] = useRecoilState(estadoDesativaRolagem);
  const windowWidth = useRef(window.innerWidth);

  const ampliarImagem = (imagem: string) => {
    if (window.innerWidth >= 768) {
      setImagemSelecionada(imagem);
      setDesativaRolagem(!desativaRolagem);
    }
  };

  useEffect(() => {
    const manipularTamanhoTela = () => {
      if (window.innerWidth !== windowWidth.current) {
        if (window.innerWidth < 768) {
          setImagemSelecionada('');
          setDesativaRolagem(false);
        } else if (window.innerWidth >= 1199 && !!imagemSelecionada) {
          setDesativaRolagem(true);
        }
      }
    };

    window.addEventListener('resize', manipularTamanhoTela);

    return () => {
      window.removeEventListener('resize', manipularTamanhoTela);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setDesativaRolagem, setImagemSelecionada, imagemSelecionada]);

  return ampliarImagem;
};

export default useAmpliarImagem;

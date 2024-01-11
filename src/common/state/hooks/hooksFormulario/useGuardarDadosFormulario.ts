import { useSetRecoilState } from "recoil";
import { estadoDadosFormulario } from "../../atom/atom";
import { IDadosFormulario } from "src/common/interfaces/IDadosFormulario";

const useGuardarDadosFormulario = () => {
  const setDadosFormulario = useSetRecoilState<IDadosFormulario>(estadoDadosFormulario);

  const guardarDadosFormulario = (campo: string, valor: string) => {
    setDadosFormulario((prevDados) => ({
      ...prevDados,
      [campo]: valor,
    }));
  };

  return guardarDadosFormulario;
};

export default useGuardarDadosFormulario;

import emailjs from "@emailjs/browser";
import { useSetRecoilState } from "recoil";
import { IDadosFormulario } from "src/common/interfaces/IDadosFormulario";
import { estadoDadosFormularioEnviado } from "../../atom/atom";

const useEnviarEmail = () => {
  const setDadosFormularioEnviado = useSetRecoilState(estadoDadosFormularioEnviado);

  const enviarEmail = (data: IDadosFormulario, reset: () => void) => {
    const serviceID = import.meta.env.VITE_REACT_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, data, publicKey)
      .then((res) => {
        console.log("Email Enviado", res.status, res.text);

        setDadosFormularioEnviado(true);
        setTimeout(() => {
          setDadosFormularioEnviado(false);
        }, 3000);

        reset();
      }, (erro) => {
        console.log(erro);
      });
  };

  return enviarEmail;
};

export default useEnviarEmail;

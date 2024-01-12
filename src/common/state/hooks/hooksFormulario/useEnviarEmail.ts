import emailjs from "@emailjs/browser";
import { IDadosFormulario } from "src/common/interfaces/IDadosFormulario";

type ResetFunction = () => void;

const useEnviarEmail = () => {
  const limparDadosFormulario = (reset: ResetFunction) => {
    reset();
  };

  const enviarEmail = (data: IDadosFormulario, reset: ResetFunction) => {
    const serviceID = import.meta.env.VITE_REACT_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, data, publicKey)
      .then((res) => {
        console.log("Email Enviado", res.status, res.text);
        alert("Email Enviado");

        limparDadosFormulario(reset);
        
      }, (erro) => {
        console.log("Erro: ", erro);
        alert(erro);
      });
  };

  return enviarEmail;
};

export default useEnviarEmail;

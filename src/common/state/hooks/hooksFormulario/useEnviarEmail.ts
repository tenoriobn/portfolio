import { useRecoilState } from "recoil";
import emailjs from "@emailjs/browser";
import { estadoDadosFormulario } from "../../atom/atom";

const useEnviarEmail = () => {
  const [dadosFormulario, setDadosFormulario] = useRecoilState(estadoDadosFormulario);

  const limparDadosFormulario = () => {
    setDadosFormulario({
      nome: '',
      email: '',
      telefone: '',
      tema: '',
      mensagem: '',
    });
  };

  const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParms = {
      nome: dadosFormulario.nome,
      email: dadosFormulario.email,
      telefone: dadosFormulario.telefone,
      tema: dadosFormulario.tema,
      mensagem: dadosFormulario.mensagem
    };

    const serviceID = import.meta.env.VITE_REACT_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_REACT_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_REACT_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, templateParms, publicKey)
      .then((res) => {
        console.log("Email Enviado", res.status, res.text);
        alert("Email Enviado");

        limparDadosFormulario();
        
      }, (erro) => {
        console.log("Erro: ", erro);
        alert(erro);
      });
  };

  return enviarEmail;
};

export default useEnviarEmail;

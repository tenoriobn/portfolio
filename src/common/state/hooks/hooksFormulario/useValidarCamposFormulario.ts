import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import useEnviarEmail from "src/common/state/hooks/hooksFormulario/useEnviarEmail";
import { IDadosFormulario } from "src/common/interfaces/IDadosFormulario";

export const useValidarCamposFormulario = () => {
  const campoObrigatorio = "Campo obrigatório.";

  const schema = yup
    .object({
      nome: yup.string()
        .required(campoObrigatorio)
        .min(3, "Mínimo 3 caracteres")
        .max(50, "Máximo 50 caracteres")
        .matches(/^[a-zA-ZÀ-ÖØ-öø-ÿ\s~^]+$/, "Nome não pode conter números"),
      email: yup.string()
        .required(campoObrigatorio)
        .email("Deve ser um formato de email válido"),
      telefone: yup.string()
        .required(campoObrigatorio)
        .min(2, "Minimo 2 caracteres")
        .max(15, "Máximo 15 caracteres")
        .matches(/^\d+$/, "Telefone não pode conter letras"),
      tema: yup.string()
        .required(campoObrigatorio)
        .min(5, "Mínimo 5 caracteres")
        .max(50, "Máximo 50 caracteres"),
      mensagem: yup.string()
        .required(campoObrigatorio)
        .max(750, "Máximo 750 caracteres"),
    })
    .required();

  const resolver = yupResolver(schema);
  const enviarEmail = useEnviarEmail();

  const useFormHook = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
    } = useForm<IDadosFormulario>({
      resolver,
    });

    const onSubmit: SubmitHandler<IDadosFormulario> = (data) => {
      enviarEmail(data, reset);
    };

    return { register, handleSubmit, errors, onSubmit, reset };
  };

  return { resolver, useFormHook };
};

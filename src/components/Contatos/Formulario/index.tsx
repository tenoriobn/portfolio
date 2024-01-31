import styled, { css } from "styled-components";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";


import { IEstilizacaoCustomizada } from "../../../common/interface/IEstilizacaoCustomizada";
import { estilosBordaBotaoEInputs, estilosBordaCard } from "../../../common/EstilosElementosPadrao/estilosBorda";
import { cor } from "../../../common/Tema/cores";
import Botao from "../../Botao";
import { estadoDadosFormularioEnviado, estadoTrocaTema } from "../../../common/state/atom";
import { IDadosFormulario } from "../../../common/interface/IFormulario";
import { useValidarCamposFormulario } from "../../../common/state/hooks/formulario/useValidarCamposFormulario";


const ContainerFormulario = styled.form<IEstilizacaoCustomizada>`
  order: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${estilosBordaCard}
  padding: 1.5rem 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const ContainerCamposFormulario = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const ContainerCampoFormulario = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const estiloDosCampos = css<IEstilizacaoCustomizada>`
  outline: none;
  background-color: transparent;
  ${estilosBordaBotaoEInputs};
  padding: 1.5rem;
  color: ${cor.branco};
  transition: all .3s ease-in-out;

  &.erro {
    border-color: ${cor.vermelho};
  }

  &::placeholder {
    color: ${cor.cinzaClaro};
  }

  &:focus {
    border-color: ${cor.branco};
  }
`;

const CampoFormulario = styled.input<IEstilizacaoCustomizada>`
  ${estiloDosCampos}
`;

const CampoTexto = styled.textarea<IEstilizacaoCustomizada>`
  ${estiloDosCampos}
  resize: none;

  min-height: 210px;
  height: 100%;
`;

const MensagemErro = styled.div`
  color: ${cor.vermelho};
  margin: .25rem 0 0 1.5rem;
`;

const MensagemFormularioEnviado = styled.p`
  color: ${cor.verde};
`;

const BotaoFormulario = styled(Botao)`
  @media (min-width: 768px) {
    max-width: 137px;
  }
`;

export default function Formulario() {
  const { useFormHook } = useValidarCamposFormulario();
  const { register, handleSubmit, errors, onSubmit } = useFormHook();
  const DadosFormularioEnviado = useRecoilValue(estadoDadosFormularioEnviado);
  const trocaTema = useRecoilValue(estadoTrocaTema);

  const [t] = useTranslation("global");
  const camposFormulario:IDadosFormulario[] = t('contatos.camposFormulario', { returnObjects: true });

  return (
    <ContainerFormulario onSubmit={handleSubmit(onSubmit)} $trocaTema={trocaTema}>
      <ContainerCamposFormulario>
        {camposFormulario.map((campo) => (
          <ContainerCampoFormulario key={campo.id}>
            {campo.campoNome !== 'mensagem' ? (
              <CampoFormulario
                type="text"
                placeholder={campo.placeholder}
                className={`${errors[campo.campoNome] ? 'erro' : null}`}
                {...register(`[${campo.campoNome}]`)}
                $trocaTema={trocaTema}
              />
            ) : (
              <CampoTexto
                placeholder={campo.placeholder}
                className={`${errors[campo.campoNome] ? 'erro' : null}`}
                {...register(`[${campo.campoNome}]`)}
                $trocaTema={trocaTema}
              />
            )}
            <MensagemErro >
              {(errors[campo.campoNome]?.message)}
            </MensagemErro>
          </ContainerCampoFormulario>
        ))}
      </ContainerCamposFormulario>

      {DadosFormularioEnviado ? <MensagemFormularioEnviado>{t('contatos.mensagemEnvio')}</MensagemFormularioEnviado> : null}

      <BotaoFormulario type="submit">{t('contatos.enviar')}</BotaoFormulario>
      
    </ContainerFormulario>
  );
}
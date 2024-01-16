import styled, { css } from "styled-components";
import { cor } from "src/common/EstilosGlobais/cores";
import listaCamposFormulario from "src/data/listaCamposFormulario.json";
import { useValidarCamposFormulario } from "src/common/state/hooks/hooksFormulario/useValidarCamposFormulario";
import { useRecoilValue } from "recoil";
import { estadoDadosFormularioEnviado, estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import Botao from "src/components/Botao";
import { estilosBorda } from "src/common/estilosPadronizados/estilosBorda";

const ContainerFormulario = styled.form<IEstilizacaoCustomizada>`
  order: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${estilosBorda}
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
  ${estilosBorda}
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
    border-color: ${cor.cinzaClaro};
  }
`;

const CampoFormulario = styled.input<IEstilizacaoCustomizada>`
  ${estiloDosCampos}
`;

const CampoTexto = styled.textarea<IEstilizacaoCustomizada>`
  ${estiloDosCampos}

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

  return (
    <ContainerFormulario onSubmit={handleSubmit(onSubmit)} $trocaTema={trocaTema}>
      <ContainerCamposFormulario>
        {listaCamposFormulario.map((campo) => (
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

      {DadosFormularioEnviado ? <MensagemFormularioEnviado>Mensagem enviada</MensagemFormularioEnviado> : null}

      <BotaoFormulario type="submit">Enviar</BotaoFormulario>
      
    </ContainerFormulario>
  );
}

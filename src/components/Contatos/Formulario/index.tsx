import styled, { css } from "styled-components";
import { cor } from "src/common/EstilosGlobais/cores";
import listaCamposFormulario from "src/data/listaCamposFormulario.json";
import { useValidarCamposFormulario } from "src/common/state/hooks/hooksFormulario/useValidarCamposFormulario";
import { useRecoilValue } from "recoil";
import { estadoDadosFormularioEnviado, estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoDesativaRolagem } from "src/common/interfaces/IEstilizacaoCustomizada";

const ContainerFormulario = styled.form<IEstilizacaoDesativaRolagem>`
  order: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  border: .125rem solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  box-shadow: 0rem 0rem 1rem .0625rem ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
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

const estiloDosCampos = css<IEstilizacaoDesativaRolagem>`
  outline: none;
  background-color: transparent;
  border-radius: 32px;
  border: 2px solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  padding: 24px;
  color: ${cor.branco};

  &.erro {
    border-color: ${cor.vermelho};
  }

  &::placeholder {
    color: ${cor.cinzaClaro};
  }
`;

const CampoFormulario = styled.input<IEstilizacaoDesativaRolagem>`
  ${estiloDosCampos}
`;

const CampoTexto = styled.textarea<IEstilizacaoDesativaRolagem>`
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

const Botao = styled.button<IEstilizacaoDesativaRolagem>`
  background-color: transparent;
  border-radius: 32px;
  border: 2px solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  box-shadow: 0px 0px 16px 1px ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  color: ${cor.branco};
  cursor: pointer;
  font-weight: 700;
  padding: 12px 16px;

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

      <Botao type="submit" $trocaTema={trocaTema}>Enviar</Botao>
    </ContainerFormulario>
  );
}

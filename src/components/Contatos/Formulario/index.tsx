import styled, { css } from "styled-components";
import { cor } from "src/common/EstilosGlobais/cores";
import { useRecoilValue } from "recoil";
import { estadoDadosFormulario } from "src/common/state/atom/atom";
import listaCamposFormulario from "src/data/listaCamposFormulario.json";
import useEnviarEmail from "src/common/state/hooks/hooksFormulario/useEnviarEmail";
import useGuardarDadosFormulario from "src/common/state/hooks/hooksFormulario/useGuardarDadosFormulario";

const ContainerCamposFormulario = styled.form`
  order: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 2rem;
  border: .125rem solid ${cor.azul};
  box-shadow: 0rem 0rem 1rem .0625rem ${cor.azul};
  padding: 1.5rem 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }
`;

const ContainerCampoInformacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

const estiloDosCampos = css`
  outline: none;
  background-color: transparent;
  border-radius: 32px;
  border: 2px solid ${cor.azul};
  padding: 24px;
  color: ${cor.branco};

  &::placeholder {
    color: ${cor.cinzaClaro};
  }
`;

const CampoInformacao = styled.input`
  ${estiloDosCampos}
  flex: 1;
`;

const CampoTexto = styled.textarea`
  ${estiloDosCampos}

  min-height: 210px;
  height: 100%;
`;

const Botao = styled.button`
  background-color: transparent;
  border-radius: 32px;
  border: 2px solid ${cor.azul};
  box-shadow: 0px 0px 16px 1px ${cor.azul};
  color: ${cor.branco};
  cursor: pointer;
  font-weight: 700;
  padding: 12px 16px;

  @media (min-width: 768px) {
    max-width: 137px;
  }
`;

export default function Formulario() {
  const dadosFormulario = useRecoilValue(estadoDadosFormulario);
  const enviarEmail = useEnviarEmail();
  const guardarDadosFormulario = useGuardarDadosFormulario();

  return (
    <ContainerCamposFormulario onSubmit={enviarEmail}>
      <ContainerCampoInformacao>
        {listaCamposFormulario.map((campo) => (
          <CampoInformacao
            key={campo.id}
            type="text"
            placeholder={campo.placeholder}
            onChange={(e) => guardarDadosFormulario(campo.value, e.target.value)}
            value={dadosFormulario[campo.value]}
            required
          />
        ))}
      </ContainerCampoInformacao>
      <CampoTexto
        placeholder="Mensagem"
        onChange={(e) => guardarDadosFormulario('mensagem', e.target.value)}
        value={dadosFormulario.mensagem}
        required
      />
      <Botao type="submit">Enviar</Botao>
    </ContainerCamposFormulario>
  );
}

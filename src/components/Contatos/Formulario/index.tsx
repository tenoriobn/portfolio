import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Linkedin from "src/assets/icons/linkedin.svg?react";
import Github from "src/assets/icons/github.svg?react";
import Gmail from "src/assets/icons/gmail.svg?react";
import Whatsapp from "src/assets/icons/whatsapp.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";

const ContainerFormulario = styled.div`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 2rem;
    border: .125rem solid ${cor.azul};
    box-shadow: 0rem 0rem 1rem .0625rem ${cor.azul};
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 992px) {
    margin-top: 5rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;
const ContainerInformacoesFormulario = styled.div`
  margin-top: 1.5rem;
  flex: 1;
`;

const Paragrafo = styled.p`
  text-align: center;
`;

const ContainerIconesContato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }
`;

const Icone = styled.svg`
  display: flex;

  cursor: pointer;
  width: 32px;
  height: 32px;
  filter: drop-shadow(0px 0px 16px rgba(4, 148, 252, 0.3));

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 992px) {
    width: 48px;
    height: 48px;
  }
`;

const ContainerCamposFormulario = styled.div`
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
  return (
    <ContainerFormulario>
      <ContainerCamposFormulario>
        <ContainerCampoInformacao>
          <CampoInformacao type="text" placeholder="Nome" />
          <CampoInformacao type="text" placeholder="Email" />
        </ContainerCampoInformacao>
        <ContainerCampoInformacao>
          <CampoInformacao type="text" placeholder="Telefone" />
          <CampoInformacao type="text" placeholder="Tema" />
        </ContainerCampoInformacao>
        <CampoTexto name="" id="" placeholder="Mensagem" />
        <Botao>Enviar</Botao>
      </ContainerCamposFormulario>

      <ContainerInformacoesFormulario>
        {/* container da mensagem e icones */}
        <Paragrafo>
          Conecte-se comigo pelo formulário ou clicando em um dos ícones de mídias sociais abaixo para iniciarmos uma conversa:
        </Paragrafo>
        <ContainerIconesContato>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <Icone as={Linkedin} />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer">
            <Icone as={Github} />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer"
          >
            <Icone as={Gmail} />
          </Link>
          <Link to="/" target="_blank" rel="noopener noreferrer"
          >
            <Icone as={Whatsapp} />
          </Link>
        </ContainerIconesContato>
      </ContainerInformacoesFormulario>
    </ContainerFormulario>
  );
}

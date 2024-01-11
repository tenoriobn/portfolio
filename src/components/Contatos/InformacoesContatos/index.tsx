import styled from "styled-components";
import { Link } from "react-router-dom";
import Linkedin from "src/assets/icons/linkedin.svg?react";
import Github from "src/assets/icons/github.svg?react";
import Gmail from "src/assets/icons/gmail.svg?react";
import Whatsapp from "src/assets/icons/whatsapp.svg?react";

const ContainerInformacoesContatos = styled.div`
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

export default function InformacoesContatos() {
  return (
    <ContainerInformacoesContatos>
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
    </ContainerInformacoesContatos>
  );
}

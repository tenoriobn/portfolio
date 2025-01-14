import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ContainerRodape = styled.footer`
  padding: 1rem;

  p {
    text-align: center;
  }

  @media (min-width: 375px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 3.125rem 0;

    p {
      font-size: 1rem;
    }
  }
`;

export default function Rodape() {
  const currentYear = new Date().getFullYear();
  const [t] = useTranslation("global");

  return (
    <ContainerRodape>
      <p>© {currentYear} {t('rodape.conteudoTextual')}</p>
    </ContainerRodape>
  );
}
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const ContainerRodape = styled.footer`
  padding: 1.5rem;

  p {
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 3.125rem 0;

    p {
      font-size: 1rem;
    }
  }
`;

export default function Rodape() {
  const [t] = useTranslation("global");

  return (
    <ContainerRodape>
      <p>© {t('rodape.conteudoTextual')}</p>
    </ContainerRodape>
  );
}

import styled from "styled-components";
import { useTranslation } from "react-i18next";
import TituloSecao from "../TituloSecao";
import CardsFormacoes from "./CardsFormacoes";

const ContainerFormacoes = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

export default function Formacoes() {
  const [t] = useTranslation("global");

  return (
    <ContainerFormacoes id="formacoes">
      <TituloSecao titulo={t('formacoes.tituloSecao')} />
      <CardsFormacoes />
    </ContainerFormacoes>
  );
}
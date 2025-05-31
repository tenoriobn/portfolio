import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";
import { IEstilizacaoCustomizada } from "common/interface/IEstilizacaoCustomizada";
import { estilosBordaCard } from "src/common/EstilosElementosPadrao/estilosBorda";
import { estadoTrocaTema } from "common/state/atom";
import InformacoesContatos from "./InformacoesContatos";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const ContainerOpcoesContatos = styled.div<IEstilizacaoCustomizada>`
  @media (min-width: 768px) {
    ${estilosBordaCard}
    gap: 1.5rem;
    margin-top: 2.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export default function Contatos() {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");

  return (
    <ContainerContatos id="contatos">
      <TituloSecao titulo={t('contatos.tituloSecao')} />
      <ContainerOpcoesContatos $trocaTema={trocaTema}>
        <Formulario />
        <InformacoesContatos />
      </ContainerOpcoesContatos>
    </ContainerContatos>
  );
}
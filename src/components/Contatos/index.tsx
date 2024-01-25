import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { estilosBordaCard } from "src/common/estilosPadronizados/estilosBorda";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";
import InformacoesContatos from "./InformacoesContatos";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const ContainerOpcoesContatos = styled.div<IEstilizacaoCustomizada>`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    ${estilosBordaCard}
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

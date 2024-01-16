import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";
import InformacoesContatos from "./InformacoesContatos";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { useRecoilValue } from "recoil";
import { estilosBorda } from "src/common/estilosPadronizados/estilosBorda";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const ContainerOpcoesContatos = styled.div<IEstilizacaoCustomizada>`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    ${estilosBorda}
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

  return (
    <ContainerContatos>
      <TituloSecao titulo="Contatos" />
      <ContainerOpcoesContatos $trocaTema={trocaTema}>
        <Formulario />
        <InformacoesContatos />
      </ContainerOpcoesContatos>
    </ContainerContatos>
  );
}

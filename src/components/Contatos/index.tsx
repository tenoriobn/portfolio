import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Formulario from "./Formulario";
import { cor } from "src/common/EstilosGlobais/cores";
import InformacoesContatos from "./InformacoesContatos";
import { IEstilizacaoDesativaRolagem } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { useRecoilValue } from "recoil";

const ContainerContatos = styled.section`
  padding: 3.25rem 0;

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const ContainerOpcoesContatos = styled.div<IEstilizacaoDesativaRolagem>`
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    border-radius: 2rem;
    border: .125rem solid ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
    box-shadow: 0rem 0rem 1rem .0625rem ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
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

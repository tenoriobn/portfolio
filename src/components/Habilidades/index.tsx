import styled from "styled-components";
import TituloSecao from "../TituloSecao";
import Ferramentas from "./Ferramentas";
import { useTranslation } from "react-i18next";
import Botao from "../Botao";

const ContainerHabilidades = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;

  max-width: 370px;
  width: 100%;

  padding: 3.25rem 0;

  @media (min-width: 768px) {
    max-width: 1158px;
  }

  @media (min-width: 992px) {
    padding: 6.25rem 0;
  }
`;

const BotaoHabilidades = styled(Botao)`
  align-self: center;
  margin-top: 2rem;
`;

export default function Habilidades() {
  const [t] = useTranslation("global");

  return (
    <ContainerHabilidades id="habilidades">
      <TituloSecao titulo={t('habilidades.tituloSecao')} />
      <Ferramentas />
      <BotaoHabilidades>
        Ver mais
      </BotaoHabilidades>
    </ContainerHabilidades>
  );
}

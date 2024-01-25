import styled from "styled-components";
// import listaFerramentas from "src/data/listaFerramentas.json";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { cor } from "src/common/EstilosGlobais/cores";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { IFerramentas } from "src/common/interfaces/IHabilidades";

const ContainerFerramentas = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 32px);
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.5rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 48px);
    row-gap: 5rem;
    margin-top: 2.5rem;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(6, 64px);
    margin-top: 5rem;
  }
`;

const LinkDocumentacaoFerramenta = styled(Link)``;

const IconeFerramenta = styled.img<IEstilizacaoCustomizada>`
  filter: drop-shadow(0rem 0rem .375rem ${(props) => (props.$trocaTema ? cor.cinzaEscuro : cor.cinzaMedio)});
  width: 32px;
  height: 32px;
  transition: all .3s ease-in-out;
  opacity: .6;

  &:hover {
    opacity: 1;
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
  }

  @media (min-width: 992px) {
    width: 64px;
    height: 64px;
  }
`;

export default function Ferramentas() {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const listaFerramentas:IFerramentas[] = t('habilidades.listaFerramentas', { returnObjects: true });

  return (
    <ContainerFerramentas>
      {listaFerramentas.map(ferramenta => (
        <LinkDocumentacaoFerramenta
          to={ferramenta.link}
          key={ferramenta.id}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconeFerramenta src={ferramenta.icone} $trocaTema={trocaTema} />
        </LinkDocumentacaoFerramenta>
      ))}
    </ContainerFerramentas>
  );
}

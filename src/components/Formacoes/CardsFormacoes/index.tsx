import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IEstilizacaoCustomizada } from "common/interface/IEstilizacaoCustomizada";
import { estilosCard } from "src/common/EstilosElementosPadrao/estilosCard";
import { estilosBotao } from "src/common/EstilosElementosPadrao/estilosBotao";
import { estadoTrocaTema } from "common/state/atom";
import { ICardsFormacoes } from "common/interface/IFormacoes";

const ContainerCardsFormacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1200px) {
    flex-wrap: nowrap;
  }
`;

const CardFormacao = styled.div<IEstilizacaoCustomizada>`
  flex-basis: calc(50% - 0.75rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  ${estilosCard}

  @media (min-width: 375px) {
    gap: 1.5rem;
    padding: 1.5rem;
  }

  @media (min-width: 1200px) {
    flex-basis: inherit;
  }
`;

const LogoInstituicao = styled.img<IEstilizacaoCustomizada>`
  width: 110px;
  height: 110px;
`;

const TextoCentralizado = styled.p`
  text-align: center;
`;

const NivelAcademico = styled(TextoCentralizado)``;
const LocalidadeInstituicao = styled(TextoCentralizado)``;
const PeriodoAcademico = styled(TextoCentralizado)``;

const NomeCurso = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .02rem;
  text-align: center;

  @media (min-width: 768px) {

  }
`;

const LinkInstituicao = styled(Link)<IEstilizacaoCustomizada>`
  ${estilosBotao}
`;

export default function CardsFormacoes() {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const cardsFormacoes:ICardsFormacoes[] = t('formacoes.cardsFormacoes', { returnObjects: true });

  return (
    <ContainerCardsFormacoes>
      {cardsFormacoes.map(formacao => (
        <CardFormacao key={formacao.id} $trocaTema={trocaTema}>
          <LogoInstituicao src={formacao.logo} alt="" $trocaTema={trocaTema} />
          <NivelAcademico>{formacao.graduacao}</NivelAcademico>
          <NomeCurso>{formacao.curso}</NomeCurso>
          <LocalidadeInstituicao>{formacao.localidade}</LocalidadeInstituicao>
          <PeriodoAcademico>{formacao.data}</PeriodoAcademico>
          <LinkInstituicao 
            to={formacao.siteInstituicao}                 
            target="_blank"
            rel="noopener noreferrer"
            $trocaTema={trocaTema}
          >
            {t('formacoes.acessar')}
          </LinkInstituicao>
        </CardFormacao>
      ))}
    </ContainerCardsFormacoes>
  );
}
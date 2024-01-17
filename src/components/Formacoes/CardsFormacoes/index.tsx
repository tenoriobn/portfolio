import styled from "styled-components";
// import listaFormacoes from "src/data/listaFormacoes.json";
import { Link } from "react-router-dom";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { useRecoilValue } from "recoil";
import { estilosCard } from "src/common/estilosPadronizados/estilosCard";
import { estilosBotao } from "src/common/estilosPadronizados/estilosBotao";
import { ICardsFormacoes } from "src/common/interfaces/IFormacoes";
import { useTranslation } from "react-i18next";

const ContainerCardsFormacoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    margin-top: 2.5rem;
  }

  @media (min-width: 992px) {
    margin-top: 5rem;
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

const Logo = styled.img<IEstilizacaoCustomizada>`
  width: 110px;
  height: 110px;
`;

const Paragrafo = styled.p`
  text-align: center;
`;

const NomeCurso = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .02rem;
  text-align: center;

  @media (min-width: 768px) {

  }
`;

const Botao = styled(Link)<IEstilizacaoCustomizada>`
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
          <Logo src={formacao.logo} alt="" $trocaTema={trocaTema} />
          <Paragrafo>{formacao.graduacao}</Paragrafo>
          <NomeCurso>{formacao.curso}</NomeCurso>
          <Paragrafo>{formacao.localidade}</Paragrafo>
          <Paragrafo>{formacao.data}</Paragrafo>
          <Botao 
            to={formacao.siteInstituicao}                 
            target="_blank"
            rel="noopener noreferrer"
            $trocaTema={trocaTema}
          >
            {t('formacoes.acessar')}
          </Botao>
        </CardFormacao>
      ))}
    </ContainerCardsFormacoes>
  );
}

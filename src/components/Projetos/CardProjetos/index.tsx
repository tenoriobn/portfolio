import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { estadoQtdCardsVisiveis, estadoTrocaTema } from "src/common/state/atom/atom";
import useAmpliarImagem from "src/common/state/hooks/hooksProjetos/useAmpliarImagem";
import {estilosCard} from "src/common/estilosPadronizados/estilosCard";
import { estiloIconeSocial } from "src/common/estilosPadronizados/estilosIcones";
import { ICardsProjetos, IEstilizacaoCardsVisiveis } from "src/common/interfaces/IProjetos";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import Github from "src/assets/icons/github.svg?react";
import Vercel from "src/assets/icons/vercel.svg?react";

const ContainerCardsProjetos = styled.div`
  display: grid;
  gap: 1rem;
  box-sizing: border-box;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardProjeto = styled.div<IEstilizacaoCardsVisiveis>`
  display: grid;
  grid-template-rows: auto 1fr;
  ${estilosCard}

  &:nth-child(n + ${(props) => props.$estilizacaoCardsVisiveis}){
    display: none;
  }

  @media (min-width: 375px) {
    padding: 1.5rem;
  }
`;

const ImagemProjeto = styled.img`
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  max-height: 184px;
  width: 100%;
  object-fit: cover;

  @media (min-width: 375px) {
    margin-bottom: 1.5rem;
  }
`;

const ContainerDetalhesProjeto = styled.div`
  display: grid;
  row-gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-rows: auto 2.375rem 1fr auto;
    gap: .5rem;
  }

  @media (min-width: 1400px) {
    grid-template-rows: auto auto 1fr auto;
    gap: 1.5rem;
  }
`;

const Nome = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .02rem;
  text-align: center;
`;

const Paragrafo = styled.p`
  text-align: center;
`;

const Ferramentas = styled(Paragrafo)`
  align-self: center;
`;

const Descricao = styled(Paragrafo)`
  align-self: flex-start;
`;

const ContainerLinksProjeto = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Icone = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeSocial}
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export default function CardProjetos() {
  const qtdCardsVisiveis = useRecoilValue(estadoQtdCardsVisiveis);
  const ampliarImagem = useAmpliarImagem();
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");
  const cardsProjetos:ICardsProjetos[] = t('projetos.cardsProjetos', { returnObjects: true });

  return (
    <ContainerCardsProjetos>
      {cardsProjetos.map(projeto => (
        <CardProjeto key={projeto.id} $estilizacaoCardsVisiveis={qtdCardsVisiveis} $trocaTema={trocaTema}>
          <ImagemProjeto src={projeto.imagem} onClick={() => ampliarImagem(projeto.imagem)} />

          <ContainerDetalhesProjeto>
            <Nome>{projeto.nome}</Nome>
            <Ferramentas>{projeto.ferramentas}</Ferramentas>
            <Descricao>{projeto.descricao}</Descricao>

            <ContainerLinksProjeto>
              <Link to={projeto.linkRepositorio} target="_blank" rel="noopener noreferrer">
                <Icone as={Github} $trocaTema={trocaTema} />
              </Link>

              <Link to={projeto.linkHospedagem} target="_blank" rel="noopener noreferrer">
                <Icone as={Vercel} $trocaTema={trocaTema} />
              </Link>
            </ContainerLinksProjeto>
          </ContainerDetalhesProjeto>
        </CardProjeto>
      ))}
    </ContainerCardsProjetos>
  );
}




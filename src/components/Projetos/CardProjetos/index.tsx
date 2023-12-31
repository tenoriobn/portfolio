import listaProjetos from "src/data/listaProjetos.json";
import Github from "src/assets/icons/github.svg?react";
import Vercel from "src/assets/icons/vercel.svg?react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { cor } from "src/common/EstilosGlobais/cores";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { estadoDesativaRolagem, estadoImagemSelecionada, estadoQtdCardsVisiveis } from "src/common/state/atom/atom";
import { IEstilizacaoCardsVisiveis } from "src/common/interfaces/IProjetos";

const ContainerCards = styled.div`
  box-sizing: border-box;
  display: grid;
  gap: 1rem;

  margin-top: 1.5rem;

  @media (min-width: 375px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 2.5rem;
  }

  @media (min-width: 992px) {
    margin-top: 5rem;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div<IEstilizacaoCardsVisiveis>`
  display: grid;
  grid-template-rows: auto 1fr;

  border-radius: 2rem;
  border: .125rem solid ${cor.azul};
  box-shadow: 0px 0px 1rem .0625rem ${cor.azul};
  box-sizing: border-box;

  padding: 1rem;

  max-width: 370px;
  width: 100%;

  &:nth-child(n + ${(props) => props.$estilizacaoCardsVisiveis}){
    display: none;
  }

  @media (min-width: 375px) {
    padding: 1.5rem;
  }
`;

const Imagem = styled.img`
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 1rem;
  max-height: 184px;
  width: 100%;

  @media (min-width: 375px) {
    margin-bottom: 1.5rem;
  }
`;

const ContainerConteudo = styled.div`
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

const NomeProjeto = styled.h2`
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: .02rem;
  text-align: center;
`;

const Paragrafo = styled.p`
  text-align: center;
  align-self: center;
`;

const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

const Icone = styled.svg`
  display: flex;

  cursor: pointer;
  width: 32px;
  height: 32px;
  filter: drop-shadow(0px 0px 16px rgba(4, 148, 252, 0.3));

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export default function CardProjetos() {
  const qtdCardsVisiveis = useRecoilValue(estadoQtdCardsVisiveis);
  const setImagemSelecionada = useSetRecoilState(estadoImagemSelecionada);
  const [desativaRolagem, setDesativaRolagem] = useRecoilState(estadoDesativaRolagem);

  const ampliarImagem = (imagem:string) => {
    setImagemSelecionada(imagem);

    setDesativaRolagem(!desativaRolagem);
  };

  return (
    <>
      <ContainerCards>
        {listaProjetos.map(projeto => (
          <Card key={projeto.id} $estilizacaoCardsVisiveis={qtdCardsVisiveis}>
            <Imagem src={projeto.imagem} onClick={() => ampliarImagem(projeto.imagem)} />

            <ContainerConteudo>
              <NomeProjeto>{projeto.nome}</NomeProjeto>
              <Paragrafo>{projeto.ferramentas}</Paragrafo>
              <Paragrafo>{projeto.descricao}</Paragrafo>

              <ContainerIcon>
                <Link  to={projeto.linkRepositorio} target="_blank" rel="noopener noreferrer">
                  <Icone as={Github} />
                </Link>
                
                <Link  to={projeto.linkHospedagem} target="_blank" rel="noopener noreferrer">
                  <Icone as={Vercel} />
                </Link>
              </ContainerIcon>
            </ContainerConteudo>
          </Card>
        ))}
      </ContainerCards>
    </>
  );
}




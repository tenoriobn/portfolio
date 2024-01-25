import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { cor } from "src/common/EstilosGlobais/cores";
// import apresentacao from "src/data/informacoesSobreMim.json";
import { estilosBordaCard } from "src/common/estilosPadronizados/estilosBorda";
import { estiloIconeSocial } from "src/common/estilosPadronizados/estilosIcones";
import fotoPerfil from "./assets/Perfil.svg";
import Github from "src/assets/icons/github.svg?react";
import Linkedin from "src/assets/icons/linkedin.svg?react";

const ContainerSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  gap: 1.5rem;
  min-height: calc(100vh - 112px);
  padding: 3.25rem 0;

  @media (min-width: 768px) {
    gap: 2rem;
    min-height: calc(100vh - 120px);
  }

  @media (min-width: 992px) {
    min-height: calc(100vh - 124px);
    gap: 2.5rem;
    padding: 6.25rem 0;
  }
`;

const FotoPerfil = styled.img<IEstilizacaoCustomizada>`
  ${estilosBordaCard}
  border-radius: 50000%;
  cursor: pointer;
  width: 140px;
  height: 140px;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }

  @media (min-width: 992px) {
    width: 180px;
    height: 180px;
  }
`;

const DescricaoSobreMim = styled.p<IEstilizacaoCustomizada>`
  font-size: .875rem;
  letter-spacing: .0175rem;
  text-align: center;
  max-width: 764px;

  .nome__destaque {
    color: ${(props) => (props.$trocaTema ? cor.azul : cor.azulEscuro)};
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    max-width: 954px;

    .nome__destaque {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    max-width: 954px;
  }
`;

const ContainerCanaisComunicacao = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }
`;

const Icone = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeSocial}
  width: 32px;
  height: 32px;
  
  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;

export default function SobreMim() {
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const [t] = useTranslation("global");

  return (
    <ContainerSobreMim id="sobreMim">
      <FotoPerfil src={fotoPerfil} alt="Foto de Perfil" $trocaTema={trocaTema} />
      <DescricaoSobreMim $trocaTema={trocaTema}>
        {t('sobreMim.saudacao')}
        <span className="nome__destaque">{t('sobreMim.nome')}</span>
        {t('sobreMim.mensagem')}
      </DescricaoSobreMim>

      <ContainerCanaisComunicacao>
        <Link 
          to="https://www.linkedin.com/in/bruno-tenorio/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone as={Linkedin} $trocaTema={trocaTema} />
        </Link>

        <Link 
          to="https://github.com/tenoriobn/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone as={Github} $trocaTema={trocaTema} />
        </Link>
      </ContainerCanaisComunicacao>
    </ContainerSobreMim>
  );
}

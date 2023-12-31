import styled from "styled-components";
import fotoPerfil from "./Perfil.svg";
import Github from "src/assets/icons/github.svg?react";
import Linkedin from "src/assets/icons/linkedin.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import { Link } from "react-router-dom";
import apresentacao from "src/data/informacoesSobreMim.json";

const ContainerSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
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

const FotoPerfil = styled.img`
  cursor: pointer;
  border-radius: 50000%;
  border: .125rem solid ${cor.azul};
  box-shadow: 0rem 0rem 1rem 1px ${cor.azul};
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

const ParagrafoApresentacao = styled.p`
  font-size: .875rem;
  letter-spacing: .0175rem;
  text-align: center;
  max-width: 764px;

  .nome__destaque {
    color: ${cor.azul};
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

const ContainerIcones = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }

  @media (min-width: 992px) {
    gap: 2rem;
  }
`;

const Icone = styled.svg`
  cursor: pointer;
  width: 32px;
  height: 32px;
  filter: drop-shadow(0rem 0rem 1rem ${cor.azulColbato});

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;

export default function SobreMim() {
  return (
    <ContainerSobreMim>
      <FotoPerfil src={fotoPerfil} alt="Foto de Perfil" />
      <ParagrafoApresentacao>
        {apresentacao.saudacao}
        <span className="nome__destaque">{apresentacao.nome}</span>
        {apresentacao.mensagem}
      </ParagrafoApresentacao>

      <ContainerIcones>
        <Link 
          to="https://www.linkedin.com/in/bruno-tenorio/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone as={Linkedin} />
        </Link>

        <Link 
          to="https://github.com/tenoriobn/" 
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icone as={Github} />
        </Link>
      </ContainerIcones>
    </ContainerSobreMim>
  );
}

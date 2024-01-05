import styled from "styled-components";
import fotoPerfil from "./Perfil.svg";
import Github from "src/assets/icons/github.svg?react";
import Linkedin from "src/assets/icons/linkedin.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";
import { Link } from "react-router-dom";

const ContainerSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 10.25rem 0;

  @media (min-width: 768px) {
    gap: 2rem;
    padding-top: 14.75rem;
  }

  @media (min-width: 992px) {
    gap: 2.5rem;
    padding-top: 17.5rem;
  }
`;

const ImgPerfil = styled.img`
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

const Apresentacao = styled.p`
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

    .nome__destaque {
      font-size: 1.125rem;
    }
  }

  @media (min-width: 992px) {
    font-size: 1.25rem;
  }

  @media (min-width: 1200px) {
    max-width: 992px;
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
  filter: drop-shadow(0px 0px 16px rgba(4, 148, 252, 0.3));

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;

export default function SobreMim() {
  return (
    <ContainerSobreMim>
      <ImgPerfil src={fotoPerfil} alt="Foto de Perfil" />
      <Apresentacao>
        Olá, sou <span className="nome__destaque">Bruno Tenório</span>, natural de Itaquaquecetuba, zona leste de São Paulo. Em 2010, aos 13 anos, embarquei na programação ao criar meu primeiro servidor para o jogo Fatality Gunz, mesmo sem conhecimento prévio em c++, bancos de dados, php ou protocolos, eu estava convicto de que era possível aprender e dominar o que eu tanto gostava. Em 2020, iniciei os cursos da Alura, focando no front-end. Atualmente, estou lapidando minhas skills em front e back-end, visando atuar em uma empresa de tecnologia de ponta, onde poderei crescer profissionalmente e continuar aprendendo.
      </Apresentacao>

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

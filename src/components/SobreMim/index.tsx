import styled from "styled-components";
import fotoPerfil from "./Perfil.svg";
import Github from "./github.svg?react";
import Linkedin from "./linkedin.svg?react";
import { cor } from "src/common/EstilosGlobais/cores";

const ContainerSobreMim = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  margin: 3.25rem 0;

  @media (min-width: 768px) {
    gap: 2.5rem;

    margin-top: 7.25rem;
  }

  @media (min-width: 992px) {
    margin-top: 9.75rem;
  }
`;

const ImgPerfil = styled.img`
  border-radius: 50000%;
  border: .125rem solid ${cor.azul};
  box-shadow: 0rem 0rem 1rem .375rem ${cor.azul};

  width: 140px;
  height: 140px;

  @media (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const Paragrafo = styled.p`
  font-size: .875rem;
  letter-spacing: .0175rem;
  text-align: center;
  max-width: 954px;

  .nome__destaque {
    color: ${cor.azul};
    font-size: 1rem;
    font-weight: 700;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;

    .nome__destaque {
      font-size: 1.5rem;
    }
  }
`;

const ContainerIcones = styled.div`
  display: flex;
  gap: 1rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const Icone = styled.svg`
  cursor: pointer;
  width: 32px;
  height: 32px;

  @media (min-width: 768px) {
    width: 54px;
    height: 54px;
  }
`;

export default function SobreMim() {
  return (
    <ContainerSobreMim>
      <ImgPerfil src={fotoPerfil} alt="Foto de Perfil" />
      <Paragrafo>
        Olá, sou <span className="nome__destaque">Bruno Tenório</span>, natural de Itaquaquecetuba, zona leste de São Paulo. Em 2010, aos 13 anos, embarquei na programação ao criar meu primeiro servidor para o jogo Fatality Gunz, mesmo sem conhecimento prévio em c++, bancos de dados, php ou protocolos, eu estava convicto de que era possível aprender e dominar o que eu tanto gostava. Em 2020, iniciei os cursos da Alura, focando no front-end. Atualmente, estou lapidando minhas skills em front e back-end, visando atuar em uma empresa de tecnologia de ponta, onde poderei crescer profissionalmente e continuar aprendendo.
      </Paragrafo>

      <ContainerIcones>
        <Icone as={Linkedin} />
        <Icone as={Github} />
      </ContainerIcones>
    </ContainerSobreMim>
  );
}

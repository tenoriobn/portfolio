import { useRef } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import GlobalIcon from "public/assets/icons/global.svg?react";
import { cor } from 'common/Tema/cores';
import { estadoListaIdiomasAtivo, estadoTrocaTema } from 'common/state/atom';
import { estiloIconeCabecalho } from 'src/common/EstilosElementosPadrao/estilosIcones';
import { IEstilizacaoCustomizada } from 'common/interface/IEstilizacaoCustomizada';
import useTrocarIdioma from 'common/state/hooks/cabecalho/useTrocarIdioma';
import useFecharAoClicarFora from 'common/state/hooks/hooksGlobais/useFecharAoClicarFora';
import { IIdioma } from 'common/interface/ICabecalho';

const estiloFundoListaIdiomas = css<IEstilizacaoCustomizada>`
  background-color: ${(props) => (
    props.$listaIdiomasAtivo
      ? (props.$trocaTema ? cor.azulColbato : cor.cinzaClaro)
      : 'none'
  )};
  backdrop-filter: blur(800px);
`;

const ContainerIdiomas = styled.li<IEstilizacaoCustomizada>`
  list-style: none;
  position: relative;

  ${estiloFundoListaIdiomas};
  border-radius: 1rem 1rem 0 0;
`;

const IconeListaIdiomas = styled.svg<IEstilizacaoCustomizada>`
  ${estiloIconeCabecalho};

  path {
    fill: ${(props) => ( props.$listaIdiomasAtivo
    ? cor.branco
    : (props.$trocaTema ? cor.azul : cor.cinzaClaro))};
  }
`;

const ContainerListaIdiomas = styled.ul<IEstilizacaoCustomizada>`
  position: absolute;
  display: ${(props) => (props.$listaIdiomasAtivo ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: .375rem;
  padding: .375rem 0 8px 0;
  width: 100%;

  ${estiloFundoListaIdiomas};

  border-radius: 0 0 1rem 1rem;
`;

const Idioma = styled.li<IEstilizacaoCustomizada>`
  cursor: pointer;
  color: ${cor.cinzaClaro};
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  transition: color .3s ease-in-out 0s;

  &:hover {
    color: ${cor.branco};
  }

  &.idiomaAtivo {
    color: ${(props) => (props.$trocaTema ? cor.azul : cor.branco)};
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

export default function Idiomas() {
  const [listaIdiomasAtivo, setListaIdiomasAtivo] = useRecoilState(estadoListaIdiomasAtivo);
  const trocaTema = useRecoilValue(estadoTrocaTema);
  const { trocarIdioma, idiomaAtivo } = useTrocarIdioma();
  const [t] = useTranslation("global");
  const listaIdiomas: IIdioma[] = t('cabecalho.listaIdiomas', { returnObjects: true });

  const listaIdiomasRef = useRef(null);
  
  const fecharListaIdiomas = () => {
    setListaIdiomasAtivo(false);
  };
  useFecharAoClicarFora({ ref: listaIdiomasRef, aoClicarFora: fecharListaIdiomas });

  return (
    <ContainerIdiomas 
      ref={listaIdiomasRef}
      $trocaTema={trocaTema} 
      $listaIdiomasAtivo={listaIdiomasAtivo}
    >
      <Link to="#" role="button" onClick={() => setListaIdiomasAtivo(!listaIdiomasAtivo)}>
        <IconeListaIdiomas as={GlobalIcon} $trocaTema={trocaTema} $listaIdiomasAtivo={listaIdiomasAtivo} />
      </Link>

      <ContainerListaIdiomas $trocaTema={trocaTema} $listaIdiomasAtivo={listaIdiomasAtivo}>
        {listaIdiomas.map(idioma => (
          <Idioma
            key={idioma.id}
            onClick={() => trocarIdioma(idioma)}
            className={idiomaAtivo === idioma.id ? "idiomaAtivo" : ""}
            $trocaTema={trocaTema}
          >
            {idioma.nome}
          </Idioma>
        ))}
      </ContainerListaIdiomas>
    </ContainerIdiomas>
  );
}
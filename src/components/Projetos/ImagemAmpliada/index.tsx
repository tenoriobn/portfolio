import styled from "styled-components";
import { useRecoilState } from "recoil";

import iconeFechar from "./assets/Fechar.svg?react";
import { useRef } from "react";
import { cor } from "../../../common/Tema/cores";
import { estadoDesativaRolagem, estadoImagemSelecionada } from "../../../common/state/atom";
import useFecharAoClicarFora from "../../../common/state/hooks/hooksGlobais/useFecharAoClicarFora";

const DialogImagemAmpliada = styled.dialog` 
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.open ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background-color: ${cor.cinzaMuitoEscuro};
  width: auto;
  height: 100%;
  z-index: 7;
`;

const ContainerImagemAmpliada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  box-sizing: border-box;
  width: 80%;
  padding: 3rem; 

  @media (min-width: 1128px) {
    width: 60%;
  }

  @media (min-width: 1440px) {
    width: 65%;
  }
`;

const ContainerIconeFechar = styled.div`
  align-self: flex-end;
  margin-bottom: 1.5rem;
`;

const IconeFechar = styled(iconeFechar)`
  cursor: pointer;
  width: 24px;

  path {
    stroke: ${cor.azul};
    transition: stroke .3s ease-in-out 0s;

    &:hover {
      stroke: ${cor.branco};
    }
  }
`;

const ImagemAmpliadaVisualizada = styled.img`
  width: 100%;
`;

export default function ImagemAmpliada() {
  const [imagemSelecionada, setImagemSelecionada] = useRecoilState(estadoImagemSelecionada);
  const [desativaRolagem, setDesativaRolagem] = useRecoilState(estadoDesativaRolagem);

  const fecharImagemAmpliada = () => {
    setImagemSelecionada('');
    setDesativaRolagem(!desativaRolagem);
  };

  
  const containerImagemAmpliadaRef = useRef(null);
  const fecharContainerImagemAmpliada = () => {
    setImagemSelecionada('');
    setDesativaRolagem(false);
  };
  useFecharAoClicarFora({ ref: containerImagemAmpliadaRef, aoClicarFora: fecharContainerImagemAmpliada });

  return (
    <DialogImagemAmpliada open={!!imagemSelecionada}>
      <ContainerImagemAmpliada ref={containerImagemAmpliadaRef}>
        <ContainerIconeFechar onClick={fecharImagemAmpliada} >
          <IconeFechar />
        </ContainerIconeFechar>
        <ImagemAmpliadaVisualizada src={imagemSelecionada} alt="" />
      </ContainerImagemAmpliada>
    </DialogImagemAmpliada>
  );
}
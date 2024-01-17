import { cor } from "src/common/EstilosGlobais/cores";
import styled from "styled-components";
import iconeFechar from "./Fechar.svg?react";
import { estadoDesativaRolagem, estadoImagemSelecionada } from "src/common/state/atom/atom";
import { useRecoilState } from "recoil";

const DialogImagemAmpliada = styled.dialog` 
  background-color: ${cor.cinzaMuitoEscuro};
  border: none;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: auto;
  max-height: 100vh;
  height: 100%;
  overflow-y: hidden;
  z-index: 7;

  @media (max-width: 767px) {
    display: none;
  }
`;

const ContainerImagemAmpliada = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  padding: 3rem;
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

  return (
    <DialogImagemAmpliada open={!!imagemSelecionada}>
      <ContainerImagemAmpliada>
        <ContainerIconeFechar onClick={fecharImagemAmpliada} >
          <IconeFechar />
        </ContainerIconeFechar>
        <ImagemAmpliadaVisualizada src={imagemSelecionada} alt="" />
      </ContainerImagemAmpliada>
    </DialogImagemAmpliada>
  );
}

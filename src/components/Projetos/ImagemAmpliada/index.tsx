import { cor } from "src/common/EstilosGlobais/cores";
import styled from "styled-components";
import iconeFechar from "./Fechar.svg?react";
import { estadoDesativaRolagem, estadoImagemSelecionada } from "src/common/state/atom/atom";
import { useRecoilState } from "recoil";

const CaixaDialogoImagemAmpliada = styled.dialog` 
  max-height: 100vh;
  overflow: hidden;
  background-color: #000000b7;
  border: none;
  box-sizing: border-box;

  position: fixed;
  top: 0;
  bottom: 0;
  width: auto;
  height: 100%;
  z-index: 5;

  @media (max-width: 767px) {
    display: none;
  }
`;

const ContainerImagemAmpliada = styled.div`
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1024px;
  width: 100%;
  box-sizing: border-box;
  padding: 48px;
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

const Imagem = styled.img`
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
    <CaixaDialogoImagemAmpliada open={!!imagemSelecionada}>
      <ContainerImagemAmpliada>
        <ContainerIconeFechar onClick={fecharImagemAmpliada} >
          <IconeFechar />
        </ContainerIconeFechar>
        <Imagem src={imagemSelecionada} alt="" />
      </ContainerImagemAmpliada>
    </CaixaDialogoImagemAmpliada>
  );
}

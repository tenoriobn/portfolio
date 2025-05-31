import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { IBotao } from "common/interface/IBotao";
import { estilosBotao } from "common/estilosElementosPadrao/estilosBotao";
import { IEstilizacaoCustomizada } from "common/interface/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "common/state/atom";

const BotaoEstlizado = styled.button<IEstilizacaoCustomizada>`
  ${estilosBotao}
`;

export default function Botao( { children, onClick, type, className }: IBotao ) {
  const trocaTema = useRecoilValue(estadoTrocaTema);

  return (
    <BotaoEstlizado
      onClick={onClick}
      type={type}
      $trocaTema={trocaTema}
      className={className}
    >
      {children}
    </BotaoEstlizado>
  );
}
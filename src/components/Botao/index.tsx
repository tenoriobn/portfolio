import { useRecoilValue } from "recoil";
import { estilosBotao } from "src/common/estilosPadronizados/estilosBotao";
import { IBotao } from "src/common/interfaces/IBotao";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import styled from "styled-components";

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
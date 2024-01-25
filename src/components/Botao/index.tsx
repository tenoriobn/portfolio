import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { IBotao } from "src/common/interfaces/IBotao";
import { estilosBotao } from "src/common/estilosPadronizados/estilosBotao";

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

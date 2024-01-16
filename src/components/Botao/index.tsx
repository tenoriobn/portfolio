import { MouseEventHandler, ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { estilosBotao } from "src/common/estilosPadronizados/estilosBotao";
import { IEstilizacaoCustomizada } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import styled from "styled-components";

interface BotaoProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const BotaoEstlizado = styled.button<IEstilizacaoCustomizada>`
  ${estilosBotao}
`;

export default function Botao( { children, onClick, type, className }: BotaoProps ) {
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

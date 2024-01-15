import { MouseEventHandler, ReactNode } from "react";
import { useRecoilValue } from "recoil";
import { cor } from "src/common/EstilosGlobais/cores";
import { estilosBorda } from "src/common/estilos/estilosBorda";
import { IEstilizacaoDesativaRolagem } from "src/common/interfaces/IEstilizacaoCustomizada";
import { estadoTrocaTema } from "src/common/state/atom/atom";
import styled from "styled-components";

interface BotaoProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const BotaoEstlizado = styled.button<IEstilizacaoDesativaRolagem>`
  background: none;
  ${estilosBorda}
  cursor: pointer;
  color: ${cor.branco};
  font-weight: 700;
  text-align: center;

  padding: .75rem 1rem;
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

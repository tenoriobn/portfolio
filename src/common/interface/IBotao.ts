import { MouseEventHandler, ReactNode } from "react";

export interface IBotao {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  className?: string;
}
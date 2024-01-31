export interface IDadosFormulario {
  nome: string;
  email: string;
  telefone: string;
  tema: string;
  mensagem: string;
  [key: string]: string;
}
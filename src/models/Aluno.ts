import type Categoria from "./Categoria";

export default interface Aluno {
  id: number;
  nome: string;
  telefone: string;
  altura: number;
  peso: number;
  categoria: Categoria | null;
}

import type Aluno from "./Aluno";

export default interface Categoria {
  id: number;
  descricao: string;
  aluno?: Aluno[] | null;
}

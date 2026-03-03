import { PencilIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type Aluno from "../../../models/Aluno";
import ModalCadastrarAluno from "../modalaluno/ModalCadastrarAluno";
import ModalDeletarAluno from "../modalaluno/ModalDeletarAluno";

interface CardAlunoProps {
  aluno: Aluno;
  atualizarLista: () => void;
}

function CardAluno({ aluno, atualizarLista }: CardAlunoProps) {
  const location = useLocation();
  const [openEditar, setOpenEditar] = useState(false);

  const imc = Number((aluno.peso / (aluno.altura * aluno.altura)).toFixed(1));

  const getImcStatus = (imc: number) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
  };

  const imcStatus = getImcStatus(imc);

  return (
    <article className="flex flex-col gap-4 border border-2gray-400 text-amber-50 rounded-2xl p-4 md:grid md:grid-cols-7 md:py-2 md:items-center">
      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Nome:</h3>
          <p>{aluno.nome}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Telefone:</h3>
          <p>{aluno.telefone}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Altura:</h3>
          <p className="overflow-hidden">{aluno.altura}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Peso:</h3>
          <p className="overflow-hidden">{aluno.peso}</p>
        </div>
      </div>
      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">IMC:</h3>
          <p className="overflow-hidden">{imcStatus}</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Categoria:</h3>
          <p className="overflow-hidden">{aluno.categoria?.descricao}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 md:gap-2 md:items-center">
        <Link
          to={`/editaraluno/${aluno.id}`}
          state={{ backgroundLocation: location }}
          onClick={() => setOpenEditar(true)}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
        >
          <PencilIcon size={24} color="#ffffff" />
        </Link>

        <ModalCadastrarAluno
          open={openEditar}
          onClose={() => setOpenEditar(false)}
          atualizarLista={atualizarLista}
          id={String(aluno.id)}
        />

        <ModalDeletarAluno atualizarLista={atualizarLista} id={`${aluno.id}`} />
      </div>
    </article>
  );
}

export default CardAluno;

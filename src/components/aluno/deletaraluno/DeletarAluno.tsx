import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Aluno from "../../../models/Aluno";
import { buscar, deletar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface DeletarAlunoProps {
  onSuccess?: () => void;
  id: string;
}

function DeletarAluno({ onSuccess, id }: DeletarAlunoProps) {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aluno, setAluno] = useState<Aluno>({} as Aluno);

  async function buscarPorId(id: string) {
    try {
      await buscar(`/alunos/${id}`, setAluno);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      }
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarAluno() {
    setIsLoading(true);

    try {
      await deletar(`/alunos/${id}`);

      ToastAlerta("Aluno apagado com sucesso", "sucesso");
      onSuccess?.();
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      } else {
        ToastAlerta("Erro ao deletar o aluno.", "erro");
      }
    }

    setIsLoading(false);
    retornar();
  }

  function retornar() {
    navigate("/alunos");
  }

  function cancel() {
    retornar();
    onSuccess?.();
  }

  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-2xl w-[80vw] py-4 md:w-[40vw] md:px-8">
      <h1 className="text-4xl text-center my-8">Remover Aluno</h1>

      <div className="flex flex-col items-center gap-4 w-[70vw] md:w-full">
        <p className="">Deseja deletar o aluno: {aluno.nome}?</p>
        <div className="flex gap-8">
          <button
            onClick={cancel}
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300"
          >
            Não
          </button>
          <button
            onClick={deletarAluno}
            disabled={isLoading}
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={24} />
            ) : (
              <span>Sim</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarAluno;

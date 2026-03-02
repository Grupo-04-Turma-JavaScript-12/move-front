import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Aluno from "../../../models/Aluno";
import { buscar, deletar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarAluno() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [aluno, setAluno] = useState<Aluno>({} as Aluno);

  const { id } = useParams<{ id: string }>();

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

  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar Aluno?</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o aluno a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
          Aluno
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{aluno.nome}</p>
          <p>{aluno.telefone}</p>
          <p>{aluno.peso}</p>
          <p>{aluno.altura}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center"
            onClick={deletarAluno}
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

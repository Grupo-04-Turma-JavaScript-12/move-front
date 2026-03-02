import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import type Aluno from "../../../models/Aluno";
import { buscar } from "../../../service/Service";
import CardAluno from "../cardaluno/CardAluno";

function ListaAlunos() {
  // const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [alunos, setAlunos] = useState<Aluno[]>([]);

  useEffect(() => {
    buscarAlunos();
  }, [alunos.length]);

  async function buscarAlunos() {
    try {
      setIsLoading(true);

      await buscar("/alunos", setAlunos);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && alunos.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum aluno foi encontrado!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {alunos.map((aluno) => (
              <CardAluno key={aluno.id} aluno={aluno} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaAlunos;

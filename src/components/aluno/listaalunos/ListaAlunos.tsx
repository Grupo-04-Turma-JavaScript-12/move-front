import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type Aluno from "../../../models/Aluno";
import { buscar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardAluno from "../cardaluno/CardAluno";
import ModalCadastrarAluno from "../modalaluno/ModalCadastrarAluno";
import { SyncLoader } from "react-spinners";

function ListaAlunos() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alunos, setAlunos] = useState<Aluno[]>([]);
  const location = useLocation();
  const [openCadastrar, setOpenCadastrar] = useState(false);

  useEffect(() => {
    buscarAlunos();
  }, [alunos.length]);

  async function buscarAlunos() {
    try {
      setIsLoading(true);

      await buscar("/alunos", setAlunos);
      ToastAlerta("Alunos carregados com sucesso", "info");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("Erro ao carregar os alunos", "erro");
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
      <section>
        <div className="flex flex-col gap-8 items-center bg-black py-10">
          <div className="flex flex-col gap-8 md:container md:flex-row md:justify-between">
            <h1 className="text-amber-50 text-3xl">Lista de Alunos</h1>
            <Link
              to={`/cadastraraluno`}
              state={{ backgroundLocation: location }}
              onClick={() => setOpenCadastrar(true)}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
            >
              Cadastrar Aluno
            </Link>
            <ModalCadastrarAluno
              atualizarLista={buscarAlunos}
              open={openCadastrar}
              onClose={() => setOpenCadastrar(false)}
            />
          </div>
          <div className="md:border-2 md:border-gray-400 md:rounded-2xl md:p-4 md:flex md:flex-col gap-2">
            {!isLoading && alunos.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhuma Categoria foi encontrado!
              </span>
            )}
            <div className="text-amber-50 md:grid md:grid-cols-7 md:w-full md:container md:px-4 md:gap-4 hidden">
              <h3>Nome:</h3>
              <h3>Telefone:</h3>
              <h3>Altura:</h3>
              <h3>Peso:</h3>
              <h3>IMC:</h3>
              <h3>Categoria:</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 w-[80vw] md:w-screen md:container">
              {alunos.map((aluno) => (
                <CardAluno
                  atualizarLista={buscarAlunos}
                  key={aluno.id}
                  aluno={aluno}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaAlunos;

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Aluno from "../../../models/Aluno";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormAluno() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [categorias, setCategorias] = useState<Categoria[]>([]);

  const [categoria, setCategoria] = useState<Categoria>({
    id: 0,
    descricao: "",
  });

  const [aluno, setAluno] = useState<Aluno>({} as Aluno);

  const { id } = useParams<{ id: string }>();

  async function buscarAlunoPorId(id: string) {
    try {
      await buscar(`/alunos/${id}`, setAluno);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      }
    }
  }

  async function buscarCategoriaPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      }
    }
  }

  async function buscarCategoria() {
    try {
      await buscar("/categorias", setCategorias);
    } catch (error: any) {
      if (error.toString().includes("401")) {
        // handleLogout();
      }
    }
  }

  useEffect(() => {
    buscarCategoria();

    if (id !== undefined) {
      buscarAlunoPorId(id);
    }
  }, [id]);

  useEffect(() => {
    setAluno({
      ...aluno,
      categoria: categoria,
    });
  }, [categoria]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setAluno({
      ...aluno,
      [e.target.name]: e.target.value,
      categoria: categoria,
    });
  }

  function retornar() {
    navigate("/alunos");
  }

  async function gerarNovoAluno(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/alunos`, aluno, setAluno);

        ToastAlerta("Aluno atualizado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          // handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar o Aluno", "erro");
        }
      }
    } else {
      try {
        await cadastrar(`/alunos`, aluno, setAluno);

        ToastAlerta("Aluno cadastrado com sucesso", "sucesso");
      } catch (error: any) {
        if (error.toString().includes("401")) {
          // handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar o Aluno", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  const carregandoCategoria = categoria.descricao === "";

  return (
    <div className="container flex flex-col mx-auto items-center">
      <h1 className="text-4xl text-center my-8">
        {id !== undefined ? "Editar Aluno" : "Cadastrar Aluno"}
      </h1>

      <form className="flex flex-col w-1/2 gap-4" onSubmit={gerarNovoAluno}>
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome do Aluno</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={aluno.nome}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={aluno.telefone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="peso">Peso</label>
          <input
            type="number"
            placeholder="Peso"
            name="peso"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={aluno.peso}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="altura">Altura</label>
          <input
            type="number"
            placeholder="Altura"
            name="altura"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={aluno.altura}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria do Aluno</p>
          <select
            name="tema"
            id="tema"
            className="border p-2 border-slate-800 rounded"
            onChange={(e) => buscarCategoriaPorId(e.currentTarget.value)}
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>

            {categorias.map((categoria) => (
              <>
                <option value={categoria.id}>{categoria.descricao}</option>
              </>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="rounded disabled:bg-slate-200 bg-indigo-400 hover:bg-indigo-800
                               text-white font-bold w-1/2 mx-auto py-2 flex justify-center"
          disabled={carregandoCategoria}
        >
          {isLoading ? (
            <ClipLoader color="#ffffff" size={24} />
          ) : (
            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
          )}
        </button>
      </form>
    </div>
  );
}

export default FormAluno;

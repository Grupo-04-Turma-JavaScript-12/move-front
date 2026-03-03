import { type ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface FormCategoriaProps {
  onSuccess?: () => void;
  id?: string;
}

function FormCategoria({ onSuccess, id }: FormCategoriaProps) {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function buscarPorId(id: string) {
    try {
      setIsLoading(true);
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      ToastAlerta("Categoria não encontrada!", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({
      ...categoria,
      [e.target.name]: e.target.value,
    });
  }

  function retornar() {
    navigate("/categorias");
  }

  async function gerarNovoCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
        onSuccess?.();
      } catch (error: any) {
        if (error.toString().includes("401")) {
          ToastAlerta("Erro ao atualizar a Categoria.", "erro");
        } else {
          ToastAlerta("Erro ao atualizar a Categoria.", "erro");
        }
      }
    } else {
      try {
        await cadastrar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
        onSuccess?.();
      } catch (error: any) {
        if (error.toString().includes("401")) {
          ToastAlerta("Erro ao atualizar a Categoria.", "erro");
        } else {
          ToastAlerta("Erro ao salvar a categoria.", "erro");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }
  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-2xl w-[80vw] py-4 md:w-[40vw] md:px-8">
      <h1 className="text-3xl text-center my-8 md:text-4xl">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>

      <form
        className="flex flex-col gap-4 w-[70vw] md:w-full"
        onSubmit={gerarNovoCategoria}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="descricao">Descrição da categoria</label>
          <input
            type="text"
            placeholder="Descrição"
            name="descricao"
            required
            className="border-2 border-slate-700 rounded p-2"
            value={categoria.descricao}
            onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
          />
        </div>
        <div className="flex gap-8">
          <button
            type="submit"
            disabled={isLoading}
            className="rounded disabled:bg-slate-200 bg-blue-500 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center transition-all duration-300"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={22} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
          <button
            type="submit"
            onClick={retornar}
            className="rounded disabled:bg-slate-200 bg-red-500 text-white hover:bg-red-800 font-bold w-1/2 mx-auto py-2 flex justify-center transition-all duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormCategoria;

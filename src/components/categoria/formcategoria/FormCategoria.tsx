/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState, type ChangeEvent, } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
// import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { atualizar, buscar, cadastrar } from "../../../service/Service";

function FormCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();

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

    try {
      if (id !== undefined) {
        await atualizar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      } else {
        await cadastrar("/categorias", categoria, setCategoria);
        ToastAlerta("Categoria cadastrada com sucesso!", "sucesso");
      }
      retornar();
    } catch {
      ToastAlerta("Erro ao salvar a categoria.", "erro");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
        </h1>

        <form className="flex flex-col gap-6" onSubmit={gerarNovoCategoria}>
          
          <div className="flex flex-col gap-2">
            <label
              htmlFor="descricao"
              className="text-sm font-medium text-gray-700"
            >
              Descrição da Categoria
            </label>

            <input
              type="text"
              id="descricao"
              name="descricao"
              placeholder="Ex: Medicamentos, Higiene, Vitaminas..."
              className="border border-gray-300 rounded-lg px-4 py-2
                         focus:outline-none focus:ring-2 focus:ring-green-500"
              value={categoria.descricao || ""}
              onChange={atualizarEstado}
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-green-600 hover:bg-green-700 text-white
                       rounded-lg py-3 font-semibold transition-colors
                       flex justify-center items-center"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={22} />
            ) : (
              <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormCategoria;
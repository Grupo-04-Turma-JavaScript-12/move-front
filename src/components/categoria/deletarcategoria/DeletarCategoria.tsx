/* eslint-disable react-hooks/immutability */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import { buscar, deletar } from "../../../service/Service";

function DeletarCategoria() {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const {id} = useParams<{id: string}>();


  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
    } catch {
      ToastAlerta("Categoria não encontrada!", "erro");
      retornar();
    }
  }
    useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

    async function deletarCategoria() {
    setIsLoading(true);

    try {
      
      await deletar(`/categorias/${id}`);
      ToastAlerta("Categoria deletada com sucesso!", "sucesso");
      navigate("/categorias");
    } catch {
      ToastAlerta("Erro ao deletar a categoria.", "erro");
    }
  }
    function retornar() {
    navigate("/categorias");
  }
  

  return (
        <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          Excluir Categoria
        </h1>

        <p className="text-sm text-gray-600 text-center mb-6">
          Esta ação <span className="font-semibold text-red-600">não poderá ser desfeita</span>.
          Tem certeza que deseja excluir a categoria abaixo?
        </p>

        {/* Card resumo */}
        <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
          <p className="text-gray-800 font-medium">
            {categoria.descricao}
          </p>
        </div>

        {/* Ações */}
        <div className="flex gap-4">
          <button
            onClick={retornar}
            className="w-full py-3 rounded-lg border border-gray-300
                       text-gray-700 font-medium hover:bg-gray-100 transition-colors"
          >
            Cancelar
          </button>

          <button
            onClick={deletarCategoria}
            disabled={isLoading}
            className="w-full py-3 rounded-lg bg-red-600 text-white
                       font-semibold hover:bg-red-700 transition-colors
                       flex justify-center items-center"
          >
            {isLoading ? (
              <ClipLoader color="#ffffff" size={22} />
            ) : (
              "Excluir"
            )}
          </button>
        </div>
      </div>
    </div>
  );
  }
  
export default DeletarCategoria;

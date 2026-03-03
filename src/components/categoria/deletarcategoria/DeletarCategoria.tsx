import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface DeletarCategoriaProps {
  onSuccess?: () => void;
  id: string;
}

function DeletarCategoria({ onSuccess, id }: DeletarCategoriaProps) {
  const navigate = useNavigate();

  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function retornar() {
    navigate("/categorias");
  }

  function cancel() {
    retornar();
    onSuccess?.();
  }

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categorias/${id}`, setCategoria);
      console.log(categoria);
    } catch {
      ToastAlerta("Categoria não encontrada!", "erro");
      retornar();
    }
  }
  useEffect(() => {
    console.log(id);
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  async function deletarCategoria() {
    setIsLoading(true);
    console.log(id);
    try {
      await deletar(`/categorias/${id}`);
      console.log(id);
      ToastAlerta("Categoria deletada com sucesso!", "sucesso");
      onSuccess?.();
    } catch {
      ToastAlerta("Erro ao deletar a categoria.", "erro");
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-2xl w-[80vw] py-4 md:w-[40vw] md:px-8">
      <h1 className="text-4xl text-center my-8">Remover Categoria</h1>

      <div className="flex flex-col items-center gap-4 w-[70vw] md:w-full">
        <p className="">Deseja deletar a categoria: {categoria.descricao}?</p>
        <div className="flex gap-8">
          <button
            onClick={cancel}
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300"
          >
            Não
          </button>
          <button
            onClick={deletarCategoria}
            disabled={isLoading}
            className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300"
          >
            {isLoading ? <ClipLoader color="#ffffff" size={22} /> : "Excluir"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarCategoria;

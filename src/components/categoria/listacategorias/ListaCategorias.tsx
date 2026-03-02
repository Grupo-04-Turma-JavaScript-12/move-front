/* eslint-disable react-hooks/immutability */
 
/* eslint-disable @typescript-eslint/no-unused-vars */
 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
// import { buscar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";
import { buscar } from "../../../service/Service";

function ListaCategorias() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      
      await buscar("/categorias", setCategorias);
      // ToastAlerta("Categorias carregadas com sucesso", "info");
    } catch {
      ToastAlerta("Erro ao carregar categorias", "erro");
    }
  }

  return (
    <>
      <div className="flex justify-center w-full my-8">
        {isLoading && <SyncLoader color="gray" size={16} />}
      </div>
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Categoria foi encontrado!
            </span>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaCategorias;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../service/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";
import CardCategoria from "../cardcategoria/CardCategoria";
import ModalCadastrarCategoria from "../modalcategoria/ModalCadastrarCategoria";

function ListaCategorias() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const location = useLocation();
  const [openCadastrar, setOpenCadastrar] = useState(false);

  useEffect(() => {
    buscarCategorias();
  }, []);

  async function buscarCategorias() {
    try {
      setIsLoading(true);
      await buscar("/categorias", setCategorias);
      ToastAlerta("Categorias carregadas com sucesso", "info");
    } catch (error: any) {
      if (error.toString().includes("401")) {
        ToastAlerta("Erro ao carregar categorias", "erro");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <div className="flex justify-center w-full my-8">
        {isLoading && <SyncLoader color="gray" size={16} />}
      </div>
      <section>
        <div className="flex flex-col gap-8 items-center bg-black py-10">
          <div className="flex flex-col gap-8 md:container md:flex-row md:justify-between">
            <h1 className="text-amber-50 text-3xl">Lista de Categorias</h1>
            <Link
              to={`/cadastrarcategoria`}
              state={{ backgroundLocation: location }}
              onClick={() => setOpenCadastrar(true)}
              className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
            >
              Nova Categoria
            </Link>
            <ModalCadastrarCategoria
              open={openCadastrar}
              onClose={() => setOpenCadastrar(false)}
              atualizarLista={buscarCategorias}
            />

            {/* <ModalCadastrarCategoria {...categoria} /> */}
          </div>
          <div className="md:border-2 md:border-gray-400 md:rounded-2xl md:p-4 md:flex md:flex-col gap-2">
            {!isLoading && categorias.length === 0 && (
              <span className="text-3xl text-center my-8">
                Nenhuma Categoria foi encontrado!
              </span>
            )}
            <div className="text-amber-50 md:grid md:grid-cols-6 md:w-full md:container md:px-4 md:gap-4 hidden">
              <h3>Descrição:</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 w-[80vw] md:w-screen md:container">
              {categorias.map((categoria) => (
                <CardCategoria
                  atualizarLista={buscarCategorias}
                  key={categoria.id}
                  categoria={categoria}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaCategorias;

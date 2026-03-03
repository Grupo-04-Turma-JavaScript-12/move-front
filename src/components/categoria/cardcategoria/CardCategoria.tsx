import { PencilIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import ModalCadastrarCategoria from "../modalcategoria/ModalCadastrarCategoria";
import ModalDeletarCategoria from "../modalcategoria/ModalDeletarCategoria";

interface CardCategoriaProps {
  categoria: Categoria;
  atualizarLista: () => void;
}

function CardCategoria({ categoria, atualizarLista }: CardCategoriaProps) {
  const location = useLocation();
  const [openEditar, setOpenEditar] = useState(false);
  return (
    <article className="flex flex-col gap-4 border border-2gray-400 text-amber-50 rounded-2xl p-4 md:grid md:grid-cols-2 md:py-2 md:items-center">
      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Descrição:</h3>
          <p>{categoria.descricao}</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 md:gap-2 md:justify-end">
        <Link
          to={`/editarcategoria/${categoria.id}`}
          state={{ backgroundLocation: location }}
          onClick={() => setOpenEditar(true)}
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center"
        >
          <PencilIcon size={24} color="#ffffff" />
        </Link>
        <ModalCadastrarCategoria
          open={openEditar}
          onClose={() => setOpenEditar(false)}
          atualizarLista={atualizarLista}
          id={String(categoria.id)} // passa o id para editar
        />

        <ModalDeletarCategoria
          atualizarLista={atualizarLista}
          id={`${categoria.id}`}
        />
      </div>
    </article>
  );
}

export default CardCategoria;

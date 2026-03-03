import { PencilIcon } from "@phosphor-icons/react";
import ModalDeletarCategoria from "../modalcategoria/ModalDeletarCategoria";

function CardCategoria() {
  return (
    <article className="flex flex-col gap-4 border border-2gray-400 text-amber-50 rounded-2xl p-4 md:grid md:grid-cols-2 md:py-2 md:items-center">
      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Descrição:</h3>
          <p>Nome Categoria</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 md:gap-2 md:justify-end">
        <button className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center">
          <PencilIcon size={24} color="#ffffff" />
        </button>
        <ModalDeletarCategoria />
      </div>
    </article>
  );
}

export default CardCategoria;

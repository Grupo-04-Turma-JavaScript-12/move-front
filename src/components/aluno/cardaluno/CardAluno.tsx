import { PencilIcon } from "@phosphor-icons/react";
import ModalDeletarAluno from "../modalaluno/ModalDeletarAluno";

function CardAluno() {
  return (
    <article className="flex flex-col gap-4 border border-2gray-400 text-amber-50 rounded-2xl p-4 md:grid md:grid-cols-6 md:py-2 md:items-center">
      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Nome:</h3>
          <p>Carmen Lucia</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Telefone:</h3>
          <p>(16) 3537-7333</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Altura:</h3>
          <p className="overflow-hidden">1,80</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Peso:</h3>
          <p className="overflow-hidden">90</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <h3 className="md:hidden">Categoria:</h3>
          <p className="overflow-hidden">Musculação</p>
        </div>
      </div>

      <div className="flex justify-center gap-4 md:gap-2 md:items-center">
        <button className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center">
          <PencilIcon size={24} color="#ffffff" />
        </button>
        <ModalDeletarAluno />
      </div>
    </article>
  );
}

export default CardAluno;

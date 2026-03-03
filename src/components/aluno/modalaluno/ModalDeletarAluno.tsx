import { TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import DeletarAluno from "../deletaraluno/DeletarAluno";

interface ModalDeletarAlunoProps {
  id: string;
  atualizarLista: () => void;
}

function ModalDeletarAluno({ id, atualizarLista }: ModalDeletarAlunoProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        to={`/alunos/${id}`}
        state={{ backgroundLocation: location }}
        onClick={() => setOpen(true)}
        className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-red-500 hover:cursor-pointer transition-all duration-300"
      >
        <TrashIcon size={24} color="#000000" />
      </Link>

      <Popup
        modal
        open={open}
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <DeletarAluno
          id={id}
          onSuccess={() => {
            setOpen(false);
            atualizarLista();
          }}
        />
      </Popup>
    </>
  );
}

export default ModalDeletarAluno;

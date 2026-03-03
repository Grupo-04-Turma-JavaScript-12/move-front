import { TrashIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Popup from "reactjs-popup";
import DeletarCategoria from "../deletarcategoria/DeletarCategoria";

interface ModalDeletarCategoriaProps {
  id: string;
}

function ModalDeletarCategoria({ id }: ModalDeletarCategoriaProps) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <>
      <Link
        to={`/categorias/${id}`}
        state={{ backgroundLocation: location }}
        onClick={() => setOpen(true)}
        className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-red-500 hover:cursor-pointer transition-all duration-300"
      >
        <TrashIcon size={24} color="#000000" />
      </Link>

      <Popup
        open={open}
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <DeletarCategoria
          id={id}
          onSuccess={() => {
            setOpen(false);
          }}
        />
      </Popup>
    </>
  );
}

export default ModalDeletarCategoria;

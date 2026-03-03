import { TrashIcon } from "@phosphor-icons/react";
import Popup from "reactjs-popup";
import DeletarCategoria from "../deletarcategoria/DeletarCategoria";

function ModalDeletarCategoria() {
  return (
    <>
      <Popup
        trigger={
          <button className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-red-500 hover:cursor-pointer transition-all duration-300">
            <TrashIcon size={24} color="#000000" />
          </button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <DeletarCategoria />
      </Popup>
    </>
  );
}

export default ModalDeletarCategoria;

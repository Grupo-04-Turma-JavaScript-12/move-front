import { TrashIcon } from "@phosphor-icons/react";
import Popup from "reactjs-popup";
import DeletarAluno from "../deletaraluno/DeletarAluno";

function ModalDeletarAluno() {
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
        <DeletarAluno />
      </Popup>
    </>
  );
}

export default ModalDeletarAluno;

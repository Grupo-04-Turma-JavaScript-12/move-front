import Popup from "reactjs-popup";
import FormCategoria from "../formcategoria/FormCategoria";

interface ModalProps {
  atualizarLista: () => void;
  id?: string;
  open: boolean;
  onClose: () => void;
}

function ModalCadastrarCategoria({
  atualizarLista,
  id,
  open,
  onClose,
}: ModalProps) {
  return (
    <>
      <Popup
        open={open}
        onClose={onClose}
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormCategoria
          id={id}
          onSuccess={() => {
            onClose();
            atualizarLista();
          }}
        />
      </Popup>
    </>
  );
}

export default ModalCadastrarCategoria;

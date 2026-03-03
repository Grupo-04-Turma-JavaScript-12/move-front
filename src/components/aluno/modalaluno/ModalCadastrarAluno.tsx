import Popup from "reactjs-popup";
import FormAluno from "../formaluno/FormAluno";

interface ModalProps {
  id?: string;
  open: boolean;
  onClose: () => void;
  atualizarLista: () => void;
}

function ModalCadastrarAluno({
  id,
  open,
  onClose,
  atualizarLista,
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
        <FormAluno
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

export default ModalCadastrarAluno;

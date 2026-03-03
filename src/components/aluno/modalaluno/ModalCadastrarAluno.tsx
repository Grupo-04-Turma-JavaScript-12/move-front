import Popup from "reactjs-popup";
import FormAluno from "../formaluno/FormAluno";

function ModalCadastrarAluno() {
  return (
    <>
      <Popup
        trigger={
          <button className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-800 hover:cursor-pointer transition-all duration-300 flex items-center justify-center">
            Cadastrar Aluno
          </button>
        }
        modal
        contentStyle={{
          borderRadius: "1rem",
          paddingBottom: "2rem",
        }}
      >
        <FormAluno />
      </Popup>
    </>
  );
}

export default ModalCadastrarAluno;

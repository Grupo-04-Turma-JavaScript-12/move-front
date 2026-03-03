import CardAluno from "../cardaluno/CardAluno";
import ModalCadastrarAluno from "../modalaluno/ModalCadastrarAluno";

function ListaAlunos() {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 items-center bg-black py-10">
          <div className="flex flex-col gap-8 md:container md:flex-row md:justify-between">
            <h1 className="text-amber-50 text-3xl">Lista de Alunos</h1>
            <ModalCadastrarAluno />
          </div>
          <div className="md:border-2 md:border-gray-400 md:rounded-2xl md:p-4 md:flex md:flex-col gap-2">
            <div className="text-amber-50 md:grid md:grid-cols-6 md:w-full md:container md:px-4 md:gap-4 hidden">
              <h3>Nome:</h3>
              <h3>Telefone:</h3>
              <h3>Altura:</h3>
              <h3>Peso:</h3>
              <h3>Categoria:</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 w-[80vw] md:w-screen md:container">
              <CardAluno />
              <CardAluno />
              <CardAluno />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaAlunos;

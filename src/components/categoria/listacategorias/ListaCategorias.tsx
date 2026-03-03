import CardCategoria from "../cardcategoria/CardCategoria";
import ModalCadastrarCategoria from "../modalcategoria/ModalCadastrarCategoria";

function ListaCategorias() {
  return (
    <>
      <section>
        <div className="flex flex-col gap-8 items-center bg-black py-10">
          <div className="flex flex-col gap-8 md:container md:flex-row md:justify-between">
            <h1 className="text-amber-50 text-3xl">Lista de Categorias</h1>
            <ModalCadastrarCategoria />
          </div>
          <div className="md:border-2 md:border-gray-400 md:rounded-2xl md:p-4 md:flex md:flex-col gap-2">
            <div className="text-amber-50 md:grid md:grid-cols-6 md:w-full md:container md:px-4 md:gap-4 hidden">
              <h3>Descrição:</h3>
            </div>
            <div className="grid grid-cols-1 gap-4 w-[80vw] md:w-screen md:container">
              <CardCategoria />
              <CardCategoria />
              <CardCategoria />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ListaCategorias;

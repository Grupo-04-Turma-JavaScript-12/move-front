function DeletarAluno() {
  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-2xl w-[80vw] py-4 md:w-[40vw] md:px-8">
      <h1 className="text-4xl text-center my-8">Remover Aluno</h1>

      <div className="flex flex-col items-center gap-4 w-[70vw] md:w-full">
        <p className="">Deseja deletar o aluno?</p>
        <div className="flex gap-8">
          <button className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300">
            Não
          </button>
          <button className="px-6 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300">
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarAluno;

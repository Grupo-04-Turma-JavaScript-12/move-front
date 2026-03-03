function FormAluno() {
  return (
    <div className="container flex flex-col mx-auto items-center bg-white rounded-2xl w-[80vw] py-4 md:w-[40vw] md:px-8">
      <h1 className="text-3xl text-center my-8 md:text-4xl">Cadastrar Aluno</h1>

      <form className="flex flex-col gap-4 w-[70vw] md:w-full">
        <div className="flex flex-col gap-2">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            placeholder="Nome"
            name="nome"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="text"
            placeholder="Telefone"
            name="telefone"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="altura">Altura</label>
          <input
            type="text"
            placeholder="Altura"
            name="altura"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="peso">Peso</label>
          <input
            type="text"
            placeholder="Peso"
            name="peso"
            required
            className="border-2 border-slate-700 rounded p-2"
          />
        </div>

        <div className="flex flex-col gap-2">
          <p>Categoria</p>
          <select
            name="categoria"
            id="categoria"
            className="border p-2 border-slate-800 rounded"
          >
            <option value="" selected disabled>
              Selecione uma Categoria
            </option>

            <option value="musculação">musculação</option>
            <option value="aerobica">aerobica</option>
          </select>
        </div>

        <div className="flex gap-8">
          <button
            type="submit"
            className="rounded disabled:bg-slate-200 bg-blue-500 hover:bg-indigo-800 text-white font-bold w-1/2 mx-auto py-2 flex justify-center transition-all duration-300"
          >
            Cadastrar
          </button>
          <button
            type="submit"
            className="rounded disabled:bg-slate-200 bg-red-500 text-white hover:bg-red-800 font-bold w-1/2 mx-auto py-2 flex justify-center transition-all duration-300"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAluno;

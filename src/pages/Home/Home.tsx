import ImgHome from "../../assets/home-move2.png";

function Home() {
  return (
    <section className="bg-black py-4">
      <div className="container mx-auto text-amber-50 flex flex-col items-center gap-10 py-4 md:grid grid-cols-2 md:py-10">
        <div className="flex flex-col items-center text-center gap-8 md:text-left md:gap-12">
          <h1 className="text-3xl md:text-7xl">
            Transforme seu movimento em evolução.
          </h1>
          <p className="px-4 md:px-0 md:text-2xl">
            Gerencie seus alunos, categorias e treinos de forma fácil e
            eficiente.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600 hover:cursor-pointer transition-all duration-300">
              Comtrate agora
            </button>
            <button className="px-9 py-2 rounded-xl bg-white text-black font-semibold hover:bg-gray-300 hover:cursor-pointer transition-all duration-300">
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="w-1/3 md:w-full">
          <img src={ImgHome} alt="Imagem home" />
        </div>
      </div>
    </section>
  );
}

export default Home;

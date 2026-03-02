import { Link } from "react-router-dom";
import logo from "../../assets/home-move.png";

export default function Home() {
  return (
    <div className="px-8 py-16">


      <section className="grid md:grid-cols-2 items-center gap-12 mb-24">

        <div>
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Transforme seu movimento em evolução.
          </h1>

          <p className="text-lg mb-8">
            Gerencie seus alunos e categorias de forma
            simples e eficiente.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 border rounded-lg">
              Comece Agora
            </button>

            <button className="px-6 py-3 border rounded-lg">
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-lg flex items-center justify-center">
                   <Link to="/">
          <img
            src={logo}
            alt="Move+"
            className="max-w-full"
          />
        </Link>
          </div>
        </div>

      </section>

      <section>
        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Gestão de Alunos
            </h3>
            <p>
              Cadastre, edite e acompanhe seus alunos.
            </p>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Gestão de Categorias
            </h3>
            <p>
              Organize os treinos por categoria.
            </p>
          </div>

          <div className="border rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">
              Personal Trainers
            </h3>
            <p>
              Gerencie os profissionais da academia.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
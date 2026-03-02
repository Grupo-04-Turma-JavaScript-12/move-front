import { Link } from "react-router-dom";
import home from "../../assets/home-move.png";

export default function Home() {
  return (
    <div className="min-h-screen px-8 py-16">
      <section className="grid md:grid-cols-2 items-center gap-12 mb-20">
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Transforme seu movimento em evolução.
          </h1>

          <p className="text-lg mb-8">
            O Move+ é um sistema de gestão desenvolvido para organizar alunos e
            categorias de treino com eficiência e praticidade.
          </p>

          <div className="flex gap-4">
            <button className="px-6 py-3 border rounded transition duration-300 hover:scale-105">
              Comece Agora
            </button>

            <button className="px-6 py-3 border rounded transition duration-300 hover:scale-105">
              Saiba Mais
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-80 h-80 border rounded flex items-center justify-center">
            <Link to="/">
              <img src={home} alt="Move+" className="w-50" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Funcionalidades
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Gestão de Alunos</h3>
            <p>Cadastro, atualização e exclusão de alunos.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Gestão de Categorias</h3>
            <p>Organização dos treinos por categoria.</p>
          </div>

          <div className="border p-6 rounded">
            <h3 className="text-lg font-semibold mb-4">Cálculo de IMC</h3>
            <p>Método especial para cálculo automático.</p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Por que usar o Move+?
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">
              Organização Centralizada
            </h4>
            <p>Todos os dados reunidos em um único sistema.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">
              Agilidade no Atendimento
            </h4>
            <p>Consulta rápida de alunos e categorias.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Controle Inteligente</h4>
            <p>Melhor acompanhamento das informações.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Sistema Escalável</h4>
            <p>Estrutura preparada para evoluir.</p>
          </div>
        </div>
      </section>

      <section className="mb-20 text-center">
        <h2 className="text-2xl font-semibold mb-10">Como funciona</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold mb-3">1</div>
            <h4 className="font-semibold mb-2">Cadastre</h4>
            <p>Registre alunos e categorias.</p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-3">2</div>
            <h4 className="font-semibold mb-2">Organize</h4>
            <p>Estruture os dados no sistema.</p>
          </div>

          <div>
            <div className="text-3xl font-bold mb-3">3</div>
            <h4 className="font-semibold mb-2">Gerencie</h4>
            <p>Tenha controle completo.</p>
          </div>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">
          Comece a organizar sua academia hoje.
        </h2>

        <button className="px-8 py-4 border rounded">Acessar Sistema</button>
      </section>
    </div>
  );
}

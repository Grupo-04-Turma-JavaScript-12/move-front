import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-indigo-900 text-white mt-20">

      <div className="w-full px-8 py-10 grid md:grid-cols-3 gap-8">

        {/* Marca */}
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Move+
          </h2>
          <p className="text-sm">
            Sistema de gestão para academias.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Navegação
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/alunos" className="hover:underline">
                Alunos
              </Link>
            </li>
            <li>
              <Link to="/categorias" className="hover:underline">
                Categorias
              </Link>
            </li>
          </ul>
        </div>

        {/* Créditos */}
        <div>
          <h3 className="text-lg font-medium mb-3">
            Projeto
          </h3>
          <p className="text-sm">
            Projeto Integrador — Generation Brasil
          </p>
          <p className="text-sm mt-1">
            Desenvolvido por Alberto Duran, André Cesar, Bruna Melo, <p></p>
            Giovanna Roberta, Jacqueline Marques e Renato Sales.
          </p>
        </div>

      </div>

      <div className="text-center py-4 text-sm border-t border-indigo-800">
        Move+ © 2026
      </div>

    </footer>
  );
}

export default Footer;
import { Link } from "react-router-dom";
import ImgLogo from "../../assets/logo-movee2.png";

function Footer() {
  return (
    <footer className="bg-black text-amber-50 border-2 border-t-gray-400">
      <div className="container mx-auto flex flex-col gap-8 py-10 px-4 md:grid md:grid-cols-3 md:px-0">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-xl font-semibold">Move+</h2>
            <p className="text-sm">Sistema de gestão para academias.</p>
          </div>
          <div className="hidden md:flex md:justify-center">
            <img className="h-12" src={ImgLogo} alt="Imagem logo" />
          </div>
        </div>

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-lg font-medium">Navegação</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link to="/home" className="hover:underline">
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

        <div className="flex flex-col gap-2 text-center">
          <h3 className="text-lg font-medium">Projeto</h3>
          <p className="text-sm">Equipe de Desenvolvimento: </p>
          <ul className="text-sm">
            <li>Alberto Duran</li>
            <li>André Cesar</li>
            <li>Bruna Melo</li>
            <li>Giovanna Roberta</li>
            <li>Jacqueline Marques</li>
            <li>Renato Sales</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 text-sm border-t border-t-gray-400">
        Move+ © 2026
      </div>
    </footer>
  );
}

export default Footer;

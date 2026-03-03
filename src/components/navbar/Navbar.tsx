import { Link } from "react-router-dom";
import ImgLogo from "../../assets/logo-movee2.png";

function Navbar() {
  return (
    <header className="bg-black py-3 border-b-2 border-b-gray-400">
      <nav className="container mx-auto flex items-center justify-around  md:justify-between">
        <div>
          <Link to="/">
            <img src={ImgLogo} alt="Imagem logo" className="h-6" />
          </Link>
        </div>

        <ul className="text-amber-50 flex gap-4 border-2 rounded-full py-2 px-4 border-t-gray-400 md:gap-10 md:px-8">
          <Link to="/home">
            <li className="hover:underline hover:cursor-pointer">Home</li>
          </Link>
          <Link to="/alunos">
            <li className="hover:underline hover:cursor-pointer">Alunos</li>
          </Link>
          <Link to="/categorias">
            <li className="hover:underline hover:cursor-pointer">Categorias</li>
          </Link>
        </ul>
        <div className="hidden md:block">
          <button className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-white hover:text-blue-600 hover:cursor-pointer transition-all duration-300">
            Contrate agora
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

import { Link } from "react-router-dom";
import logo from "../../assets/logo-move.png";

function Navbar() {
  return (
    <div className="w-full bg-indigo-900 text-white py-2">
      <div className="w-full flex justify-between items-center px-8">
        
        <Link to="/">
          <img
            src={logo}
            alt="Move+"
            className="w-50"
          />
        </Link>

        <div className="flex gap-6 text-lg">
          <Link to="/alunos" className="hover:underline">
            Alunos
          </Link>

          <Link to="/categorias" className="hover:underline">
            Categorias
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
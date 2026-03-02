import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div>
      <header>Categoria</header>
      <p>{categoria.descricao}</p>
      <div>
        <Link to={`/editarcategoria/${categoria.id}`}>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`}>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}
export default CardCategoria;

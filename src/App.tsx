import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ListaAlunos from "./components/aluno/listaalunos/ListaAlunos";
import ModalCadastrarAluno from "./components/aluno/modalaluno/ModalCadastrarAluno";
import ModalDeletarAluno from "./components/aluno/modalaluno/ModalDeletarAluno";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const location = useLocation();
  // Verifica se existe um backgroundLocation no state da navegação
  const state = location.state;
  const backgroundLocation = state && state.backgroundLocation;

  return (
    <>
      <Navbar />
      <div>
        <Routes location={backgroundLocation || location}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/alunos" element={<ListaAlunos />} />
          <Route path="/categorias" element={<ListaCategorias />} />
        </Routes>

        {backgroundLocation && (
          <Routes>
            <Route
              path="/cadastrarcategoria"
              element={<ModalCadastrarAluno />}
            />
            <Route
              path="/editarcategoria/:id"
              element={<ModalCadastrarAluno />}
            />
            <Route path="/categorias/:id" element={<ModalDeletarAluno />} />
          </Routes>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

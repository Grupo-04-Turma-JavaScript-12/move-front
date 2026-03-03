import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import ListaAlunos from "./components/aluno/listaalunos/ListaAlunos";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  const location = useLocation();
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
            <Route path="/cadastrarcategoria" />
            <Route path="/editarcategoria/:id" />
            <Route path="/categorias/:id" />
            <Route path="/cadastraraluno" />
            <Route path="/editaraluno/:id" />
            <Route path="/alunos/:id" />
          </Routes>
        )}
      </div>
      <Footer />
    </>
  );
}

export default App;

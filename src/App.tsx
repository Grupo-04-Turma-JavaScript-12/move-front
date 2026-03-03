import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListaAlunos from "./components/aluno/listaalunos/ListaAlunos";
import ListaCategorias from "./components/categoria/listacategorias/ListaCategorias";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/alunos" element={<ListaAlunos />} />
            <Route path="/categorias" element={<ListaCategorias />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

import { Link } from "react-router-dom";
import type Aluno from "../../../models/Aluno";

interface CardAlunosProps {
  aluno: Aluno;
}

const aluno = {
  id: 1,
  nome: "João Silva",
  telefone: "(11) 99999-9999",
  altura: 1.75,
  peso: 70,
};

const imc = Number((aluno.peso / (aluno.altura * aluno.altura)).toFixed(1));

const getImcStatus = (imc: number) => {
  if (imc < 18.5) return { label: "Abaixo do peso", color: "text-blue-400" };
  if (imc < 25) return { label: "Peso normal", color: "text-green-400" };
  if (imc < 30) return { label: "Sobrepeso", color: "text-yellow-400" };
  return { label: "Obesidade", color: "text-red-400" };
};

const imcStatus = getImcStatus(imc);

function CardAluno({ aluno }: CardAlunosProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="bg-gray-800 rounded-2xl shadow-xl w-80 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl font-bold text-indigo-600 mb-3">
            {aluno.nome.charAt(0)}
          </div>
          <h2 className="text-white text-xl font-bold">{aluno.nome}</h2>
          <span className="text-indigo-200 text-sm mt-1">ID #{aluno.id}</span>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          {/* Telefone */}
          <div className="flex items-center gap-3 text-gray-300">
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-sm">📞</span>
            </div>
            <div>
              <p className="text-xs text-gray-500">Telefone</p>
              <p className="text-sm font-medium">{aluno.telefone}</p>
            </div>
          </div>

          {/* Altura & Peso */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-700 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Altura</p>
              <p className="text-white font-bold text-lg">{aluno.altura}m</p>
            </div>
            <div className="bg-gray-700 rounded-xl p-3 text-center">
              <p className="text-xs text-gray-400 mb-1">Peso</p>
              <p className="text-white font-bold text-lg">{aluno.peso}kg</p>
            </div>
          </div>

          {/* IMC */}
          <div className="bg-gray-700 rounded-xl p-3 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400">IMC</p>
              <p className="text-white font-bold text-lg">{imc}</p>
            </div>
            <span className={`text-sm font-medium ${imcStatus.color}`}>
              {imcStatus.label}
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex">
          <Link
            to={`/editaraluno/${aluno.id}`}
            className="w-full text-white bg-indigo-400 
                    hover:bg-indigo-800 flex items-center justify-center py-2"
          >
            <button>Editar</button>
          </Link>
          <Link
            to={`/deletaraluno/${aluno.id}`}
            className="text-white bg-red-400 
                    hover:bg-red-700 w-full flex items-center justify-center"
          >
            <button>Deletar</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardAluno;

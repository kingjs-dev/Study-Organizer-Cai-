'use client'

import { useState } from "react";
import TaskCard from "@/components/TaskCard";

const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export default function DashboardPage() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      nome: "Revisar matemática",
      materia: "Matemática",
      data: "2025-08-01",
      hora: "10:00",
      prioridade: "Alta",
      concluida: false,
    },
    // Outras tarefas de exemplo (mais pra frente será do backend)
  ]);

  return (
    <main className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Painel de Tarefas</h1>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={() => alert("Em breve: formulário de tarefa")}
        >
          + Adicionar Tarefa
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {diasDaSemana.map((dia, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-2">
            <h2 className="font-semibold text-center text-gray-700 mb-2">{dia}</h2>

            {/* Aqui vamos filtrar e exibir as tarefas do dia */}
            {tarefas.map((tarefa) => (
              <TaskCard key={tarefa.id} tarefa={tarefa} />
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
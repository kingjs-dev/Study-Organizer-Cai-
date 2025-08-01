type Tarefa = {
  id: number;
  nome: string;
  materia: string;
  data: string;
  hora: string;
  prioridade: string;
  concluida: boolean;
};

export default function TaskCard({ tarefa }: { tarefa: Tarefa }) {
  return (
    <div className="border rounded p-2 mb-2 bg-gray-50">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold">{tarefa.nome}</h3>
          <p className="text-sm text-gray-600">{tarefa.materia}</p>
          <p className="text-xs text-gray-500">{tarefa.data} às {tarefa.hora}</p>
        </div>
        <div className="text-xs">
          <span
            className={`px-2 py-1 rounded ${
              tarefa.prioridade === "Alta"
                ? "bg-red-200 text-red-800"
                : tarefa.prioridade === "Média"
                ? "bg-yellow-200 text-yellow-800"
                : "bg-green-200 text-green-800"
            }`}
          >
            {tarefa.prioridade}
          </span>
        </div>
      </div>
    </div>
  );
}
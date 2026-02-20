import { useTodos } from '../context/TodoContext';

const options = [
  { label: 'Todas', value: 'all' },
  { label: 'Concluídas', value: 'completed' },
  { label: 'Pendentes', value: 'pending' },
];

export function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="filters" role="group" aria-label="Filtrar tarefas">
      {options.map((option) => (
        <button
          key={option.value}
          className={filter === option.value ? 'active' : ''}
          onClick={() => setFilter(option.value)}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

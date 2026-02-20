import { useTodos } from '../context/TodoContext';

export function TodoSummary() {
  const { todos } = useTodos();

  const completed = todos.filter((todo) => todo.completed).length;
  const pending = todos.length - completed;

  return (
    <div className="summary">
      <p>Total: {todos.length}</p>
      <p>Concluídas: {completed}</p>
      <p>Pendentes: {pending}</p>
    </div>
  );
}

import { useTodos } from '../context/TodoContext';
import { TodoItem } from './TodoItem';

export function TodoList() {
  const { filteredTodos } = useTodos();

  if (filteredTodos.length === 0) {
    return <p className="empty">Nenhuma tarefa encontrada para este filtro.</p>;
  }

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

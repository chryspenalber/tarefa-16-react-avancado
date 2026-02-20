import { useTodos } from '../context/TodoContext';

export function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li className="todo-item">
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      </label>
      <button type="button" onClick={() => removeTodo(todo.id)} aria-label={`Remover ${todo.text}`}>
        Remover
      </button>
    </li>
  );
}

import { useState } from 'react';
import { useTodos } from '../context/TodoContext';

export function TodoForm() {
  const { addTodo } = useTodos();
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    addTodo(text);
    setText('');
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <label htmlFor="new-todo" className="sr-only">
        Nova tarefa
      </label>
      <input
        id="new-todo"
        type="text"
        placeholder="Digite uma tarefa..."
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

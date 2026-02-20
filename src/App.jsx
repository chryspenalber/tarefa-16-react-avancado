import { TodoFilters } from './components/TodoFilters';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { TodoSummary } from './components/TodoSummary';

function App() {
  return (
    <main className="container">
      <section className="card">
        <h1>Todo List</h1>
        <TodoForm />
        <TodoFilters />
        <TodoSummary />
        <TodoList />
      </section>
    </main>
  );
}

export default App;

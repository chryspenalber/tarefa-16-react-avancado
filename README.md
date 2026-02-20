# todo-react-avancado

Aplicação de lista de tarefas (Todo List) em React com Hooks, Context API, hook customizado e memoization.

## Tecnologias utilizadas

- React
- Vite
- JavaScript
- CSS (mobile first)

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas por:
  - Todas
  - Concluídas
  - Pendentes
- Persistência no `localStorage`

## Conceitos aplicados

- `useState` para estado de tarefas, filtros e formulário.
- `useEffect` dentro do hook customizado para salvar no `localStorage`.
- `Context API` + `useContext` para compartilhar estado global.
- Hook customizado `useLocalStorage`.
- `useMemo` para filtrar tarefas sem recalcular desnecessariamente.

## Estrutura sugerida no enunciado

- `TodoProvider` (contexto global)
- `TodoForm` (adição de tarefas)
- `TodoFilters` (filtros)
- `TodoList` e `TodoItem` (listagem)

## Como rodar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço informado pelo Vite (geralmente `http://localhost:5173`).

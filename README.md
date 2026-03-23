[Versão em Português](#portugues) | [English Version](#english)

---

<a id="portugues"></a>
## Versão em Português

# Lista de Tarefas - Aplicação React com Vite
**Projeto desenvolvido por Chrys Penalber**

Este projeto faz parte de um exercício prático do **curso de Engenheiro Front-End da EBAC**.

O objetivo foi **desenvolver uma aplicação web moderna de lista de tarefas utilizando React e Vite**, aplicando conceitos de hooks, Context API, hooks customizados, memoization e boas práticas de organização de código.

---

## Links

[**Repositório no GitHub**](https://github.com/chryspenalber/tarefa-16-react-avancado)

[**Deploy**](https://tarefa-16-react-avancado.vercel.app/)

---

## Objetivo

- Criar uma aplicação React moderna e bem estruturada
- Desenvolver componentes reutilizáveis (`TodoItem`, `TodoForm`, etc.)
- Aplicar conceitos fundamentais do React (hooks, estado, Context API)
- Utilizar **Vite** para build rápido e otimizado
- Organizar a estrutura de pastas com padrão escalável (components, context, hooks)
- Praticar JavaScript ES6+ com JSX e persistência no localStorage

---

## Estrutura de Arquivos

```text
projeto
|-- index.html
|-- src/
|   |-- main.jsx
|   |-- App.jsx
|   |-- styles.css
|   |-- components/
|   |   |-- TodoFilters.jsx
|   |   |-- TodoForm.jsx
|   |   |-- TodoItem.jsx
|   |   |-- TodoList.jsx
|   |   `-- TodoSummary.jsx
|   |-- context/
|   |   `-- TodoContext.jsx
|   `-- hooks/
|       |-- useInput.js
|       `-- useLocalStorage.js
```

---

## Componentes

- **App.jsx** - Componente raiz da aplicação
- **TodoForm** - Formulário para adicionar novas tarefas
- **TodoFilters** - Filtros para tarefas (todas, concluídas, pendentes)
- **TodoList** - Lista de tarefas
- **TodoItem** - Item individual da tarefa
- **TodoSummary** - Resumo das tarefas (opcional)

---

## Funcionalidades

- Adicionar nova tarefa
- Marcar tarefa como concluída
- Remover tarefa
- Filtrar tarefas por status
- Persistência no localStorage

---

## Pré-requisitos

- **Node.js** (v16 ou superior)
- **npm** ou **yarn**

---

## Instalação

```bash
npm install
```

---

## Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173/`

---

## Tecnologias Utilizadas

- **React 18** - Biblioteca para construção de interfaces
- **Vite** - Bundler e servidor de desenvolvimento ultra-rápido
- **JavaScript ES6+** - Sintaxe moderna com JSX
- **CSS** - Estilização com abordagem mobile-first

---

## Conceitos Aplicados

- `useState` para gerenciamento de estado
- `useEffect` para efeitos colaterais
- `Context API` para estado global
- Hook customizado `useLocalStorage` para persistência
- `useMemo` para otimização de performance

---

## Autor

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

---

<a id="english"></a>
## English Version

# Todo List - React Application with Vite
**Project developed by Chrys Penalber**

This project is part of a practical exercise from the **EBAC Front-End Engineering course**.

The goal was to **develop a modern todo list web application using React and Vite**, applying concepts of hooks, Context API, custom hooks, memoization, and best practices in code organization.

---

## Links

[**GitHub Repository**](https://github.com/chryspenalber/tarefa-16-react-avancado)

[**Deploy**](https://tarefa-16-react-avancado.vercel.app/)

---

## Project Goals

- Build a modern and well-structured React application
- Develop reusable components (`TodoItem`, `TodoForm`, etc.)
- Apply fundamental React concepts (hooks, state, Context API)
- Use **Vite** for fast and optimized builds
- Organize folder structure with a scalable pattern (components, context, hooks)
- Practice ES6+ JavaScript with JSX and localStorage persistence

---

## File Structure

```text
project
|-- index.html
|-- src/
|   |-- main.jsx
|   |-- App.jsx
|   |-- styles.css
|   |-- components/
|   |   |-- TodoFilters.jsx
|   |   |-- TodoForm.jsx
|   |   |-- TodoItem.jsx
|   |   |-- TodoList.jsx
|   |   `-- TodoSummary.jsx
|   |-- context/
|   |   `-- TodoContext.jsx
|   `-- hooks/
|       |-- useInput.js
|       `-- useLocalStorage.js
```

---

## Components

- **App.jsx** - Root component of the application
- **TodoForm** - Form to add new tasks
- **TodoFilters** - Filters for tasks (all, completed, pending)
- **TodoList** - Task list
- **TodoItem** - Individual task item
- **TodoSummary** - Task summary (optional)

---

## Features

- Add new task
- Mark task as completed
- Remove task
- Filter tasks by status
- Persistence in localStorage

---

## Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

---

## Installation

```bash
npm install
```

---

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

---

## Technologies Used

- **React 18** - Library for building user interfaces
- **Vite** - Ultra-fast bundler and development server
- **JavaScript ES6+** - Modern syntax with JSX
- **CSS** - Styling with mobile-first approach

---

## Applied Concepts

- `useState` for state management
- `useEffect` for side effects
- `Context API` for global state
- Custom hook `useLocalStorage` for persistence
- `useMemo` for performance optimization

---

## Author

- GitHub - [@chryspenalber](https://github.com/chryspenalber)
- LinkedIn - [Chrystiana Penalber](https://www.linkedin.com/in/chrystiana-penalber/)

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id) {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  }
  return (
    <div>
      <h1> Todo App</h1>
      <p>Total Todos: {todos.length}</p>
      <TodoInput onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
    </div>
  );
}

export default App;

import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

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
      <TodoList todos={todos} />
    </div>
  );
}

export default App;

import { useState } from "react";
import TodoInput from "./components/TodoInput";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(text) {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: text,
        completed: false,
      },
    ]);
  }
  return (
    <div>
      <h1> Todo App</h1>
      <p>Total Todos: {todos.length}</p>
      <TodoInput onAddTodo={addTodo} />
    </div>
  );
}

export default App;

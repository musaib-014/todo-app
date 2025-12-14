import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo, onToggleTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDelete={onDeleteTodo}
          onToggle={onToggleTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

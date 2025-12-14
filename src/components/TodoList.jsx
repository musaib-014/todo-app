import TodoItem from "./TodoItem";

function TodoList({ todos, onDeleteTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
}

export default TodoList;

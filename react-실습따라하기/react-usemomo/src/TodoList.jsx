export default function TodoList({ todos, theme, checked }) {
  return (
    <div className={theme}>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

import React from "react";

// Import components
import ToDo from "./ToDo";

const TodoList = ({ todos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <ToDo text={todo.text} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

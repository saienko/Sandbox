import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todo } = props;

  return (
    <div>
      <ul>
        {todo.map((todo, todoIndex) => {
          return (
            <TodoCard key={todoIndex}>
              <p>{todo}</p>
            </TodoCard>
          );
        })}
      </ul>
    </div>
  );
}

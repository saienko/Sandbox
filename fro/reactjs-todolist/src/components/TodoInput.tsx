import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo } = props;
  const [todoValue, setTodoValue] = useState("");
  return (
    <header>
      <h3>Please Input</h3>
      <input
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        placeholder="Input TODO..."
      />
      <button
        onClick={() => {
          handleAddTodo(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}

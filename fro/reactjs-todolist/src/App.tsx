import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  // dummy todo list
  const [todo, setTodo] = useState(["Get some work", "Do pretty well"]);

  function handleAddTodo(newTodo) {
    const newTodoList = [...todo, newTodo];
    setTodo(newTodoList);
  }
  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} />
      <TodoList todo={todo} />
    </>
  );
}

export default App;

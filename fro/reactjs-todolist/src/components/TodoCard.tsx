import React from "react";

export default function TodoCard(props) {
  const { children } = props;
  return (
    <li className="todoItem">
      <div className="actionContainer">
        {children}
        <button>Change</button>
        <button>Trash</button>
      </div>
    </li>
  );
}

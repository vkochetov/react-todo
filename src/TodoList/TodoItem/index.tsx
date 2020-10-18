import React from "react";
import { Todo } from "../../interfaces";
import "./style.css";

const TodoItem: React.FC<Todo> = ({ title, discription }) => {
  return (
    <div className="todoItem">
      <h3>{title}</h3>
      <p>{discription}</p>
    </div>
  );
};

export default TodoItem;

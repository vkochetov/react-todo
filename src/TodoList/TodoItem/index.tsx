import React from "react";
import { Todo } from "../../interfaces";
import "./style.css";

const TodoItem: React.FC<
  Todo & { removeTodo: (id: string) => void; doneTodo: (todo: Todo) => void }
> = ({ title, discription, id, isDone, removeTodo, doneTodo }) => {
  const handleRemoveButton = (): void => {
    removeTodo(id);
  };
  const handleDoneTodo = () => {
    doneTodo({ title, discription, id, isDone });
  };
  return (
    <div className="todoItem">
      <h3>{title}</h3>
      <p>{discription}</p>
      {!isDone && (
        <button type="button" onClick={handleDoneTodo}>
          done
        </button>
      )}
      <button type="button" onClick={handleRemoveButton}>
        Remove
      </button>
    </div>
  );
};

export default TodoItem;

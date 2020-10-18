import React, { useReducer, useState } from "react";
import nextId from "react-id-generator";
import { reducer, initialState } from "./store";
import TodoList from "./TodoList";
import "./App.css";
import { Todo } from "./interfaces";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [idForRemove, setIdForRemove] = useState("");

  const addTodo = (): void => {
    dispatch({
      type: "ADD_TODO",
      payload: {
        title: "todo",
        discription: "discription",
        isDone: false,
        id: nextId(),
      },
    });
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setIdForRemove(e.target.value);
  };

  const removeTodo = (): void => {
    dispatch({
      type: "REMOVE_TODO",
      payload: { id: idForRemove, title: "", discription: "", isDone: false },
    });
  };

  const isDoneComparator = (isDoneColumn: boolean) => (todo: Todo): boolean =>
    isDoneColumn ? todo.isDone : !todo.isDone;

  return (
    <div className="App">
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
      <input
        placeholder="Insert id for remove"
        value={idForRemove}
        onChange={handleChangeInput}
      />
      <button type="button" onClick={removeTodo}>
        Remove todo
      </button>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TodoList todos={state.todos.filter(isDoneComparator(true))} />
        <TodoList todos={state.todos.filter(isDoneComparator(false))} />
      </div>
    </div>
  );
};

export default App;

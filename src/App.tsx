import React, { useReducer, useState } from "react";
import nextId from "react-id-generator";
import { reducer, initialState } from "./store";
import TodoList from "./TodoList";
import ControlPanel from "./ControlPanel";
import "./App.css";
import { Todo } from "./interfaces";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");

  const addTodo = (): void => {
    if (!title || !discription) return;

    dispatch({
      type: "ADD_TODO",
      payload: {
        title,
        discription,
        isDone: false,
        id: nextId(),
      },
    });

    setTitle("");
    setDiscription("");
  };

  const doneTodo = (todo: Todo): void => {
    dispatch({
      type: "DONE_TODO",
      payload: {
        ...todo,
      },
    });
  };

  const handleSetTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };

  const handleSetDiscription = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setDiscription(e.target.value);
  };

  const removeTodo = (id: string): void => {
    dispatch({
      type: "REMOVE_TODO",
      payload: { id, title: "", discription: "", isDone: false },
    });
  };

  const isDoneComparator = (isDoneColumn: boolean) => (todo: Todo): boolean =>
    isDoneColumn ? todo.isDone : !todo.isDone;

  return (
    <div className="App">
      <ControlPanel
        addTodo={addTodo}
        title={title}
        discription={discription}
        handleSetTitle={handleSetTitle}
        handleSetDiscription={handleSetDiscription}
      />
      <div
        className="todoListContainer"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <TodoList
          todos={state.todos.filter(isDoneComparator(false))}
          removeTodo={removeTodo}
          doneTodo={doneTodo}
        />
        <TodoList
          todos={state.todos.filter(isDoneComparator(true))}
          removeTodo={removeTodo}
          doneTodo={doneTodo}
        />
      </div>
    </div>
  );
};

export default App;

import React, { ReactNode } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../interfaces";

const TodoList: React.FC<{ todos: Array<Todo> }> = ({ todos }) => {
  const renderTodo = (todo: Todo): ReactNode => (
    <TodoItem
      id={todo.id}
      title={todo.title}
      discription={todo.discription}
      isDone={todo.isDone}
    />
  );

  return <ul>{todos.map(renderTodo)}</ul>;
};

export default TodoList;

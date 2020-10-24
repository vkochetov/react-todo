import React, { ReactNode } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "../interfaces";

const TodoList: React.FC<{
  todos: Array<Todo>;
  removeTodo: (id: string) => void;
  doneTodo: (todo: Todo) => void;
}> = ({ todos, removeTodo, doneTodo }) => {
  const renderTodo = (todo: Todo): ReactNode => (
    <TodoItem
      id={todo.id}
      title={todo.title}
      discription={todo.discription}
      isDone={todo.isDone}
      removeTodo={removeTodo}
      doneTodo={doneTodo}
    />
  );

  return <ul>{todos.map(renderTodo)}</ul>;
};

export default TodoList;

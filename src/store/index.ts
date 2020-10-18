import { Types, Action, State, Todo } from "../interfaces";

export const types: Types = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  DONE_TODO: "DONE_TODO",
  UPDATE_TODO: "UPDATE_TODO",
};

export const initialState: State = {
  todos: [],
};

export const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case types.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case types.REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter(
          (todo: Todo): boolean => todo.id !== payload.id
        ),
      };
    default:
      return state;
  }
};

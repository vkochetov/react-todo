import { Types, Action, State } from "../interfaces";

export const types: Types = {
  ADD_TODO: "ADD_TODO",
};

export const initialState: State = {
  todos: [],
};

export const reducer = (state: State, { type, payload }: Action): State => {
  switch (type) {
    case types.ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};

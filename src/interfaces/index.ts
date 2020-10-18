export type Types = {
  ADD_TODO: string;
  REMOVE_TODO: string;
  DONE_TODO: string;
  UPDATE_TODO: string;
};

export interface Action {
  type: string;
  payload: Todo;
}

export interface Todo {
  id: string;
  title: string;
  discription: string;
  isDone: boolean;
}

export interface State {
  todos: Array<Todo>;
}

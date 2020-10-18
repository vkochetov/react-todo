export type Types = {
  ADD_TODO: string;
};

export interface Action {
  type: string;
  payload: Todo;
}

export interface Todo {
  title: string;
  discription: string;
  isDone: boolean;
}

export interface State {
  todos: Array<Todo>;
}

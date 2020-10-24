export interface ControlPanelProps {
  addTodo: () => void;
  title: string;
  discription: string;
  handleSetTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSetDiscription: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

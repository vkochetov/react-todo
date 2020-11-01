import React from "react";
import { ControlPanelProps } from "./interfaces";
import "./style.css";

const ControlPanel: React.FC<ControlPanelProps> = ({
  addTodo,
  handleSetTitle,
  handleSetDiscription,
  title,
  discription,
}) => {
  return (
    <div className="controlPanel">
      <input
        placeholder="Insert title"
        value={title}
        onChange={handleSetTitle}
      />
      <input
        placeholder="Insert discription"
        value={discription}
        onChange={handleSetDiscription}
      />
      <button type="button" onClick={addTodo}>
        Add todo
      </button>
    </div>
  );
};

export default ControlPanel;

import React, { useReducer } from "react";
import "./App.css";
import { reducer, initialState } from "./store";

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <div className="App" />;
};

export default App;

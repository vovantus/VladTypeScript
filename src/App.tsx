import React from "react";
import "./App.css";
import { TodoList } from "./components/Todo";
import { UnionTypeProblem } from "./components/UnionTypeProblem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <TodoList />
          <UnionTypeProblem />
        </div>
      </header>
    </div>
  );
}

export default App;

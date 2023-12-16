import React from "react";
import "./App.css";
import { TodoList } from "./components/Todo";
import { TSFunctions } from "./components/TSFunctions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <TodoList />
          <TSFunctions />
        </div>
      </header>
    </div>
  );
}

export default App;

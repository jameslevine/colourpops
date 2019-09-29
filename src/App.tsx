import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColourInput from "./components/ColourInput";

function App(): JSX.Element {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ColourInput />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import Counter from "./components/Counter";
import "./styles/App.css";

const App = () => (
  <div className="container">
    <Counter max={10} />
  </div>
);

export default App;

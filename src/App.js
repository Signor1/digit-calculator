import React, { useState } from "react";
import "./App.css";
import Calculator from "./component/Calculator";

function App() {
  const [input, setInput] = useState("");
  // Function for digit clicks
  const handleClick = (value) => {
    setInput(input + value);
  };
  // function for evaluation
  const handleEqual = () => {
    let result = Function("return " + input)();
    //or
    // let result = eval(input).toString();
    setInput(result);
  };
  const handleClear = () => {
    setInput("");
  };
  return (
    <div className="App">
      <div className="calculator">
        <input
          type="text"
          readOnly
          className="display"
          value={input}
          placeholder="0"
        />
        <Calculator
          handleClear={handleClear}
          handleClick={handleClick}
          handleEqual={handleEqual}
        />
      </div>
    </div>
  );
}

export default App;

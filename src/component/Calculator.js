import React from "react";

const Calculator = ({ handleClear, handleClick, handleEqual }) => {
  return (
    <main className="keys">
      {/* First Row  */}
      <button onClick={() => handleClick("7")} className="digit">
        7
      </button>
      <button onClick={() => handleClick("8")} className="digit">
        8
      </button>
      <button onClick={() => handleClick("9")} className="digit">
        9
      </button>
      <button onClick={() => handleClick("/")} className="operator">
        /
      </button>
      {/* Second Row  */}
      <button onClick={() => handleClick("4")} className="digit">
        4
      </button>
      <button onClick={() => handleClick("5")} className="digit">
        5
      </button>
      <button onClick={() => handleClick("6")} className="digit">
        6
      </button>
      <button onClick={() => handleClick("*")} className="operator">
        *
      </button>
      {/* Third Row  */}
      <button onClick={() => handleClick("1")} className="digit">
        1
      </button>
      <button onClick={() => handleClick("2")} className="digit">
        2
      </button>
      <button onClick={() => handleClick("3")} className="digit">
        3
      </button>
      <button onClick={() => handleClick("-")} className="operator">
        -
      </button>
      {/* Fourth Row  */}
      <button onClick={() => handleClick("0")} className="digit">
        0
      </button>
      <button onClick={handleEqual} className="function">
        =
      </button>
      <button onClick={handleClear} className="function">
        C
      </button>
      <button onClick={() => handleClick("+")} className="operator">
        +
      </button>
    </main>
  );
};

export default Calculator;

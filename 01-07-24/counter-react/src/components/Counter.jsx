import React from "React";
import { useState } from "React";
import "./Counter.css";

function Counter() {
  //let counter=0;

  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    if (event.target.id === "add") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter-container">
      <button disabled={counter === 0} id="sub" onClick={(e) => handleClick(e)}>
        -
      </button>
      Counter: {counter}
      <button id="add" onClick={(e) => handleClick(e)}>
        +
      </button>
    </div>
  );
}

export { Counter };

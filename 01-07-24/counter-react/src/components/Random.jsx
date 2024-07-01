import { useState } from "React";
import "./Random.css";

function GenerateRandomNumber() {

  const [randomNumber, setRandomNumber] = useState(null);

  const Random = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  setRandomNumber(number);
  };

  return (

    <div className="random-container">
      <h2>Random number:</h2>
      <div className="display">{randomNumber !== null ? randomNumber : "---"}</div>
      <button className="generate" onClick={Random}>Generate</button>
    </div>

  );
}

export { GenerateRandomNumber };

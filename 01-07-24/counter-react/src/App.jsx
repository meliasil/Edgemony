import "./App.css";
import { Counter } from "./components/Counter";
import { GenerateRandomNumber } from "./components/Random";


function App() {
  return (
    <>
    <div className="container">
      <h1>Counter + Random Number</h1>
      </div>
      <hr />
      <Counter />
      <GenerateRandomNumber />
    </>
  );
}

export default App;
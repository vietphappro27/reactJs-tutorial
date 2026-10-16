import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  return (
    // useState
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;

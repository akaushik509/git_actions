import React from "react";

export default function Counter() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>ADD</button>
      <button onClick={() => setCounter(counter - 1)}>SUBSTRACT</button>
    </div>
  );
}

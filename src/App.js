import React from "react";

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <div className="App">
      <h1>Prezentacja stanu w React</h1>
      <p>Wartość stanu: {counter}</p>
    </div>
  );
}

export default App;

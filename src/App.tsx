import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const App: React.FC = () => {
  // State to keep track of the counter
  const [count, setCount] = useState<number>(0);

  // Function to handle the button click
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className="container">
      <h1 className="text-center">Welcome to React with Bootstrap!</h1>
      <h2 className="text-center">Counter: {count}</h2>
      <button className="btn btn-primary" onClick={incrementCounter}>
        Increment
      </button>
    </div>
  );
};

export default App;


import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const handleDecrement = () => {
    setCount((previousCount) => previousCount - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="counter-card">
      <h2>Counter Application</h2>
      <p className="counter-description">
        Use the buttons below to manage your counter.
      </p>

      <div className="counter-value">{count}</div>

      <div className="counter-buttons">
        <button
          className="increment-btn"
          onClick={handleIncrement}
        >
          + Increment
        </button>

        <button
          className="decrement-btn"
          onClick={handleDecrement}
        >
          - Decrement
        </button>

        <button
          className="reset-btn"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

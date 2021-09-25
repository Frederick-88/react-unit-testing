import React, { useState } from "react";

export default function Increment() {
  const [count, setCount] = useState(0);

  const doIncrement = () => {
    setCount(count + 1);
  };
  const doDecrement = () => {
    if (count === 0) return;
    setCount(count - 1);
  };

  return (
    <section>
      <div data-testid="number-text">Number: {count}</div>

      <button onClick={doIncrement} data-testid="increment-btn">
        increment
      </button>
      <button onClick={doDecrement} data-testid="decrement-btn">
        decrement
      </button>
    </section>
  );
}

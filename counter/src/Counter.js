import { useState, useRef } from "react";

function Counter({ start }) {
  const [count, setCount] = useState(parseInt(start));
  const intervalRef = useRef(null);

  const startIncrement = () => {
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 50);
  };

  const stopIncrement = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button
        onMouseDown={startIncrement}
        onMouseUp={stopIncrement}
        onMouseLeave={stopIncrement}
      >
        Enter 
      </button>
    </div>
  );
}

export default Counter;
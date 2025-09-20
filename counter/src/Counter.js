import { useState } from "react";

function Counter({ start }) {
  const [count, setCount] = useState(parseInt(start));

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Pridaj počet</button>
    </div>
  );
}

export default Counter;

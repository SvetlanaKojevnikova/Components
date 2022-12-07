import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const addNumber = () => {
    if (count >= 29 || count === "max") {
      setCount("max");
    } else if (count === "min") {
      setCount(1);
    } else {
      setCount(count + 1);
    }
  };
  const remoteNumber = () => {
    if (count <= 1 || count === "min") {
      setCount("min");
    } else if (count === "max") {
      setCount(29);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button type="button" onClick={addNumber}>
        +
      </button>
      <button type="button" onClick={remoteNumber}>
        -
      </button>
    </div>
  );
};

export default Count;

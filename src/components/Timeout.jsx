import { useState } from "react";
import useTimeout from "../hooks/useTimeout";

function Timeout() {
  const [count, setCount] = useState(10);
  const { clear, reset } = useTimeout(() => setCount(0), 2000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={clear}>Clear Timeout</button>
      <button onClick={reset}>Reset Timeout</button>
    </div>
  );
}

export default Timeout;

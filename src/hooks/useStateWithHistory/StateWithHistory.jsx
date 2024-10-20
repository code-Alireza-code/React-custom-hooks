import { useState } from "react";
import useStateWithHistory from "./useStateWithHistory";

function StateWithHistory() {
  const [count, setCount, { history, pointer, back, forward, go }] =
    useStateWithHistory(1);
  const [name, setName] = useState("Alireza");

  return (
    <div>
      <div>{count}</div>
      <div>{history.join(", ")}</div>
      <div>Pointer - {pointer}</div>
      <div>{name}</div>
      <button onClick={() => setCount((currentCount) => currentCount * 2)}>
        Double
      </button>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increment
      </button>
      <button onClick={back}>Back</button>
      <button onClick={forward}>forward</button>
      <button onClick={() => go(2)}>go to index 2</button>
      <button onClick={() => setName("John")}>Change Name</button>
    </div>
  );
}

export default StateWithHistory;

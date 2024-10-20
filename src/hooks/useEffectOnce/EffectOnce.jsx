import { useEffect, useState } from "react";
import useEffectOnce from "./useEffectOnce";

function EffectOnce() {
  const [count, setCount] = useState(0);

  useEffectOnce(() => console.log("useEffcetOnce"));
  useEffect(() => console.log("useEffect"), []);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </>
  );
}

export default EffectOnce;

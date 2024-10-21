import { useState } from "react";
import useToggle from "../useToggle/useToggle";
import useDebugInformation from "./useDebugInformation";

function DebugInformation() {
  const [boolean, toggle] = useToggle(false);
  const [count, setCount] = useState(0);

  return (
    <>
      <ChildComponent boolean={boolean} count={count} />
      <button onClick={toggle}>toggle</button>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default DebugInformation;

function ChildComponent({ boolean, count }) {
  const info = useDebugInformation("ChildComponent", { boolean, count });

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{count}</div>
      <div>{JSON.stringify(info, null, 2)}</div>
    </>
  );
}

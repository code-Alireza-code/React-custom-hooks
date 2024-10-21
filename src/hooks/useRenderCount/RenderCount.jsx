import useToggle from "../useToggle/useToggle";
import useRenderCount from "./useRenderCount";

function RenderCount() {
  const [boolean, toggle] = useToggle(false);

  const renderCount = useRenderCount();

  return (
    <>
      <div>{boolean.toString()}</div>
      <div>{renderCount}</div>
      <button onClick={toggle}>Toggle</button>
    </>
  );
}

export default RenderCount;

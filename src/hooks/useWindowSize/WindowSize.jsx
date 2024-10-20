import useWindowSize from "./useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <div>
      {width} × {height}
    </div>
  );
}

export default WindowSize;

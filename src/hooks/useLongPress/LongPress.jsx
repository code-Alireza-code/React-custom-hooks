import { useRef } from "react";
import useLongPress from "./useLongPress";

function LongPress() {
  const elementRef = useRef();
  const hovered = useLongPress(elementRef, () => alert("long press"));

  return (
    <div
      ref={elementRef}
      style={{
        backgroundColor: hovered ? "blue" : "red",
        width: "100px",
        height: "100px",
        position: "absolute",
        top: "calc(50% - 50px)",
        left: "calc(50% - 50px)",
      }}
    ></div>
  );
}

export default LongPress;

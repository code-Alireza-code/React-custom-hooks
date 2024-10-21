import { useRef } from "react";
import useCopyToClipboard from "./useCopyToClipboard";

function CopyToClipboard() {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const textRef = useRef();

  return (
    <>
      <div>
        <span style={{ marginRight: "10px" }} ref={textRef}>
          npm i react
        </span>
        <button onClick={() => copyToClipboard(textRef.current.textContent)}>
          {success ? "Copied" : "Copy text"}
        </button>
        <br />
        <br />
      </div>
      <input type="text" />
    </>
  );
}

export default CopyToClipboard;
